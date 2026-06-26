<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

// graph:经 encodeURIComponent 编码的 Mermaid 源码
const props = defineProps<{ graph: string }>()

const { isDark } = useData()
const el = ref<HTMLElement>()

// 客户端动态渲染(SSR 阶段仅输出空占位,避免 mermaid 走 Node 环境)
const render = async () => {
  const root = el.value
  if (!root) return
  const mermaid = (await import('mermaid')).default
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: isDark.value ? 'dark' : 'default',
  })
  // 随机 id 防止同页多图渲染冲突
  const id = `mermaid-${Math.random().toString(36).slice(2, 10)}`
  try {
    const { svg } = await mermaid.render(id, decodeURIComponent(props.graph))
    root.innerHTML = svg
  } catch (e) {
    root.innerHTML = `<pre style="margin:0;color:var(--vp-c-danger-1)">${String(e)}</pre>`
  }
}

onMounted(render)
// 深浅色切换时按新主题重新渲染
watch(isDark, render)
</script>

<template>
  <div ref="el" class="mermaid-diagram" />
</template>

<style scoped>
.mermaid-diagram {
  display: flex;
  justify-content: center;
  margin: 16px 0;
  padding: 24px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow-x: auto;
}

.mermaid-diagram :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
