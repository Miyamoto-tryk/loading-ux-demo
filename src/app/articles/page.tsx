import { Suspense } from "react";
import ArticleList from "@/components/article-list";

export default async function ArticlesPage() {
  await new Promise((res) => setTimeout(res, 1500));
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">記事一覧</h1>
      <Suspense fallback={<LoadingArticles />}>
        <ArticleList />
      </Suspense>
    </main>
  );
}

function LoadingArticles() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-gray-200 rounded h-20 w-full"
        />
      ))}
    </div>
  );
}
