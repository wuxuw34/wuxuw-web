import { IoAnalytics } from "react-icons/io5";
import "@/styles/articlePanel.scss"

export default function ArticleAnalyticsPanel() {
  return (
    <div className="card">
      <div className="flex flex-row gap-2 items-center">
        <IoAnalytics />
        文章数据
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center p-3">
          <span className="text-sm text-secondary">文章总数</span>
          <span>123</span>
        </div>
      </div>
    </div>
  );
}
