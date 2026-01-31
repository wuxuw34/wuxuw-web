import { FaSearch } from "react-icons/fa";

export default function ArticleSearch() {
  return (
    <div className="card flex flex-row gap-2 items-center has-focus:shadow-[0_0_0px_1px_var(--color-blue-400)]" tabIndex={0} role='search'>
      <FaSearch />
      <input
        type="text"
        className="flex-1 focus:outline-none"
        placeholder="搜索文章标题、内容或者标签..."
      />
    </div>
  );
}
