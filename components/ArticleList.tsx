"use client";
import { useEffect, useMemo, useState } from "react";
import Apis from "@/apis";
import ArticlePreview from "./ArticlePreview";

interface ArticleListProps {
  category: string;
  search: string;
}

export default function ArticleList({ category, search }: ArticleListProps) {
  const [list, setList] = useState<Article[]>([]);
  const showList = useMemo(() => {
    return list
      .filter((a) => a.category.includes(category) || category === "全部")
      .filter(
        (a) =>
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          a.content?.toLowerCase().includes(search.toLowerCase()) ||
          a.description?.toLowerCase().includes(search.toLowerCase()) ||
          a.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      );
  }, [list, category, search]);

  useEffect(() => {
    Apis.article.all().then((res) => {
      if (res.data.list) {
        setList(res.data.list);
      }
    });
  }, []);

  return (
    <div className=" gap-3 flex-1 card grid grid-cols-3 max-h-[calc(100vh-200px)] w-[600px] overflow-y-auto scrollbar max-lg:w-full">
      {showList.map((item) => (
        <ArticlePreview
          key={item.id}
          article={item}
        />
      ))}
    </div>
  );
}
