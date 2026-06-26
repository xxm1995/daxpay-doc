import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme'

import SiteLayout from './components/site-layout.vue'

// 全局样式(品牌色覆盖 + 基础微调)
import './styles'

// group-icons 代码块图标虚拟样式
import 'virtual:group-icons.css'

export default {
  // 继承默认主题,仅用自定义 Layout 包装(medium-zoom 图片放大)
  extends: DefaultTheme,
  Layout: SiteLayout,
} satisfies Theme
