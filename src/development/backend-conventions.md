---
title: 后端编码规范
description: Java 后端开发约定
---

## 工程结构

根据实体类创建对应的分层组件:

```
param     # 查询参数
result    # 返回视图对象
mapper    # 数据访问,继承 MPJBaseMapper
manager   # 数据管理(缓存/复合查询)
service   # 业务逻辑
convert   # MapStruct 转换
controller# 接口控制器
```

- Mapper 统一继承 `MPJBaseMapper`
- 使用 `mvnd` 而非 `mvn`

## 注释规范

- 使用 `///` Markdown 格式(**仅后端 Java**)
- 行内注释(方法体内)使用 `//` 单独占行,**禁止**放在行尾

## 接口命名

- RESTful **kebab-case**:如 `get-by-id` 而非 `getById`

## 国际化(message key)

详见 [国际化](./i18n) 专题。要点:

| 层级 | 风格 |
| ---- | ---- |
| 多词文件名、枚举项 code | `snake_case` |
| 业务消息叶子 key | `camelCase` |
| validation 字段与约束 | `camelCase` |

- 枚举实现 `I18nSupport` 仅保留 `code` 字段,中文说明写在 `///` 注释与 `enum/*.json` 中
- 业务异常:`new BizInfoException(code, "pay.route.error.noMatch")`
- Bean Validation 注解 `message` 必须用 i18n key:`{validation.field.{字段名}.{约束}}`

## 时区

- 时间字段统一 `timestamptz(6)`,实体使用 `java.time.OffsetDateTime`
- 禁止 `timestamp`/`LocalDateTime`/`java.util.Date`
