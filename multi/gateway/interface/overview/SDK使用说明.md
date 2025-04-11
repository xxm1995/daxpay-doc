# SDK使用说明

::: tip 提示
SDK是基于Java8开发的，除依赖`hutool`工具包外，不与任何第三方框架或工具强绑定，可以放心引入到项目中。
:::

## 引入SDK

在项目中引入sdk依赖，SDK与网关项目版本号保持一致，如网关项目为3.0.0，sdk版本为3.0.0，跨版本可能会产生兼容性问题。

最近版本见 [maven中央仓库](https://mvnrepository.com/artifact/cn.daxpay/daxpay-plus-sdk)

```xml
  <dependency>
    <groupId>cn.daxpay</groupId>
    <artifactId>daxpay-plus-sdk</artifactId>
    <version>${latest.version}</version>
  </dependency>
```

## 初始化SDK
> 在使用SDK时，需要先进行初始化SDK，初始化SDK时需要传入网关地址、应用号和应用密钥等信息，网关地址为部署支付网关的地址，其他项需要与应用配置一致。

```java
    public void init() {
        // 初始化支付配置
        DaxPayConfig config = DaxPayConfig.builder()
                .serviceUrl("http://127.0.0.1:19999")
                .signSecret("123456")
                .signType(SignTypeEnum.MD5)
                .mchNo("M1723635576766")
                .appId("M8207639754663343")
                .build();
        DaxPayKit.initConfig(config);
    }
```
## 使用说明
> SDK是通过封装HTTP请求，通过调用接口网关生成请求，如：创建订单，支付订单等。具体每种接口的调用方法，请参考接口文档中的SKD使用说明。

### DaxPayKit
`DaxPayKit`是SDK的核心类，通过调用核心类的接口，可以实现各种功能。`DaxPayKit`对外提供`execute`方法， 默认启用请求时签名功能，可以手动进行关闭。
会根据传入的参数不同返回不同的响应，同时也可以使用`verifySign`进行参数的验签。

### PaySignUtil
`PaySignUtil`是SDK的签名工具类，提供对请求参数的签名功能，如 `MD5`、`HmacSHA256`和`SM3` 三种种，具体方法可以查看源码。


## 简单支付样例
```java
package cn.daxpay.multi.sdk.trade;

import cn.daxpay.multi.sdk.code.ChannelEnum;
import cn.daxpay.multi.sdk.code.PayMethodEnum;
import cn.daxpay.multi.sdk.code.SignTypeEnum;
import cn.daxpay.multi.sdk.net.DaxPayConfig;
import cn.daxpay.multi.sdk.net.DaxPayKit;
import cn.daxpay.multi.sdk.param.channel.AlipayParam;
import cn.daxpay.multi.sdk.param.channel.WechatPayParam;
import cn.daxpay.multi.sdk.param.trade.pay.PayParam;
import cn.daxpay.multi.sdk.response.DaxPayResult;
import cn.daxpay.multi.sdk.result.trade.pay.PayResult;
import cn.daxpay.multi.sdk.util.JsonUtil;
import org.junit.Before;
import org.junit.Test;

/**
 * 统一支付接口
 * @author xxm
 * @since 2024/2/5
 */
public class PayOrderTest {

    @Before
    public void init() {
        // 初始化支付配置
        DaxPayConfig config = DaxPayConfig.builder()
                .serviceUrl("http://127.0.0.1:19999")
                .signSecret("123456")
                .mchNo("M1723635576766")
                .appId("A7934041241299655")
                .signType(SignTypeEnum.MD5)
                .build();
        DaxPayKit.initConfig(config);
    }

     /**
     * 微信支付(二维码扫码)
     */
    @Test
    public void wxQrPay() {
        PayParam param = new PayParam();
        param.setClientIp("127.0.0.1");
        param.setBizOrderNo("SDK_"+ System.currentTimeMillis());
        param.setTitle("测试微信扫码支付");
        param.setDescription("这是支付备注");
        param.setAmount(BigDecimal.valueOf(0.01));
        param.setChannel(ChannelEnum.WECHAT.getCode());
        param.setMethod(PayMethodEnum.QRCODE.getCode());
        param.setAttach("{回调参数}");
        param.setAllocation(false);
        param.setReturnUrl("https://abc.com/returnurl");
        param.setNotifyUrl("http://127.0.0.1:10880/test/callback/notify");

        DaxPayResult<PayResult> execute = DaxPayKit.execute(param);
        // 验签
        System.out.println("验签结果: " + DaxPayKit.verifySign(execute));
        System.out.println(JsonUtil.toJsonStr(execute));
    }
}
```
