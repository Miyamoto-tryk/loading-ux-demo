# ローディング表示 demo

ローディング画面を実装するためのデモアプリ

生成AIを使用して作成しました

使用記事：https://qiita.com/miyamotto/items/f3023fb2c4409a0aff17

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
