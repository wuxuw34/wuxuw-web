import { animeImgs } from "@/constans/image";
import Layer from "./layer";

export default function BlogProject() {
  return (
    <Layer
      img={animeImgs[0]}
      z={-1}
    >
      这个项目
    </Layer>
  );
}
