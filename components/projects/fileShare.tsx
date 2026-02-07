import { animeImgs } from "@/constans/image";

export default function FileShareProject() {
  return (
    <div
      className="h-full bg-fixed bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url("${animeImgs[1]}")`,
      }}
    >
      123
    </div>
  );
}
