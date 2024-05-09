# SDK使用说明

::: tip 提示
SDK是基于Java开发的，除依赖`hutool`工具包外，不与任何第三方框架或工具强绑定，可以放心引入到项目中，
:::

## 引入SDK

在项目中引入sdk依赖，SDK与网关项目版本号保持一致，如网关项目为2.0.0，sdk版本为2.0.0，跨版本可能会产生兼容性问题。

```xml
  <dependency>
    <groupId>cn.bootx.platform</groupId>
    <artifactId>daxpay-single-sdk</artifactId>
    <version>${latest.version}</version>
  </dependency>
```

## 初始化SDK
> 在使用SDK是，需要先进行初始化SDK，初始化SDK时需要传入网关地址和网关密钥，网关地址为部署支付网关的地址，网关密钥为见支付网关后台管理端的配置，
> 如关闭了验签功能，可以不传入网关密钥，但建议开启验签功能，提高支付流程的安全性。

```java
    public void init() {
        // 初始化支付配置
        DaxPayConfig config = DaxPayConfig.builder()
                .serviceUrl("http://127.0.0.1:9000")
                .signSecret("123456")
                .build();
        DaxPayKit.initConfig(config);
    }
```
## 使用说明
> SDK是通过封装HTTP请求，通过调用接口网关生成请求，如：创建订单，支付订单等。具体每种接口的调用方法，请参考接口文档。

### DaxPayKit
`DaxPayKit`是SDK的核心类，通过调用核心类的接口，可以实现各种功能。`DaxPayKit`对外提供`execute`方法， 默认启用请求时签名功能，可以手动进行关闭。
会根据传入的参数不同返回不同的相应，调用不同的接口都是使用这个方法，只是传入不同的参数，返回不同的响应。


**核心源码**

```java
package cn.bootx.platform.daxpay.sdk.net;

import cn.bootx.platform.daxpay.sdk.code.SignTypeEnum;
import cn.bootx.platform.daxpay.sdk.response.DaxPayResult;
import cn.bootx.platform.daxpay.sdk.util.PaySignUtil;
import cn.hutool.http.ContentType;
import cn.hutool.http.HttpResponse;
import cn.hutool.http.HttpUtil;
import cn.hutool.json.JSONUtil;
import lombok.experimental.UtilityClass;

import java.util.Objects;

/**
 * 支付发起工具包
 * @author xxm
 * @since 2024/2/2
 */
@UtilityClass
public class DaxPayKit {

    private DaxPayConfig config;

    /**
     * 支付请求执行类, 默认对请求参数进行签名
     * @param request 请求参数
     * @return DaxPayResult 响应类
     * @param <T> 业务对象
     */
    public <T extends DaxPayResponseModel> DaxPayResult<T> execute(DaxPayRequest<T> request){
        return execute(request, true);
    }

    /**
     * 支付请求执行类
     * @param request 请求参数
     * @param sign 是否进行签名
     * @return DaxPayResult 响应类
     * @param <T> 业务对象
     */
    public <T extends DaxPayResponseModel> DaxPayResult<T> execute(DaxPayRequest<T> request, boolean sign){
        // 判断是是否进行签名
        if (sign) {
            if (Objects.equals(SignTypeEnum.MD5, config.getSignType())){
                String md5Sign = PaySignUtil.md5Sign(request, config.getSignSecret());
                request.setSign(md5Sign);
            } else {
                String hmacSha256Sign = PaySignUtil.hmacSha256Sign(request, config.getSignSecret());
                request.setSign(hmacSha256Sign);
            }
        }
        String data = JSONUtil.toJsonStr(request);
        String path = config.getServiceUrl() + request.path();
        HttpResponse execute = HttpUtil.createPost(path)
                .body(data, ContentType.JSON.getValue())
                .timeout(config.getReqTimeout())
                .execute();
        String body = execute.body();
        return request.toModel(body);
    }
}

```

### PaySignUtil
`PaySignUtil`是SDK的签名工具类，提供对请求参数的签名功能，如 `MD5` 和 `HmacSHA256` 两种，具体方法可以查看源码。


## 简单支付样例
```java

package cn.bootx.platform.daxpay.sdk.payment;

import cn.bootx.platform.daxpay.sdk.code.PayChannelEnum;
import cn.bootx.platform.daxpay.sdk.code.PayWayEnum;
import cn.bootx.platform.daxpay.sdk.model.pay.PayOrderModel;
import cn.bootx.platform.daxpay.sdk.net.DaxPayConfig;
import cn.bootx.platform.daxpay.sdk.net.DaxPayKit;
import cn.bootx.platform.daxpay.sdk.param.pay.SimplePayParam;
import cn.bootx.platform.daxpay.sdk.response.DaxPayResult;
import org.junit.Before;
import org.junit.Test;

/**
 * 简单支付
 * @author xxm
 * @since 2024/2/2
 */
public class SimplePayOrderTest {

    @Before
    public void init() {
        // 初始化支付配置
        DaxPayConfig config = DaxPayConfig.builder()
                .serviceUrl("http://127.0.0.1:9000")
                .signSecret("123456")
                .build();
        DaxPayKit.initConfig(config);
    }

    @Test
    public void simplePay() {
        // 简单支付参数
        SimplePayParam param = new SimplePayParam();
        param.setBusinessNo("1");
        param.setAmount(1);
        param.setTitle("测试接口支付");
        param.setChannel(PayChannelEnum.ALI.getCode());
        param.setPayWay(PayWayEnum.QRCODE.getCode());
        param.setClientIp("127.0.0.1");
        param.setNotNotify(true);

        DaxPayResult<PayOrderModel> execute = DaxPayKit.execute(param);
        System.out.println(execute);
        PayOrderModel data = execute.getData();
        System.out.println(data);
    }
}
```

## 扩展支持新的接口
如果对支付网关进行二次开发后，新增了新的接口，如果要想继续使用SDK进行调用，可以通过继承`DaxPayRequest`和`DaxPayResponseModel`来使`SDK`支持新的接口。
**注意：请尽量不要出现参数嵌套的的情况，虽然理论上通过在嵌套的对象类型实现`SortMapParam`接口就可以参与排序签名，但目前未进行完善的测试，
可能会导致签名失败的问题，如果使用了嵌套的参数的话，请自行进行测试来保证正确性。**

### 创建响应类
> 新建一个继承`DaxPayResponseModel`抽象类的响应类，如下面`DivideOrderResponse`的例子

```java
package cn.bootx.platform.daxpay.sdk.model.divide;

import cn.bootx.platform.daxpay.sdk.net.DaxPayResponseModel;
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
public class DivideOrderModel extends DaxPayResponseModel {

    /** 分账状态 */
    private String status;
}

```

### 创建请求类
>  新建一个继承`DaxPayRequest<T>`抽象类的响应类，并实现其中的接口，如下面`DivideOrderParam`的例子

```java
package cn.bootx.platform.daxpay.sdk.param;

import cn.bootx.platform.daxpay.sdk.model.divide.DivideOrderModel;
import cn.bootx.platform.daxpay.sdk.net.DaxPayRequest;
import cn.bootx.platform.daxpay.sdk.response.DaxPayResult;
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

    /** 支付ID */
    private Long paymentId;

    /** 业务号 */
    private String businessNo;

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
