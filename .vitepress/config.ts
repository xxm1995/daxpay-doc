import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'
// @ts-check
import {HeadConfig} from "vitepress/types/shared";

import {DaxpaySingle} from "./doc/daxpay-single";

const ogDescription =
    '开源、便捷、全面、安全、功能完整。'
const ogImage = '/logo.png'
const ogTitle = 'single'
const ogUrl = '/'

export default defineConfig({
    title: 'single文档站',
    description: 'single开源支付系统文档站',
    lang: 'zh-CN',
    outDir: './dist',
    lastUpdated: true,
    head: createHead(),

    themeConfig: {
        logo: '/logo.png',
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://https://github.com/xxm1995/single-doc/blob/master/:path'
        },
        // 开启本地搜索
        search : {
            provider: "local",
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
                    text: "快速指南",
                    link: "/single/guides/overview/项目介绍",
                },
                {
                    text: "个版差异",
                    link: "/single/guides/develop/项目启动",
                },
                {
                    text: "FAQ",
                    link: "/single/guides/other/常见问题",
                },
            ]
        },
        {
            text: "单商户",
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
            text: "多商户",
            items: [
                {
                    text: "概述(开发中)",
                    link: "/platform/front/mobile/移动端介绍",
                },
            ]
        },
        {
            text: "商业版",
            items: [
                {
                    text: "概述(开发中)",
                    link: "/platform/front/mobile/移动端介绍",
                },
            ]
        },
        {
            text: "用户协议",
            items: [
            ]
        },
        {
            text: '源码',
            items: [
                {
                    text: '单商户后端',
                    link: 'https://gitee.com/dromara/dax-pay',
                },
                {
                    text: '单商户前端',
                    link: 'https://gitee.com/dromara/dax-pay',
                },
            ],
        },
        {
            text: '交流群',
            items: [
                {
                    text: 'QQ群：939414255',
                    link: 'https://qm.qq.com/cgi-bin/qm/qr?k=hPIJw0BLRMONMZCYLUtB5wWHqumhOpCw&authKey=m3YVb3vcRR0MtBlXLEMfTAhxBlOlLtobsF8Otipp6N0DqdUn55q0G/e7HhnvtsY2&noverify=0',
                },
                {
                    text: '钉钉群',
                    link: 'https://qm.qq.com/cgi-bin/qm/qr?k=hPIJw0BLRMONMZCYLUtB5wWHqumhOpCw&authKey=m3YVb3vcRR0MtBlXLEMfTAhxBlOlLtobsF8Otipp6N0DqdUn55q0G/e7HhnvtsY2&noverify=0',
                },
            ],
        },
        {
            text: '演示',
            items: [
                {
                    text: '单商户管理端',
                    link: 'http://single.demo.bootx.cn/',
                },
                {
                    text: '多商户管理端',
                    link: 'http://single.demo.bootx.cn/',
                },
                {
                    text: '多商户商户端',
                    link: 'http://single.demo.bootx.cn/',
                }
            ],
        },
    ];
}

/**
 * 目录
 */
function createSidebar() {
    return {
        // 开源支付网关单商户版
        ...DaxpaySingle,
    }
}
