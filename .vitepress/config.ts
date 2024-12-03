import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'
// @ts-check
import {HeadConfig} from "vitepress/types/shared";

import {DaxPaySingle} from "./doc/dax-pay-single";
import {DaxPayMulti} from "./doc/dax-pay-multi";
import {DaxPayCommon} from "./doc/dax-pay-common";

const ogDescription =
    '开源、便捷、全面、安全、功能完整。'
const ogImage = '/logo.png'
const ogTitle = 'single'
const ogUrl = '/'

export default defineConfig({
    title: 'DaxPay文档站',
    description: 'DaxPay开源支付系统文档站',
    lang: 'zh-CN',
    outDir: './dist',
    lastUpdated: true,
    head: createHead(),

    themeConfig: {
        logo: '/logo.png',
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://github.com/xxm1995/daxpay-doc/blob/master/:path'
        },
        // 开启本地搜索
        search : {
            provider: "local",
        },
        // 最后更新时间
        lastUpdated:{
            text: '更新于',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        // 目录大纲
        outline:{
            level: [2,3],
            label: '本页目录'
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
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
    return [
        {
            text: '概述',
            items: [
                {
                    text: "项目介绍",
                    link: "/common/guides/项目介绍",
                },
                {
                    text: "版本差异",
                    link: "/common/guides/版本差异",
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
                    link: "/single/guides/overview/项目介绍",
                },
                {
                    text: "接口对接",
                    link: "/single/gateway/overview/接口清单",
                },
                {
                    text: "操作手册",
                    link: "/single/admin/config/平台配置",
                },
            ]
        },
        {
            text: "商业版",
            items: [
                {
                    text: "快速指南",
                    link: "/multi/guides/overview/项目介绍",
                },
                {
                    text: "接口对接",
                    link: "/multi/gateway/overview/接口清单",
                },
                {
                    text: "运营端",
                    link: "/multi/admin/config/运营端",
                },
                {
                    text: "商户端",
                    link: "/multi/merchant/config/商户端",
                },
            ]
        },
        {
            text: "用户协议",
            items: [
                {
                    text: "开源版",
                    link: "/common/protocol/开源版",
                },
                {
                    text: "商业版",
                    link: "/common/protocol/商业版",
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
            text: '演示',
            items: [
                {
                    text: '开源版',
                    link: 'https://single.web.daxpay.cn/',
                },
            ],
        },
    ];
}

/**
 * 目录
 */
function createSidebar() {
    return {
        // 公共
        ...DaxPayCommon,
        // 开源支付网关单商户版
        ...DaxPaySingle,
        // 开源支付网关单多户版
        ...DaxPayMulti,
    }
}
