---
title: 配置说明
description: Profile 与环境配置
sidebar:
  order: 3
---

## Profile

各后端应用通过 Spring Profile 区分环境,配置文件位于 `src/main/resources/`:

| Profile | 说明 | 监控端点 |
| ------- | ---- | -------- |
| `dev`(默认) | 本地开发,业务包 DEBUG,凭证可用环境变量覆盖 | 全开(排障友好) |
| `prod` | 生产,凭证强制环境变量注入,优雅停机 | 收紧(health/info/metrics) |

切换方式:

```bash
# 命令行
mvnd spring-boot:run -Dspring-boot.run.profiles=prod

# 环境变量
SPRING_PROFILES_ACTIVE=prod
```

## 各应用端口

| 应用 | 端口 | 健康检查 |
| ---- | ---- | -------- |
| 主应用 dax-pay-open | 12121 | `http://127.0.0.1:12121/actuator/health` |
| 通道子应用 dax-pay-channel-one | 20100 | `http://127.0.0.1:20100/actuator/health` |
| Web 管理端 | 13333(dev) | — |
| H5 端 | 9100(dev) | — |

## 时区与时间

- 时间字段统一使用 `timestamptz(6)`(`timestamp with time zone`)
- 实体类使用 `java.time.OffsetDateTime`
- 序列化全局时区 UTC,OffsetDateTime → ISO UTC
- **禁止**使用 `timestamp`/`timestamp without time zone` 及 `java.util.Date`/`LocalDateTime`

## 权限认证

- Sa-Token 权限认证,token name:`Accesstoken`
- 接口请求与响应支持 RSA / SM2 签名
