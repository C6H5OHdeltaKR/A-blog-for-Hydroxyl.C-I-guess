import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HydroxylC",
  description: "个人博客与作品集",
  
  // GitHub Pages 部署需要设置 base
  base: '/A-blog-for-Hydroxyl.C-I-guess/',
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '作品集', link: '/projects/' },
      { text: '关于我', link: '/about' }
    ],

    // 侧边栏（按目录分组）
    sidebar: {
      '/blog/': [
        {
          text: '博客文章',
          items: [
            { text: '第一篇文章', link: '/blog/first-post' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/C6H5OHdeltaKR' }
    ]
  }
})
