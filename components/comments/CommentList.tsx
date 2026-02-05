"use client";
import Apis from "@/apis";
import { avatarBgColor } from "@/constans/color";
import { useCallback, useEffect, useState } from "react";

interface CommentItemProps {
  comment: CommentMessage;
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const getAvatarColor = useCallback(() => {
    const code = String(comment.username).charCodeAt(0);
    return avatarBgColor[code % avatarBgColor.length];
  }, [comment.username]);

  return (
    <div>
      <div className="flex flex-row gap-2">
        <div
          className="size-[32px] rounded-full text-center leading-[32px]"
          style={{
            backgroundImage: `linear-gradient(#fff -300%, ${getAvatarColor()})`,
          }}
        >
          {comment.username?.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <span className="text-sm">{comment.username || "匿名用户"}</span>
              <span>{comment.os}</span>
              <span>{comment.browser}</span>
            </div>
            <span className="text-secondary text-xs">
              {new Date(comment.timestamp).toLocaleDateString()}
            </span>
          </div>
          <div>{comment.content}</div>
        </div>
      </div>
      <div className="flex flex-col pl-[32px] pt-3">
        {comment.children?.length &&
          comment.children.map((children) => (
            <CommentItem
              key={children.id}
              comment={children}
            />
          ))}
      </div>
    </div>
  );
};

export default function CommentList() {
  const [comments, setComments] = useState<Map<string, CommentMessage>>(
    new Map()
  );

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
    <div className="py-3">
      {comments.size === 0 ? (
        <div className="text-md h-[42px] flex flex-col items-center justify-center">
          还没有留言哦~🥹
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {Array.from(comments.values()).map((comment) => (
            <CommentItem
              comment={comment}
              key={comment.id}
            />
          ))}
          {/* 需要一个页面指示器 */}
        </div>
      )}
    </div>
  );
}
