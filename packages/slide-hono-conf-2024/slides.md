---
theme: ../theme-modern
download: true
layout: image
image: /static/hono-conf-2024.jpg
backgroundSize: contain
---

# Hono Conference 2024 参加記
June 22, 2024 
@docomo R&D OPEN LAB ODAIBA

<div class="absolute bottom-10">
    にこまる
</div>


---
src: ../utils/self-introdoction.md
---


# 目次

<Toc maxDepth="1"></Toc>

---

# Honoとは
- とても軽量なWebアプリケーションフレームワーク
- Webスタンダードに準拠
- 様々なプラットフォームに対応
    - CloudFlare Workers
    - AWS Lambda
    - Deno deploy
    - Vercel ...


---

# コントリビューターの発表

- 中学生のコントリビューターもいた
- 目的が決まっているので、初心者でもコントリビューションしやすい
- Handlerを使ったdependency injectionができる

---

# ユーザーの発表

- Adaptorのおかげで、プラットフォームの違いを意識せずに開発できる
- 簡単に始められる
    - 監視とかほしいならHonoじゃなく、Effect tsを使ったほうがいい

---
実際のコード

```ts
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import slideRouter from "@/src/app/api/[[...route]]/slideRoute";

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.route("/slide",slideRouter)

export const GET = handle(app)
```

```ts
slideRouter.get("/list", async (c) => {
    let bucket = process.env.BUCKET
    if (!bucket) {
        throw new Error("BUCKET is not defined in the environment");
    }
    let list =(await bucket.list()).objects.map((o) => o.key.split("/")[0])
    let set = Array.from(new Set(list))
    return c.json(set)
})

export default slideRouter
```

---

# まとめ

- Honoは軽量で使いやすい
- 使ったことあったけど、どういった思想で作られているか分かったのはよかった
- 今後の展望を知れたのはよかった




