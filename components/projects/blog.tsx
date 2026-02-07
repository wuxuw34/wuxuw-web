import { FaGithub } from "react-icons/fa";

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export default function BlogProject() {
  return (
    <div className="flex items-center flex-col  pb-30 w-full h-full backdrop-blur-sm justify-center">
      <section className="flex flex-col gap-3 items-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          wuxuw&apos;s Web
        </h1>
        <div className="text-secondary">
          基于{" "}
          <span className="border-b border-primary text-white">Next.js</span>{" "}
          构建的沉浸式个人博客， 融合艺术审美与极致开发体验。
        </div>
        <a
          className="bg-white text-black rounded-full flex flex-row gap-2 h-12 py-4 px-8 text-xl items-center cursor-pointer hover:scale-105 transition-transform duration-200 mt-12"
          href="https://github.com/wuxuw34/wuxuw-web"
          target="_blank"
        >
          <FaGithub />
          查看源码
        </a>
      </section>
      <div className="flex flex-row gap-2 items-center pt-12">
        {techStack.map((stack) => (
          <div
            key={stack}
            className="card"
          >
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
}
