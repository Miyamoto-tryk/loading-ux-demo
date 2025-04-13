# ローディング表示 demo

ローディング画面を実装するためのデモアプリ

# ディレクトリ構成

```
app/
├── articles/
│   ├── page.tsx          ← 記事一覧ページ（ArticlesPage）
│   ├── loading.tsx       ← Suspense fallback（ページ全体のローディング UI）
├── components/
│   ├── article-list.tsx  ← 記事一覧コンテナ（個別に Suspense）
│   ├── article-card.tsx  ← 遅延付きの 1 記事表示
```
