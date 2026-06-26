---
title: 架构设计总览
description: 主应用分层与子服务协同
sidebar:
  order: 1
---

DaxPay 主应用采用**基础层聚合 + 业务模块 + 启动入口**的分层范式,各子应用保持相同模式以便维护时对照同步。

## 主应用分层(dax-pay-open)

```
dax-pay-open/
├── daxpay-platform/          # 基础层
│   ├── platform-core         # 通用契约(DTO / 枚举 / 异常 / 结果封装)
│   ├── platform-common       # 通用技术设施(i18n / json 等)
│   ├── platform-capability   # 平台能力
│   └── platform-service      # 平台服务
├── daxpay-payment/           # 支付业务
├── daxpay-channel/           # 通道业务
└── daxpay-start/             # 启动入口(端口 12121)
```

## 子服务拆分原则

主应用通过 **HTTP 调用**各独立子服务,拆分目的:

- **通道 SDK 依赖隔离** — 第三方 SDK 不污染主应用
- **独立升级** — 子服务可独立发版
- **弹性伸缩** — 按负载独立扩缩容

## 微服务清单

| 子服务 | 对外能力 | 通信方式 |
| ------ | -------- | -------- |
| `dax-pay-channel-one` | 单一支付渠道对接 | HTTP |
| `dax-pay-iot` | IoT 硬件通信(云音箱) | HTTP |

子应用是主项目结构的**轻量子集**:platform 仅保留 core + common(i18n/json),不含 capability/service。通用契约(DTO/接口/异常)放入 `platform-core`,便于后续 channel-2/3/4 复用。各子应用独立 git、独立版本,无 maven 依赖,仅结构对标。
