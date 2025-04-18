import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">ホーム</h1>
      <Link
        href="/articles"
        className="text-blue-600 underline hover:opacity-80"
      >
        記事一覧を見る
      </Link>
    </main>
  );
}
