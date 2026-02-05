"use client";
import Input from "../input";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { MdOutlineWebAsset } from "react-icons/md";
import { useState } from "react";

export default function CommentInput() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 items-center lg:flex-row">
        <Input
          startIcon={<FaUser />}
          placeholder="昵称"
          className="h-10 text-sm"
          onChange={(e) => {
            const v = e.target.value || "";
            setUsername(v);
          }}
        />
        <Input
          startIcon={<CiMail />}
          placeholder="邮箱 (可选)"
          className="h-10 text-sm"
          onChange={(e) => {
            const v = e.target.value || "";
            setEmail(v);
          }}
        />
        <Input
          startIcon={<MdOutlineWebAsset />}
          placeholder="网站 (可选)"
          className="h-10 text-sm"
          onChange={(e) => {
            const v = e.target.value || "";
            setWebsite(v);
          }}
        />
      </div>
      <textarea
        className="card outline-transparent focus:outline-primary"
        rows={3}
        placeholder="请输入文本..."
        onChange={(e) => {
          const v = e.target.value || "";
          setContent(v);
        }}
      ></textarea>
      <div className="flex flex-row items-center justify-end">
        <button className="card flex flex-row items-center gap-1 py-2! hover:bg-primary! cursor-pointer ">
          <IoSend />
          发送
        </button>
      </div>
    </div>
  );
}
