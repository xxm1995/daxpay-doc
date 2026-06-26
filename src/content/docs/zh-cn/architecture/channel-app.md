---
title: 通道子应用 dax-pay-channel-one
description: 通道适配微服务
sidebar:
  order: 3
---

`dax-pay-channel-one` 是通道适配子应用,用于对接单一第三方支付渠道,可作为新支付渠道接入的**模板工程**。主应用通过 HTTP 调用本子服务完成通道对接。

## 子模块

| 模块 | 说明 |
| ---- | ---- |
| `daxpay-platform` | 基础层聚合 — 通用契约 + 技术设施 |
| `daxpay-channel-impl` | 通道实现 — 下单、退款、查询、回调(按渠道拆子模块) |
| `daxpay-channel-start` | 启动入口 |

### platform 内部结构

| 子模块 | 说明 |
| ------ | ---- |
| `daxpay-platform-core` | 通用契约 — DTO、枚举、异常、结果封装、通道服务接口 |
| `daxpay-platform-common` | 通用技术设施聚合(含 `common-i18n`、`common-json`) |

## 与主项目的结构对照

```
daxpay-channel-one (根)              dax-pay-open (根)
├── daxpay-platform/  ←基础层        ├── daxpay-platform/   ←基础层
│   ├── platform-core  (通用契约)    │   ├── platform-core
│   └── platform-common(技术设施)    │   ├── platform-common
├── daxpay-channel-impl (通道实现)   │   ├── platform-capability
└── daxpay-channel-start            │   └── platform-service
                                     ├── daxpay-payment / daxpay-channel (业务)
                                     └── daxpay-start
```

## 构建与运行

```bash
# 编译
mvnd clean install "-Dmaven.test.skip=true" -T 4

# 启动
cd daxpay-channel-start
mvnd spring-boot:run -Dspring-boot.run.profiles=dev
```

默认端口 **20100**,Health:`http://127.0.0.1:20100/actuator/health`

## 接入新通道

1. 在 `daxpay-channel-impl` 下新建 `daxpay-channel-xxx` 子模块
2. 通用 DTO/接口已在 `daxpay-platform-core` 定义(`cn.daxpay.open.platform.core.*`),通道专属配置放新模块自身
3. 在新模块中提供通道支付服务类(如 `XxxPayService`),用 `@Service("xxx")` 注册 Bean 名称
4. 在 `daxpay-channel-start` 中引入新模块依赖
