---
title: 前端编码规范
description: Web/H5 前端开发约定
---

## 组件库

- **Web 管理端**:`ant-design-vue` v4(antdv-next),表格使用 `vxe-table` v4 + `vxe-pc-ui`
- antdv-next 用法不确定时,优先查阅官方 LLM 文档索引 `https://antdv-next.com/llms.txt`,勿凭记忆臆测

## 通用约定

- **id 字段**:全部使用 `string`(number 会精度丢失)
- **分类实体**:API 接口声明继承 `BaseEntity` 或 `MchEntity`(来自 `#/web`),声明放到文件底部
- **方法声明**:使用 `function` 关键字,不用箭头函数赋值给变量
- **消息提示**:使用项目封装的 `useMessage` hook,不用原生 message
- **异常处理**:REST 调用不需要 `try` 包裹,非必需不用 `catch`
- **Vue script 结构顺序**:Vue 相关定义和 hook 导入 → 参数/变量定义 → 方法实现
- **别名**:`@/` → `src/`,`#/` → `types/`
- preinstall 会拦截 npm/yarn,pnpm only

## 注释风格

- 变量/行内注释用 `//`
- 函数上方文档注释用 `/** */`(标准 JSDoc)
- **禁止**使用 `///`(此为后端 Java 格式)

## 表格操作列

vxe-table 操作列按钮统一用 `<a-button type="link" size="small">`,删除/禁用等危险操作加 `danger`(自动红色)。多按钮用 `<a-space :size="2">` + `#separator`(`<a-divider type="vertical" />`),自动插分隔符。

```vue
<vxe-column fixed="right" :width="120" :show-overflow="false" :title="$t('common.operation')">
  <template #default="{ row }">
    <a-space :size="2">
      <template #separator>
        <a-divider type="vertical" />
      </template>
      <a-button v-if="hasPermission(...)" type="link" size="small" @click="handleEdit(row)">
        {{ $t('common.edit') }}
      </a-button>
      <a-button v-if="hasPermission(...)" type="link" size="small" danger @click="handleDelete(row)">
        {{ $t('common.delete') }}
      </a-button>
    </a-space>
  </template>
</vxe-column>
```

::: warning 禁止
不要用原生 `<a class="vben-link">` 渲染操作按钮 — `vben-link` 只有主题色、无 danger 变体,删除无法变红。它仅保留用于"编号字段跳详情"等纯文本链接场景。
:::

## RadioGroup

`<a-radio-group>` 默认 `button-style="outline`(视觉弱),项目统一要求显式写 `button-style="solid"`(实心填充),普通 `a-radio` 与 `a-radio-button` 子元素均遵循。

**例外**:若该 group 已有专属自定义样式,保持其定制样式、不加 `button-style`。
