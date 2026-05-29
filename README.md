# HydroxylC 的个人博客

基于 VitePress 搭建的个人博客与作品集。

**在线访问**: https://c6h5ohdeltakr.github.io/A-blog-for-Hydroxyl.C-I-guess/

---

## 项目结构

```
docs/
├── .vitepress/
│   └── config.mts      # 站点配置（导航、侧边栏等）
├── blog/               # 博客文章
│   ├── index.md        # 博客列表页
│   └── *.md            # 各篇文章
├── projects/           # 作品/项目
│   └── index.md        # 作品列表页
├── index.md            # 首页
└── about.md            # 关于我
```

---

## 常用命令

在项目根目录执行：

| 命令 | 作用 |
|------|------|
| `npm run docs:dev` | 本地预览（开发模式，热更新） |
| `npm run docs:build` | 构建静态网站 |
| `npm run docs:preview` | 预览构建结果 |

---

## 如何写新文章

### 1. 创建 Markdown 文件

在 `docs/blog/` 目录下新建一个 `.md` 文件，例如 `my-new-post.md`：

```markdown
# 文章标题

2024-06-01

这里是正文内容...

## 二级标题

更多内容...

[链接文字](https://example.com)
```

### 2. 添加到文章列表

编辑 `docs/blog/index.md`，在列表中添加新文章的链接：

```markdown
## 文章列表

### 2024

- [我的新文章](/blog/my-new-post) - 文章简介
- [第一篇文章](/blog/first-post) - 博客搭建记录
```

### 3. 添加到侧边栏（可选）

编辑 `docs/.vitepress/config.mts`，在 sidebar 的 blog 部分添加：

```javascript
sidebar: {
  '/blog/': [
    {
      text: '博客文章',
      items: [
        { text: '我的新文章', link: '/blog/my-new-post' },
        { text: '第一篇文章', link: '/blog/first-post' }
      ]
    }
  ]
}
```

---

## 如何添加新作品

### 1. 创建作品页面

在 `docs/projects/` 目录下新建 `.md` 文件，例如 `my-project.md`：

```markdown
# 项目名称

## 项目简介

简要描述这个项目是做什么的。

## 技术栈

- 技术 A
- 技术 B

## 功能特点

- 功能一
- 功能二

## 链接

- [源代码](https://github.com/...)
- [在线演示](https://...)
```

### 2. 添加到作品列表

编辑 `docs/projects/index.md`，添加链接：

```markdown
## 作品列表

### [我的项目](/projects/my-project)

项目简介...
```

---

## 如何上传到 GitHub

每次在本地修改完后，执行以下命令推送：

```bash
# 1. 查看修改了哪些文件（可选）
git status

# 2. 添加所有修改到暂存区
git add .

# 3. 提交修改（写清楚改了什么）
git commit -m "添加新文章：xxx"

# 4. 推送到 GitHub
git push
```

推送后，GitHub Actions 会自动重新构建和部署，大约 1-2 分钟后生效。

---

## 如何从 GitHub 下载到本地

如果你在另一台电脑上，或者重新克隆仓库：

```bash
# 克隆仓库
git clone https://github.com/C6H5OHdeltaKR/A-blog-for-Hydroxyl.C-I-guess.git

# 进入目录
cd A-blog-for-Hydroxyl.C-I-guess

# 安装依赖
npm install
```

如果本地已有仓库，只是想同步最新代码：

```bash
git pull
```

---

## Markdown 常用语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体** *斜体* `代码`

- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

[链接文字](https://example.com)

![图片描述](/path/to/image.png)

> 引用文字

​```javascript
// 代码块
console.log('Hello')
​```
```

---

## 修改站点配置

编辑 `docs/.vitepress/config.mts`：

- `title`: 网站标题
- `description`: 网站描述
- `nav`: 顶部导航栏
- `sidebar`: 侧边栏
- `socialLinks`: 社交链接

修改后记得 `git add .` → `git commit` → `git push`

---

## 常见问题

### 本地预览时报错

先试试重新安装依赖：

```bash
rm -rf node_modules
npm install
```

### 推送后网站没更新

去 GitHub 的 Actions 页面查看构建是否成功：
https://github.com/C6H5OHdeltaKR/A-blog-for-Hydroxyl.C-I-guess/actions

### 图片不显示

图片放在 `docs/public/` 目录下，然后在 Markdown 中用 `/图片名.png` 引用。

例如：`docs/public/photo.png` → `![](/photo.png)`

---

## 相关链接

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 语法教程](https://markdown.com.cn/)
