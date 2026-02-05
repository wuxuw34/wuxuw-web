import Input from "../input";
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { MdOutlineWebAsset } from "react-icons/md";

export default function CommentInput() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 items-center lg:flex-row">
        <Input
          startIcon={<FaUser />}
          placeholder="昵称"
        />
        <Input
          startIcon={<CiMail />}
          placeholder="邮箱 (可选)"
        />
        <Input
          startIcon={<MdOutlineWebAsset />}
          placeholder="网站 (可选)"
        />
      </div>
      <textarea className="card outline-transparent focus:outline-primary" rows={3} placeholder="请输入文本..."></textarea>
      <div
        contentEditable
        className="card 
       outline-transparent focus:outline-primary outline-1 resize-y overflow-y-auto min-h-[100px] before:content-[attr(data-placeholder)] before:text-[#999] before:pointer-events-none focus:before:content-[''] not-empty:before:content-['']"
        data-placeholder={"请输入"}
      ></div>
    </div>
  );
}
