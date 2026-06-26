import type { DefaultTheme } from 'vitepress'

import { defineConfig } from 'vitepress'

// English locale configuration
export const en = defineConfig({
  description: 'DaxPay open-source payment system official documentation',
  themeConfig: {
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
      text: 'Deployment',
      link: '/en/deployment/build',
      activeMatch: '^/en/deployment/',
    },
    {
      text: 'Architecture',
      link: '/en/architecture/overview',
      activeMatch: '^/en/architecture/',
    },
    {
      text: 'Development',
      link: '/en/development/backend-conventions',
      activeMatch: '^/en/development/',
    },
    { text: 'API', link: '/en/api/overview', activeMatch: '^/en/api/' },
    {
      text: 'Database',
      link: '/en/database/initialization',
      activeMatch: '^/en/database/',
    },
    {
      text: 'Resources',
      link: '/en/resources/faq',
      activeMatch: '^/en/resources/',
    },
  ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
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
      collapsed: false,
      items: [
        { text: 'Build', link: '/en/deployment/build' },
        { text: 'Configuration', link: '/en/deployment/configuration' },
        { text: 'Docker', link: '/en/deployment/docker' },
      ],
    },
    {
      text: 'Architecture',
      collapsed: false,
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
      collapsed: false,
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
      text: 'API',
      collapsed: false,
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
    {
      text: 'Database',
      collapsed: false,
      items: [
        { text: 'Initialization', link: '/en/database/initialization' },
        { text: 'Schema', link: '/en/database/schema' },
      ],
    },
    {
      text: 'Resources',
      collapsed: false,
      items: [
        { text: 'FAQ', link: '/en/resources/faq' },
        { text: 'Changelog', link: '/en/resources/changelog' },
        { text: 'Contributing', link: '/en/resources/contributing' },
        { text: 'License', link: '/en/resources/license' },
      ],
    },
  ]
}
