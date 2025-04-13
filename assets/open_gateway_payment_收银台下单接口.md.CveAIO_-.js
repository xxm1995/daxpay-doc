import{_ as d,c as a,o as e,aj as r}from"./chunks/framework.DbINzAG1.js";const b=JSON.parse('{"title":"收银台下单接口","description":"","frontmatter":{},"headers":[],"relativePath":"open/gateway/payment/收银台下单接口.md","filePath":"open/gateway/payment/收银台下单接口.md","lastUpdated":1744547023000}'),h={name:"open/gateway/payment/收银台下单接口.md"};function s(i,t,n,c,o,l){return e(),a("div",null,t[0]||(t[0]=[r('<h1 id="收银台下单接口" tabindex="-1">收银台下单接口 <a class="header-anchor" href="#收银台下单接口">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务系统通过收银台下单接口创建一个收银台链接，然后让用户访问收银台链接完成支付操作。通过此接口，可以简化支付接入的流程，减少开发工作量， 同时也可以提高用户体验。</p></div><blockquote><p>同样的商户订单号可以重复提交，但重复提交时参数需要与首次下单的数值一致，传输不同的值也不会生效，返回的地址也不会改变。</p></blockquote><h2 id="接口说明" tabindex="-1">接口说明 <a class="header-anchor" href="#接口说明">¶</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>请求URL</td><td><code>/unipay/checkout/create</code></td></tr><tr><td>请求方式</td><td><code>POST</code></td></tr><tr><td>请求类型</td><td><code>application/json</code></td></tr></tbody></table><h2 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数">¶</a></h2><h3 id="公共参数" tabindex="-1">公共参数 <a class="header-anchor" href="#公共参数">¶</a></h3><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必填</th><th>类型</th><th>长度</th><th>示例值</th><th>描述<img width="200/"></th></tr></thead><tbody><tr><td>应用号</td><td>appId</td><td>否</td><td>String</td><td>32</td><td>A112544225541</td><td>此次操作所要使用的支付应用号</td></tr><tr><td>用户IP</td><td>clientIp</td><td>否</td><td>String</td><td>64</td><td>127.0.0.1</td><td>支持V4和V6，部分支付方式要求必填，如调用微信支付方式时</td></tr><tr><td>随机数值</td><td>nonceStr</td><td>否</td><td>String</td><td>32</td><td>d112892e382a7093</td><td></td></tr><tr><td>签名值</td><td>sign</td><td>否</td><td>String</td><td>64</td><td>072695d112892e382a7093b81e6a52af</td><td></td></tr><tr><td>请求时间</td><td>reqTime</td><td>是</td><td>String</td><td></td><td>2024-10-24 12:00:00</td><td>请求时间和当前时间误差不要超过五分钟，时间格式 yyyy-MM-dd HH:mm:ss</td></tr></tbody></table><h3 id="业务参数" tabindex="-1">业务参数 <a class="header-anchor" href="#业务参数">¶</a></h3><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必填</th><th>类型</th><th>长度</th><th>示例值</th><th>描述<img width="200/"></th></tr></thead><tbody><tr><td>收银台类型</td><td>checkoutType</td><td>是</td><td>String</td><td>32</td><td>pc</td><td>所要生成的收银台类型，见常量和状态表<a href="/open/guides/other/常量和状态表.html">收银台类型</a>相关的描述 ,</td></tr><tr><td>商户订单号</td><td>bizOrderNo</td><td>是</td><td>String</td><td>100</td><td>123</td><td>支付时客户系统传输的业务单号，需要保证唯一，可以为字符文字组合</td></tr><tr><td>支付标题</td><td>title</td><td>是</td><td>String</td><td>100</td><td>测试支付</td><td></td></tr><tr><td>支付描述</td><td>description</td><td>否</td><td>String</td><td>500</td><td>测试支付的描述</td><td></td></tr><tr><td>开启分账</td><td>allocation</td><td>否</td><td>Boolean</td><td></td><td>true</td><td>订单是否允许分账，不传输为不开启</td></tr><tr><td>开启自动分账</td><td>autoAllocation</td><td>否</td><td>Boolean</td><td></td><td>false</td><td>是否自动对支付订单进行分账，需要开启分账字段为true才会生效</td></tr><tr><td>过期时间</td><td>expiredTime</td><td>否</td><td>Long</td><td></td><td>2024-10-24 12:00:00</td><td>订单过期时间，格式为yyyy-MM-dd HH:mm:ss，不传输为默认值，默认为当前时间往后加24小时。</td></tr><tr><td>支付金额</td><td>amount</td><td>是</td><td>BigDecimal</td><td>8,2</td><td>10.12</td><td>要进行支付的金额,单位为<strong>元</strong>，保留两位小数</td></tr><tr><td>商户扩展参数</td><td>attach</td><td>否</td><td>String</td><td>500</td><td>id=123332</td><td>商户扩展参数，回调时会原样返回</td></tr><tr><td>同步请求地址</td><td>returnUrl</td><td>否</td><td>String</td><td>200</td><td><a href="http://abc.cn/returnCallback" target="_blank" rel="noreferrer">http://abc.cn/returnCallback</a></td><td>支付完成后，会自动跳转到设置的页面</td></tr><tr><td>异步通知地址</td><td>notifyUrl</td><td>否</td><td>String</td><td>200</td><td><a href="http://abc.cn/noticeCallback" target="_blank" rel="noreferrer">http://abc.cn/noticeCallback</a></td><td>异步通知地址</td></tr></tbody></table><h2 id="响应结果" tabindex="-1">响应结果 <a class="header-anchor" href="#响应结果">¶</a></h2><h3 id="通用响应参数" tabindex="-1">通用响应参数 <a class="header-anchor" href="#通用响应参数">¶</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>状态码返回0只代表受理业务成功，业务是否成功需要看具体业务的返回信息，不为0表示受理失败，具体响应吗可以参考<a href="./../overview/返回状态码.html">返回状态码</a></p></div><table tabindex="0"><thead><tr><th>名称<img width="70/"></th><th>字段</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>状态码</td><td>code</td><td>Integer</td><td>0</td><td>默认是0，非0表明请求失败，例如签名错误等</td></tr><tr><td>提示信息</td><td>msg</td><td>String</td><td></td><td>发生错误时会有数据返回</td></tr><tr><td>业务数据</td><td>data</td><td>Json字符串</td><td></td><td>json格式数据，不同的接口返回结构不同，可以参考业务公共响应参数</td></tr><tr><td>签名</td><td>sign</td><td>String</td><td>sIV4zJVhZ4Uz</td><td>返回数据的签名值</td></tr><tr><td>响应时间</td><td>resTime</td><td>String</td><td>2024-08-08 12:12:12</td><td>数据响应的时间, 如果时间与请求时间相差5分钟以上，请排查网络和安全问题</td></tr><tr><td>追踪ID</td><td>traceId</td><td>String</td><td>sIV4zJVhZ4Uz</td><td>用于查询日志排查问题时进行快速定位</td></tr></tbody></table><h3 id="业务响应参数" tabindex="-1">业务响应参数 <a class="header-anchor" href="#业务响应参数">¶</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务数据包裹在<code>公共响应参数</code>中的<code>data</code>字段，在<code>code</code>为<code>0</code>时才会有返回数据。</p></div><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必传</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>收银台链接</td><td>url</td><td>是</td><td>String</td><td><a href="https://daxpay.cn/channel/cashier/M1723635576766/M8207639754663343" target="_blank" rel="noreferrer">https://daxpay.cn/channel/cashier/M1723635576766/M8207639754663343</a></td><td></td></tr></tbody></table><h2 id="http请求示例" tabindex="-1">HTTP请求示例 <a class="header-anchor" href="#http请求示例">¶</a></h2><h3 id="请求参数-1" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数-1">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h3 id="响应参数-成功" tabindex="-1">响应参数(成功) <a class="header-anchor" href="#响应参数-成功">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h3 id="响应参数-失败" tabindex="-1">响应参数(失败) <a class="header-anchor" href="#响应参数-失败">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="sdk请求示例" tabindex="-1">SDK请求示例 <a class="header-anchor" href="#sdk请求示例">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>使用SDK可以简化接入支付的速度</p></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div>',27)]))}const g=d(h,[["render",s]]);export{b as __pageData,g as default};
