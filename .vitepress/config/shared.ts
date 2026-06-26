import type { HeadConfig } from 'vitepress'

import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

// 顶层共享配置(所有语言通用)
export const shared = defineConfig({
  // 内容目录:所有 Markdown 放在 src/ 下
  srcDir: 'src',
  title: 'DaxPay',
  description: 'DaxPay 开源支付系统官方文档',
  // 默认深色模式
  appearance: 'dark',
  // 干净 URL(无 .html 后缀)
  cleanUrls: true,
  // 基于 git 的最后更新时间
  lastUpdated: true,
  head: head(),
  markdown: {
    // group-icons 代码块图标插件(Markdown 层)
    preConfig(md) {
      md.use(groupIconMdPlugin)
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'DaxPay开源版文档站',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dromara/dax-pay' },
    ],
    // 本地搜索(minisearch),按语言自动分区
    // search.options.locales 集中配置各语言翻译,避免 locale 级 themeConfig shallow merge 丢失 provider
    search: {
      provider: 'local',
      options: {
        locales: {
          // 中文搜索 UI 翻译
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
              },
            },
          },
        },
      },
    },
  },
  vite: {
    plugins: [
      // group-icons 代码块图标插件(Vite 层,注入虚拟 CSS 与图标资源)
      groupIconVitePlugin(),
    ],
  },
})

// HTML head 标签
function head(): HeadConfig[] {
  return [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'author', content: 'DaxPay' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'daxpay,支付系统,开源支付,统一支付,支付宝,微信支付',
      },
    ],
  ]
}
