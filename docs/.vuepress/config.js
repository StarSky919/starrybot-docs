import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'StarryBot',
  description: 'StarryBot 文档',

  lang: 'zh-CN',
  bundler: viteBundler(),
  theme: defaultTheme({
    notFound: ['找不到这个页面！'],
    backToHome: '返回主页',
    repo: 'StarSky919/starrybot-docs',
    editLink: false,
    navbar: [
      {
        text: '首页',
        link: '/',
      }
    ],
    themePlugins: {
      backToTop: false,
      copyCode: {
        showInMobile: true,
      },
      prismjs: {
        themes: { light: 'coy', dark: 'cb' },
        lineNumbers: false,
        collapsedLines: false,
        preloadLanguages: ['markdown', 'javascript'],
      }
    },
  }),
})