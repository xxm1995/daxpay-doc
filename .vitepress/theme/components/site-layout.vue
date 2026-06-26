<script setup lang="ts">
import { nextTick, onMounted, watch } from 'vue'
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

const { Layout } = DefaultTheme
const route = useRoute()

// medium-zoom 实例(每次重挂载前 detach 旧实例,避免 overlay 残留)
let zoom: ReturnType<typeof mediumZoom> | null = null

// 给文档区所有图片挂载点击放大
const initZoom = () => {
  zoom?.detach()
  zoom = mediumZoom('.VPContent img', { background: 'var(--vp-c-bg)' })
}

onMounted(initZoom)
watch(
  () => route.path,
  () => nextTick(initZoom),
)
</script>

<template>
  <Layout>
    <!-- 阅读增强菜单:宽屏导航栏 -->
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
    <!-- 阅读增强菜单:窄屏抽屉 -->
    <template #nav-screen-content-after>
      <NolebaseEnhancedReadabilitiesScreenMenu />
    </template>
  </Layout>
</template>

<style>
.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 2147483647;
}
</style>
