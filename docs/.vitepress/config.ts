import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Tiny-design',
  description: '基于Solidjs组件库',
  appearance: false,
  base: '/tiny-design/',
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "组件", link: "/get-started" },
    ],
    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [{ text: "按钮", link: "/components/button" }],
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/CoderFrish/tiny-design' }],
  }
});
