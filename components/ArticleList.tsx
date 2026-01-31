"use client";
import { useEffect, useState } from "react";
import Apis from "@/apis";
import ArticlePreview from "./ArticlePreview";

export default function ArticleList() {
  const [list, setList] = useState<Article[]>([]);

  useEffect(() => {
    Apis.article.all().then((res) => {
      if (res.data.list) {
        console.log(res.data.list);
        setList(res.data.list);
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-3 flex-1 card grid grid-cols-3">
      {list.map((item) => (
        <ArticlePreview
          key={item.id}
          article={item}
        />
      ))}
    </div>
  );
}
