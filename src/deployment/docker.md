---
title: Docker 部署
description: 容器化部署指南
---

# Docker 部署

DaxPay 各后端应用均可容器化部署。

## 后端镜像构建

基础镜像建议使用 `eclipse-temurin:25-jre`:

```dockerfile
FROM eclipse-temurin:25-jre

# 时区设置
ENV TZ=Asia/Shanghai
RUN ln -sf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app

# 复制 jar 包
COPY daxpay-start/target/daxpay-start-*.jar app.jar

# 暴露端口
EXPOSE 9999

# JVM 选项
ENV JAVA_OPTS="-Djava.security.egd=file:/dev/./urandom -Dfile.encoding=UTF-8"

ENTRYPOINT exec java $JAVA_OPTS -jar app.jar --spring.profiles.active=prod
```

> **注意**: 仓库现有 `Dockerfile` 使用 `eclipse-temurin:21.0.4_7-jdk-alpine`(Java 21),项目实际要求 **Java 25**,部署时需替换为基础镜像。

### 通道子应用

```dockerfile
FROM eclipse-temurin:25-jre
ENV TZ=Asia/Shanghai
WORKDIR /app
COPY daxpay-channel-start/target/daxpay-channel-start-*.jar app.jar
EXPOSE 20100
ENTRYPOINT exec java $JAVA_OPTS -jar app.jar --spring.profiles.active=prod
```

## 前端镜像构建

### Web 管理端

```dockerfile
FROM node:22-slim AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_OPTIONS=--max-old-space-size=8192

RUN npm i -g corepack
WORKDIR /app

COPY . /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:stable-alpine AS production

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/apps/daxpay-admin/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx 配置示例

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 8080;
        server_name _;

        root /usr/share/nginx/html;
        index index.html;

        # SPA 路由 history 模式
        location / {
            try_files $uri $uri/ /index.html;
        }

        # API 反向代理到后端
        location /server/ {
            proxy_pass http://daxpay-open:9999/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
}
```

## 环境变量

生产环境通过环境变量注入所有凭证,参考 [配置说明 - 生产环境变量清单](./configuration#生产环境变量清单)。

可通过 `env_file` 注入:

```ini
# .env
SPRING_PROFILES_ACTIVE=prod
DB_HOST=postgresql
DB_PORT=5432
DB_NAME=daxpay-prod
DB_USERNAME=admin
DB_PASSWORD=secure_password
REDIS_HOST=redis
REDIS_PASSWORD=redis_password
ARTEMIS_BROKER_URL=tcp://artemis:61616
ARTEMIS_USER=admin
ARTEMIS_PASSWORD=artemis_password
RSA_PRIVATE_KEY='-----BEGIN PRIVATE KEY-----...'
RSA_PUBLIC_KEY='-----BEGIN PUBLIC KEY-----...'
ENCRYPT_KEY=your-32-byte-aes-key-here!
CHANNEL_ONE_BASE_URL=http://channel-one:20100
```

## Artemis 容器

支付延时通知依赖 Apache Artemis 消息队列:

```yaml
# docker-compose.yml (partial)
services:
  artemis:
    image: apache/artemis:latest-alpine
    container_name: artemis
    restart: unless-stopped
    ports:
      - "61616:61616"   # Core/JMS 端口
      - "8161:8161"     # Web 管理控制台(仅内网)
    environment:
      ARTEMIS_USER: ${ARTEMIS_USER}
      ARTEMIS_PASSWORD: ${ARTEMIS_PASSWORD}
      ANONYMOUS_LOGIN: "false"
      TZ: Asia/Shanghai
      JAVA_OPTS_APPEND: "-Xms128m -Xmx512m -XX:MaxRAMPercentage=75"
    volumes:
      - artemis-data:/var/lib/artemis-instance
    healthcheck:
      test: ["CMD-SHELL", "wget --spider -q http://localhost:8161/ || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 40s

volumes:
  artemis-data:
```

## docker-compose 编排

完整的本地 Docker Compose 编排模板:

```yaml
services:
  # PostgreSQL
  postgresql:
    image: postgres:16-alpine
    container_name: postgresql
    restart: unless-stopped
    environment:
      POSTGRES_DB: daxpay-prod
      POSTGRES_USER: ${DB_USERNAME}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      TZ: Asia/Shanghai
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${DB_USERNAME} -d daxpay-prod"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Redis
  redis:
    image: redis:7-alpine
    container_name: redis
    restart: unless-stopped
    command: redis-server --requirepass ${REDIS_PASSWORD}
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Artemis
  artemis:
    image: apache/artemis:latest-alpine
    container_name: artemis
    restart: unless-stopped
    ports:
      - "61616:61616"
      - "8161:8161"
    environment:
      ARTEMIS_USER: ${ARTEMIS_USER}
      ARTEMIS_PASSWORD: ${ARTEMIS_PASSWORD}
      ANONYMOUS_LOGIN: "false"
      TZ: Asia/Shanghai
      JAVA_OPTS_APPEND: "-Xms128m -Xmx512m"
    volumes:
      - artemis-data:/var/lib/artemis-instance
    healthcheck:
      test: ["CMD-SHELL", "wget --spider -q http://localhost:8161/ || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 40s

  # 主应用
  daxpay-open:
    build:
      context: ./dax-pay-open
      dockerfile: Dockerfile.prod # Java 25 基础镜像
    container_name: daxpay-open
    restart: unless-stopped
    ports:
      - "9999:9999"
    env_file:
      - .env
    environment:
      SPRING_PROFILES_ACTIVE: prod
      DB_HOST: postgresql
      REDIS_HOST: redis
      ARTEMIS_BROKER_URL: tcp://artemis:61616
      CHANNEL_ONE_BASE_URL: http://channel-one:20100
    depends_on:
      postgresql:
        condition: service_healthy
      redis:
        condition: service_healthy
      artemis:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "wget --spider -q http://localhost:9999/actuator/health || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  # 通道子应用
  channel-one:
    build:
      context: ./dax-pay-channel-one
      dockerfile: Dockerfile.product
    container_name: channel-one
    restart: unless-stopped
    ports:
      - "20100:20100"
    env_file:
      - .env
    environment:
      SPRING_PROFILES_ACTIVE: prod
      DB_HOST: postgresql
    depends_on:
      postgresql:
        condition: service_healthy
      daxpay-open:
        condition: service_healthy

volumes:
  pgdata:
  redis-data:
  artemis-data:
```

## 启动与停止

```bash
# 启动全部服务
docker compose --env-file .env up -d

# 查看日志
docker compose logs -f daxpay-open
docker compose logs -f channel-one

# 停止全部服务
docker compose down
```

## 验证

```bash
# 主应用健康检查
curl http://localhost:9999/actuator/health

# 通道子应用健康检查
curl http://localhost:20100/actuator/health
```

预期返回 `{"status":"UP"}`。
