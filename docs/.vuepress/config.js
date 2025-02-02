import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  title: 'StarryBot',
  description: 'StarryBot 文档',
  lang: 'zh-CN',
  bundler: viteBundler(),
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [],
  theme: defaultTheme({
    notFound: ['找不到这个页面！'],
    backToHome: '返回主页',
    editLink: false,
    lastUpdatedText: '上次更新',
    contributorsText: '协作编辑',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '使用 Bot',
        children: [
          {
            text: '开始之前',
            link: '/guide/',
          },
          {
            text: '插件列表',
            link: '/plugins/',
          },
          {
            text: '常见问题',
            link: '/faq/',
          },
        ],
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    themePlugins: {
      backToTop: false,
      copyCode: {
        showInMobile: true,
      },
      prismjs: {
        themes: { light: 'one-light', dark: 'one-dark' },
        lineNumbers: false,
        collapsedLines: false,
        preloadLanguages: ['markdown', 'javascript'],
      },
    },
  }),
});