import type { DefaultTheme } from 'vitepress'

import { defineConfig } from 'vitepress'

// English locale configuration
export const en = defineConfig({
  description: 'DaxPay open-source payment system official documentation',
  title: 'DaxPay Open-Source',
  themeConfig: {
    siteTitle: 'DaxPay Open-Source',
    darkModeSwitchLabel: 'Theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    lightModeSwitchTitle: 'Switch to light theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    langMenuLabel: 'Change language',
    outline: {
      label: 'On this page',
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    // 404 页面文案
    notFound: {
      title: 'Page Not Found',
      quote: 'The page you are looking for does not exist or has been removed.',
      linkText: 'Back to Home',
      linkLabel: 'Back to home',
    },
    editLink: {
      pattern:
        'https://github.com/dromara/dax-pay/edit/main/dax-pay-doc/src/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'Released under the GNU LGPL v3.0',
      copyright: `Copyright © 2024-${new Date().getFullYear()} 济南易杯光年软件有限公司`,
    },
    nav: nav(),
    sidebar: sidebar(),
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Getting Started',
      link: '/en/getting-started/introduction',
      activeMatch: '^/en/getting-started/',
    },
    {
      text: 'Operation Guide',
      link: '/en/operation-guide/introduction',
      activeMatch: '^/en/operation-guide/',
    },
    { text: 'API', link: '/en/api/overview', activeMatch: '^/en/api/' },
    {
      text: 'Extensions',
      link: '/en/extension/introduction',
      activeMatch: '^/en/extension/',
    },
    {
      // Community: link to in-site License page (QQ/WeChat/Official Account)
      text: 'Community',
      link: '/en/resources/license',
      activeMatch: '^/en/resources/license',
    },
    {
      // Live Demo: link to Contributing page (separate from Community to avoid double highlight)
      text: 'Live Demo',
      link: '/en/resources/contributing',
    },
    {
      // Source Code: dropdown, GitHub & Gitee mirrors
      text: 'Source Code',
      items: [
        { text: 'GitHub', link: 'https://github.com/dromara/dax-pay' },
        { text: 'Gitee', link: 'https://gitee.com/dromara/dax-pay' },
      ],
    },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  // Getting Started tree: Getting Started + Deployment + Architecture + Development + Database
  const gettingStarted: DefaultTheme.SidebarItem[] = [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/en/getting-started/introduction' },
        { text: 'Features', link: '/en/getting-started/features' },
        {
          text: 'Architecture Overview',
          link: '/en/getting-started/architecture-overview',
        },
        { text: 'Quick Start', link: '/en/getting-started/quick-start' },
      ],
    },
    {
      text: 'Deployment',
      items: [
        { text: 'Build', link: '/en/deployment/build' },
        { text: 'Configuration', link: '/en/deployment/configuration' },
        { text: 'Docker', link: '/en/deployment/docker' },
      ],
    },
    {
      text: 'Architecture',
      items: [
        { text: 'Overview', link: '/en/architecture/overview' },
        { text: 'Main App', link: '/en/architecture/main-app' },
        { text: 'Channel App', link: '/en/architecture/channel-app' },
        { text: 'IoT App', link: '/en/architecture/iot-app' },
        { text: 'Web UI', link: '/en/architecture/web-ui' },
        { text: 'Mobile H5', link: '/en/architecture/h5' },
      ],
    },
    {
      text: 'Development',
      items: [
        {
          text: 'Backend Conventions',
          link: '/en/development/backend-conventions',
        },
        {
          text: 'Frontend Conventions',
          link: '/en/development/frontend-conventions',
        },
        {
          text: 'Database Conventions',
          link: '/en/development/database-conventions',
        },
        { text: 'Internationalization', link: '/en/development/i18n' },
        {
          text: 'Channel Integration',
          link: '/en/development/channel-integration',
        },
      ],
    },
    {
      text: 'Database',
      items: [
        { text: 'Initialization', link: '/en/database/initialization' },
        { text: 'Schema', link: '/en/database/schema' },
      ],
    },
  ]

  // Operation Guide tree
  const operationGuide: DefaultTheme.SidebarItem[] = [
    {
      text: 'Operation Guide',
      items: [
        { text: 'Getting Started', link: '/en/operation-guide/introduction' },
      ],
    },
  ]

  // API tree
  const api: DefaultTheme.SidebarItem[] = [
    {
      text: 'API',
      items: [
        { text: 'Overview', link: '/en/api/overview' },
        { text: 'Authentication', link: '/en/api/authentication' },
        { text: 'Payment', link: '/en/api/payment' },
        { text: 'Refund', link: '/en/api/refund' },
        { text: 'Query', link: '/en/api/query' },
        { text: 'Callback', link: '/en/api/callback' },
        { text: 'Error Codes', link: '/en/api/error-codes' },
      ],
    },
  ]

  // Extensions tree: Extensions + Resources (includes Community)
  const extension: DefaultTheme.SidebarItem[] = [
    {
      text: 'Extensions',
      items: [
        { text: 'Getting Started', link: '/en/extension/introduction' },
      ],
    },
    {
      text: 'Resources',
      items: [
        { text: 'FAQ', link: '/en/resources/faq' },
        { text: 'Changelog', link: '/en/resources/changelog' },
        { text: 'Contributing', link: '/en/resources/contributing' },
        { text: 'License', link: '/en/resources/license' },
        { text: 'Examples', link: '/en/resources/examples' },
      ],
    },
  ]

  return {
    // Getting Started tree covers 5 path prefixes
    '/en/getting-started/': gettingStarted,
    '/en/deployment/': gettingStarted,
    '/en/architecture/': gettingStarted,
    '/en/development/': gettingStarted,
    '/en/database/': gettingStarted,
    // Operation Guide tree
    '/en/operation-guide/': operationGuide,
    // API tree
    '/en/api/': api,
    // Extensions tree covers 2 path prefixes
    '/en/extension/': extension,
    '/en/resources/': extension,
  }
}
