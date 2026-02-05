"use client";
import Input from "../input";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { MdOutlineWebAsset } from "react-icons/md";
import { useEffect, useState } from "react";
import { getDeviceInfo } from "@/utils/device";
import { nanoid } from "nanoid";

interface CommentInputProps {
  send?: (comment: CommentMessage) => void;
}

export default function CommentInput({ send }: CommentInputProps) {
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

  return (
    <div className="flex flex-col gap-2 card mt-3">
      <div className="flex flex-row items-center gap-1 pb-3">
        <IoSend />
        发送留言
      </div>
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
