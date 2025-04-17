# memo

PaaSで試す？

- Netlify : サーバーレスでGitHubリポジトリと連携して自動デプロイ？
- Vercel : ReactやNext.jsとの統合が得意？
- GitHub Pages : GitHubリポジトリを使って、静的ウェブサイトを簡単にホスティング？

## GitHub Pages

- リポジトリにindex.htmlとか配置する
- [配置したリポジトリ](https://github.com/tomo-john/test)にアクセスし、上側メニューの`Settings`
- 左側メニューの`Pages`
- `Build and deployment`セクションの項目を設定
  - `Source` : Deploy from a branch
  - `Branch` : main
  - `Folder` : /(root) => リポディレ直下にindex.html置いたので
  - 設定後に`Save`
- [https://tomo-john.github.io/test/](https://tomo-john.github.io/test/)でアクセスできる

