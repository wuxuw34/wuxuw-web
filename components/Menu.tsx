import config from "@/configs";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex flex-row gap-2 justify-center  py-3 px-2">
      {config.pages.map((page) => (
        <Link
          className="mini-card shadow bg-[rgba(255,255,255,0.05)] py-0 hover:bg-[rgba(255,255,255,0.1)] cursor-pointer"
          key={page.path}
          href={page.path}
        >
          {page.name}
        </Link>
      ))}
    </div>
  );
}
