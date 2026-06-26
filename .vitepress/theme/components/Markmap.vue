<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData } from 'vitepress'

// graph:经 encodeURIComponent 编码的 Markmap Markdown 源码
const props = defineProps<{ graph: string }>()

const { isDark } = useData()
// svg 元素(markmap-view 挂载点),SSR 阶段为空占位
const el = ref<any>(null)
let mm: any = null

// 金色系配色(贴合品牌色),深浅色不同色阶
const palette = () =>
  isDark.value
    ? ['#f0c269', '#ebb54b', '#d49920', '#b58410']
    : ['#946300', '#b58410', '#d49920', '#ebb54b']

// 客户端动态渲染(SSR 阶段仅输出空 svg)
const render = async () => {
  const svg = el.value
  if (!svg) return
  const { Transformer } = await import('markmap-lib')
  const { Markmap, deriveOptions } = await import('markmap-view')
  const transformer = new Transformer()
  const { root } = transformer.transform(decodeURIComponent(props.graph))
  const options = deriveOptions({
    color: palette(),
    duration: 300,
    maxWidth: 320,
  })
  if (mm) {
    mm.setOptions(options)
    mm.setData(root)
  } else {
    mm = Markmap.create(svg, options, root)
  }
}

onMounted(render)
// 深浅色切换时换配色重绘
watch(isDark, render)
onBeforeUnmount(() => mm?.destroy?.())
</script>

<template>
  <svg ref="el" class="markmap-diagram" />
</template>

<style scoped>
.markmap-diagram {
  width: 100%;
  height: 500px;
  display: block;
  margin: 16px 0;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>
