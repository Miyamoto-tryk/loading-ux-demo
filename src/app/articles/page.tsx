import ArticleList from "@/components/article-list";

export default async function ArticlesPage() {
  //* 重いローディング処理　*/
  await new Promise((res) => setTimeout(res, 1500));
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
      <ArticleList />
    </main>
  );
}
