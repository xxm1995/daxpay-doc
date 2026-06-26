---
title: DaxPay
description: 开源、安全、可扩展的统一支付系统
template: splash
hero:
  tagline: 开源、安全、可扩展的统一支付系统,让支付更简单。
  actions:
    - text: 快速开始
      link: /zh-cn/getting-started/quick-start/
      icon: right-arrow
      variant: primary
    - text: GitHub
      link: https://github.com/dromara/dax-pay
      icon: external
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## 核心能力

<CardGrid>
  <Card title="支付交易" icon="credit-card">
    支持支付、退款、转账等支付核心能力,覆盖主流支付场景。
  </Card>
  <Card title="多商户模式" icon="settings">
    提供商户端、运营端,支持多商户和服务商模式。
  </Card>
  <Card title="统一接口" icon="rocket">
    封装各通道为统一的 HTTP 接口,简化对接多种支付方式的复杂度。
  </Card>
  <Card title="安全签名" icon="shield">
    接口请求与响应支持 RSA / SM2 公私钥签名机制,保证交易安全可靠。
  </Card>
</CardGrid>

## 技术栈

<CardGrid>
  <Card title="后端" icon="seti:java">
    Java 25 · Spring Boot 4.1 · PostgreSQL 14+ · Redis 7+
  </Card>
  <Card title="Web 管理端" icon="seti:vue">
    Vue 3.5 · Vite 8 · Ant Design Vue Next · Vben Admin 5
  </Card>
  <Card title="移动 H5 端" icon="seti:vue">
    Vue 3.5 · Vite 8 · Vant 4 · UnoCSS
  </Card>
  <Card title="文档站" icon="seti:astro">
    Astro · Starlight · 中英双语
  </Card>
</CardGrid>
