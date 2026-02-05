"use client";
import { FaRegCommentDots } from "react-icons/fa";
import CommentInput from "./input";
import CommentList from "./CommentList";
import { useCallback, useEffect, useState } from "react";
import Apis from "@/apis";

export default function Comments() {
  const [comments, setComments] = useState<Map<string, CommentMessage>>(
    new Map()
  );
  const sendMessage = useCallback((comment: CommentMessage) => {
    setComments(pre=>{
      const newComments = new Map(pre);
      newComments.set(comment.id, comment);
      return newComments;
    })
  }, []);

  useEffect(() => {
    Apis.comment.getAllComments().then((res) => {
      console.log(res);
      if (res.data.list?.length) {
        const list = res.data.list as CommentMessage[];
        // 处理数据,调整结构
        const map = new Map<string, CommentMessage>();
        list.forEach((comment) => {
          if (comment.parentId) {
            const parent = map.get(comment.parentId);
            if (parent) {
              if (!parent.children?.length) {
                parent.children = [];
              }
              parent.children.push(comment);
              return;
            }
          }
          map.set(comment.id, comment);
        });
        setComments(map);
      }
    });
  }, []);

  return (
    <div>
      <div className="card flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <FaRegCommentDots />
          留言板
        </div>
        <div className="text-xs text-secondary">说点什么吧~ · 🥰</div>
        <CommentList comments={comments} />
      </div>
      <CommentInput send={sendMessage} />
    </div>
  );
}
