---
layout: home

hero:
  name: DaxPay
  text: 开源支付系统
  tagline: 开源、安全、可扩展的统一支付系统,让支付更简单。
  image:
    src: /dax-pay.svg
    alt: DaxPay
  actions:
    - theme: brand
      text: 快速开始
      link: /getting-started/introduction
    - theme: alt
      text: 商业版
      link: https://plus.daxpay.cn

features:
  - icon: 💳
    title: 支付交易
    details: 支持支付、退款、转账等支付核心能力,覆盖主流支付场景。
    link: /api/payment
    linkText: 查看接口
  - icon: ⚙️
    title: 多商户模式
    details: 提供商户端、运营端,支持多商户和服务商模式。
    link: /getting-started/features
    linkText: 特色功能
  - icon: 🚀
    title: 统一接口
    details: 封装各通道为统一的 HTTP 接口,简化对接多种支付方式的复杂度。
    link: /api/overview
    linkText: 接口概览
  - icon: 🛡️
    title: 安全签名
    details: 接口请求与响应支持 RSA / SM2 公私钥签名机制,保证交易安全可靠。
    link: /api/authentication
    linkText: 身份认证
  - icon: ☕
    title: 后端
    details: Java 25 · Spring Boot 4.1 · PostgreSQL 14+ · Redis 7+
  - icon: 🖥️
    title: Web 管理端
    details: Vue 3.5 · Vite 8 · Ant Design Vue Next · Vben Admin 5
  - icon: 📱
    title: 移动 H5 端
    details: Vue 3.5 · Vite 8 · Vant 4 · UnoCSS
  - icon: 📲
    title: 小程序端
    details: UniApp 跨端,支持微信/支付宝/抖音小程序及 H5 部署。
---
