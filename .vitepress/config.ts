import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'
// @ts-check
import {HeadConfig} from "vitepress/types/shared";

import {DaxpaySingle} from "./doc/daxpay-single";

const ogDescription =
    '开源、精美、便捷、规范、交互自然。'
const ogImage = '/logo.png'
const ogTitle = 'Bootx'
const ogUrl = '/'

export default defineConfig({
    title: 'Bootx 开源文档站',
    description: '一个多功能的开源项目集',
    lang: 'zh-CN',
    outDir: './dist',
    lastUpdated: true,
    head: createHead(),

    themeConfig: {
        logo: '/logo.png',
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://gitee.com/bootx/bootx/blob/master/:path'
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
            ]
        },
        {
            text: "单商户",
            items: [
            ]
        },
        {
            text: "多商户",
            items: [
            ]
        },
        {
            text: "商业版",
            items: [
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
                    link: 'http://daxpay.demo.bootx.cn/',
                },
                {
                    text: '多商户管理端',
                    link: 'http://daxpay.demo.bootx.cn/',
                },
                {
                    text: '多商户商户端',
                    link: 'http://daxpay.demo.bootx.cn/',
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
