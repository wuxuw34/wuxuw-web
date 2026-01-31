export default function ArticlePreview({ article }: { article: Article }) {
  return (
    <div className="flex flex-col gap-3 mini-card">
      <div>{article.title}</div>
      <p className="text-secondary text-xs multi-line-ellipsis">
        {article.description}
      </p>
    </div>
  );
}
