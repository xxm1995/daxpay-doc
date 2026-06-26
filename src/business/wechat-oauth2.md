---
title: 微信 OAuth2 回调转发
description: 解决微信授权回调域名数量限制
---

# 微信 OAuth2 回调转发

## 问题背景

微信部分支付类型需要上送 `OpenId` 信息,获取 OpenId 要走微信 OAuth2 认证。但微信 `授权回调地址` 只能配置两个域名。当多个独立域名的系统共用一个微信账号时,无法为每个系统配置不同的回调地址。

## 解决方案

通过 Nginx 转发服务 + 二级目录重定向,绕开回调域名数量限制:

1. 使用 **Nginx** 起一个转发服务,绑定独立域名(如 `auth.wx.example.com`)
2. 通过二级目录区分各业务系统,如 `https://auth.wx.example.com/daxpay/`
3. 将 `auth.wx.example.com` 配置为微信的**授权回调地址**
4. 为每个二级目录添加重定向规则,请求到达转发服务后按目录路由到实际业务系统

这样所有系统共用同一个回调域名,微信只校验该域名,由 Nginx 分发到各系统。

## Nginx 配置示例

```nginx
server {
    listen 443 ssl;
    server_name auth.wx.example.com;

    # DaxPay 支付系统
    location /daxpay/ {
        rewrite ^/daxpay/(.*)$ https://pay.example.com/$1 redirect;
    }

    # 其他业务系统
    location /other/ {
        rewrite ^/other/(.*)$ https://other.example.com/$1 redirect;
    }
}
```

## 使用说明

1. 在微信开放平台 / 服务商平台将 `auth.wx.example.com` 配置为授权回调地址
2. 在 DaxPay 通道配置中将 **微信 OAuth2 认证服务地址** 设置为 `https://auth.wx.example.com/daxpay/`
3. 系统生成的授权回调 URL 会使用该地址,微信回调到 Nginx 后再重定向到真实业务 URL

::: info
该方案适用于通过 DaxPay 系统获取 OpenId 的场景。如果商户自行获取 OpenId,则无需依赖此方案,但收银台、聚合支付、码牌等网关支付方式将不可选择需要 OpenId 的支付方式。
:::
