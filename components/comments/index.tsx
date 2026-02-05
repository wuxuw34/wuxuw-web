import { FaRegCommentDots } from "react-icons/fa";
import CommentInput from "./input";

export default function Comments() {
  return (
    <div className="card flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <FaRegCommentDots />
        留言板
      </div>
      <div></div>
      <CommentInput />
    </div>
  );
}
