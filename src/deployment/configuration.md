---
title: 配置说明
description: Profile 与环境配置
---

# 配置说明

所有配置文件位于 `daxpay-start/src/main/resources/`,通过 Spring Profile 区分环境。

## Profile 体系

| Profile | 说明 | 监控端点 | 日志级别 | API 文档 | 超管 |
|---------|------|---------|---------|---------|------|
| `dev`(默认) | 本地开发,排障友好 | 全开 | 业务包 DEBUG | 开启 | 开启 |
| `prod` | 生产,凭证强制环境变量注入,优雅停机 | 收紧(health/info/metrics) | 业务包 INFO | 关闭 | 关闭 |

切换方式:

```bash
# 命令行
mvnd spring-boot:run -Dspring-boot.run.profiles=prod

# 环境变量
SPRING_PROFILES_ACTIVE=prod

# 环境变量(Spring Boot 风格)
export SPRING_PROFILES_ACTIVE=prod
```

## 各应用端口

| 应用 | 端口 | Health |
|------|------|--------|
| 主应用 dax-pay-open | **9999** | `http://127.0.0.1:9999/actuator/health` |
| 通道子应用 dax-pay-channel-one | 20100 | `http://127.0.0.1:20100/actuator/health` |
| IoT 子应用 dax-pay-iot | 12122 | `http://127.0.0.1:12122/actuator/health` |
| Web 管理端(dev) | 13333 | — |
| H5 端(dev) | 9100 | — |

## 数据库配置

### PostgreSQL + HikariCP

开发环境 `application-dev.yml`:

```yaml
spring:
  datasource:
    driver-class-name: org.postgresql.Driver
    url: jdbc:postgresql://localhost:5432/daxpay-dev?autoReconnect=true&reWriteBatchedInserts=true
    username: your_username
    password: your_password
    hikari:
      minimumIdle: 5          # 最小连接数
      maximumPoolSize: 50     # 最大连接数
      leak-detection-threshold: 5000   # 连接泄漏检测(毫秒)
      connection-timeout: 30000       # 获取连接超时(毫秒)
      idle-timeout: 600000            # 空闲连接超时(毫秒)
      max-lifetime: 1800000           # 连接最大存活时间(毫秒)
```

## Redis 配置

```yaml
spring:
  data:
    redis:
      host: localhost
      port: 6379
      database: 0
      password: your_password
      lettuce:
        pool:
          max-wait: 1000ms
```

## Artemis 消息队列

