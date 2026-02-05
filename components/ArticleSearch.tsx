import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface ArticleSearchProps {
  onChange?: (v: string) => void;
}

export default function ArticleSearch({ onChange }: ArticleSearchProps) {
  const [value, setValue] = useState("");

  return (
    <div
      className="card flex flex-row gap-2 items-center has-focus:shadow-[0_0_0px_1px_var(--color-blue-400)]"
      tabIndex={0}
      role="search"
    >
      <FaSearch />
      <input
        type="text"
        className="flex-1 focus:outline-none"
        placeholder="搜索文章标题、描述、内容或者标签..."
        value={value}
        onChange={(e) => {
          const v = e.target.value || "";
          setValue(v);
          onChange?.(v);
        }}
      />
    </div>
  );
}
