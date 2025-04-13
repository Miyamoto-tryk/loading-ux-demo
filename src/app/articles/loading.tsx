export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-400 border-t-transparent mb-6" />
      <p className="text-gray-600 text-lg">記事一覧を読み込んでいます...</p>
    </div>
  );
}
