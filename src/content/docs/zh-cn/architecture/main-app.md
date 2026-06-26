---
title: 主应用 dax-pay-open
description: 支付核心后端
sidebar:
  order: 2
---

`dax-pay-open` 是 DaxPay 的主后端应用,承载支付核心业务、多租户管理、渠道路由、风控与系统管理。

## 技术栈

| 技术 | 版本 | 说明 |
| ---- | ---- | ---- |
| Java | 25 | 运行环境 |
| Spring Boot | 4.1.0 | 开发框架 |
| PostgreSQL | 14+ | 数据库 |
| Redis | 7+ | 分布式缓存 |

## 模块职责

| 模块 | 职责 |
| ---- | ---- |
| `daxpay-platform` | 基础层 — 通用契约 + 技术设施 + 平台能力/服务 |
| `daxpay-payment` | 支付业务 — 订单、退款、转账、对账 |
| `daxpay-channel` | 通道业务 — 渠道路由、配置、回调分发 |
| `daxpay-start` | 启动入口 |

## 构建与运行

```bash
# 编译(跳过测试)
cd dax-pay-open
mvnd clean install "-Dmaven.test.skip=true" -T 4

# 启动(dev)
cd daxpay-start
mvnd spring-boot:run -Dspring-boot.run.profiles=dev
```

默认端口 **12121**。

## Profile

| Profile | 说明 | 监控端点 |
| ------- | ---- | -------- |
| `dev`(默认) | 本地开发,业务包 DEBUG | 全开(排障友好) |
| `prod` | 生产,凭证强制环境变量注入,优雅停机 | 收紧(health/info/metrics) |
