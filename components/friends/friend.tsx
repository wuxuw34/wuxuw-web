import { getColorByString } from "@/utils/color";

interface FriendProps {
  friend: Friend;
}

export default function Friend({ friend }: FriendProps) {
  const { avatar, name, description } = friend;
  return (
    <a
      className="card flex flex-row gap-2 cursor-pointer"
      href={friend.url}
      target="_blank"
    >
      <img
        src={avatar}
        alt={name}
        className="w-[32px] h-[32px] rounded-full"
      />
      <div className="flex flex-col gap-3">
        <div
          style={{
            color: getColorByString(name),
          }}
        >
          {name}
        </div>
        <div>{description}</div>
      </div>
    </a>
  );
}
