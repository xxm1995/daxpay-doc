---
title: IoT 子应用 dax-pay-iot
description: 硬件通信微服务
---

`dax-pay-iot` 是 IoT 硬件通信子应用,对接云音箱等 IoT 设备,主应用通过 HTTP 调用。

## 子模块

| 模块 | 说明 |
| ---- | ---- |
| `daxpay-platform` | 基础层聚合 — 通用契约 + 技术设施 |
| 硬件通信实现 | 按设备类型拆子模块 |
| `daxpay-iot-start` | 启动入口 |

## 技术栈

- Java 25 · Spring Boot 4.1.0
- PostgreSQL 14+ · Lombok / Hutool
- OpenTelemetry(仅日志链路关联)

## 构建与运行

```bash
mvnd clean install "-Dmaven.test.skip=true" -T 4
cd daxpay-iot-start
mvnd spring-boot:run -Dspring-boot.run.profiles=dev
```

## 序列化与国际化

与主项目、通道子应用保持一致:

- **Jackson**:Long → String(防前端精度丢失)、OffsetDateTime → ISO UTC、全局时区 UTC
- **i18n**:自定义 `JsonMessageSource` 扫描 `classpath*:i18n/{locale}/**/*.json`,locale 由请求头 `Accept-Language` 决定(zh-CN / en-US)
