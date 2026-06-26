---
title: 数据库规范
description: PostgreSQL 建表与注释约定
sidebar:
  order: 4
---

严格遵守 PostgreSQL 语法。

## 建表注释规则

- **建表语句必须包含注释**:表和每个业务字段都要有中文说明
- **注释必须用 `COMMENT ON` 语句**,写在 `CREATE TABLE` 之外,符合 PG 标准 DDL 语法:

```sql
COMMENT ON TABLE 表名 IS '表注释';
COMMENT ON COLUMN 表名.字段名 IS '字段注释';
```

- **禁止**把注释放在字段定义中(`CREATE TABLE` 内部不写 inline `--` 字段注释、也不用 MySQL 风格的 `字段名 类型 COMMENT '...'`),保持表定义干净
- 仅允许在 SQL 文件顶部用 `--` 写文件/表的简要标题说明

## 时间字段

- 统一使用 `timestamptz(6)`(`timestamp with time zone`)
- 实体类使用 `java.time.OffsetDateTime`
- **禁止** `timestamp`/`timestamp without time zone` 及 `java.util.Date`/`LocalDateTime`

## 脚本位置与执行

- SQL 位于 `_config/sql/`
- 执行顺序见 [数据库初始化](../database/initialization/)
