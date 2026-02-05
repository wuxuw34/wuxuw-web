"use client"
import ArticleAnalyticsPanel from "@/components/article/ArticleAnalyticsPanel";
import ArticleFilterPanel from "@/components/article/ArticleFilterPanel";
import ArticleList from "@/components/article/ArticleList";
import ArticleSearch from "@/components/article/ArticleSearch";

import Calendar from "@/components/Calendar";
import { useState } from "react";

export default function Page() {

  const [category,setCategory] = useState<string>('全部')
  const [search,setSearch] = useState('')

  return (
    <div className="max-w-6xl flex flex-row gap-3 flex-1 max-lg:flex-col">
      <div className="flex flex-col gap-3">
        <ArticleSearch onChange={setSearch} />
        <ArticleFilterPanel onChange={setCategory} />
      </div>
      <ArticleList category={category} search={search} />
      <div className="flex flex-col gap-3">
        <ArticleAnalyticsPanel />
        <Calendar />
      </div>
    </div>
  );
}
