import{_ as d,c as a,a6 as e,o as r}from"./chunks/framework.dnLRFVS3.js";const b=JSON.parse('{"title":"统一支付接口","description":"","frontmatter":{},"headers":[],"relativePath":"single/gateway/payment/统一支付接口.md","filePath":"single/gateway/payment/统一支付接口.md","lastUpdated":1734484660000}'),h={name:"single/gateway/payment/统一支付接口.md"};function i(n,t,o,s,c,p){return r(),a("div",null,t[0]||(t[0]=[e('<h1 id="统一支付接口" tabindex="-1">统一支付接口 <a class="header-anchor" href="#统一支付接口">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务系统通过下单接口发起收款，网关会根据系统中的配置和业务系统传输的参数，选择的对应的支付通道和支付方式发起下单请求。 同时网关根据不同的支付方式返回对应发起支付使用的参数，业务系统使用该参数参数来调起支付。</p></div><blockquote><p>同样的商户订单号可以重复提交，但重复提交时只有 <code>支付通道</code>、<code>支付方式</code>、<code>商户扩展参数</code>、<code>同步请求地址</code> 、<code>异步通知地址</code> 、 <code>用户IP</code> 、<code>签名值</code> 、<code>请求时间</code>字段可以传输不同的值，其他参数需要与首次下单的数值一致，传输不同的值也不会生效。</p></blockquote><h2 id="接口说明" tabindex="-1">接口说明 <a class="header-anchor" href="#接口说明">¶</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>请求URL</td><td><code>/unipay/pay</code></td></tr><tr><td>请求方式</td><td><code>POST</code></td></tr><tr><td>请求类型</td><td><code>application/json</code></td></tr></tbody></table><h2 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数">¶</a></h2><h3 id="公共参数" tabindex="-1">公共参数 <a class="header-anchor" href="#公共参数">¶</a></h3><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必填</th><th>类型</th><th>长度</th><th>示例值</th><th>描述<img width="200/"></th></tr></thead><tbody><tr><td>应用号</td><td>appId</td><td>否</td><td>String</td><td>32</td><td>A112544225541</td><td>此次操作所要使用的支付应用号</td></tr><tr><td>用户IP</td><td>clientIp</td><td>否</td><td>String</td><td>64</td><td>127.0.0.1</td><td>支持V4和V6，部分支付方式要求必填，如调用微信支付方式时</td></tr><tr><td>随机数值</td><td>nonceStr</td><td>否</td><td>String</td><td>32</td><td>d112892e382a7093</td><td></td></tr><tr><td>签名值</td><td>sign</td><td>否</td><td>String</td><td>64</td><td>072695d112892e382a7093b81e6a52af</td><td></td></tr><tr><td>请求时间</td><td>reqTime</td><td>是</td><td>String</td><td></td><td>2024-10-24 12:00:00</td><td>请求时间和当前时间误差不要超过五分钟，时间格式 yyyy-MM-dd HH:mm:ss</td></tr></tbody></table><h3 id="业务参数" tabindex="-1">业务参数 <a class="header-anchor" href="#业务参数">¶</a></h3><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必填</th><th>类型</th><th>长度</th><th>示例值</th><th>描述<img width="200/"></th></tr></thead><tbody><tr><td>商户订单号</td><td>bizOrderNo</td><td>是</td><td>String</td><td>100</td><td>123</td><td>支付时客户系统传输的业务单号，需要保证唯一，可以为字符文字组合</td></tr><tr><td>支付标题</td><td>title</td><td>是</td><td>String</td><td>100</td><td>测试支付</td><td></td></tr><tr><td>支付描述</td><td>description</td><td>否</td><td>String</td><td>500</td><td>测试支付的描述</td><td></td></tr><tr><td>开启分账</td><td>allocation</td><td>否</td><td>Boolean</td><td></td><td>true</td><td>订单是否允许分账，不传输为不开启</td></tr><tr><td>开启自动分账</td><td>autoAllocation</td><td>否</td><td>Boolean</td><td></td><td>false</td><td>是否自动对支付订单进行分账，需要开启分账字段为true才会生效</td></tr><tr><td>过期时间</td><td>expiredTime</td><td>否</td><td>Long</td><td></td><td>2024-10-24 12:00:00</td><td>订单过期时间，格式为yyyy-MM-dd HH:mm:ss，不传输为默认值，默认为当前时间往后加24小时。</td></tr><tr><td>支付通道</td><td>channel</td><td>是</td><td>String</td><td>20</td><td>ali_pay</td><td>要进行支付的通道编码，如微信支付、支付宝支付等。见常量和状态表<a href="/single/guides/other/常量和状态表.html">支付通道</a>相关的描述</td></tr><tr><td>支付方式</td><td>method</td><td>是</td><td>String</td><td>20</td><td>qrcode</td><td>进行支付的方式编码，如扫码支付、条码支付等。见常量和状态表<a href="/single/guides/other/常量和状态表.html">支付方式</a>相关的描述</td></tr><tr><td>支付金额</td><td>amount</td><td>是</td><td>BigDecimal</td><td>8,2</td><td>10.12</td><td>要进行支付的金额,单位为<strong>元</strong>，保留两位小数</td></tr><tr><td>附加支付参数</td><td>extraParam</td><td>否</td><td>ChannelParam具体实现类</td><td>2048</td><td></td><td>见下方支付<strong>ChannelParam参数</strong>说明，没用到这个参数可以不用传</td></tr><tr><td>商户扩展参数</td><td>attach</td><td>否</td><td>String</td><td>500</td><td>id=123332</td><td>商户扩展参数，回调时会原样返回</td></tr><tr><td>同步请求地址</td><td>returnUrl</td><td>否</td><td>String</td><td>200</td><td><a href="http://abc.cn/returnCallback" target="_blank" rel="noreferrer">http://abc.cn/returnCallback</a></td><td>支付完成后，会自动跳转到设置的页面</td></tr><tr><td>退出地址</td><td>quitUrl</td><td>否</td><td>String</td><td>200</td><td><a href="http://abc.com/quit" target="_blank" rel="noreferrer">http://abc.com/quit</a></td><td>用户付款中途退出返回商户网站的地址(部分支付场景中可用)</td></tr><tr><td>异步通知地址</td><td>notifyUrl</td><td>否</td><td>String</td><td>200</td><td><a href="http://abc.cn/noticeCallback" target="_blank" rel="noreferrer">http://abc.cn/noticeCallback</a></td><td>异步通知地址</td></tr></tbody></table><h3 id="channelparam参数" tabindex="-1">ChannelParam参数 <a class="header-anchor" href="#channelparam参数">¶</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>支付时有一些支付方式需要额外传输一些参数，例如条码支付时就需要传输条码值，微信相关的支付需要传输<code>OpenId</code>等，所以对这些格式不确定的参数， 通过<code>ChannelParam</code>参数项进行传输。目前提供下面三种参数，其他类型的见扩展包文档。</p></div><h4 id="alipayparam-支付宝参数" tabindex="-1">AliPayParam(支付宝参数) <a class="header-anchor" href="#alipayparam-支付宝参数">¶</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>authCode</td><td>String</td><td>授权码，条码支付时主动扫描用户的付款码</td></tr></tbody></table><h4 id="wechatpayparam-微信支付参数" tabindex="-1">WeChatPayParam(微信支付参数) <a class="header-anchor" href="#wechatpayparam-微信支付参数">¶</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>openId</td><td>String</td><td>微信openId，微信公众号支付或者小程序支付时需要进行传入</td></tr><tr><td>authCode</td><td>String</td><td>授权码，条码支付时主动扫描用户的付款码</td></tr></tbody></table><h4 id="unionpayparam-云闪付支付参数" tabindex="-1">UnionPayParam(云闪付支付参数) <a class="header-anchor" href="#unionpayparam-云闪付支付参数">¶</a></h4><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>authCode</td><td>String</td><td>授权码，条码支付时主动扫描用户的付款码</td></tr></tbody></table><h2 id="响应结果" tabindex="-1">响应结果 <a class="header-anchor" href="#响应结果">¶</a></h2><h3 id="通用响应参数" tabindex="-1">通用响应参数 <a class="header-anchor" href="#通用响应参数">¶</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>状态码返回0只代表受理业务成功，业务是否成功需要看具体业务的返回信息，不为0表示受理失败，具体响应吗可以参考<a href="./../overview/返回状态码.html">返回状态码</a></p></div><table tabindex="0"><thead><tr><th>名称<img width="70/"></th><th>字段</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>状态码</td><td>code</td><td>Integer</td><td>0</td><td>默认是0，非0表明请求失败，例如签名错误等</td></tr><tr><td>提示信息</td><td>msg</td><td>String</td><td></td><td>发生错误时会有数据返回</td></tr><tr><td>业务数据</td><td>data</td><td>Json字符串</td><td></td><td>json格式数据，不同的接口返回结构不同，可以参考业务公共响应参数</td></tr><tr><td>签名</td><td>sign</td><td>String</td><td>sIV4zJVhZ4Uz</td><td>返回数据的签名值</td></tr><tr><td>响应时间</td><td>resTime</td><td>String</td><td>2024-08-08 12:12:12</td><td>数据响应的时间, 如果时间与请求时间相差5分钟以上，请排查网络和安全问题</td></tr><tr><td>追踪ID</td><td>traceId</td><td>String</td><td>sIV4zJVhZ4Uz</td><td>用于查询日志排查问题时进行快速定位</td></tr></tbody></table><h3 id="业务响应参数" tabindex="-1">业务响应参数 <a class="header-anchor" href="#业务响应参数">¶</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务数据包裹在<code>公共响应参数</code>中的<code>data</code>字段，在<code>code</code>为<code>0</code>时才会有返回数据。</p></div><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必传</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>商户订单号</td><td>bizOrderNo</td><td>是</td><td>String</td><td>1753370980523384832</td><td>发起支付时传输的商户订单号</td></tr><tr><td>订单号</td><td>orderNo</td><td>是</td><td>String</td><td>true</td><td>支付系统生成的支付订单号</td></tr><tr><td>支付状态</td><td>status</td><td>否</td><td>String</td><td>pay_success</td><td>见<a href="/single/guides/other/常量和状态表.html">常量和状态表</a>相关的描述</td></tr><tr><td>支付参数体</td><td>payBody</td><td>否</td><td>String</td><td>weixin://wxpay/bizpayurl?pr=QimHZC7zz</td><td>用于用户终端发起支付请求数据, 是一个Json字符串, 需要根据不同的支付通道和支付方式进行处理</td></tr></tbody></table><h2 id="paybody数据结构说明" tabindex="-1">PayBody数据结构说明 <a class="header-anchor" href="#paybody数据结构说明">¶</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>不同的通道和支付方式返回的支付参数体有所区别，需要根据不同的支付场景进行处理, 下面是各个支付通道和支付方式的返回参数体介绍</p></div><table tabindex="0"><thead><tr><th>支付通道</th><th>支付方式</th><th>描述</th><th style="text-align:left;"></th><th>实例</th></tr></thead><tbody><tr><td>支付宝</td><td>电脑/扫码支付/wap支付</td><td>返回的是一个URL链接, 可以直接进行支付</td><td style="text-align:left;"></td><td></td></tr><tr><td>支付宝</td><td>App</td><td>返回的是一个签名字符串, 通过签名字符串调起支付</td><td style="text-align:left;"></td><td></td></tr><tr><td>支付宝</td><td>Jsapi</td><td>返回的是支付宝交易号, 使用支付宝交易号调起支付</td><td style="text-align:left;"></td><td></td></tr><tr><td>微信</td><td>扫码支付</td><td>返回的是一个URL链接, 可以直接进行支付</td><td style="text-align:left;"></td><td></td></tr><tr><td>微信</td><td>wap支付</td><td>返回的是一个URL链接, 可以直接进行支付</td><td style="text-align:left;"></td><td></td></tr><tr><td>微信</td><td>Jsapi</td><td>返回的是个Map结构的Json字符串, 需要根据参数调起支付</td><td style="text-align:left;"></td><td></td></tr><tr><td>微信</td><td>App</td><td>返回的是个Map结构的Json字符串, 需要根据参数调起支付</td><td style="text-align:left;"></td><td></td></tr><tr><td>云闪付</td><td>扫码支付</td><td>返回的是一个URL链接, 可以直接进行支付</td><td style="text-align:left;"></td><td></td></tr></tbody></table><h3 id="支付宝app返回值" tabindex="-1">支付宝App返回值 <a class="header-anchor" href="#支付宝app返回值">¶</a></h3><blockquote><p>返回的是一个签名字符串: app_id=2017060101317939&amp;biz_content=%7B%22time_expire%22%3A%222016-12-31+10%3A05%3A00%22%2C%22extend_params%22%3A%22%22%2C%22query_options%22%3A%22%5B%5C%22hyb_amount%5C%22%2C%5C%22enterprise_pay_info%5C%22%5D%22%2C%22subject%22%3A%22%E5%A4%A7%E4%B9%90%E9%80%8F%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22body%22%3A%22Iphone6+16G%22%2C%22passback_params%22%3A%22merchantBizType%253d3C%2526merchantBizNo%253d2016010101111%22%2C%22specified_channel%22%3A%22pcredit%22%2C%22goods_detail%22%3A%22%22%2C%22merchant_order_no%22%3A%2220161008001%22%2C%22enable_pay_channels%22%3A%22pcredit%2CmoneyFund%2CdebitCardExpress%22%2C%22out_trade_no%22%3A%2270501111111S001111119%22%2C%22ext_user_info%22%3A%22%22%2C%22total_amount%22%3A%229.00%22%2C%22timeout_express%22%3A%2290m%22%2C%22disable_pay_channels%22%3A%22pcredit%2CmoneyFund%2CdebitCardExpress%22%2C%22agreement_sign_params%22%3A%22%22%7D&amp;charset=UTF-8&amp;format=json&amp;method=alipay.trade.app.pay&amp;sign=ERITJKEIJKJHKKKKKKKHJEREEEEEEEEEEE&amp;sign_type=RSA2&amp;timestamp=2014-07-24+03%3A07%3A50&amp;version=1.0</p><p>参考 <a href="https://opendocs.alipay.com/open/01dcc0?pathHash=cf89b2be" target="_blank" rel="noreferrer">支付宝APP接入文档</a> 进行调起支付</p></blockquote><h3 id="微信jsapi结构" tabindex="-1">微信Jsapi结构 <a class="header-anchor" href="#微信jsapi结构">¶</a></h3><table tabindex="0"><thead><tr><th>字段</th><th>名称</th><th>备注</th></tr></thead><tbody><tr><td>appid</td><td>应用id</td><td>微信开放平台审核通过的移动应用AppID 。</td></tr><tr><td>timeStamp</td><td>时间戳</td><td>时间戳，标准北京时间，时区为东八区, 自1970年1月1日 0点0分0秒以来的秒数</td></tr><tr><td>nonceStr</td><td>随机字符串</td><td></td></tr><tr><td>package</td><td>预支付ID拼接值</td><td>JSAPI下单接口返回的prepay_id参数值进行拼接, 格式如：prepay_id=***</td></tr><tr><td>signType</td><td>签名类型</td><td>默认为RSA</td></tr><tr><td>paySign</td><td>签名</td><td>使用字段AppID、timeStamp、nonceStr、package计算得出的签名值</td></tr></tbody></table><h3 id="微信app结构" tabindex="-1">微信App结构 <a class="header-anchor" href="#微信app结构">¶</a></h3><table tabindex="0"><thead><tr><th>字段</th><th>名称</th><th>备注</th></tr></thead><tbody><tr><td>appid</td><td>应用id</td><td>微信开放平台审核通过的移动应用AppID 。</td></tr><tr><td>partnerid</td><td>商户号mchid</td><td>请填写商户号mchid对应的值。</td></tr><tr><td>prepayid</td><td>交易会话ID</td><td>微信返回的支付交易会话ID，该值有效期为2小时</td></tr><tr><td>package</td><td>package</td><td>暂填写固定值Sign=WXPay</td></tr><tr><td>nonceStr</td><td>随机字符串</td><td></td></tr><tr><td>timeStamp</td><td>时间戳</td><td>时间戳，标准北京时间，时区为东八区, 自1970年1月1日 0点0分0秒以来的秒数</td></tr><tr><td>sign</td><td>签名</td><td>使用字段AppID、timeStamp、nonceStr、prepayid计算得出的签名值 注意：取值RSA格式</td></tr></tbody></table><h2 id="http请求示例" tabindex="-1">HTTP请求示例 <a class="header-anchor" href="#http请求示例">¶</a></h2><h3 id="请求参数-1" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数-1">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h3 id="响应参数-成功" tabindex="-1">响应参数(成功) <a class="header-anchor" href="#响应参数-成功">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h3 id="响应参数-失败" tabindex="-1">响应参数(失败) <a class="header-anchor" href="#响应参数-失败">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="sdk请求示例" tabindex="-1">SDK请求示例 <a class="header-anchor" href="#sdk请求示例">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>使用SDK可以简化接入支付的速度</p></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div>',44)]))}const m=d(h,[["render",i]]);export{b as __pageData,m as default};
