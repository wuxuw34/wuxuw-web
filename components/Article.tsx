"use client";
import "@/styles/markdown.scss";
import Apis from "@/apis";
import { handleContentToMarkdownLines } from "@/utils/markdown";
import { useEffect, useState } from "react";

const Heading = ({ content, level }: { content: string; level: number }) => {
  return <div className={`heading-${level}`}>{content}</div>;
};
const Code = ({ content }: { content: string }) => {
  return <div className="code">{content}</div>;
};

export default function Article({ id }: { id: string }) {
  const [article, setArticle] = useState<Article>({} as Article);
  const [markdownLines, setMarkdownLines] = useState<MarkdownLine[]>([]);

  useEffect(() => {
    Apis.article.getById(id).then((res) => {
      if (res.data.list.length) {
        const article = res.data.list[0];
        setArticle(article);
        console.log(article.content);
        const markdownLines = handleContentToMarkdownLines(article.content);
        console.log(markdownLines);
        setMarkdownLines(markdownLines);
      }
    });
  }, [id]);

  return (
    <div className="card">
      <div className="markdown">
        {markdownLines.map((line, index) => {
          if (line.type === "heading") {
            return (
              <Heading
                key={index}
                content={line.content}
                level={line.level || 1}
              />
            );
          }
          return <div key={index}>{line.content}</div>;
        })}
      </div>
    </div>
  );
}
