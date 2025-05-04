/**
 * 多商户版文档
 */
export const DaxPayplus = {
    '/plus/guides/': [
        {
            text: "基础说明",
            items: [
                {
                    text: '项目介绍',
                    link: '/plus/guides/overview/项目介绍',
                },
                // {
                //     text: '功能列表',
                //     link: '/plus/guides/overview/功能列表',
                // },
                // {
                //     text: '系统架构',
                //     link: '/plus/guides/overview/系统架构',
                // },
                {
                    text: '系统演示',
                    link: '/plus/guides/overview/系统演示',
                },
            ]
        },
        {
            text: "配置和运行",
            items: [
                {
                    text: '项目启动',
                    link: '/plus/guides/develop/项目启动',
                },
                {
                    text: '配置说明',
                    link: '/plus/guides/develop/配置说明',
                },
                {
                    text: '系统部署',
                    link: '/plus/guides/develop/系统部署',
                },
                {
                    text: '宝塔部署',
                    link: '/plus/guides/develop/宝塔部署',
                },
            ]
        },
        {
            text: "FAQ",
            items: [
                {
                    text: '常见问题',
                    link: '/plus/guides/other/常见问题',
                },
                {
                    text: '更新记录',
                    link: '/plus/guides/other/更新记录',
                },
            ]
        },
    ],
    '/plus/gateway/interface': [
        {
            text: '前言',
            items: [
                {
                    text: '接口清单',
                    link: '/plus/gateway/interface/overview/接口清单',
                },
                {
                    text: '签名规则',
                    link: '/plus/gateway/interface/overview/签名规则',
                },
                {
                    text: '调用说明',
                    link: '/plus/gateway/interface/overview/调用说明',
                },
                {
                    text: 'SDK使用',
                    link: '/plus/gateway/interface/overview/SDK使用说明',
                },
                {
                    text: '常量和状态表',
                    link: '/plus/gateway/interface/overview/常量和状态表',
                }
            ],
        },
        {
            text: '交易接口',
            items: [
                {
                    text: '统一支付接口',
                    link: '/plus/gateway/interface/payment/统一支付接口',
                },
                {
                    text: '通道说明(统一支付)',
                    link: '/plus/gateway/interface/payment/统一支付接口(通道说明)',
                },
                {
                    text: '支付关闭和撤销',
                    link: '/plus/gateway/interface/payment/支付关闭和撤销接口',
                },
                {
                    text: '统一退款接口',
                    link: '/plus/gateway/interface/payment/统一退款接口',
                },
                {
                    text: '统一转账接口',
                    link: '/plus/gateway/interface/payment/统一转账接口',
                },

                {
                    text: '网关支付接口',
                    link: '/plus/gateway/interface/payment/网关支付接口',
                },

                {
                    text: '付款码聚合支付',
                    link: '/plus/gateway/interface/payment/付款码聚合接口',
                },
            ]
        },
        {
            text: '查询接口',
            items: [
                {
                    text: '查询支付订单',
                    link: '/plus/gateway/interface/query/查询支付订单',
                },
                {
                    text: '查询退款订单',
                    link: '/plus/gateway/interface/query/查询退款订单',
                },
                {
                    text: '查询转账订单',
                    link: '/plus/gateway/interface/query/查询转账订单',
                },
            ]
        },
        {
            text: '消息通知',
            items: [
                {
                    text: '支付变动通知',
                    link: '/plus/gateway/interface/notice/支付订单通知',
                },
                {
                    text: '退款变动通知',
                    link: '/plus/gateway/interface/notice/退款订单通知',
                },
                {
                    text: '转账变动通知',
                    link: '/plus/gateway/interface/notice/转账订单通知',
                },
            ]
        },
    ],
    '/plus/manual/admin': [
        {
            text: '系统配置',
            items: [

                {
                    text: '平台配置',
                    link: '/plus/manual/admin/config/平台配置',
                },
                {
                    text: '服务商配置',
                    link: '/plus/manual/admin/config/服务商配置',
                },
                {
                    text: '商户管理',
                    link: '/plus/manual/admin/config/商户管理',
                },
                {
                    text: '应用配置',
                    link: '/plus/manual/admin/config/应用配置',
                },
                {
                    text: '通道配置',
                    link: '/plus/manual/admin/config/通道配置',
                },
                {
                    text: '网关支付',
                    link: '/plus/manual/admin/config/网关支付',
                },
                {
                    text: '分账配置',
                    link: '/plus/manual/admin/config/分账配置',
                },
                {
                    text: '收款终端管理',
                    link: '/plus/manual/admin/config/收款终端管理',
                },
            ],

        },
        {
            text: '交易操作',
            items: [
                {
                    text: '订单操作',
                    link: '/plus/manual/admin/trade/订单操作',
                },
                {
                    text: '交易记录',
                    link: '/plus/manual/admin/trade/交易记录',
                },
                {
                    text: '对账管理',
                    link: '/plus/manual/admin/trade/对账管理',
                },
                {
                    text: '商户通知',
                    link: '/plus/manual/admin/trade/商户通知',
                },
            ]
        }
    ],
    '/plus/manual/other': [
        {
            text: '商户端',
            items: [
                {
                    text: '商户管理',
                    link: '/plus/manual/other/merchant/商户管理',
                }
            ]
        },
        {
            text: '网关端',
            items: [
                {
                    text: '收银台',
                    link: '/plus/manual/other/gateway/分账配置',
                }
            ]
        },
        {
            text: '小程序',
            items: [
                {
                    text: '快捷支付',
                    link: '/plus/manual/other/miniapp/快捷支付',
                },
                {
                    text: '扫码退款',
                    link: '/plus/manual/other/miniapp/扫码退款',
                },
            ]
        }
    ]
}
