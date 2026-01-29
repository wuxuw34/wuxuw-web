
interface TagProps {
  children: React.ReactNode;
}

const Tag = ({
  children,
}: TagProps)=>{

  return (
    <div className="rounded-sm bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] px-2 py-1 text-sm font-medium text-white">
      {children}
    </div>
  )
}

interface TagsSectionProps {
  tags: string[];
}

export default function TagsSection({ tags }: TagsSectionProps) {
  return (
    <div className="card flex flex-row flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
