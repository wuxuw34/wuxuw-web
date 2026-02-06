"use client";
import Input from "../input";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { MdOutlineWebAsset } from "react-icons/md";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { getDeviceInfo } from "@/utils/device";
import { nanoid } from "nanoid";
import { FaReply } from "react-icons/fa";
import { getColorByString, hexToRgba } from "@/utils/color";

interface CommentInputProps {
  send?: (comment: CommentMessage) => void;
  replyComment?: CommentMessage;
  onCancelReply?: () => void;
}

export interface CommentInputRef {
  replyTo: (comment: CommentMessage) => void;
}

const CommentInput = forwardRef<CommentInputRef, CommentInputProps>(
  ({ send, onCancelReply }, ref) => {
    const [comment, setComment] = useState<CommentMessage>({
      username: "",
      email: "",
      website: "",
      content: "",
      id: "",
      timestamp: 0,
      os: "other",
      browser: "",
    });
    const [replyComment, setReplyComment] = useState<CommentMessage | null>(
      null
    );

    useEffect(() => {
      // 获取系统信息
      const info = getDeviceInfo();
      const update = () => {
        setComment((pre) => ({
          ...pre,
          os: info.os,
          browser: info.browser,
        }));
      };
      update();
    }, []);

    useImperativeHandle(ref, () => ({
      replyTo: (comment: CommentMessage) => {
        setReplyComment(comment);
      },
    }));

    return (
      <div className="flex flex-col gap-2 card mt-3">
        <div className="flex flex-row items-center gap-1 pb-3">
          <IoSend />
          发送留言
        </div>
        {replyComment && (
          <div
            className="flex flex-row items-center gap-2"
            style={
              {
                "--color": getColorByString(replyComment.username),
                "--bg-color": hexToRgba(
                  getColorByString(replyComment.username),
                  0.1
                ),
              } as React.CSSProperties
            }
          >
            <FaReply
              className="w-[22px] h-[22px]"
              style={{
                color: "var(--color)",
              }}
            />
            <div className="relative flex flex-col gap-1 rounded bg-(--bg-color) w-full py-2 pl-3 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:bg-(--color) before:w-[3px] overflow-hidden">
              <span
                className="text-sm"
                style={{
                  color: "var(--color)",
                }}
              >
                {replyComment.username}
              </span>
              <p className="truncate text-sm">{replyComment.content}</p>
            </div>
            <IoIosClose
              className="text-(--color) w-[32px] h-[32px] cursor-pointer"
              onClick={() => {
                setReplyComment(null);
              }}
            />
          </div>
        )}
        <div className="flex flex-col gap-1 items-center lg:flex-row">
          <Input
            startIcon={<FaUser />}
            placeholder="昵称"
            className="h-10 text-sm"
            onChange={(e) => {
              const v = e.target.value || "";
              setComment({ ...comment, username: v });
            }}
          />
          <Input
            startIcon={<CiMail />}
            placeholder="邮箱 (可选)"
            className="h-10 text-sm"
            onChange={(e) => {
              const v = e.target.value || "";
              setComment({ ...comment, email: v });
            }}
          />
          <Input
            startIcon={<MdOutlineWebAsset />}
            placeholder="网站 (可选)"
            className="h-10 text-sm"
            onChange={(e) => {
              const v = e.target.value || "";
              setComment({ ...comment, website: v });
            }}
          />
        </div>
        <textarea
          className="card outline-transparent focus:outline-primary"
          rows={3}
          placeholder="写下你的留言..."
          onChange={(e) => {
            const v = e.target.value || "";
            setComment({ ...comment, content: v });
          }}
        ></textarea>
        <div className="flex flex-row items-center justify-end">
          <button
            className="card flex flex-row items-center gap-1 py-2! hover:bg-primary! cursor-pointer "
            onClick={() => {
              send?.({
                ...comment,
                id: nanoid(),
                parentId: replyComment?.parentId
                  ? replyComment.parentId
                  : replyComment?.id,
                timestamp: Date.now(),
              });
            }}
          >
            <IoSend />
            发送
          </button>
        </div>
      </div>
    );
  }
);

CommentInput.displayName = "CommentInput";

export default CommentInput;
