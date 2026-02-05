"use client";
import { IoAnalytics } from "react-icons/io5";
import "@/styles/articlePanel.scss";
import { FaTag } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { useState } from "react";

interface BasicInfoItemProps {
  title: string;
  value: string;
}

export default function ArticleAnalyticsPanel() {
  const [basicInfoItems, setBasicInfoItems] = useState<BasicInfoItemProps[]>([
    {
      title: "总数",
      value: "123",
    },
    {
      title: "分类",
      value: "123",
    },
    {
      title: "标签",
      value: "123",
    },
  ]);

  return (
    <div className="card article-analytics-panel">
      <div className="flex flex-row gap-2 items-center">
        <IoAnalytics />
        文章数据
      </div>
      <div className="basic-info mini-card">
        <span className="text-sm text-secondary w-full pb-2 flex flex-row items-center gap-1">
          <MdAnalytics />
          文章总览
        </span>
        {basicInfoItems.map((item, index) => {
          return (
            <>
              {index !== 0 && <div className="basic-info-line"></div>}
              <div
                className="flex-1  basic-info-item"
                key={item.title}
              >
                <div className="content">
                  <span className="text-sm text-nowrap text-secondary">
                    {item.title}
                  </span>
                  <span>{item.value}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="tags-container mini-card">
        <span className="text-sm text-secondary w-full pb-1 flex flex-row items-center gap-1">
          <FaTag />
          标签
        </span>
        <div className="tag-item">标签1</div>
        <div className="tag-item">标签2</div>
        <div className="tag-item">标签3</div>
      </div>
    </div>
  );
}
