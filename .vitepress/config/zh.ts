import type { DefaultTheme } from 'vitepress'

import { defineConfig } from 'vitepress'

// 中文 locale 配置(root 语言)
export const zh = defineConfig({
  description: 'DaxPay 开源支付系统官方文档',
  themeConfig: {
    // —— UI 文案本地化 ——
    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '多语言',
    outline: {
      label: '页面导航',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    // 在 GitHub 编辑此页
    editLink: {
      pattern:
        'https://github.com/dromara/dax-pay/edit/main/dax-pay-doc/src/:path',
      text: '在 GitHub 上编辑此页',
    },
    // 页脚
    footer: {
      message: '基于 GNU LGPL v3.0 协议开源',
      copyright: `Copyright © 2024-${new Date().getFullYear()} 济南易杯光年软件有限公司`,
    },
    // 顶部导航
    nav: nav(),
    // 侧边栏(全局统一,7 大板块分组)
    sidebar: sidebar(),
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '开始',
      link: '/getting-started/introduction',
      activeMatch: '^/getting-started/',
    },
    {
      text: '部署',
      link: '/deployment/build',
      activeMatch: '^/deployment/',
    },
    {
      text: '架构设计',
      link: '/architecture/overview',
      activeMatch: '^/architecture/',
    },
    {
      text: '开发指南',
      link: '/development/backend-conventions',
      activeMatch: '^/development/',
    },
    { text: '接口文档', link: '/api/overview', activeMatch: '^/api/' },
    {
      text: '数据库',
      link: '/database/initialization',
      activeMatch: '^/database/',
    },
    { text: '资源', link: '/resources/faq', activeMatch: '^/resources/' },
  ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '开始',
      collapsed: false,
      items: [
        { text: '项目介绍', link: '/getting-started/introduction' },
        { text: '特色功能', link: '/getting-started/features' },
        { text: '架构总览', link: '/getting-started/architecture-overview' },
        { text: '快速开始', link: '/getting-started/quick-start' },
      ],
    },
    {
      text: '部署',
      collapsed: false,
      items: [
        { text: '编译部署', link: '/deployment/build' },
        { text: '配置说明', link: '/deployment/configuration' },
        { text: 'Docker 部署', link: '/deployment/docker' },
      ],
    },
    {
      text: '架构设计',
      collapsed: false,
      items: [
        { text: '整体架构', link: '/architecture/overview' },
        { text: '主应用', link: '/architecture/main-app' },
        { text: '通道子应用', link: '/architecture/channel-app' },
        { text: 'IoT 子应用', link: '/architecture/iot-app' },
        { text: 'Web 管理端', link: '/architecture/web-ui' },
        { text: '移动 H5 端', link: '/architecture/h5' },
      ],
    },
    {
      text: '开发指南',
      collapsed: false,
      items: [
        { text: '后端编码规范', link: '/development/backend-conventions' },
        { text: '前端编码规范', link: '/development/frontend-conventions' },
        { text: '数据库规范', link: '/development/database-conventions' },
        { text: '国际化', link: '/development/i18n' },
        { text: '通道对接', link: '/development/channel-integration' },
      ],
    },
    {
      text: '接口文档',
      collapsed: false,
      items: [
        { text: '接口概览', link: '/api/overview' },
        { text: '身份认证', link: '/api/authentication' },
        { text: '支付接口', link: '/api/payment' },
        { text: '退款接口', link: '/api/refund' },
        { text: '查询接口', link: '/api/query' },
        { text: '异步回调', link: '/api/callback' },
        { text: '错误码', link: '/api/error-codes' },
      ],
    },
    {
      text: '数据库',
      collapsed: false,
      items: [
        { text: '数据库初始化', link: '/database/initialization' },
        { text: '表结构', link: '/database/schema' },
      ],
    },
    {
      text: '资源',
      collapsed: false,
      items: [
        { text: '常见问题', link: '/resources/faq' },
        { text: '更新日志', link: '/resources/changelog' },
        { text: '贡献指南', link: '/resources/contributing' },
        { text: '开源协议', link: '/resources/license' },
        { text: '组件示例', link: '/resources/examples' },
      ],
    },
  ]
}
