---
title: 快速开始
description: 环境准备与本地启动
sidebar:
  order: 4
---

import { Steps, LinkCard } from '@astrojs/starlight/components';

## 环境要求

| 环境 | 版本 | 说明 |
| ---- | ---- | ---- |
| JDK | 25+ | Java 运行环境 |
| Maven | mvnd | 项目使用 mvnd 而非 mvn |
| Node.js | 22.13+ / 24+ | 前端构建 |
| pnpm | >=9.0.2 | 前端包管理器(禁用 npm/yarn) |
| PostgreSQL | 14+ | 数据库 |
| Redis | 7+ | 分布式缓存 |

<LinkCard title="数据库初始化" description="首次运行需先执行建表与基础数据脚本" href="../database/initialization/" />

## 后端启动

<Steps>
1. **编译主应用**

   ```bash
   cd dax-pay-open
   mvnd clean install "-Dmaven.test.skip=true" -T 4
   ```

   :::note[Spring Boot 4.1 注意]
   `-DskipTests` 不再跳过测试的 AOT 处理,需改用 `-Dmaven.test.skip=true`;PowerShell 下含 `=` 的 `-D` 参数必须加引号。
   :::

2. **启动主应用(dev profile)**

   ```bash
   cd dax-pay-open/daxpay-start
   mvnd spring-boot:run -Dspring-boot.run.profiles=dev
   ```

   默认端口 **12121**。
</Steps>

## 前端启动

<Steps>
1. **Web 管理端(运营端)**

   ```bash
   cd dax-pay-ui
   pnpm install
   pnpm run dev:admin      # 端口 13333
   ```

2. **移动 H5 端**

   ```bash
   cd dax-pay-h5
   pnpm install
   pnpm run dev
   ```

3. **默认账号**

   启动后默认账号密码:`bootx / 123123`
</Steps>

## 下一步

- [架构设计](../architecture/overview/) — 深入了解各子项目
- [部署指南](../deployment/docker/) — 生产环境部署
- [接口文档](../api/authentication/) — 对接支付接口
