import ArticleAnalyticsPanel from "@/components/ArticleAnalyticsPanel";
import Calendar from "@/components/Calendar";

export default function Page() {
  return (
    <div className="max-w-6xl">
      <div className="flex flex-col gap-3">
        <ArticleAnalyticsPanel />
        <Calendar />
      </div>
    </div>
  );
}
