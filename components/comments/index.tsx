import { FaRegCommentDots } from "react-icons/fa";
import CommentInput from "./input";
import CommentList from "./CommentList";

export default function Comments() {
  return (
    <div>
      <div className="card flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <FaRegCommentDots />
          留言板
        </div>
        <div className="text-xs text-secondary">说点什么吧~ · 🥰</div>
        <CommentList />
      </div>
      <CommentInput />
    </div>
  );
}
