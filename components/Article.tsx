"use client";
import "@/styles/markdown.scss";
import Apis from "@/apis";
import { handleContentToMarkdownLines } from "@/utils/markdown";
import { useCallback, useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import { FaCopy } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import useAutoScroll from "@/hooks/useAutoScroll";
import useObserver from "@/hooks/useObserver";
import { FaTags } from "react-icons/fa";
import useThrottle from "@/hooks/useThrottle";
import { MdOutlineToc } from "react-icons/md";
import useMobile from "@/hooks/useMobile";

const Heading = ({ content, level }: { content: string; level: number }) => {
  return (
    <div
      id={content}
      className={`heading-${level} underline-bottom-line`}
    >
      {content}
    </div>
  );
};
const Code = ({ content, lang }: { content: string; lang: string }) => {
  const ref = useRef<HTMLElement>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false); // 代码是否折叠
  const [codeHeight, setCodeHeight] = useState<string>("auto"); // 代码高度
  const [isCoping, setIsCoping] = useState<boolean>(false); // 是否正在复制

  function handleCopyCode() {
    setIsCoping(true);
    navigator.clipboard.writeText(content);
    setTimeout(() => {
      setIsCoping(false);
    }, 1000);
  }

  function addNumbersToLines() {
    if (!ref.current) return;
    const lines = ref.current.innerHTML.split("\n");
    const newLines: string[] = [];
    lines.forEach((line, index) => {
      newLines.push(`<span class="hljs-line-number">${index + 1}</span>`);
      newLines.push(`<div>${line}</div>` + "\n");
    });
    ref.current.innerHTML = newLines.join("");
  }

  useEffect(() => {
    hljs.initHighlightingOnLoad();
    const highlighted = hljs.highlight(content, { language: lang });
    if (highlighted.value) {
      const updateCodeHeight = (height: string) => {
        setCodeHeight(height);
      };

      if (ref.current) {
        ref.current.innerHTML = highlighted.value;
        addNumbersToLines();
        // 获取真正的代码高度
        console.log(ref.current?.offsetHeight);
        updateCodeHeight(ref.current?.offsetHeight.toString() + "px" || "auto");
      }
    }
  }, [content, lang]);

  return (
    <div className="mini-card flex flex-col p-0!  overflow-hidden">
      <div className="bg-black/20 px-3 py-1 flex flex-row justify-between items-center">
        <div
          className="flex flex-row gap-1 items-center hover:text-primary cursor-pointer"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <IoIosArrowDropdownCircle
            className={`${
              isCollapsed ? "" : "rotate-180"
            } transition-transform duration-300`}
          />
          <div>{lang}</div>
        </div>
        <div>
          {isCoping ? (
            <FaCheck className="text-primary" />
          ) : (
            <FaCopy
              className="cursor-pointer hover:text-primary"
              onClick={handleCopyCode}
            />
          )}
        </div>
      </div>
      <pre
        className="code-block  box-border overflow-auto scrollbar max-h-[400px]  transition-height duration-200 "
        style={{
          height: isCollapsed ? "0" : codeHeight,
          scrollbarGutter: "stable",
        }}
      >
        <code
          ref={ref}
          className="p-1"
        ></code>
      </pre>
    </div>
  );
};

export default function Article({ id }: { id: string }) {
  const [article, setArticle] = useState<Article>({} as Article);
  const [markdownLines, setMarkdownLines] = useState<MarkdownLine[]>([]);
  const [currentHeading, setCurrentHeading] = useState<string>("");
  const tocRef = useRef<HTMLDivElement>(null);
  const banTocOffset = useRef<boolean>(false); // 是否禁止目录偏移
  const isMobile = useMobile({
    callback(width) {
      if (width <= 1024) {
        banTocOffset.current = true;
      }
    },
  });
  const { observeAllChildElements, observeElements } = useObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          const id = entry.target.id;
          // 需要判断, 先不判断了, 更新hash值
          window.location.hash = id;
          setCurrentHeading(id);
        }
      });
    },
    {
      threshold: 0,
    }
  );
  const autoScroll = useAutoScroll({
    scrollEnd: () => {
      // 开始监听视口交互
      if (!markdownRef.current) return;
      observeAllChildElements(markdownRef);
      // if (tocRef.current) {
      //   observeElements([tocRef.current]);
      // }
    },
  }); // 自动滚动
  const markdownRef = useRef<HTMLDivElement>(null);
  const updateTocOffset = useCallback(() => {
    if (!tocRef.current) return;
    const scrollTop = window.scrollY;
    const top = tocRef.current?.offsetTop || 0;
    const offset = scrollTop - top + 12;
    if (offset >= 0) {
      tocRef.current.style.transform = `translateY(${offset}px)`;
    }
  }, []);
  const throttleTocOffset = useThrottle(() => {
    updateTocOffset();
  }, 10);

  useEffect(() => {
    Apis.article.getById(id).then((res) => {
      if (res.data.list.length) {
        const article = res.data.list[0];
        setArticle(article);
        const markdownLines = handleContentToMarkdownLines(article.content);
        setMarkdownLines(markdownLines);
        // 渲染完成后滚动
        setTimeout(() => {
          autoScroll.scrollToId();
        }, 10);
      }
    });
  }, [id]);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768) {
        throttleTocOffset();
      } else {
        if (!tocRef.current) return;
        tocRef.current.style.transform = `translateY(0px)`;
      }
    };
    window.addEventListener("scroll", handler);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, [throttleTocOffset]);

  return (
    <div className="flex flex-row gap-2 max-lg:flex-col-reverse">
      <div className="card flex flex-col gap-2 px-6!">
        <div className="text-4xl leading-tight font-bold">{article.title}</div>
        <div className="text-xs text-secondary flex flex-row items-center gap-2">
          <div>{article.createAt}</div> · {article.readTime || 0} 分钟 ·{" "}
          {article.category}
          {article?.tags?.map((tag) => (
            <div
              key={tag}
              className="mini-card h-[24px] p-1! px-2! flex flex-row items-center gap-1"
            >
              <FaTags />
              {tag}
            </div>
          ))}
        </div>
        <div
          className="markdown"
          ref={markdownRef}
        >
          {markdownLines.map((line, index) => {
            if (line.type === "heading") {
              return (
                <Heading
                  key={index}
                  content={line.content}
                  level={line.level || 1}
                />
              );
            } else if (line.type === "code") {
              return (
                <Code
                  key={index}
                  content={line.content}
                  lang={line.lang}
                />
              );
            } else if (line.type === "break") {
              return <br key={index} />;
            }
            return (
              <div
                key={index}
                className="paragraph"
              >
                {line.content}
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="card w-fit h-fit lg:max-w-[300px] gap-2 flex flex-col max-lg:w-full"
        id="toc"
        ref={tocRef}
      >
        <div className="text-lg flex flex-row items-center gap-2">
          <MdOutlineToc />
          文章目录
        </div>
        <div className="flex flex-col">
          {markdownLines.map((line, index) => {
            if (line.type === "heading") {
              return (
                <div
                  key={index}
                  className={`${
                    currentHeading === line.content
                      ? "bg-primary hover:bg-primary/80"
                      : ""
                  } h-[40px] flex items-center rounded cursor-pointer hover:bg-background/20 p-1 `}
                  onClick={() => {
                    autoScroll.scrollToId(line.content);
                    setCurrentHeading(line.content);
                  }}
                >
                  <div
                    className="truncate"
                    style={{
                      paddingLeft: `${line.level * 10}px`,
                    }}
                  >
                    {line.content}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