Artemis 用于支付延时通知等 JMS 消息场景,Docker 部署参考 [Docker 部署](./docker#artemis-容器):

```yaml
spring:
  artemis:
    mode: native                              # 连接外部独立 broker(非嵌入式)
    broker-url: tcp://localhost:61616         # broker 连接地址
    user: admin
    password: admin
    pool:
      enabled: true
      max-connections: 10                     # 生产环境建议 20
      idle-timeout: 30s
  jms:
    cache:
      enabled: true
      session-cache-size: 10                  # 生产环境建议 20
    pub-sub-domain: false                     # 默认点对点 queue
    listener:
      auto-startup: true
```

## 通道子应用路由

主应用通过 HTTP 调用通道子应用,路由配置:

```yaml
daxpay:
  channel:
    # 子应用1: 支付宝 + 微信支付(已启用)
    one:
      base-url: http://127.0.0.1:20100
    # 子应用2: 银联 + 拉卡拉(未来扩展,取消注释启用)
    # two:
    #   base-url: http://127.0.0.1:20200
    # 子应用3: 抖音 + 其他通道(未来扩展,取消注释启用)
    # three:
    #   base-url: http://127.0.0.1:20300
```

子应用编号(`one`/`two`/`three`)固定不可改名,与路由策略中的通道分配一一对应。

## DaxPay 平台配置

命名空间 `daxpay.platform.*`:

### 超级管理员

```yaml
daxpay:
  platform:
    starter:
      auth:
        enable-admin: true          # 是否开启超级管理员(生产必须关闭)
        admin-in-list: true         # 用户列表中是否显示超管
```

### RSA 证书

用于 API 接口请求/响应签名:

```yaml
daxpay:
  platform:
    config:
      key-config:
        private-key: '-----BEGIN PRIVATE KEY-----
          ...your private key...
          -----END PRIVATE KEY-----'
        public-key: '-----BEGIN PUBLIC KEY-----
          ...your public key...
          -----END PUBLIC KEY-----'
```

生产环境通过环境变量注入:

```bash
RSA_PRIVATE_KEY='-----BEGIN PRIVATE KEY-----...'
RSA_PUBLIC_KEY='-----BEGIN PUBLIC KEY-----...'
```

### 数据加密

业务敏感字段 AES/GCM 加密存储:

```yaml
daxpay:
  platform:
    config:
      encrypt:
        enable: true                # 开启后中途不可更换密钥
        keys:
          - key: your-32-byte-aes-key
            version: 1
```

### 异常信息显示

```yaml
daxpay:
  platform:
    common:
      exception:
        show-full-message: true     # dev 开启 / prod 关闭
```

## API 文档控制

```yaml
# 系统默认使用 springdoc,dev 开启 / prod 关闭
springdoc:
  api-docs:
    enabled: true                   # dev: true / prod: false
  swagger-ui:
    enabled: true                   # dev: true / prod: false
  default-flat-param-object: true   # 展开 GET 参数对象类型
```

dev 环境文档地址: `http://127.0.0.1:9999/swagger-ui/index.html`

## 监控端点

```yaml
# dev: 全景端点(排障友好)
management:
  endpoints:
    web:
      exposure:
        include: >
          health,info,httpexchanges,
          metrics,loggers,threaddump,
          beans,mappings,scheduledtasks,
          caches,conditions,startup
  endpoint:
    health:
      show-details: always
```

```yaml
# prod: 严格收紧
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: never
      probes:
        enabled: true               # k8s liveness/readiness
      group:
        liveness:
          include: ping              # 仅进程存活,不级联 DB
        readiness:
          include: db,redis          # DB/Redis 就绪后才接流量
```

## 基于角色 / 权限的校验规则

安全认证基于 **Sa-Token**:

```yaml
sa-token:
  token-name: Accesstoken           # token 名称(也是 cookie 名)
  timeout: 259200                   # token 有效期(72小时)
  active-timeout: -1                # 最低活跃频率(-1 永久)
  is-concurrent: true               # 允许同账号多地登录
  is-share: true                    # 多端共用一个 token
```

接口请求/响应支持 RSA 和 SM2 签名,公钥通过 `key-config` 配置。

## 时区与时间

- 数据库时间字段统一使用 `timestamptz(6)`(`timestamp with time zone`)
- 实体类使用 `java.time.OffsetDateTime`
- 序列化全局时区 UTC,Jackson `OffsetDateTime` → ISO UTC
- **禁止**使用 `timestamp`/`timestamp without time zone` 及 `java.util.Date`/`LocalDateTime`

## 生产环境变量清单

生产环境所有凭证通过环境变量注入,以下为 `application-prod.yml` 中定义的全部占位符:

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `SERVER_PORT` | 服务端口 | `9999` |
| `DB_HOST` | 数据库主机 | `postgresql` |
| `DB_PORT` | 数据库端口 | `5432` |
| `DB_NAME` | 数据库名 | `daxpay-prod` |
| `DB_USERNAME` | 数据库账号 | (必填) |
| `DB_PASSWORD` | 数据库密码 | (必填) |
| `REDIS_HOST` | Redis 主机 | `redis` |
| `REDIS_PORT` | Redis 端口 | `6379` |
| `REDIS_DATABASE` | Redis 库编号 | `0` |
| `REDIS_PASSWORD` | Redis 密码 | (必填) |
| `ARTEMIS_BROKER_URL` | Artemis broker 地址 | `tcp://artemis:61616` |
| `ARTEMIS_USER` | Artemis 账号 | (必填) |
| `ARTEMIS_PASSWORD` | Artemis 密码 | (必填) |
| `RSA_PRIVATE_KEY` | RSA 私钥(PEM) | (必填) |
| `RSA_PUBLIC_KEY` | RSA 公钥(PEM) | (必填) |
| `ENCRYPT_KEY` | AES 加密密钥(32 字节) | (必填) |
| `IP2REGION_FILE_PATH` | IP 地址库路径 | `/data/ip/ip2region_v4.xdb` |
| `CHANNEL_ONE_BASE_URL` | 通道子应用 1 地址 | `http://channel-one:20100` |
