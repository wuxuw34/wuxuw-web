"use client";
import Apis from "@/apis";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";

interface ArticleFilterPanelProps {
  onChange?: (v: string) => void;
}

export default function ArticleFilterPanel({
  onChange,
}: ArticleFilterPanelProps) {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [categoryList, setCategoryList] = useState<ArticleCategory[]>([]);

  useEffect(() => {
    onChange?.(selectedCategory);
  }, [selectedCategory,onChange]);

  useEffect(() => {
    Apis.article.getArticleCategories().then((res) => {
      console.log(res);
      if (res.data.length) {
        setCategoryList(res.data);
      }
    });
  }, []);

  return (
    <div className="card h-fit flex flex-col gap-3 min-w-[240px]">
      <div className="flex flex-row gap-1 items-center">
        <BiCategory />
        文章分类
      </div>
      <div className="flex flex-col gap-1">
        {categoryList.map((category) => (
          <div
            key={category.name}
            className={`flex flex-row gap-3 px-3 rounded-lg justify-between items-center hover:bg-[rgba(0,0,0,0.3)] h-[40px] cursor-pointer ${
              selectedCategory === category.name
                ? "bg-primary hover:bg-primary/80!"
                : "text-secondary bg-[rgba(0,0,0,0.2)]"
            }`}
            onClick={() => {
              setSelectedCategory(category.name);
            }}
          >
            {category.name}
            <div className="text-xs bg-[rgba(0,0,0,0.2)] p-1 rounded-full flex flex-row items-center justify-center ">
              {category.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
