"use client";
import Apis from "@/apis";
import { useCallback, useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import Friend from "./friend";
import { FaUserPlus } from "react-icons/fa";
import { Model } from "../model";
import { FaUpload } from "react-icons/fa6";
import Input from "../input";

export default function Friends() {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const toggleAddFriendModal = useCallback(() => {
    console.log("toggleAddFriendModal");
    setIsModelOpen((pre) => !pre);
  }, [setIsModelOpen]);

  useEffect(() => {
    Apis.friends.getAllFriends().then((res) => {
      if (res.data.list?.length) {
        setFriends(res.data.list as Friend[]);
      }
    });
  }, []);

  return (
    <div className="card flex flex-col gap-2">
      <h1 className="flex flex-row gap-1 items-center">
        <FaLink />
        友情链接
      </h1>
      <h2 className="text-secondary text-sm">欢迎来到我的友链页面！</h2>
      <div className="flex flex-row justify-center">
        <button
          className="card cursor-pointer hover:bg-primary! flex items-center gap-2"
          onClick={toggleAddFriendModal}
        >
          <FaUserPlus />
          申请友链
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.url}
          />
        ))}
      </div>
      <Model
        open={isModelOpen}
        onClose={() => {
          setIsModelOpen(false);
        }}
      >
        <div className="rounded-sm flex flex-col gap-4 min-w-[400px] bg-[#4b4746] shadow-lg px-6! py-4!">
          <h1 className="text-lg flex flex-row gap-2 items-center">
            <FaUserPlus />
            添加友链
          </h1>
          <div className="flex flex-col gap-2">
            <div className="gap-2 flex flex-col">
              <span className="text-secondary text-sm">网站名称</span>
              <Input
                className=" w-full"
                placeholder="请输入网站名称"
              />
            </div>
            <div className="gap-2 flex flex-col">
              <span className="text-secondary text-sm">网站地址</span>
              <Input
                className="w-full"
                placeholder="https://example.com"
              />
            </div>
            <div className="gap-2 flex flex-col">
              <span className="text-secondary text-sm">图标</span>
              <Input
                className=" w-full"
                placeholder="请输入网站名称"
              />
            </div>
            <div className="gap-2 flex flex-col">
              <span className="text-secondary text-sm">网站描述</span>
              <Input
                className="w-full"
                placeholder="请输入网站描述"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <button className="card hover:bg-primary! cursor-pointer flex flex-row items-center gap-2">
              <FaUpload />
              提交
            </button>
          </div>
        </div>
      </Model>
    </div>
  );
}
