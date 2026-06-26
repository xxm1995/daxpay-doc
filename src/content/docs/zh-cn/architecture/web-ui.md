---
title: Web 管理端 dax-pay-ui
description: 运营端 / 商户端后台
sidebar:
  order: 5
---

`dax-pay-ui` 是 DaxPay 的管理后台前端,基于 Vue Vben Admin 5.0 二次开发,提供商户管理、服务商管理、代理商管理、支付通道配置、风控管理、系统管理等功能,支持中英文国际化。

## 技术栈

| 技术 | 版本 | 说明 |
| ---- | ---- | ---- |
| Vue | 3.5 | 前端框架 |
| Vite | 8.x | 构建工具 |
| TypeScript | 5.9 | 开发语言 |
| antdv-next | 4.x | UI 组件库(Ant Design Vue Next) |
| Vxe-Table | 4 | 企业级表格组件 |
| Vben Admin | 5.7 | 中后台模板 |
| TailwindCSS | 4.x | 原子化 CSS |
| pnpm + Turbo | 10.x / 2.x | Monorepo 构建 |

## 项目结构(monorepo)

```
dax-pay-ui/
├── apps/daxpay-admin/      # 管理后台应用
├── packages/               # 核心包(@core / effects / utils ...)
├── internal/               # 内部工具(lint / tsconfig / vite-config)
└── scripts/                # 脚本(deploy / turbo-run / vsh)
```

## 业务模块

- **支付管理**:商户、服务商(ISV)、代理商、渠道配置、支付产品
- **IAM 权限**:菜单、角色、用户
- **风控管理**:数据源、输入参数、风控模型
- **系统管理**:字典、平台配置、安全配置、文件、日志、在线用户

## 启动

```bash
cd dax-pay-ui
pnpm install
pnpm run dev:admin      # 运营端,端口 13333
pnpm run build:admin    # 构建
```

| 环境 | 版本 |
| ---- | ---- |
| Node.js | 22.13+ / 24+ |
| pnpm | 10.x |
