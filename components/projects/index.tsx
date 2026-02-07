import BlogProject from "./blog";
import FileShareProject from "./fileShare";

export default function Projects() {
  return (
    <div className=" fixed top-0 left-0 w-full h-full ">
      <div className=" overflow-y-auto perspective-[1px] transform-3d w-full h-full">
        <BlogProject />
        <FileShareProject />
      </div>
    </div>
  );
}
