/**
 * 多商户版文档
 */
export const DaxPayMulti = {
    '/multi/guides/': [
        {
            text: "基础说明",
            items: [
                {
                    text: '项目介绍',
                    link: '/multi/guides/overview/项目介绍',
                },
                {
                    text: '功能列表',
                    link: '/multi/guides/overview/功能列表',
                },
                {
                    text: '系统架构',
                    link: '/multi/guides/overview/系统架构',
                },
                {
                    text: '系统演示',
                    link: '/multi/guides/overview/系统演示',
                },
            ]
        },
        {
            text: "配置和运行",
            items: [
                {
                    text: '项目启动',
                    link: '/multi/guides/develop/项目启动',
                },
                {
                    text: '配置说明',
                    link: '/multi/guides/develop/配置说明',
                },
                {
                    text: '系统部署',
                    link: '/multi/guides/develop/系统部署',
                },
                {
                    text: '宝塔部署',
                    link: '/multi/guides/develop/宝塔部署',
                },
            ]
        },
        {
            text: "FAQ",
            items: [
                {
                    text: '常见问题',
                    link: '/multi/guides/other/常见问题',
                },
                {
                    text: '更新记录',
                    link: '/multi/guides/other/更新记录',
                },
            ]
        },
    ],
    '/multi/gateway/interface': [
        {
            text: '前言',
            items: [
                {
                    text: '接口清单',
                    link: '/multi/gateway/interface/overview/接口清单',
                },
                {
                    text: '签名规则',
                    link: '/multi/gateway/interface/overview/签名规则',
                },
                {
                    text: '调用说明',
                    link: '/multi/gateway/interface/overview/调用说明',
                },
                {
                    text: 'SDK使用',
                    link: '/multi/gateway/interface/overview/SDK使用说明',
                },
                {
                    text: '状态码',
                    link: '/multi/gateway/interface/overview/返回状态码',
                }
            ],
        },
        {
            text: '交易接口',
            items: [
                {
                    text: '统一支付接口',
                    link: '/multi/gateway/interface/payment/统一支付接口',
                },
                {
                    text: '统一支付接口(通道说明)',
                    link: '/multi/gateway/interface/payment/统一支付接口(通道说明)',
                },
                {
                    text: '网关支付接口',
                    link: '/multi/gateway/interface/payment/网关支付接口',
                },
                {
                    text: '支付关闭和撤销接口',
                    link: '/multi/gateway/interface/payment/支付关闭和撤销接口',
                },
                {
                    text: '统一退款接口',
                    link: '/multi/gateway/interface/payment/统一退款接口',
                },
                {
                    text: '统一转账接口',
                    link: '/multi/gateway/interface/payment/统一转账接口',
                },
            ]
        },
        {
            text: '查询接口',
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
                {
                    text: '查询分账订单',
                    link: '/single/gateway/query/查询分账订单',
                },

            ]
        },
    ],
    '/multi/gateway/interface/notice': []
}
