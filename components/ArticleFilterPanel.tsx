"use client";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";

export default function ArticleFilterPanel() {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [categoryList, setCategoryList] = useState([
    {
      name: "全部",
      count: 100,
    },
    {
      name: "React",
      count: 50,
    },
    {
      name: "Next.js",
      count: 30,
    },
  ]);

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
            className={`flex flex-row gap-3 px-3 rounded-lg justify-between items-center hover:bg-[rgba(0,0,0,0.3)] h-[40px] cursor-pointer
             ${selectedCategory === category.name ? "bg-blue-400" : "text-secondary bg-[rgba(0,0,0,0.2)]"}`}
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
