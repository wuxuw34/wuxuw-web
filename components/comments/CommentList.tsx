"use client";
import { useState } from "react";

export default function CommentList() {
  const [comments, setComments] = useState<CommentMessage[]>([]);

  return (
    <div className="py-3">
      {comments.length === 0 ? (
        <div className="text-md h-[42px] flex flex-col items-center justify-center">
          还没有留言哦~🥹
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {/* 需要一个页面指示器 */}
        </div>
      )}
    </div>
  );
}
