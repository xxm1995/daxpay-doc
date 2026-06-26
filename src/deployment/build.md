---
title: 编译部署
description: 源码编译与裸机部署
---

# 编译部署

## 环境准备

确保已安装:

| 环境 | 版本要求 | 说明 |
|------|---------|------|
| JDK | 25+ | Java 运行环境 |
| mvnd | 最新 | Maven Daemon,加速编译 |
| Node.js | ^22.13.0 \|\| ^24.0.0 | 前端构建环境 |
| pnpm | >=10.0.0 | 包管理器(强制,禁用 npm/yarn) |
| PostgreSQL | 14+ | 主数据库(需提前准备) |
| Redis | 7+ | 分布式缓存 |
| Apache Artemis | 最新 | JMS 消息队列(支付延时通知) |

## 数据库准备

数据库需提前创建(UTF8 编码,`public` 模式),各应用使用的库:

| 应用 | 数据库 |
|------|--------|
| 主应用 dax-pay-open | `daxpay-dev`(dev) / `daxpay-prod`(prod) |
| 通道子应用 dax-pay-channel-one | 与主应用同库 `daxpay-dev`(dev) |

## 后端编译

### 主应用

```bash
cd dax-pay-open
mvnd clean install "-Dmaven.test.skip=true" -T 4
```

::: info Spring Boot 4.1 注意
`-DskipTests` 不再跳过测试的 AOT 处理,必须改用 `-Dmaven.test.skip=true`。PowerShell 下含 `=` 的 `-D` 参数必须加引号,否则会被拆分。
:::

产物: `daxpay-start/target/daxpay-start-*.jar`

### 通道子应用

```bash
cd dax-pay-channel-one
mvnd clean install "-Dmaven.test.skip=true" -T 4
```

产物: `daxpay-channel-start/target/daxpay-channel-start-*.jar`

### IoT 子应用

```bash
cd dax-pay-iot
mvnd clean install "-Dmaven.test.skip=true" -T 4
```

产物: `daxpay-iot-start/target/daxpay-iot-start-*.jar`

## 后端启动

### 启动命令

```bash
# 主应用(端口 9999)
cd dax-pay-open/daxpay-start
mvnd spring-boot:run -Dspring-boot.run.profiles=dev

# 通道子应用(端口 20100)
cd dax-pay-channel-one/daxpay-channel-start
mvnd spring-boot:run -Dspring-boot.run.profiles=dev

# IoT 子应用(端口 12122)
cd dax-pay-iot/daxpay-iot-start
mvnd spring-boot:run -Dspring-boot.run.profiles=dev
```

### 生产环境启动

```bash
java -jar daxpay-start/target/daxpay-start-*.jar --spring.profiles.active=prod
```

通过环境变量注入凭证(详见 [配置说明](./configuration#生产环境变量清单))。

### 健康检查

| 应用 | Health URL |
|------|-----------|
| 主应用 | `http://127.0.0.1:9999/actuator/health` |
| 通道子应用 | `http://127.0.0.1:20100/actuator/health` |
| IoT 子应用 | `http://127.0.0.1:12122/actuator/health` |

## 前端构建与启动

### Web 管理端

```bash
cd dax-pay-ui
pnpm install
# 开发
pnpm run dev:admin       # 运营端, 端口 13333
# 生产构建
pnpm run build           # 构建全部应用, 产物 apps/daxpay-admin/dist/
```

| 环境 | 版本 |
|------|------|
| Node.js | ^22.13.0 \|\| ^24.0.0 |
| pnpm | >=10.0.0 |

### H5 端

```bash
cd dax-pay-h5
pnpm install
# 开发
pnpm run dev             # 端口 9100
# 生产构建
pnpm run build           # 产物 dist/
```

| 环境 | 版本 |
|------|------|
| Node.js | ^22.13.0 \|\| ^24.0.0 |
| pnpm | >=10.0.0 |

### 静态部署

构建后将 `dist/` 部署至 Nginx 或其他静态服务器即可:

```nginx
server {
    listen 80;
    server_name admin.daxpay.example.com;

    # Web 管理端
    root /var/www/daxpay-admin;

    # API 反向代理到后端
    location /server/ {
        proxy_pass http://127.0.0.1:9999/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 验证

启动成功后:
- 主应用控制台输出 `应用 'dax-pay-open' 运行成功!`
- API 文档(dev): `http://127.0.0.1:9999/swagger-ui/index.html`
- 管理端(dev): `http://127.0.0.1:13333`
- H5 端(dev): `http://127.0.0.1:9100`
