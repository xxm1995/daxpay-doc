---
title: Docker 部署
description: 容器化部署指南
sidebar:
  order: 1
---

DaxPay 各后端应用均可容器化部署。本页说明通用容器化流程。

## 镜像构建

各后端子项目(`dax-pay-open`、`dax-pay-channel-one`、`dax-pay-iot`)打包为可执行 jar,基础镜像建议使用支持 Java 25 的 JRE 镜像。

```dockerfile
FROM eclipse-temurin:25-jre
WORKDIR /app
COPY target/daxpay-start.jar app.jar
EXPOSE 12121
ENTRYPOINT ["java", "-jar", "/app/app.jar", "--spring.profiles.active=prod"]
```

> 生产环境务必使用 `prod` profile,凭证通过环境变量注入。

## 环境变量(关键)

| 变量 | 说明 |
| ---- | ---- |
| `SPRING_PROFILES_ACTIVE` | 设置为 `prod` |
| 数据库连接 | 通过环境变量覆盖 `application-prod.yml` 中的占位符 |
| Redis 连接 | 同上 |
| 签名密钥 | RSA / SM2 私钥强制环境变量注入 |

## 依赖中间件

- **PostgreSQL 14+** — 主数据库
- **Redis 7+** — 分布式缓存

## 前端部署

Web 管理端与 H5 端为静态产物,构建后部署至任意静态服务器或 CDN:

```bash
# Web 管理端
cd dax-pay-ui && pnpm run build:admin    # 产物 dist/

# H5 端
cd dax-pay-h5 && pnpm run build          # 产物 dist/
```

:::caution[待补充]
具体 docker-compose 编排模板与完整生产配置将随后补充。
:::
