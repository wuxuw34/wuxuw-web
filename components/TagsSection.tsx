import Tag from "./Tag";

interface TagsSectionProps {
  tags: string[];
}

export default function TagsSection({ tags }: TagsSectionProps) {
  return (
    <div className="card">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  );
}
