"use client";
import Apis from "@/apis";
import { avatarBgColor } from "@/constans/color";
import { FaReply } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { getColorByString } from "@/utils/color";

interface CommentItemProps {
  comment: CommentMessage;
  onReply?: (id: string) => void;
}

const CommentItem = ({ comment, onReply }: CommentItemProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="group flex flex-row gap-2">
        <div
          className="size-[32px] rounded-full text-center leading-[32px]"
          style={{
            backgroundImage: `linear-gradient(#fff -300%, ${getColorByString(comment.username)})`,
          }}
        >
          {comment.username?.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row items-center gap-2">
            <span
              className="text-sm"
              style={{
                color: getColorByString(comment.username),
              }}
            >
              {comment.username || "匿名用户"}
            </span>
            <Image
              src={`/os/${comment.os || 'windows'}.png`}
              alt={comment.os}
              width={16}
              height={16}
            />
            <div className="flex flex-row gap-1 shrink items-center">
              <Image
                src={`/broswer/${comment.browser?.split(" ")[0] || 'chrome'}.png`}
                alt={comment.browser}
                width={16}
                height={16}
                className="h-[16px]"
              />
              <span className="text-xs">{comment.browser?.split(" ")[1] || "unknown"}</span>
            </div>
          </div>
          <div className="cursor-text select-text">{comment.content}</div>
          <div className="flex flex-row gap-2 items-center">
            <span className="text-secondary text-xs">
              {new Date(comment.timestamp)
                .toLocaleDateString()
                .replace(/\//g, "-")}
            </span>
            <FaReply
              className="text-xs hover:text-primary cursor-pointer group-hover:opacity-100 opacity-0 transition-opacity duration-200"
              onClick={() => {
                onReply?.(comment.id);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pl-[32px] pt-3">
        {comment.children?.length &&
          comment.children.map((children) => (
            <CommentItem
              key={children.id}
              comment={children}
              onReply={(id) => {
                onReply?.(id);
              }}
            />
          ))}
      </div>
    </div>
  );
};

interface CommentListProps {
  comments: Map<string, CommentMessage>;
  onReply?: (commentId: string) => void;
}

export default function CommentList({ comments, onReply }: CommentListProps) {
  return (
    <div className="py-3">
      {comments.size === 0 ? (
        <div className="text-md h-[42px] flex flex-col items-center justify-center">
          还没有留言哦~🥹
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {Array.from(comments.values())
            .filter((c) => !c.parentId)
            .map((comment) => (
              <CommentItem
                comment={comment}
                key={comment.id}
                onReply={(id) => {
                  onReply?.(id);
                }}
              />
            ))}
          {/* 需要一个页面指示器 */}
        </div>
      )}
    </div>
  );
}
