import Article from "@/components/Article";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return <Article id={slug} />;
}
