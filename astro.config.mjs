import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// DaxPay 文档站配置
// 部署时按需调整 site 与 base:
// - site:  最终访问域名
// - base:   子路径部署(如 GitHub Pages 项目页需设为 '/dax-pay-doc/')
export default defineConfig({
  site: 'https://doc.daxpay.cn',
  // 根路径 / 重定向到中文首页 /zh-cn/
  redirects: {
    '/': '/zh-cn/',
  },
  integrations: [
    starlight({
      title: 'DaxPay',
      description: 'DaxPay 开源支付系统官方文档',
      // 双前缀对等:中文 /zh-cn/,英文 /en/。首页 / 重定向到 /zh-cn/
      defaultLocale: 'zh-cn',
      locales: {
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
        en: { label: 'English', lang: 'en' },
      },
      logo: { src: './src/assets/logo.svg', replacesTitle: false },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/dromara/dax-pay',
        },
      ],
      // 侧边栏:directory 为 locale 相对路径(不含语言前缀,Starlight 自动解析)
      sidebar: [
        {
          label: '开始',
          translations: { en: 'Getting Started' },
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: '部署',
          translations: { en: 'Deployment' },
          items: [{ autogenerate: { directory: 'deployment' } }],
        },
        {
          label: '架构设计',
          translations: { en: 'Architecture' },
          items: [{ autogenerate: { directory: 'architecture' } }],
        },
        {
          label: '开发指南',
          translations: { en: 'Development' },
          items: [{ autogenerate: { directory: 'development' } }],
        },
        {
          label: '接口文档',
          translations: { en: 'API Reference' },
          items: [{ autogenerate: { directory: 'api' } }],
        },
        {
          label: '数据库',
          translations: { en: 'Database' },
          items: [{ autogenerate: { directory: 'database' } }],
        },
        {
          label: '资源',
          translations: { en: 'Resources' },
          items: [{ autogenerate: { directory: 'resources' } }],
        },
      ],
    }),
  ],
});
