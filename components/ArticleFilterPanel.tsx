"use client";
import Apis from "@/apis";
import { useEffect, useRef, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface ArticleFilterPanelProps {
  onChange?: (v: string) => void;
}

export default function ArticleFilterPanel({
  onChange,
}: ArticleFilterPanelProps) {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [categoryList, setCategoryList] = useState<ArticleCategory[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false); // 是否折叠
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onChange?.(selectedCategory);
  }, [selectedCategory, onChange]);

  useEffect(() => {
    const calculateHeight = () => {
      if (!categoryRef.current) return;
      const height = categoryRef.current.scrollHeight;
      categoryRef.current.style.setProperty("--height", height + "px");
    };
    Apis.article.getArticleCategories().then((res) => {
      console.log(res);
      if (res.data.length) {
        setCategoryList(res.data);
        setTimeout(calculateHeight, 10);
      }
    });
  }, []);

  return (
    <div className="card h-fit flex flex-col min-w-[240px]">
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-row gap-1 items-center">
          <BiCategory />
          文章分类
        </div>
        <IoIosArrowDropdownCircle
          className="hover:text-primary cursor-pointer text-lg font-medium transition-rotate duration-200"
          style={{
            rotate: isCollapsed ? "0deg" : "180deg",
          }}
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            console.log(isCollapsed);
          }}
        />
      </div>

      <div
        className="flex flex-col gap-1 pt-3 overflow-hidden transition-height duration-200"
        ref={categoryRef}
        style={{
          height: isCollapsed ? 0 : "var(--height)",
          paddingTop: isCollapsed ? "0" : undefined,
        }}
      >
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
