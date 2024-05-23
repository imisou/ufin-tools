import nav from './nav';
import sidebar from './sidebar';
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'ufin-tools',
  titleTemplate: 'javaScript utility library',
  description: 'javaScript utility library.',
  lastUpdated: true,
  appearance: true,
  markdown: {
    // theme: 'material-palenight',
    lineNumbers: true,
  },
  base: '/tools/',

  themeConfig: {
    logo: '/favicon.ico',
    outline: 'deep',
    outlineTitle: '本章目录',
    nav,
    sidebar,
    lastUpdatedText: '上次更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    // team:{},
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: '<APP_ID>',
      placeholder: '关键字搜索',
      // searchParameters:['555','888'],
      disableUserPersonalization: false,
      // initialQuery:'5555', // 初始查询
      buttonText: '搜索',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Jad',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/imisou/ufin-tools' },
    ],
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  },
});
