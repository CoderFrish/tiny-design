import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Tiny-design',
  description: '基于Solidjs组件库',
  appearance: false,
  base: '/tiny-design/',
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/CoderFrish/tiny-design' }],
  },
});
