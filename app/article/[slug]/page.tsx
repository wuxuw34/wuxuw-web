import Article from "@/components/article/Article";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <Article id={slug} />;
}
