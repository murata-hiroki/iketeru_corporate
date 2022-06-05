# iketeru_lp
これは、イケテルシステムのWordpressをGatsbyに変更するプロジェクトです

# 必要条件
GatsbyCLI
Node

# システム構成
Gatsby.js

# 起動方法
yarnもしくはnpm install
その後npm startもしくはgatsby developで起動
環境変数を本番環境で起動させたい場合npm run buildでビルドした後にgatsby serveを叩いてください。

# コンポーネント設計
src/components/common→どこでも使える共通コンポーネントを格納している場所
src/components/p-lp→LPに関するコンポーネントのみを格納している場所

# 素材関連
このサイトは静的サイトなのでsrc/imagesのディレクトリの中に全て入っています。

# その他
...追加することがあれば追記予定
