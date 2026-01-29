interface ExperienceProps {
  experiences: Experience[];
}

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <div className="flex flex-col pb-2">
      <span>{experience.company}</span>
      <div className="flex flex-row gap-2 text-xs text-[#e9e9e9]">
        <span>
          {experience.startDate} - {experience.endDate}
        </span>
        <span>{experience.position}</span>
      </div>
    </div>
  );
};

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <div className="card flex flex-col ">
      {experiences.map((experience, i) => {
        return (
          <ExperienceItem
            key={i}
            experience={experience}
          />
        );
      })}
    </div>
  );
}
