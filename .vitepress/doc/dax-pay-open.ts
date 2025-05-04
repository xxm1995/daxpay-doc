/**
 * 单商户版文档
 */
export const DaxPayopen = {
    '/open/guides/': [
        {
            text: "基础说明",
            items: [
                {
                    text: '项目介绍',
                    link: '/open/guides/overview/项目介绍',
                },
                // {
                //     text: '功能列表',
                //     link: '/open/guides/overview/功能列表',
                // },
                // {
                //     text: '系统架构',
                //     link: '/open/guides/overview/系统架构',
                // },
                {
                    text: '系统演示',
                    link: '/open/guides/overview/系统演示',
                },
            ]
        },
        {
            text: "配置和运行",
            items: [
                {
                    text: '项目启动',
                    link: '/open/guides/develop/项目启动',
                },
                {
                    text: '系统部署',
                    link: '/open/guides/develop/系统部署',
                },
                {
                    text: 'Docker一键部署',
                    link: '/open/guides/develop/Docker一键部署',
                },
            ]
        },
        {
            text: "FAQ",
            items: [
                {
                    text: '常量和状态表',
                    link: '/open/guides/other/常量和状态表',
                },
                {
                    text: '更新记录',
                    link: '/open/guides/other/更新记录',
                },
            ],
        },
        {
            text: '扩展包',
            items: [

                {
                    text: '收费扩展包',
                    link: '/open/guides/expansion/付费扩展包',
                },
            ],
        }
    ],
    '/open/gateway/': [
        {
            text: '前言',
            items: [
                {
                    text: '接口清单',
                    link: '/open/gateway/overview/接口清单',
                },
                {
                    text: '签名规则',
                    link: '/open/gateway/overview/签名规则',
                },
                {
                    text: '调用说明',
                    link: '/open/gateway/overview/调用说明',
                },
                {
                    text: 'SDK使用',
                    link: '/open/gateway/overview/SDK使用说明',
                },
                {
                    text: '状态码',
                    link: '/open/gateway/overview/返回状态码',
                }
            ],
        },
        {
            text: '接口清单(交易)',
            items: [
                {
                    text: '统一支付接口',
                    link: '/open/gateway/payment/统一支付接口',
                },
                {
                    text: '收银台下单接口',
                    link: '/open/gateway/payment/收银台下单接口',
                },
                {
                    text: '支付关闭接口',
                    link: '/open/gateway/payment/支付关闭接口',
                },
                {
                    text: '支付同步接口',
                    link: '/open/gateway/payment/支付同步接口',
                },
                {
                    text: '统一退款接口',
                    link: '/open/gateway/payment/统一退款接口',
                },
                {
                    text: '退款同步接口',
                    link: '/open/gateway/payment/退款同步接口',
                },
                {
                    text: '统一转账接口',
                    link: '/open/gateway/payment/统一转账接口',
                },
                {
                    text: '转账同步接口',
                    link: '/open/gateway/payment/转账同步接口',
                },

            ]
        },
        {
            text: '接口清单(查询)',
            items: [
                {
                    text: '查询支付订单',
                    link: '/open/gateway/query/查询支付订单',
                },
                {
                    text: '查询退款订单',
                    link: '/open/gateway/query/查询退款订单',
                },
                {
                    text: '查询转账订单',
                    link: '/open/gateway/query/查询转账订单',
                },
                {
                    text: '查询分账订单',
                    link: '/open/gateway/query/查询分账订单',
                },

            ]
        },
        {
            text: '分账接口',
            items: [
                {
                    text: '分账发起接口',
                    link: '/open/gateway/alloc/分账发起接口',
                },
                {
                    text: '分账完结接口',
                    link: '/open/gateway/alloc/分账完结接口',
                },
                {
                    text: '分账同步接口',
                    link: '/open/gateway/alloc/分账同步接口 ',
                },
                {
                    text: '分账接收方查询接口',
                    link: '/open/gateway/alloc/分账接收方查询接口',
                },
                {
                    text: '分账接收方添加接口',
                    link: '/open/gateway/alloc/分账接收方添加接口',
                },
                {
                    text: '分账接收方删除接口',
                    link: '/open/gateway/alloc/分账接收方删除接口',
                },

            ]
        },
        {
            text: '订阅消息通知',
            items: [
                {
                    text: '支付订单通知',
                    link: '/open/gateway/notice/支付订单通知',
                },
                {
                    text: '退款订单通知',
                    link: '/open/gateway/notice/退款订单通知',
                },
                {
                    text: '转账订单通知',
                    link: '/open/gateway/notice/转账订单通知',
                },
                {
                    text: '分账信息通知',
                    link: '/open/gateway/notice/分账信息通知',
                },
            ]
        },
        {
            text: '回调消息通知',
            items: [
                {
                    text: '支付订单回调',
                    link: '/open/gateway/callback/支付订单回调',
                },
                {
                    text: '退款订单回调',
                    link: '/open/gateway/callback/退款订单回调',
                },
                {
                    text: '转账订单回调',
                    link: '/open/gateway/callback/转账订单回调',
                },
                {
                    text: '分账信息回调',
                    link: '/open/gateway/callback/分账信息回调',
                },
            ]
        },
        {
            text: '接口清单(认证)',
            items: [
                {
                    text: '获取授权链接',
                    link: '/open/gateway/assist/获取授权链接',
                },
                {
                    text: '获取认证结果',
                    link: '/open/gateway/assist/获取认证结果',
                },
                {
                    text: '认证并设置结果',
                    link: '/open/gateway/assist/认证并设置结果',
                },
            ]
        },
    ],
    '/open/admin/': [
        {
            text: '系统配置',
            items: [

                {
                    text: '平台配置',
                    link: '/open/admin/config/平台配置',
                },
                {
                    text: '商户应用配置',
                    link: '/open/admin/config/商户应用配置',
                },
                {
                    text: '支付通道配置',
                    link: '/open/admin/config/支付通道配置',
                },
                {
                    text: '收银台配置',
                    link: '/open/admin/config/收银台配置',
                },
                {
                    text: '收银码牌配置',
                    link: '/open/admin/config/收银码牌配置',
                },
                {
                    text: '分账配置',
                    link: '/open/admin/config/分账配置',
                },
            ]
        },
        {
            text: '交易相关',
            items: [
                {
                    text: '支付订单',
                    link: '/open/admin/trade/支付订单',
                },
                {
                    text: '退款订单',
                    link: '/open/admin/trade/退款订单',
                },
                {
                    text: '转账订单',
                    link: '/open/admin/trade/转账订单',
                },
                {
                    text: '分账单',
                    link: '/open/admin/trade/分账单',
                },
                {
                    text: '对账报告',
                    link: '/open/admin/trade/对账报告',
                },
                {
                    text: '交易记录信息',
                    link: '/open/admin/trade/交易记录信息',
                },
            ]
        },
        {
            text: '其他',
            items: [
                {
                    text: '消息通知',
                    link: '/open/admin/other/消息通知',
                },
                {
                    text: '交易和认证调试',
                    link: '/open/admin/other/交易和认证调试',
                },
            ]
        },
        {
            text: '脚手架文档',
            items: [
                {
                    text: '菜单管理',
                    link: '/open/admin/bootx/菜单管理',
                },
                {
                    text: '权限管理',
                    link: '/open/admin/bootx/权限管理',
                },
                {
                    text: '用户管理',
                    link: '/open/admin/bootx/用户管理',
                },
                {
                    text: '系统配置',
                    link: '/open/admin/bootx/系统配置',
                },
                {
                    text: '文件存储',
                    link: '/open/admin/bootx/文件存储',
                },
            ]
        },

    ],
}
