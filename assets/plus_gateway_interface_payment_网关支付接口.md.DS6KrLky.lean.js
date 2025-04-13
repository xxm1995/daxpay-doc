import{_ as l,c as n,o as h,aj as a,j as s,a as t}from"./chunks/framework.DbINzAG1.js";const c=JSON.parse('{"title":"网关支付接口","description":"","frontmatter":{},"headers":[],"relativePath":"plus/gateway/interface/payment/网关支付接口.md","filePath":"plus/gateway/interface/payment/网关支付接口.md","lastUpdated":1744547023000}'),e={name:"plus/gateway/interface/payment/网关支付接口.md"};function d(p,i,k,r,u,o){return h(),n("div",null,i[0]||(i[0]=[a("",8),s("table",{tabindex:"0"},[s("thead",null,[s("tr",null,[s("th",null,[t("字段名"),s("img",{width:"70/"})]),s("th",null,"变量名"),s("th",null,"必填"),s("th",null,"类型"),s("th",null,"长度"),s("th",null,"示例值"),s("th",null,[t("描述"),s("img",{width:"200/"})])])]),s("tbody",null,[s("tr",null,[s("td",null,"商户订单号"),s("td",null,"bizOrderNo"),s("td",null,"是"),s("td",null,"String"),s("td",null,"100"),s("td",null,"123"),s("td",null,"支付时客户系统传输的业务单号，需要保证唯一，可以为字符文字组合，不要包含特殊符号，订单号不可重复")]),s("tr",null,[s("td",null,"支付标题"),s("td",null,"title"),s("td",null,"是"),s("td",null,"String"),s("td",null,"100"),s("td",null,"测试支付"),s("td")]),s("tr",null,[s("td",null,"支付描述"),s("td",null,"description"),s("td",null,"否"),s("td",null,"String"),s("td",null,"500"),s("td",null,"测试支付的描述"),s("td")]),s("tr",null,[s("td",null,"网关支付类型"),s("td",null,"gatewayPayType"),s("td",null,"是"),s("td",null,"String"),s("td",null,"32"),s("td",null,"h5"),s("td",null,[t("所需要进行网关支付的方式，如PC收银台、H5收银台、聚合支付等，见常量和状态表"),s("a",{href:"/plus/gateway/interface/overview/常量和状态表.html"},"网关支付类型"),t("相关的描述")])]),s("tr",null,[s("td",null,"开启分账"),s("td",null,"allocation"),s("td",null,"否"),s("td",null,"Boolean"),s("td"),s("td",null,"true"),s("td",null,"订单是否允许分账，不传输为不开启")]),s("tr",null,[s("td",null,"开启自动分账"),s("td",null,"autoAllocation"),s("td",null,"否"),s("td",null,"Boolean"),s("td"),s("td",null,"false"),s("td",null,"是否自动对支付订单进行分账，需要开启分账字段为true才会生效")]),s("tr",null,[s("td",null,"过期时间"),s("td",null,"expiredTime"),s("td",null,"否"),s("td",null,"Long"),s("td"),s("td",null,"2024-10-24 12:00:00"),s("td",null,"订单过期时间，格式为yyyy-MM-dd HH:mm:ss，不传输为默认值，默认为当前时间往后加24小时。")]),s("tr",null,[s("td",null,"限制用户支付类型"),s("td",null,"limitPay"),s("td",null,"否"),s("td",null,"String"),s("td",null,"128"),s("td",null,"no_credit"),s("td",null,[t("限制用户支付类型, 目前支持限制信用卡，部分通道才会有效，见常量和状态表"),s("a",{href:"/plus/gateway/interface/overview/常量和状态表.html"},"限制支付类型")])]),s("tr",null,[s("td",null,"支付金额"),s("td",null,"amount"),s("td",null,"是"),s("td",null,"BigDecimal"),s("td",null,"8,2"),s("td",null,"10.12"),s("td",null,[t("要进行支付的金额,单位为"),s("strong",null,"元"),t("，保留两位小数，小数buff末尾不可为0")])]),s("tr",null,[s("td",null,"用户标识"),s("td",null,"openId"),s("td",null,"否"),s("td",null,"String"),s("td",null,"128"),s("td",null,"wxgj22ed144df11"),s("td",null,"主要用于Jsapi、小程序支付等需要用户标识才可以支付的场合")]),s("tr",null,[s("td",null,"终端设备编码"),s("td",null,"terminalNo"),s("td",null,"否"),s("td",null,"String"),s("td",null,"128"),s("td",null,"Hvbvdfg"),s("td",null,"使用被扫支付方式，部分通道要求传输扫码终端号，此处的设备为在Daxpay中管理并进行报备的终端")]),s("tr",null,[s("td",null,"附加支付参数"),s("td",null,"extraParam"),s("td",null,"否"),s("td",null,"String"),s("td",null,"2048"),s("td",{"authType:sub":""}),s("td",null,"主要用于传输各通道特有的参数数据")]),s("tr",null,[s("td",null,"商户扩展参数"),s("td",null,"attach"),s("td",null,"否"),s("td",null,"String"),s("td",null,"500"),s("td",null,"id=123332"),s("td",null,"商户扩展参数，回调时会原样返回")]),s("tr",null,[s("td",null,"同步请求地址"),s("td",null,"returnUrl"),s("td",null,"否"),s("td",null,"String"),s("td",null,"200"),s("td",null,[s("a",{href:"http://abc.cn/returnCallback",target:"_blank",rel:"noreferrer"},"http://abc.cn/returnCallback")]),s("td",null,"支付完成后，会自动跳转到设置的页面，部分场景下才会生效")]),s("tr",null,[s("td",null,"异步通知地址"),s("td",null,"notifyUrl"),s("td",null,"否"),s("td",null,"String"),s("td",null,"200"),s("td",null,[s("a",{href:"http://abc.cn/noticeCallback",target:"_blank",rel:"noreferrer"},"http://abc.cn/noticeCallback")]),s("td",null,"异步通知地址，用于商户系统接收回调消息通知")])])],-1),a("",14)]))}const g=l(e,[["render",d]]);export{c as __pageData,g as default};
