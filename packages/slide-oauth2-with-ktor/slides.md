---
theme: ../theme-modern
download: true
---

# 認可サーバーを実装してみた

Kotlin + KtorでOAuth2を作ってみた

<div class="absolute bottom-10">
    にこまる
</div>

---
src: ../utils/self-introdoction.md
---

---

# 目次

<Toc maxDepth="1"></Toc>

---

# OAuth2とは

OAuth2は、認可の仕組みを提供するプロトコル<br>

<div  v-click class="p-2">

## 例
googleカレンダーのAPIを利用するためには、OAuth2を利用して認可を行う<br>
</div>

<div  v-click class="p-3">
<img height="45%" width="45%" src="/static/img.png" alt="a">
</div>

---

# OAuth2だと何がいい？

- **セキュリティ**
    - パスワードを他のアプリケーションに渡さなくてもよい
    - フロー側で、セキュリティについて考慮されている

- **利便性**
    - 他のアプリケーションのAPIを利用する際に、認可フローが共通なので認可を簡単に行える

---

# Kotlinについて

JetBrains社が2011年にリリースしたプログラミング言語

## 特徴

- Javaとの互換性が高い
- 静的型付け言語 (null安全)
- コードが簡潔
- Android開発にも利用可能
- Gradleを利用したビルドシステム

---

# Ktorについて

- Kotlin製のWebアプリケーションフレームワーク
- JetBrains社が開発
- 軽量でプラグインを利用して、機能を追加できる
````md magic-move
```kotlin
fun main() {
  embeddedServer(Netty, port = 8000) {
    routing {
      get ("/") {
        call.respondText("Hello, world!")
      }
    }
  }.start(wait = true)
}
```

```kotlin {*|3-7,9,13}
fun main() { 
  embeddedServer(Netty, port = 8000) {
    install(Authentication){
        basic("auth-basic") {
        // Configure basic authentication
        }
    }
    routing {
      authenticate("auth-basic") {
        get ("/") {
          call.respondText("Hello, world!")
        }
      }
    }
  }.start(wait = true)
}
```
````

---

# フロントエンドについて

## 使用した技術

- フレームワーク: Next.js
- ライブラリ
    - 認証ライブラリ : [Auth.js](https://authjs.dev/)
    - UIライブラリ : [Ark ui](https://ark-ui.com/)
    - cssライブラリ : [Panda CSS](https://panda-css.com/)
    - コンポーネント : [Park UI](https://park-ui.com/)

<div v-click class="text-xl p-2">

## Headless UI

スタイルを持たず、機能だけを提供
</div>
