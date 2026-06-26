---
title: 接口规范
description: 统一 HTTP 接口约定
sidebar:
  order: 2
---

## 接口风格

- **RESTful** 风格,接口命名 **kebab-case**(如 `get-by-id` 而非 `getById`)
- 基于 HTTP 协议,主应用通过统一 HTTP 接口封装各支付通道

## 通用约定

- 请求 / 响应均支持 RSA / SM2 签名(见 [认证与签名](./authentication/))
- 权限认证:请求头携带 `Accesstoken`(Sa-Token)
- 时区:时间字段使用 ISO UTC(`OffsetDateTime` 序列化)
- Long 类型序列化为 String(防前端精度丢失)

:::caution[待补充]
统一请求/响应结构、公共字段与错误码体系将随后补充。
:::
