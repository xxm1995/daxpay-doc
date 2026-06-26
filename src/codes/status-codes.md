---
title: 系统状态码
description: 系统公共状态码与支付业务状态码
---

# 系统状态码

::: info 待补充
完整状态码字典将从开源版 `i18n` 资源文件整理补充。当前列出的是已确认的编码,如有出入以程序源码为准。
:::

## 系统公共状态码

| 状态码 | 含义 | 说明 |
| ------ | ---- | ---- |
| `0` | 成功 | 操作成功完成 |

> 完整状态码字典待从 `daxpay-platform-common/common-i18n/src/main/resources/i18n/{locale}/` 提取补充。

## 支付业务异常（messageKey）

业务异常使用 `messageKey` 形式,支持中英文国际化:

- `pay.route.error.noMatch` — 渠道路由无匹配
- `pay.error.methodNotExist` — 不存在的支付方式
- `error.common.payStatusNotExist` — 支付状态不存在
- `error.common.tradeStatusNotExist` — 交易状态不存在
- `error.common.payRefundStatusNotExist` — 退款状态不存在
- `error.common.normalOrderStatusNotExist` — 订单状态不存在

> 完整 messageKey 列表将随后补充。
