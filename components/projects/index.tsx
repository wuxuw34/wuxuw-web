import BlogProject from "./blog";
import FileShareProject from "./fileShare";

export default function Projects() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-y-auto">
      <BlogProject />
      <FileShareProject />
    </div>
  );
}
