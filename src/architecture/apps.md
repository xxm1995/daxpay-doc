---
title: 子应用介绍
description: 各子应用职责与技术栈简介
---

# 子应用介绍

DaxPay 采用 monorepo 组织,主应用通过 HTTP 调用各独立子服务。

## 主应用 dax-pay-open

支付核心后端,承载支付业务、多租户管理、渠道路由、风控与系统管理。

| 模块 | 职责 |
|------|------|
| `daxpay-platform` | 基础层 — 通用契约 + 技术设施 + 平台能力/服务 |
| `daxpay-payment` | 支付业务 — 订单、退款、转账、对账 |
| `daxpay-channel` | 通道业务 — 渠道路由、配置、回调分发 |
| `daxpay-start` | 启动入口 |

**技术栈**: Java 25 · Spring Boot 4.1.0 · PostgreSQL 14+ · Redis 7+ · Apache Artemis · mybatis-plus · Sa-Token · springdoc

**端口**: 9999

## 通道子应用 dax-pay-channel-one

对接单一第三方支付渠道的独立部署微服务,可作为新支付渠道接入的**模板工程**。

| 模块 | 说明 |
|------|------|
| `daxpay-platform` | 基础层 — 通用契约 + 技术设施 |
| `daxpay-channel-impl` | 通道实现 — 下单、退款、查询、回调(按渠道拆子模块) |
| `daxpay-channel-start` | 启动入口 |

**端口**: 20100

### 接入新通道

1. 在 `daxpay-channel-impl` 下新建 `daxpay-channel-xxx` 子模块
2. 通用 DTO/接口已在 `daxpay-platform-core` 定义,通道专属配置放新模块自身
3. 提供通道支付服务类(如 `XxxPayService`),用 `@Service("xxx")` 注册 Bean 名称
4. 在 `daxpay-channel-start` 中引入新模块依赖

## IoT 子应用 dax-pay-iot

IoT 硬件通信微服务,对接云音箱等 IoT 设备。

| 模块 | 说明 |
|------|------|
| `daxpay-platform` | 基础层 — 通用契约 + 技术设施 |
| 硬件通信实现 | 按设备类型拆子模块 |
| `daxpay-iot-start` | 启动入口 |

**技术栈**: Java 25 · Spring Boot 4.1.0 · PostgreSQL 14+

**端口**: 12122

## Web 管理端 dax-pay-ui

管理后台前端,基于 Vue Vben Admin 5.0 二次开发,支持中英文国际化。

**技术栈**: Vue 3.5 · Vite 8 · TypeScript 5.9 · antdv-next 4.x · Vxe-Table 4 · TailwindCSS 4 · pnpm + Turbo

```
dax-pay-ui/
├── apps/daxpay-admin/      # 管理后台应用
├── packages/               # 核心包(@core / effects / utils ...)
├── internal/               # 内部工具(lint / tsconfig / vite-config)
└── scripts/                # 脚本(deploy / turbo-run / vsh)
```

**业务模块**: 支付管理(商户/服务商/代理商/渠道/产品)、IAM 权限(菜单/角色/用户)、风控管理、系统管理(字典/配置/安全/文件/日志)

**端口**(dev): 13333

**启动**: `pnpm run dev:admin`

## 移动 H5 端 dax-pay-h5

移动端网关应用,同时支持 PC 与移动端两套**完全独立**的页面:

- **设备探测**: `index.html` 在 Vue 挂载前写入 `window.__DEVICE__`(`'pc' | 'mobile'`)
- **移动适配**: `postcss-mobile-forever` 做移动端适配
- **目录分离**: 移动端代码在 `src/mobile/`,PC 端在 `src/pc/`,公共代码在 `src/shared/`

**技术栈**: Vue 3.5 · Vite 8 · Vue Router 5 · Vant 4(移动端) · UnoCSS 66 · Pinia 3

**端口**(dev): 9100

**启动**: `pnpm run dev`
