---
theme: ../theme-modern
download: true
layout: image
image: /static/img.png
---

# おうちサーバーを構築した話

---
src: ../utils/self-introdoction.md
---

# 目次

<Toc maxDepth="1"></Toc>

---

# 何のためにおうちサーバーを構築したのか

- ゲームサーバーを立てたかった

- おうちKubernetesが欲しかった。

---


# ゲームサーバーの立て方

pelican panel(formerly pterodactyl)を使って立てました。

dockerベースのゲームサーバー管理パネルです。

<div style="height: 350px">
<img src="/static/img_1.png" alt="pelican panel" style="object-fit: contain; width: 100%; height: 100%">
</div>

---

# Kubernetesとは

Kubernetesはコンテナオーケストレーションシステムです。

コンテナオーケストレーションとは、コンテナを自動で管理することです。

Kubernetesは宣言的な構成を使って、コンテナのデプロイ、スケーリング、管理を行います。


**要するに、コンテナをいい感じにしてくれるやつ**

---

# 建てたサービス

- ArgoCD <br>
    GitOpsを実現するためのツール
- Prometheus * <br>
    メトリクスを収集するためのツール
- **Grafana** <br>
    メトリクスを可視化するためのツール
- Nginx Ingress <br>
    Ingress Controller(リバースプロキシ)を提供するためのツール
- cert-manager <br>
    SSL証明書を自動で更新するためのツール
- **Jenkins** * <br>
    CI/CDを実現するためのツール
- Keycloak <br>
    認証を実現するためのツール

---

# Jenkins

GitHub Actionsのようなものです。

JenkinsはCI/CDを実現するためのツールです。

Jenkinsはジョブを実行するためのエンジンと、ジョブを管理するためのWebインターフェースを提供します。

---

# Grafana + Prometheus + Node Exporter

Grafanaはメトリクスを可視化するためのツールです。

Prometheusはメトリクスを収集するためのツールです。

Node Exporterはホストのメトリクスを収集するためのツールです。

---

# おわりに

普段、サーバーレス(CloudFlare workersやAWS Lambda)を使っているので、サーバーを管理するのは新鮮だった。

クラウドだと従量課金なので、常設のサービスを使うならMini PCを使うのもありだと思う。

