import { Page } from "@/types/page";
import { FaHome } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { VscGithubProject } from "react-icons/vsc";
import { FaLink } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

const pages: Page[] = [
  {
    name: "首页",
    path: "/",
    icon: FaHome
  },
  {
    name: "文章",
    path: "/article",
    icon: MdArticle
  },
  {
    name: "项目",
    path: "/projects",
    icon: VscGithubProject
  },
  {
    name: "友链",
    path: "/friends",
    icon:FaLink
  },
  {
    name: "留言",
    path: "/comments",
    icon:FaRegCommentDots
  },
]

export default pages