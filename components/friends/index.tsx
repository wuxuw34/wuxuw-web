"use client";
import Apis from "@/apis";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import Friend from "./friend";
import { FaUserPlus } from "react-icons/fa";

export default function Friends() {
  const [friends, setFriends] = useState<Friend[]>([]);

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
        <button className="card cursor-pointer hover:bg-primary! flex items-center gap-2">
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
    </div>
  );
}
