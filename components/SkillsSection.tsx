interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className="flex flex-col gap-2 w-[40px] overflow-hidden group py-1 cursor-pointer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://skillicons.dev/icons?i=${skill}&theme=light`}
        alt={skill}
        width={32}
        height={32}
        className="group-hover:scale-105 transition-transform duration-300 self-center"
      />
      <span className="overflow-hidden whitespace-nowrap text-ellipsis text-sm">
        {skill}
      </span>
    </div>
  );
};

export default function SkillsSection({ skills }: { skills: string[] }) {

  

  return (
    <div className="card">
      {skills.map((skill) => (
        <Skill
          key={skill}
          skill={skill}
        />
      ))}
    </div>
  );
}
