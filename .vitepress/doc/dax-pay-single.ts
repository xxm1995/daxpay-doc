/**
 * 单商户版文档
 */
export const DaxPaySingle = {
    '/single/guides/': [
        {
            text: "基础说明",
            items: [
                {
                    text: '项目介绍',
                    link: '/single/guides/overview/项目介绍',
                },
                {
                    text: '功能列表',
                    link: '/single/guides/overview/功能列表',
                },
                {
                    text: '系统架构',
                    link: '/single/guides/overview/系统架构',
                },
                {
                    text: '系统演示',
                    link: '/single/guides/overview/系统演示',
                },
            ]
        },
        {
            text: "配置和运行",
            items: [
                {
                    text: '项目启动',
                    link: '/single/guides/develop/项目启动',
                },
                {
                    text: '配置说明',
                    link: '/single/guides/develop/配置说明',
                },
                {
                    text: '数据库说明',
                    link: '/single/guides/develop/数据库说明',
                },
                {
                    text: '系统部署',
                    link: '/single/guides/develop/系统部署',
                },
                {
                    text: 'Docker部署',
                    link: '/single/guides/develop/docker部署',
                },
            ]
        },
        {
            text: "FAQ",
            items: [
                {
                    text: '常见问题',
                    link: '/single/guides/other/常见问题',
                },
                {
                    text: '常量和状态表',
                    link: '/single/guides/other/常量和状态表',
                },
                {
                    text: '更新记录',
                    link: '/single/guides/other/更新记录',
                },
            ]
        },
    ],
    '/single/gateway/': [
        {
            text: '前言',
            items: [
                {
                    text: '接口清单',
                    link: '/single/gateway/overview/接口清单',
                },
                {
                    text: '签名规则',
                    link: '/single/gateway/overview/签名规则',
                },
                {
                    text: '调用说明',
                    link: '/single/gateway/overview/调用说明',
                },
                {
                    text: 'SDK使用',
                    link: '/single/gateway/overview/SDK使用说明',
                },
                {
                    text: '状态码',
                    link: '/single/gateway/overview/返回状态码',
                }
            ],
        },
        {
            text: '接口清单(交易)',
            items: [
                {
                    text: '统一支付接口',
                    link: '/single/gateway/payment/统一支付接口',
                },
                {
                    text: '支付关闭接口',
                    link: '/single/gateway/payment/支付关闭接口',
                },
                {
                    text: '支付同步接口',
                    link: '/single/gateway/payment/支付同步接口',
                },
                {
                    text: '统一退款接口',
                    link: '/single/gateway/payment/统一退款接口',
                },
                {
                    text: '退款同步接口',
                    link: '/single/gateway/payment/退款同步接口',
                },
                {
                    text: '统一转账接口',
                    link: '/single/gateway/payment/统一转账接口',
                },
                {
                    text: '转账同步接口',
                    link: '/single/gateway/payment/转账同步接口',
                },

            ]
        },
        {
            text: '接口清单(查询)',
            items: [
                {
                    text: '查询支付订单',
                    link: '/single/gateway/query/查询支付订单',
                },
                {
                    text: '查询退款订单',
                    link: '/single/gateway/query/查询退款订单',
                },
                {
                    text: '查询转账订单',
                    link: '/single/gateway/query/查询转账订单',
                },

            ]
        },
        {
            text: '订阅消息通知',
            items: [
                {
                    text: '支付订单通知',
                    link: '/single/gateway/notice/支付订单通知',
                },
                {
                    text: '退款订单通知',
                    link: '/single/gateway/notice/退款订单通知',
                },
                {
                    text: '转账订单通知',
                    link: '/single/gateway/notice/转账订单通知',
                },
            ]
        },
        {
            text: '接口清单(认证)',
            items: [
                {
                    text: '获取授权链接',
                    link: '/single/gateway/assist/获取授权链接',
                },
                {
                    text: '获取认证结果',
                    link: '/single/gateway/assist/获取认证结果',
                },
                {
                    text: '认证并设置结果',
                    link: '/single/gateway/assist/认证并设置结果',
                },
            ]
        },
        {
            text: '分账接口',
            items: [
                {
                    text: '分账接收方查询接口',
                    link: '/single/gateway/alloc/分账接收方查询接口',
                },
                {
                    text: '获取认证结果接口',
                    link: '/single/gateway/alloc/分账接收方添加接口',
                },
                {
                    text: '获取并设置认证结果接口',
                    link: '/single/gateway/alloc/分账接收方删除接口',
                },
            ]
        }
    ],
    '/single/admin/': [
        {
            text: '系统配置',
            items: [
                {
                    text: '平台配置',
                    link: '/single/admin/config/平台配置',
                },
                {
                    text: '应用及相关配置',
                    link: '/single/admin/config/支付通道',
                },
                {
                    text: '支付通道配置',
                    link: '/single/admin/config/支付通道配置',
                },
                {
                    text: '分账配置',
                    link: '/single/admin/config/通道配置',
                },
            ]
        },
        {
            text: '交易相关信息',
            items: [
                {
                    text: '订单管理',
                    link: '/single/admin/info/订单管理',
                },
                {
                    text: '交易纪录',
                    link: '/single/admin/info/交易纪录',
                },
                {
                    text: '对账报告',
                    link: '/single/admin/info/对账报告',
                },
                {
                    text: '分账管理',
                    link: '/single/admin/info/分账管理',
                },
            ]
        },
        {
            text: '支付通道配置',
            items: [
                {
                    text: '微信支付',
                    link: '/single/admin/channel/微信支付',
                },
                {
                    text: '支付宝',
                    link: '/single/admin/channel/支付宝',
                },
                {
                    text: '云闪付',
                    link: '/single/admin/channel/云闪付',
                },
            ]
        },
    ]

}
