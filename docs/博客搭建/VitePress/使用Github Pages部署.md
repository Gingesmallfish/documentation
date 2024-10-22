---
title: 使用github pages部署
---

# 使用github pages部署  <Badge type="tip" text="^1.9.0" />

## 部署步骤

`Github Pages`专门用来托管静态内容，由于不需要服务器且基于`git`，支持CI/CD，成为很多静态网站比如博客、文档网站的很好的选择。下面介绍流程

在github上创建仓库，如果没有`Github`账号，需要先注册一个。

![blog12.png](https://img.picui.cn/free/2024/09/08/66ddb4b29c4df.png)

需要 `config.mts` 里面配置 `base`, 名称为自己 `github`仓库名称，注意不要忘记改之前的 `icon`

```ts
base: "/docs-demo/"
```
2, 初始仓库

```bash
git init
```

## 添加gitignore文件

```bash
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

## 添加本地所有文件git仓库

```bash
git init
```

## 创建第一次提交

```bash
git commit -m "firsr commit"
```

## 添加远程仓库到本地

:::warning
这里换成 `自己的仓库`
:::

```gitignore
git remote add origin https://github.com/Gingesmallfish/docs-demo.git
```
## 推送项目到github

```gitignore
git push -u origin maseter
```

## 选择github actions

![blog13.png](https://img.picui.cn/free/2024/09/08/66ddb7c7dd5db.png)


## 设置工作流

![blog14.png](https://img.picui.cn/free/2024/09/08/66ddb7fc837fe.png)

## 重名并设置 `deploy` 脚本

脚本文件：参考的vitepress官方文档：<https://gingesmallfish.github.io/docs-demo/>

❗node版本和pnpm版本需要一致

❗对于npm的部署可以参考这个博客[GitHub Action一键部署个人博客 | Ahao (helloahao096.github.io)](https://helloahao096.github.io/helloahao/posts/GitHub Action一键部署个人博客.html)

❗需要注意项目的根目录（.vitepress所在的目录）


```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [master]

# 设置tokenn访问权限
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: Setup pnpm
        uses: pnpm/action-setup@v2 # 安装pnpm并添加到环境变量
        with:
          version: 8.6.12 # 指定需要的 pnpm 版本
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm # 设置缓存
      - name: Setup Pages
        uses: actions/configure-pages@v3  # 在工作流程自动配置GithubPages
      - name: Install dependencies
        run: pnpm install # 安装依赖
      - name: Build with VitePress
        run: |
          pnpm run docs:build # 启动项目
          touch .nojekyll  # 通知githubpages不要使用Jekyll处理这个站点，不知道为啥不生效，就手动搞了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2  # 上传构建产物
        with:
          path: .vitepress/dist # 指定上传的路径，当前是根目录，如果是docs需要加docs/的前缀

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }} # 从后续的输出中获取部署后的页面URL
    needs: build    # 在build后面完成
    runs-on: ubuntu-latest  # 运行在最新版本的ubuntu系统上
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment  # 指定id
        uses: actions/deploy-pages@v2 # 将之前的构建产物部署到github pages中
```
