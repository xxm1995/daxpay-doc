# SDK使用说明

::: tip 提示
SDK是基于Java8开发的，除依赖`hutool`工具包外，不与任何第三方框架或工具强绑定，可以放心引入到项目中，
:::

## 引入SDK

在项目中引入sdk依赖，SDK与网关项目版本号保持一致，如网关项目为3.0.0，sdk版本为3.0.0，跨版本可能会产生兼容性问题。

最近版本见 [maven中央仓库](https://mvnrepository.com/artifact/cn.daxpay.single/daxpay-single-sdk)

```xml
  <dependency>
    <groupId>cn.daxpay.single</groupId>
    <artifactId>daxpay-single-sdk</artifactId>
    <version>${latest.version}</version>
  </dependency>
```

## 初始化SDK
> 在使用SDK时，需要先进行初始化SDK，初始化SDK时需要传入网关地址、应用号和应用密钥等信息，网关地址为部署支付网关的地址，其他项需要与应用配置一致。

```java
    public void init() {
        // 初始化支付配置
        DaxPayConfig config = DaxPayConfig.builder()
                .serviceUrl("http://127.0.0.1:10880")
                .signSecret("123456")
                .signType(SignTypeEnum.HMAC_SHA256)
                .appId("M8088873888246277")
                .build();
        DaxPayKit.initConfig(config);
    }
```
## 使用说明
> SDK是通过封装HTTP请求，通过调用接口网关生成请求，如：创建订单，支付订单等。具体每种接口的调用方法，请参考接口文档中的SKD使用说明。

### DaxPayKit
`DaxPayKit`是SDK的核心类，通过调用核心类的接口，可以实现各种功能。`DaxPayKit`对外提供`execute`方法， 默认启用请求时签名功能，可以手动进行关闭。
会根据传入的参数不同返回不同的响应，使用不同的接口时都是调用这个方法，传入对应的业务请求参数。


**核心源码**

### PaySignUtil
`PaySignUtil`是SDK的签名工具类，提供对请求参数的签名功能，如 `MD5`、`HmacSHA256`和`SM3` 三种种，具体方法可以查看源码。


## 简单支付样例
```java
package org.dromara.daxpay.test;

import cn.daxpay.single.sdk.code.SignTypeEnum;
import cn.daxpay.single.sdk.model.trade.pay.PayOrderModel;
import cn.daxpay.single.sdk.net.DaxPayConfig;
import cn.daxpay.single.sdk.net.DaxPayKit;
import cn.daxpay.single.sdk.param.trade.pay.PayQueryParam;
import cn.daxpay.single.sdk.response.DaxPayResult;
import cn.daxpay.single.sdk.util.JsonUtil;
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
                .serviceUrl("http://127.0.0.1:9999")
                .signSecret("123456")
                .appId("M7934041241299655")
                .signType(SignTypeEnum.HMAC_SHA256)
                .build();
        DaxPayKit.initConfig(config);
    }

     /**
     * 支付宝支付(二维码扫码)
     */
    @Test
    public void aliPayQrPay() {
        PayParam param = new PayParam();
        param.setClientIp("127.0.0.1");
        param.setBizOrderNo("SDK_"+ System.currentTimeMillis());
        param.setTitle("测试支付宝扫码支付");
        param.setDescription("这是支付宝扫码支付");
        param.setAmount(BigDecimal.valueOf(10));
        param.setChannel(ChannelEnum.ALI.getCode());
        param.setMethod(PayMethodEnum.QRCODE.getCode());
        param.setAttach("{回调参数}");
        param.setAllocation(false);
        param.setReturnUrl("https://abc.com/returnurl");
        param.setNotifyUrl("http://127.0.0.1:10880/test/callback/notify");

        DaxPayResult<PayResultModel> execute = DaxPayKit.execute(param);
        System.out.println(JsonUtil.toJsonStr(execute));
    }
}
```

## 扩展支持新的接口
如果对支付网关进行二次开发后，新增了新的接口，如果要想继续使用SDK进行调用，可以通过继承`DaxPayRequest`来使`SDK`支持新的接口。
**注意：请尽量不要出现参数嵌套的的情况，虽然理论上通过在嵌套的对象类型实现`SortMapParam`接口就可以参与排序签名，但目前未进行完善的测试，
可能会导致签名失败的问题，如果使用了嵌套的参数的话，请自行进行测试来保证正确性。**

### 创建响应类
> 新建一个继承`DaxPayResponseModel`抽象类的响应类，如下面`DivideOrderResponse`的例子

```java
package cn.daxpay.single.sdk.model.divide;

import cn.daxpay.single.sdk.net.DaxPayResponseModel;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * 分账结果(目前未支持)
 * @author xxm
 * @since 2024/2/7
 */
@Getter
@Setter
@ToString
public class DivideOrderModel  {

    /** 分账状态 */
    private String status;
}

```

### 创建请求类
>  新建一个继承`DaxPayRequest<T>`抽象类的响应类，并实现其中的接口，如下面`DivideOrderParam`的例子

```java
package cn.daxpay.single.sdk.param;

import cn.daxpay.single.sdk.model.divide.DivideOrderModel;
import cn.daxpay.single.sdk.net.DaxPayRequest;
import cn.daxpay.single.sdk.response.DaxPayResult;
import cn.hutool.core.lang.TypeReference;
import cn.hutool.json.JSONUtil;
import lombok.Getter;
import lombok.Setter;

/**
 * 分账请求接口(目前未支持)
 * @author xxm
 * @since 2024/2/7
 */
@Getter
@Setter
public class DivideOrderParam extends DaxPayRequest<DivideOrderModel> {

    /** 商户订单号 */
    private String orderNo;

    /** 商户订单号 */
    private String bizOrderNo;

    /**
     * 方法请求路径
     */
    @Override
    public String path() {
        return "/unipay/divide";
    }

    /**
     * 将请求返回结果反序列化为实体类
     */
    @Override
    public DaxPayResult<DivideOrderModel> toModel(String json) {
        return JSONUtil.toBean(json, new TypeReference<DaxPayResult<DivideOrderModel>>() {}, false);
    }
}

```
