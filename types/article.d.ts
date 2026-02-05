
interface ArticleCategory {
  name: string;
  count: number;
}

interface Article {
  title: string;
  id: string;
  createAt: string;
  tags: string[];
  content?: string;
  views?: number;
  likes?: number;
  description: string;
  readTime?: number;
  category: string;
}

