import type { HeadConfig } from 'vitepress'

import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// 顶层共享配置(所有语言通用)
export const shared = defineConfig({
  // 内容目录:所有 Markdown 放在 src/ 下
  srcDir: 'src',
  // 构建输出目录:项目根目录下的 dist/(默认 .vitepress/dist)
  outDir: 'dist',
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
    config(md) {
      // Tabs 标签页语法插件(:::tabs)
      md.use(tabsMarkdownPlugin)
      // Mermaid 图表:拦截 ```mermaid 代码块,交给 <Mermaid> 组件客户端渲染
      // 避开 shiki,内容用 encodeURIComponent 编码后通过 props 传入组件
      const defaultFence = md.renderer.rules.fence!
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const lang = token.info.trim().toLowerCase()
        // mermaid 图表与 markmap 思维导图:拦截代码块交给对应组件客户端渲染
        if (lang === 'mermaid' || lang === 'markmap') {
          const code = encodeURIComponent(token.content.replace(/\n$/, ''))
          const tag = lang === 'mermaid' ? 'Mermaid' : 'Markmap'
          return `<${tag} graph="${code}" />`
        }
        return defaultFence(tokens, idx, options, env, self)
      }
    },
  },
  themeConfig: {
    logo: '/logo.svg',
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
    // Nolebase 阅读增强插件为 ESM,需交由 Vite 处理而非外置
    optimizeDeps: {
      exclude: [
        '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        'vitepress',
        '@nolebase/ui',
      ],
    },
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/ui',
      ],
    },
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
