---
title: 通道接入
description: 新增第三方支付渠道步骤
---

新支付渠道通过 `dax-pay-channel-one`(或新建 `dax-pay-channel-N`)子应用接入。

## 接入步骤

1. 在 `daxpay-channel-impl` 下新建 `daxpay-channel-xxx` 子模块
2. 通用 DTO/接口已在 `daxpay-platform-core` 定义(`cn.daxpay.open.platform.core.*`);通道专属配置放新模块自身
3. 在新模块中提供通道支付服务类(如 `XxxPayService`),用 `@Service("xxx")` 注册 Bean 名称
4. 在 `daxpay-channel-start` 中引入新模块依赖

## 设计要点

- 通道 SDK 依赖隔离 — 第三方 SDK 不污染主应用与其他通道
- 独立部署、独立升级、弹性伸缩
- 通用契约(DTO/接口/异常)放入 `platform-core`,便于后续 channel-2/3/4 复用
- 与主项目保持一致的序列化行为(Long → String、OffsetDateTime → ISO UTC、时区 UTC),主子应用通信无格式偏差

详细架构见 [通道子应用](../architecture/channel-app)。
