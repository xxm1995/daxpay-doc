import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight docs 内容集合
// 注:i18n collection 用于覆写 Starlight 内置 UI 翻译字符串。当前使用内置中文 UI,
// 暂不需要;若后续需自定义 UI 文案,再加回 i18n collection(见 Starlight i18n 指南)。
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
};
