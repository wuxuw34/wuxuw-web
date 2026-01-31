import ArticleAnalyticsPanel from "@/components/ArticleAnalyticsPanel";
import ArticleFilterPanel from "@/components/ArticleFilterPanel";
import ArticleList from "@/components/ArticleList";
import ArticleSearch from "@/components/ArticleSearch";

import Calendar from "@/components/Calendar";

export default function Page() {
  return (
    <div className="max-w-6xl flex flex-row gap-3">
      <div className="flex flex-col gap-3">
        <ArticleSearch />
        <ArticleFilterPanel />
      </div>
      <ArticleList />
      <div className="flex flex-col gap-3">
        <ArticleAnalyticsPanel />
        <Calendar />
      </div>
    </div>
  );
}
