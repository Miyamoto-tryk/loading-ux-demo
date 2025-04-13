import ArticleList from "@/components/article-list";

export default function ArticlesPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
      <ArticleList />
    </main>
  );
}
