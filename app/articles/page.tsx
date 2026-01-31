import ArticleAnalyticsPanel from "@/components/ArticleAnalyticsPanel";
import ArticleFilterPanel from "@/components/ArticleFilterPanel";
import Calendar from "@/components/Calendar";

export default function Page() {
  return (
    <div className="max-w-6xl flex flex-row gap-3">
      <div className="flex flex-col gap-3">
        <ArticleFilterPanel />
      </div>

      <div className="flex flex-col gap-3">
        <ArticleAnalyticsPanel />
        <Calendar />
      </div>
    </div>
  );
}
