import { MdDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function ArticlePreview({ article }: { article: Article }) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-3 mini-card max-h-[160px] cursor-pointer justify-between hover:shadow-lg group"
      onClick={() => {
        console.log("点击", article.id);
        router.push(`/article/${article.id}`);
      }}
    >
      <div className="flex flex-col gap-3 ">
        <div className="flex flex-row items-center justify-between flex-nowrap">
          <div className="group-hover:text-blue-400 text-ellipsis whitespace-nowrap overflow-hidden max-w-[calc(100%-40px)]">
            {article.title}
          </div>
          <div className="text-xs text-primary bg-primary/20 h-[20px] px-1 leading-[20px] rounded-[10px]">
            {article.category}
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-1">
            <MdDateRange />
            <div className="text-secondary text-xs">{article.createAt}</div>
          </div>
          <div className="flex flex-row gap-1">
            <IoTime />
            <div className="text-secondary text-xs">
              {article.readTime || 0} min
            </div>
          </div>
        </div>
        <p className="text-secondary text-xs multi-line-ellipsis">
          {article.description}
        </p>
      </div>
      <div className="flex flex-row gap-1">
        <FaTags className="text-secondary" />
        {article.tags.map((tag) => (
          <div
            key={tag}
            className="text-secondary text-xs bg-secondary/20 px-1 rounded-full"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
