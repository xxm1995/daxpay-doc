import{_ as l,c as n,o as h,aj as t,j as s,a as i}from"./chunks/framework.DbINzAG1.js";const g=JSON.parse('{"title":"网关付款码聚合支付接口","description":"","frontmatter":{},"headers":[],"relativePath":"multi/gateway/interface/payment/付款码聚合接口.md","filePath":"multi/gateway/interface/payment/付款码聚合接口.md","lastUpdated":1744363677000}'),k={name:"multi/gateway/interface/payment/付款码聚合接口.md"};function p(e,a,d,E,r,u){return h(),n("div",null,a[0]||(a[0]=[t('<h1 id="网关付款码聚合支付接口" tabindex="-1">网关付款码聚合支付接口 <a class="header-anchor" href="#网关付款码聚合支付接口">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务系统通过直接传输付款码，系统自动识别付款码类型后，根据后台网关支付的配置的通道和支付方式进行处理，完成付款码的支付流程。</p></div><h2 id="接口说明" tabindex="-1">接口说明 <a class="header-anchor" href="#接口说明">¶</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>请求URL</td><td><code>/unipay/gateway/aggregateBarPay</code></td></tr><tr><td>请求方式</td><td><code>POST</code></td></tr><tr><td>请求类型</td><td><code>application/json</code></td></tr></tbody></table><h2 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数">¶</a></h2><h3 id="业务参数" tabindex="-1">业务参数 <a class="header-anchor" href="#业务参数">¶</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>设置参数时，不要忘了设置公共请求参数<a href="./../overview/调用说明.html">调用说明</a>，未做特殊说明所有接口都需要传输</p></div>',7),s("table",{tabindex:"0"},[s("thead",null,[s("tr",null,[s("th",null,[i("字段名"),s("img",{width:"70/"})]),s("th",null,"变量名"),s("th",null,"必填"),s("th",null,"类型"),s("th",null,"长度"),s("th",null,"示例值"),s("th",null,[i("描述"),s("img",{width:"200/"})])])]),s("tbody",null,[s("tr",null,[s("td",null,"商户订单号"),s("td",null,"bizOrderNo"),s("td",null,"是"),s("td",null,"String"),s("td",null,"100"),s("td",null,"123"),s("td",null,"支付时客户系统传输的业务单号，需要保证唯一，可以为字符文字组合，不要包含特殊符号，订单号不可重复")]),s("tr",null,[s("td",null,"支付标题"),s("td",null,"title"),s("td",null,"是"),s("td",null,"String"),s("td",null,"100"),s("td",null,"测试支付"),s("td")]),s("tr",null,[s("td",null,"付款码"),s("td",null,"authCode"),s("td",null,"否"),s("td",null,"String"),s("td",null,"128"),s("td",null,"6117665200152"),s("td",null,"被扫支付方式所需要传输的参数")]),s("tr",null,[s("td",null,"终端设备编码"),s("td",null,"terminalNo"),s("td",null,"否"),s("td",null,"String"),s("td",null,"128"),s("td",null,"Hvbvdfg"),s("td",null,"使用被扫支付方式，部分通道要求传输扫码终端号，此处的设备为在Daxpay中管理并进行报备的终端")]),s("tr",null,[s("td",null,"支付描述"),s("td",null,"description"),s("td",null,"否"),s("td",null,"String"),s("td",null,"500"),s("td",null,"测试支付的描述"),s("td")]),s("tr",null,[s("td",null,"开启分账"),s("td",null,"allocation"),s("td",null,"否"),s("td",null,"Boolean"),s("td"),s("td",null,"true"),s("td",null,"订单是否允许分账，不传输为不开启")]),s("tr",null,[s("td",null,"开启自动分账"),s("td",null,"autoAllocation"),s("td",null,"否"),s("td",null,"Boolean"),s("td"),s("td",null,"false"),s("td",null,"是否自动对支付订单进行分账，需要开启分账字段为true才会生效")]),s("tr",null,[s("td",null,"过期时间"),s("td",null,"expiredTime"),s("td",null,"否"),s("td",null,"Long"),s("td"),s("td",null,"2024-10-24 12:00:00"),s("td",null,"订单过期时间，格式为yyyy-MM-dd HH:mm:ss，不传输为默认值，默认为当前时间往后加24小时。")]),s("tr",null,[s("td",null,"限制用户支付类型"),s("td",null,"limitPay"),s("td",null,"否"),s("td",null,"String"),s("td",null,"128"),s("td",null,"no_credit"),s("td",null,[i("限制用户支付类型, 目前支持限制信用卡，部分通道才会有效，见常量和状态表"),s("a",{href:"/multi/gateway/interface/overview/常量和状态表.html"},"限制支付类型")])]),s("tr",null,[s("td",null,"支付金额"),s("td",null,"amount"),s("td",null,"是"),s("td",null,"BigDecimal"),s("td",null,"8,2"),s("td",null,"10.12"),s("td",null,[i("要进行支付的金额,单位为"),s("strong",null,"元"),i("，保留两位小数，小数buff末尾不可为0")])]),s("tr",null,[s("td",null,"附加支付参数"),s("td",null,"extraParam"),s("td",null,"否"),s("td",null,"String"),s("td",null,"2048"),s("td",{"authType:sub":""}),s("td",null,"主要用于传输各通道特有的参数数据")]),s("tr",null,[s("td",null,"商户扩展参数"),s("td",null,"attach"),s("td",null,"否"),s("td",null,"String"),s("td",null,"500"),s("td",null,"id=123332"),s("td",null,"商户扩展参数，回调时会原样返回")]),s("tr",null,[s("td",null,"异步通知地址"),s("td",null,"notifyUrl"),s("td",null,"否"),s("td",null,"String"),s("td",null,"200"),s("td",null,[s("a",{href:"http://abc.cn/noticeCallback",target:"_blank",rel:"noreferrer"},"http://abc.cn/noticeCallback")]),s("td",null,"异步通知地址，用于商户系统接收回调消息通知")])])],-1),t(`<h2 id="响应结果" tabindex="-1">响应结果 <a class="header-anchor" href="#响应结果">¶</a></h2><h3 id="业务响应参数" tabindex="-1">业务响应参数 <a class="header-anchor" href="#业务响应参数">¶</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务数据包裹在<code>公共响应参数</code>中的<code>data</code>字段，在<code>code</code>为<code>0</code>时才会有返回数据。</p></div><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必传</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>网关支付链接</td><td>url</td><td>否</td><td>String</td><td><a href="https://daxpay.cn/gateway/cashier/M1723635576766/M8207639754663343" target="_blank" rel="noreferrer">https://daxpay.cn/gateway/cashier/M1723635576766/M8207639754663343</a></td><td></td></tr><tr><td>收银台发起信息</td><td>payBody</td><td>否</td><td>String</td><td></td><td>暂时未使用</td></tr></tbody></table><h2 id="http请求示例" tabindex="-1">HTTP请求示例 <a class="header-anchor" href="#http请求示例">¶</a></h2><h3 id="请求参数-1" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数-1">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;bizOrderNo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SDK_1744355882930&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试聚合付款码支付&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是支付备注&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;authCode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;66888&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;terminalNo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;66888&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;allocation&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;amount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;attach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{回调参数}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;notifyUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://127.0.0.1:10880/test/callback/notify&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;mchNo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;M1723635576766&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;appId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;M8207639754663343&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;clientIp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;sign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;59525a1c1c503257b0dbb32dba02afe4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;reqTime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2025-04-11 15:18:02&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应参数-成功" tabindex="-1">响应参数(成功) <a class="header-anchor" href="#响应参数-成功">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;bizOrderNo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SDK_1744185809447&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;orderNo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DEV_P2025040916033370000024&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;sign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4a1308f097398c01c06a84ef11fc6eba&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;resTime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2025-04-09 16:03:35&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;traceId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foX7glq8rSMg&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="响应参数-失败" tabindex="-1">响应参数(失败) <a class="header-anchor" href="#响应参数-失败">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;不支持的条码类型&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;sign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;061d3dd13a6f9bc5b1d62322d2398f1a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;resTime&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2025-04-11 15:17:13&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;traceId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;4zXFpI0ZkBQM&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="sdk请求示例" tabindex="-1">SDK请求示例 <a class="header-anchor" href="#sdk请求示例">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>使用SDK可以简化接入支付的速度</p></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aggregateBarPay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        AggregateBarPayParam param </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AggregateBarPayParam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setClientIp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBizOrderNo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SDK_&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> System.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">currentTimeMillis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTitle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试聚合付款码支付&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setDescription</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是支付备注&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAmount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BigDecimal.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">valueOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAttach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{回调参数}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAllocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTerminalNo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;66888&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAuthCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;66888&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        param.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setNotifyUrl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://127.0.0.1:19999/test/callback/notify&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        DaxResult&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">PayResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; execute </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DaxPayKit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(param);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 验签</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;验签结果: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DaxPayKit.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">verifySign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(execute));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(JsonUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toJsonStr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(execute));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div>`,14)]))}const y=l(k,[["render",p]]);export{g as __pageData,y as default};
