import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import {
  InjectionKey,
  LayoutMode,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import SiteLayout from './components/site-layout.vue'
import Mermaid from './components/Mermaid.vue'
import Markmap from './components/Markmap.vue'

// 全局样式(品牌色覆盖 + 基础微调)
import './styles'

// group-icons 代码块图标虚拟样式
import 'virtual:group-icons.css'

// Nolebase 阅读增强样式
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export default {
  // 继承默认主题,Layout 包装层负责 medium-zoom 与阅读增强菜单
  extends: DefaultTheme,
  Layout: SiteLayout,
  enhanceApp({ app }) {
    // Tabs 标签页客户端支持
    enhanceAppWithTabs(app)
    // Mermaid 图表组件(markdown fence 拦截输出 <Mermaid>)
    app.component('Mermaid', Mermaid)
    // Markmap 思维导图组件(markdown fence 拦截输出 <Markmap>)
    app.component('Markmap', Markmap)
    // Nolebase 阅读增强:默认全宽布局,侧边栏贴向两边、内容区加宽
    app.provide(InjectionKey, {
      layoutSwitch: {
        defaultMode: LayoutMode.FullWidth,
      },
    })
  },
} satisfies Theme
