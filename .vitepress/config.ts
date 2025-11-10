import {DefaultTheme, defineConfig} from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'
// @ts-check
import {HeadConfig} from "vitepress/types/shared";

import {DaxPayopen} from "./doc/dax-pay-open";
import {DaxPayCommon} from "./doc/dax-pay-common";

const ogDescription =
    '开源、便捷、全面、安全、功能完整。'
const ogImage = '/logo.png'
const ogTitle = 'open'
const ogUrl = '/'

const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    root: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonAriaLabel: '搜索文档',
                buttonText: '搜索文档',
            },
            modal: {
                footer: {
                    closeText: '关闭',
                    navigateText: '切换',
                    selectText: '选择',
                },
            },
        },
    },
}

export default defineConfig({
    title: 'DaxPay文档站',
    description: 'DaxPay开源版文档站',
    lang: 'zh-CN',
    outDir: './dist',
    lastUpdated: true,
    head: createHead(),

    themeConfig: {
        logo: '/logo.png',
        darkModeSwitchTitle: '切换到深色模式',
        lightModeSwitchTitle: '切换到浅色模式',
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://github.com/xxm1995/daxpay-doc/blob/master/:path'
        },
        // 开启本地搜索
        search : {
            options: {
                locales: {
                    ...search,
                },
            },
            provider: "local",
        },
        // 最后更新时间
        lastUpdated:{
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'medium',
                timeStyle: 'medium'
            }
        },
        // 目录大纲
        outline:{
            level: [2,3],
            label: '页面导航'
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        // 顶部导航栏
        nav: createNav(),
        // 目录导航
        sidebar: createSidebar()
    },
    markdown: {
        anchor: {
            permalink: renderPermaLink
        },
        config: md => {
            md.use(MarkDownItCustomAnchor)
        },
        image: {
            lazyLoading: true
        }
    }
})

/**
 * 头信息
 * @type {()=>import('vitepress').HeadConfig[]}
 */
function createHead(): HeadConfig[] {
    return [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: 'Bootx' }],
        ['meta', { name: 'theme-color', content: '#3f8bdb' }],
        [
            'script',
            {
                src: '',
                'data-site': '',
                'data-spa': '',
                defer: ''
            }
        ]
    ]
}

/**
 * 导航栏
 */
function createNav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '概述',
            items: [
                {
                    text: "项目介绍",
                    link: "/common/guides/项目介绍",
                },
                {
                    text: "名词解释",
                    link: "/common/guides/名词解释",
                },
                {
                    text: "FAQ",
                    link: "/common/guides/常见问题",
                },
            ]
        },
        {
            text: "开源版",
            items: [
                {
                    text: "快速指南",
                    link: "/open/guides/overview/项目介绍",
                },
                {
                    text: "接口对接",
                    link: "/open/gateway/overview/接口清单",
                },
                {
                    text: "操作手册",
                    link: "/open/admin/config/平台配置",
                },
                {
                    text: "付费扩展包",
                    link: "/open/guides/expansion/付费扩展包",
                }
            ]
        },
        {
            text: "用户协议",
            items: [
                {
                    text: "开源版",
                    link: "/common/protocol/开源版",
                },
            ]
        },
        {
            text: '源码',
            items: [
                {
                    text: 'GITEE',
                    link: 'https://gitee.com/dromara/dax-pay',
                },
                {
                    text: 'GITHUB',
                    link: 'https://github.com/dromara/dax-pay',
                },
                {
                    text: 'GITCODE',
                    link: 'https://gitcode.com/dromara/dax-pay',
                },
            ],
        },
        {
            text: '商业版',
            link: 'https://plus.daxpay.cn',
        }
    ];
}

/**
 * 目录
 */
function createSidebar() {
    return {
        // 公共
        ...DaxPayCommon,
        // 开源版
        ...DaxPayopen,
    }
}
