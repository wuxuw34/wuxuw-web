"use client";
import useWheel from "@/hooks/useWheel";
import { useEffect, useRef } from "react";

interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className="flex flex-col gap-2 w-[40px] min-w-[40px] overflow-hidden group py-1 cursor-pointer hover:overflow-visible hover:w-fit transition-all duration-300 shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=light`}
        alt={skill}
        width={32}
        height={32}
        className="group-hover:scale-105 transition-transform duration-300 self-center"
      />
      <span className="overflow-hidden whitespace-nowrap text-ellipsis text-xs group-hover:overflow-visible text-center">
        {skill}
      </span>
    </div>
  );
};

export default function SkillsSection({ skills }: { skills: string[] }) {
  const { y } = useWheel();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;
    const scrollWidth = scrollElement.scrollWidth;
    let func: number | null = null;
    let time = 0;
    const fn = (t: number = 0) => {
      const left = scrollElement.scrollLeft;
      if (left + scrollElement.clientWidth >= scrollWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        if (t - time >= 80) {
          scrollElement.scrollLeft += 1;
          time = t;
        }
      }
      func = window.requestAnimationFrame(fn);
    };
    fn();
    return () => {
      if (func) {
        window.cancelAnimationFrame(func);
      }
    };
  }, []);

  return (
    <div className="card overflow-hidden w-full max-w-[100vw] ">
      <div
        className="flex flex-row gap-2 scrollbar-hide overflow-x-scroll"
        ref={scrollRef}
      >
        <div className="flex flex-row gap-2 p-0  flex-nowrap whitespace-nowrap ">
          {skills.map((skill) => (
            <Skill
              key={skill}
              skill={skill}
            />
          ))}
        </div>
        <div className="flex flex-row gap-2 p-0  flex-nowrap whitespace-nowrap ">
          {skills.map((skill) => (
            <Skill
              key={skill}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
