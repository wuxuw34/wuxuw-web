"use client";
import "@/styles/markdown.scss";
import Apis from "@/apis";
import { handleContentToMarkdownLines } from "@/utils/markdown";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import { FaCopy } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import useAutoScroll from "@/hooks/useAutoScroll";
import useObserver from "@/hooks/useObserver";

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
            className={`${isCollapsed ? "" : "rotate-180"} transition-transform duration-300`}
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
  const autoScroll = useAutoScroll(); // 自动滚动
  const markdownRef = useRef<HTMLDivElement>(null);
  useObserver(markdownRef);

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

  return (
    <div className="card">
      <div className="markdown" ref={markdownRef}>
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
  );
}
