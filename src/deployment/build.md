---
title: 编译部署
description: 源码编译与裸机部署
---

## 环境准备

确保已安装:

- JDK 25+
- mvnd(Maven Daemon)
- Node.js 22.13+/24+ 与 pnpm(前端)
- PostgreSQL 14+ 与 Redis 7+

## 后端编译

```bash
# 主应用
cd dax-pay-open
mvnd clean install "-Dmaven.test.skip=true" -T 4

# 通道子应用
cd dax-pay-channel-one
mvnd clean install "-Dmaven.test.skip=true" -T 4

# IoT 子应用
cd dax-pay-iot
mvnd clean install "-Dmaven.test.skip=true" -T 4
```

::: info Spring Boot 4.1 注意
`-DskipTests` 不再跳过测试的 AOT 处理,必须改用 `-Dmaven.test.skip=true`。PowerShell 下含 `=` 的 `-D` 参数必须加引号,否则会被拆分。
:::

## 启动

```bash
# 主应用(端口 12121)
java -jar dax-pay-open/daxpay-start/target/daxpay-start.jar --spring.profiles.active=prod

# 通道子应用(端口 20100)
java -jar dax-pay-channel-one/daxpay-channel-start/target/*.jar --spring.profiles.active=prod
```

## 前端构建

```bash
# Web 管理端
cd dax-pay-ui
pnpm install
pnpm run build:admin      # 产物 dist/

# H5 端
cd dax-pay-h5
pnpm install
pnpm run build            # 产物 dist/
```

将 `dist/` 部署至 Nginx / 静态服务器即可。
