# イケテルシステムのホームページ

## 主な使用技術
- [Gatsby.js](https://www.gatsbyjs.com/)
  - [React](https://ja.reactjs.org/)
- [emotion](https://emotion.sh/docs/introduction)

## 環境構築手順
### システム要件
- Node.js 16.15.0

### 手順
1. `npm i` を実行します（初回のみ）。
2. `npm start` を実行します。
3. `localhost:8000` にアクセスすると、開発サーバーのページが表示されます。

## Linter, Formatter について
- ESLint
- Prettier

を使用し、ソースコード解析とフォーマットを実施しています。  
`npm run lint` コマンドでESLintとPrettierを実行できます。  
自動修正できない問題を検出したときはエラー文が表示されますので、該当するソースコードを修正してください。

### commit時の自動解析
git commit のタイミングで自動的にESLintとPrettierが走るように設定しています。  
自動修正できない問題を検出したときは、commitが中断されます。  
その場合は、エラー文を参考にソースコードを修正し、再度commitしてください。

## エディタについて
エディタは **Visual Studio Code (VSCode)** を推奨します。  
理由は下記のとおりです。
- JavaScriptやTypeScriptとの相性がいい
- Facebookのデフォルトの開発環境として採用されている

### VSCode 推奨プラグイン
VSCodeに下記のプラグインをインストールすることを推奨します。
- [ESLint (dbaeumer.vscode-eslint)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - ESLintの警告やエラーをリアルタイムで表示してくれる
- [Prettier (esbenp.prettier-vscode)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - 保存時に自動的にソースコードを整形してくれる
- [vscode-styled-components (styled-components.vscode-styled-components)](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
  - emotionで記述したCSSのシンタックスハイライトが効くようになる
- [Auto Rename Tag (formulahendry.auto-rename-tag)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
  - JSXの開始タグ・終了タグのいずれか一方を変更すれば、もう一方も自動的に変更してくれる

その他のプラグインに関しましては、お好みでどうぞ。

### VSCode 推奨設定
保存時に自動的にコード整形が走るように、設定ファイルに下記の設定を追加することを推奨します。

```javascript
{
    // （略）
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[graphql]": {
        "editor.formatOnSave": true
    },
    "[javascript]": {
        "editor.formatOnSave": true
    },
    "[javascriptreact]": {
        "editor.formatOnSave": true
    },
    "[json]": {
        "editor.formatOnSave": true
    },
    "[typescript]": {
        "editor.formatOnSave": true
    },
    "[typescriptreact]": {
        "editor.formatOnSave": true
    }
}
```

また、CSSコーディング時にEmmetを使いたい方は、下記の設定を追加すると使えるようになります。

```javascript
{
    // （略）
    "emmet.includeLanguages": {
        "javascriptreact": "css"
    }
}
```

## ディレクトリ構成
- src/components/common
  - どこでも使える共通コンポーネントを格納
- src/components/p-lp
  - LPに関するコンポーネントのみを格納

ToDo: ディレクトリ構成を追記

## ホスティングについて
ToDo: 後で書く
