import ArticleCard from "./article-card";

const articleIds = [1, 2, 3];

export default function ArticleList() {
  return (
    <div className="space-y-4">
      {articleIds.map((id) => (
        <ArticleCard key={id} id={id} />
      ))}
    </div>
  );
}
