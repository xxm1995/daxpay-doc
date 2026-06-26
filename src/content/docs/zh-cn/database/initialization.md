---
title: 数据库初始化
description: 建表与基础数据脚本执行顺序
sidebar:
  order: 1
---

数据库 SQL 脚本位于 `_config/sql/`,使用 PostgreSQL。

## 执行顺序

### 全新初始化

```bash
# 1. 建表
psql -f _config/sql/tables.sql

# 2. 基础数据
psql -f _config/sql/datas.sql
```

顺序为 `tables.sql → datas.sql`,不可颠倒。

### 版本升级

```bash
# 1. 表结构升级
psql -f _config/sql/update-tables.sql

# 2. 数据升级
psql -f _config/sql/update-datas.sql
```

升级顺序为 `update-tables.sql → update-datas.sql`。

:::note[数据库规范]
建表与字段规范详见 [数据库规范](../development/database-conventions/)。
:::
