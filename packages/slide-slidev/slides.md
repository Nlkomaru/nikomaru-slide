---
theme: ../slidev-theme-modern
download: true
---

# Gitを使ったスライド管理

SlidevをAWSにデプロイ

<div class="absolute bottom-10">
    にこまる
</div>

---

# 自己紹介

-   📛 **名前** - にこまる
-   🏫 **所属** - 工学部電子情報システム工学科 1年
-   🌏 **出身** - 愛知県
-   🎨 **趣味**
    -   🎮 **ゲーム**
        -   マインクラフト
    -   📝 **資格取得**
        -   世界遺産検定 3級
        -   AWS Certified Cloud Practitioner(Expiration 2025-01), FE, AP

---
layout: default
---

# 目次

<Toc maxDepth="1"></Toc>

---

# Slidevについて


-  Markdownベース
-  コンテンツと見た目の分離
-  テーマを簡単に変更できる
-  コンポーネントを使える
```html
<Counter :count="10" />
```
<Counter :count="10" m="t-4" />


<div class="absolute bottom-10">
    詳しくは<a href="https://sli.dev/guide/why.html">こちら</a>
</div>

---

# 書式

```md
---
theme: ../theme-modern
download: true
---

# Slidevをつかってみた

Gitを使ってスライドを管理しよう

<div class="absolute bottom-10">
    にこまる
</div>

---

# 自己紹介

-   📛 **名前** - にこまる
-   🏫 **所属** - 工学部電子情報システム工学科 1年
-   🌏 **出身** - 愛知県
-   🎨 **趣味**
    -   🎮 **ゲーム**
        -   マインクラフト

```


---
transition: slide-up
---

# 目的

-   Slidevというやつがあるらしい　使ってみたい
-   スライドをGitで管理したい
    -   一か所で管理したい
        <br>(Microsoft Powerpoint, Google Docsとかいろいろごちゃごちゃ)
    -   バージョン管理を使うことで見返せるように


---

# 構成

もともとの構成だと1repoに1スライドしか置けない<br>
yarnのworkspacesを使用してMonorepo環境を構築

```console 
.
└── slidev/
    ├── node_modules/
    ├── packages/
    │   ├── slide-01/
    │   │   ├── component/
    │   │   ├── node_modules/
    │   │   ├── pages/
    │   │   ├── snippets/
    │   │   ├── package.json
    │   │   └── slides.md  << ここに記述
    │   ├── slide-02/
    │   ├── slide-theme-01/
    │   └── slide-theme-02/
    ├── package-lock.json
    ├── package.json
    └── yarn.lock
```

---

# デプロイ構成
- デプロイにAWS S3を使用<br>
- GitHub ActionsからS3にプッシュ<br>
- Cloudfront functionsをつかってurlの書き換え (example.com/ を example.com/index.htmlに)

<img src="/static/Component_1.png" />