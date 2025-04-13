import { Suspense } from "react";
import ArticleCard from "./article-card";

const articleIds = [1, 2, 3];

export default function ArticleList() {
  return (
    <div className="space-y-4">
      {articleIds.map((id) => (
        <Suspense key={id} fallback={<Skeleton />}>
          <ArticleCard id={id} />
        </Suspense>
      ))}
    </div>
  );
}

function Skeleton() {
  return <div className="animate-pulse bg-gray-200 rounded h-20 w-full" />;
}
