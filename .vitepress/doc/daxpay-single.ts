/**
 * 支付平台文档
 */
export const DaxpaySingle = {
    '/daxpay/guides/': [
        {
            text: "基础说明",
            items: [
                {
                    text: '项目介绍',
                    link: '/daxpay/guides/overview/项目介绍',
                },
                {
                    text: '功能列表',
                    link: '/daxpay/guides/overview/功能列表',
                },
                {
                    text: '系统架构',
                    link: '/daxpay/guides/overview/系统架构',
                },
                {
                    text: '名词解释',
                    link: '/daxpay/guides/overview/名词解释',
                },
                {
                    text: '系统演示',
                    link: '/daxpay/guides/overview/系统演示',
                },
            ]
        },
        {
            text: "配置和运行",
            items: [
                {
                    text: '项目启动',
                    link: '/daxpay/guides/develop/项目启动',
                },
                {
                    text: '配置说明',
                    link: '/daxpay/guides/develop/配置说明',
                },
                {
                    text: '数据库说明',
                    link: '/daxpay/guides/develop/数据库说明',
                },
                {
                    text: '系统部署',
                    link: '/daxpay/guides/develop/系统部署',
                },
            ]
        },
        {
            text: "FAQ",
            items: [
                {
                    text: '常见问题',
                    link: '/daxpay/guides/other/常见问题',
                },
                {
                    text: '常量和状态表',
                    link: '/daxpay/guides/other/常量和状态表',
                },
            ]
        },
    ],
    '/daxpay/gateway/': [
        {
            text: '前言',
            items: [
                {
                    text: '接口清单',
                    link: '/daxpay/gateway/overview/接口清单',
                },
                {
                    text: '业务系统接入',
                    link: '/daxpay/gateway/overview/业务系统接入',
                },
                {
                    text: '签名规则',
                    link: '/daxpay/gateway/overview/签名规则',
                },
                {
                    text: '调用说明',
                    link: '/daxpay/gateway/overview/调用说明',
                },
                {
                    text: 'SDK使用',
                    link: '/daxpay/gateway/overview/SDK使用说明',
                },
                {
                    text: '状态码',
                    link: '/daxpay/gateway/overview/返回状态码',
                }
            ],
        },
        {
            text: '消息通知',
            items: [
                {
                    text: '支付订单通知',
                    link: '/daxpay/gateway/notice/支付订单通知',
                },
                {
                    text: '退款订单通知',
                    link: '/daxpay/gateway/notice/退款订单通知',
                },
            ]
        },
        {
            text: '接口清单(支付)',
            items: [
                {
                    text: '统一支付接口',
                    link: '/daxpay/gateway/payment/统一支付接口',
                },
                {
                    text: '简单支付接口',
                    link: '/daxpay/gateway/payment/简单支付接口',
                },
                {
                    text: '支付关闭接口',
                    link: '/daxpay/gateway/payment/支付关闭接口',
                },
                {
                    text: '统一退款接口',
                    link: '/daxpay/gateway/payment/统一退款接口',
                },
                {
                    text: '简单退款接口',
                    link: '/daxpay/gateway/payment/简单退款接口',
                },
                {
                    text: '支付同步接口',
                    link: '/daxpay/gateway/payment/支付同步接口',
                },
                {
                    text: '退款同步接口',
                    link: '/daxpay/gateway/payment/退款同步接口',
                },

            ]
        },
        {
            text: '接口清单(查询)',
            items: [
                {
                    text: '查询支付订单',
                    link: '/daxpay/gateway/query/查询支付订单',
                },
                {
                    text: '查询退款订单',
                    link: '/daxpay/gateway/query/查询退款订单',
                },
            ]
        },
        {
            text: '接口清单(支撑性)',
            items: [
                {
                    text: '获取微信OAuth2授权链接',
                    link: '/daxpay/gateway/assist/获取微信OAuth2授权链接',
                },
                {
                    text: '获取微信AccessToken',
                    link: '/daxpay/gateway/assist/获取微信AccessToken',
                },
            ]
        },
    ],
    '/daxpay/admin/': [
        {
            text: '支付配置',
            items: [
                {
                    text: '平台配置',
                    link: '/daxpay/admin/config/平台配置',
                },
                {
                    text: '支付通道',
                    link: '/daxpay/admin/config/支付通道',
                },
                {
                    text: '支付方式',
                    link: '/daxpay/admin/config/支付方式',
                },
                {
                    text: '支付接口',
                    link: '/daxpay/admin/config/支付接口',
                },
                {
                    text: '通道配置',
                    link: '/daxpay/admin/config/通道配置',
                },
            ]
        },
        {
            text: '订单管理',
            items: [
                {
                    text: '支付订单',
                    link: '/daxpay/admin/order/支付订单',
                },
                {
                    text: '退款订单',
                    link: '/daxpay/admin/order/退款订单',
                },
                {
                    text: '对账订单',
                    link: '/daxpay/admin/order/对账订单',
                },
            ]
        },
        {
            text: '数据记录',
            items: [
                {
                    text: '回调记录',
                    link: '/daxpay/admin/record/回调记录',
                },
                {
                    text: '关闭记录',
                    link: '/daxpay/admin/record/关闭记录',
                },
                {
                    text: '修复记录',
                    link: '/daxpay/admin/record/修复记录',
                },
                {
                    text: '同步记录',
                    link: '/daxpay/admin/record/同步记录',
                },
            ]
        },

        {
            text: '支付通道',
            items: [
                {
                    text: '钱包管理',
                    link: '/daxpay/admin/channel/钱包管理',
                },
                {
                    text: '储值卡管理',
                    link: '/daxpay/admin/channel/储值卡管理',
                }
            ]
        },
        {
            text: '数据记录',
            items: [
                {
                    text: '同步记录',
                    link: '/daxpay/admin/task/消息通知',
                }
            ]
        },
    ]

}
