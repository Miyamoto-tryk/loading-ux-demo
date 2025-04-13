export type Props = {
  id: number;
};

async function fetchArticle(id: number) {
  await new Promise((res) => setTimeout(res, 1000 + Math.random() * 2000));
  return {
    title: `記事 ${id}`,
    author: ["佐藤", "田中", "鈴木"][id % 3],
  };
}

export default async function ArticleCard({ id }: Props) {
  const article = await fetchArticle(id);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="text-sm text-gray-500">by {article.author}</p>
    </div>
  );
}
