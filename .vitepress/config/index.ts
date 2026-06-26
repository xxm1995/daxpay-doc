import { defineConfig } from 'vitepress'

import { en } from './en'
import { shared } from './shared'
import { zh } from './zh'

// DaxPay 文档站配置
// 中英双语:中文为根语言(路径无前缀),英文 /en/
export default defineConfig({
  ...shared,
  locales: {
    // 中文为根语言,路径无前缀,如 /getting-started/introduction
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zh,
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      ...en,
    },
  },
})
