import{_ as d,c as a,a6 as e,o as r}from"./chunks/framework.dnLRFVS3.js";const g=JSON.parse('{"title":"转账订单查询接口","description":"","frontmatter":{},"headers":[],"relativePath":"single/gateway/query/查询转账订单.md","filePath":"single/gateway/query/查询转账订单.md","lastUpdated":1734484660000}'),s={name:"single/gateway/query/查询转账订单.md"};function i(h,t,n,o,c,l){return r(),a("div",null,t[0]||(t[0]=[e('<h1 id="转账订单查询接口" tabindex="-1">转账订单查询接口 <a class="header-anchor" href="#转账订单查询接口">¶</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>用于发起转账后，可以通过该接口主动查询转账订单的状态和信息，完成下一步的业务逻辑。</p></div><h2 id="接口说明" tabindex="-1">接口说明 <a class="header-anchor" href="#接口说明">¶</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>请求URL</td><td><code>/unipay/query/transferOrder</code></td></tr><tr><td>请求方式</td><td><code>POST</code></td></tr><tr><td>请求类型</td><td><code>application/json</code></td></tr></tbody></table><h2 id="请求参数" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数">¶</a></h2><h3 id="公共参数" tabindex="-1">公共参数 <a class="header-anchor" href="#公共参数">¶</a></h3><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必填</th><th>类型</th><th>长度</th><th>示例值</th><th>描述<img width="200/"></th></tr></thead><tbody><tr><td>应用号</td><td>appId</td><td>否</td><td>String</td><td>32</td><td>A112544225541</td><td>此次操作所要使用的支付应用号</td></tr><tr><td>用户IP</td><td>clientIp</td><td>否</td><td>String</td><td>64</td><td>127.0.0.1</td><td>支持V4和V6，部分支付方式要求必填，如调用微信支付方式时</td></tr><tr><td>随机数值</td><td>nonceStr</td><td>否</td><td>String</td><td>32</td><td>d112892e382a7093</td><td></td></tr><tr><td>签名值</td><td>sign</td><td>否</td><td>String</td><td>64</td><td>072695d112892e382a7093b81e6a52af</td><td></td></tr><tr><td>请求时间</td><td>reqTime</td><td>是</td><td>String</td><td></td><td>2024-10-24 12:00:00</td><td>请求时间和当前时间误差不要超过五分钟，时间格式 yyyy-MM-dd HH:mm:ss</td></tr></tbody></table><h3 id="业务参数" tabindex="-1">业务参数 <a class="header-anchor" href="#业务参数">¶</a></h3><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必填</th><th>类型</th><th>长度</th><th>示例值</th><th>描述<img width="200/"></th></tr></thead><tbody><tr><td>转账号</td><td>transferNo</td><td>否</td><td>String</td><td>32</td><td>R00123</td><td>转账号和商户转账号不能同时为空，同时传输时以转账号为准</td></tr><tr><td>商户转账号</td><td>bizTransferNo</td><td>否</td><td>String</td><td>100</td><td>DEVR24051019590563000001</td><td>转账号和商户转账号不能同时为空，同时传输时以转账号为准</td></tr><tr><td>用户IP</td><td>clientIp</td><td>否</td><td>String</td><td>64</td><td>127.0.0.1</td><td>支持V4和V6</td></tr><tr><td>随机数值</td><td>nonceStr</td><td>否</td><td>String</td><td>32</td><td>d112892e382a7093</td><td></td></tr><tr><td>签名值</td><td>sign</td><td>否</td><td>String</td><td>64</td><td>072695d112892e382a7093b81e6a52af</td><td></td></tr><tr><td>请求时间</td><td>reqTime</td><td>是</td><td>Long</td><td></td><td>123123121</td><td>使用时间戳(秒级)</td></tr></tbody></table><h2 id="响应结果" tabindex="-1">响应结果 <a class="header-anchor" href="#响应结果">¶</a></h2><h3 id="通用响应参数" tabindex="-1">通用响应参数 <a class="header-anchor" href="#通用响应参数">¶</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>状态码返回0只代表受理业务成功，业务是否成功需要看具体业务的返回信息，不为0表示受理失败，具体响应吗可以参考<a href="./../overview/返回状态码.html">返回状态码</a></p></div><table tabindex="0"><thead><tr><th>名称<img width="70/"></th><th>字段</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>状态码</td><td>code</td><td>Integer</td><td>0</td><td>默认是0，非0表明请求失败，例如签名错误等</td></tr><tr><td>提示信息</td><td>msg</td><td>String</td><td></td><td>发生错误时会有数据返回</td></tr><tr><td>业务数据</td><td>data</td><td>Json字符串</td><td></td><td>json格式数据，不同的接口返回结构不同，可以参考业务公共响应参数</td></tr><tr><td>签名</td><td>sign</td><td>String</td><td>sIV4zJVhZ4Uz</td><td>返回数据的签名值</td></tr><tr><td>响应时间</td><td>resTime</td><td>String</td><td>2024-08-08 12:12:12</td><td>数据响应的时间, 如果时间与请求时间相差5分钟以上，请排查网络和安全问题</td></tr><tr><td>追踪ID</td><td>traceId</td><td>String</td><td>sIV4zJVhZ4Uz</td><td>用于查询日志排查问题时进行快速定位</td></tr></tbody></table><h3 id="业务响应参数" tabindex="-1">业务响应参数 <a class="header-anchor" href="#业务响应参数">¶</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>业务数据包裹在<code>公共响应参数</code>中的<code>data</code>字段，在<code>code</code>为<code>0</code>时才会有返回数据。</p></div><table tabindex="0"><thead><tr><th>字段名<img width="70/"></th><th>变量名</th><th>必传</th><th>类型</th><th>示例值</th><th>描述</th></tr></thead><tbody><tr><td>转账号</td><td>transferNo</td><td>是</td><td>String</td><td>DEVP1753370980523384832</td><td></td></tr><tr><td>商户转账号</td><td>bizTransferNo</td><td>是</td><td>String</td><td></td><td></td></tr><tr><td>通道转账号</td><td>outTransferNo</td><td>是</td><td>String</td><td></td><td></td></tr><tr><td>转账通道</td><td>channel</td><td>是</td><td>String</td><td>ali_pay</td><td></td></tr><tr><td>转账金额</td><td>amount</td><td>是</td><td>BigDecimal</td><td>10.12</td><td>进行转账的金额,单位为<strong>元</strong>，保留两位小数</td></tr><tr><td>转账标题</td><td>title</td><td>是</td><td>String</td><td></td><td></td></tr><tr><td>转账原因</td><td>reason</td><td>否</td><td>String</td><td>测试转账</td><td></td></tr><tr><td>转账类型</td><td>transferType</td><td>否</td><td>String</td><td></td><td>转账类型, 微信使用，见TransferTypeEnum</td></tr><tr><td>收款人类型</td><td>payeeType</td><td>是</td><td>String</td><td></td><td>见TransferPayeeTypeEnum</td></tr><tr><td>收款人账号</td><td>payeeAccount</td><td>是</td><td>String</td><td></td><td></td></tr><tr><td>收款人姓名</td><td>payeeName</td><td>是</td><td>String</td><td></td><td></td></tr><tr><td>转账状态</td><td>status</td><td>是</td><td>String</td><td>success</td><td>见TransferStatusEnum</td></tr><tr><td>订单金额</td><td>orderAmount</td><td>是</td><td>BigDecimal</td><td>10.12</td><td>可以进行退款的金额,单位为<strong>元</strong>，保留两位小数</td></tr><tr><td>完成时间</td><td>finishTime</td><td>否</td><td>String</td><td>2024-10-24 12:00:00</td><td>时间格式 yyyy-MM-dd HH:mm:ss</td></tr><tr><td>商户扩展参数</td><td>attach</td><td>否</td><td>String</td><td>500</td><td>商户传入的扩展参数</td></tr><tr><td>错误信息</td><td>errorMsg</td><td>否</td><td>String</td><td>退款订单不存在</td><td>返回订单的错误信息</td></tr></tbody></table><h2 id="http请求示例" tabindex="-1">HTTP请求示例 <a class="header-anchor" href="#http请求示例">¶</a></h2><h3 id="请求参数-1" tabindex="-1">请求参数 <a class="header-anchor" href="#请求参数-1">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h3 id="响应参数-成功" tabindex="-1">响应参数(成功) <a class="header-anchor" href="#响应参数-成功">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h3 id="响应参数-失败" tabindex="-1">响应参数(失败) <a class="header-anchor" href="#响应参数-失败">¶</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="sdk请求示例" tabindex="-1">SDK请求示例 <a class="header-anchor" href="#sdk请求示例">¶</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>使用SDK可以简化接入支付的速度</p></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div>',26)]))}const b=d(s,[["render",i]]);export{g as __pageData,b as default};
