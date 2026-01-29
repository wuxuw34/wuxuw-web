"use client";
import useWheel from "@/hooks/useWheel";

interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className="flex flex-col gap-2 w-[40px] min-w-[40px] overflow-hidden group py-1 cursor-pointer hover:overflow-visible hover:w-fit transition-all duration-300">
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

  return (
    <div className="card flex flex-row gap-2 p-4 overflow-x-scroll scrollbar-hide">
      {skills.map((skill) => (
        <Skill
          key={skill}
          skill={skill}
        />
      ))}
    </div>
  );
}
