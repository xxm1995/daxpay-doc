# 获取微信AccessToken

:::tip
例如使用微信公众号支付时，调起支付中需要传输用户`OpenId`信息，虽然我们可以直接在客户系统中直接调用微信接口进行获取，但有些情况下我们不方便让业务系统知道微信公众平台的敏感数据，如`AppId`、`appSecret`，所以提供这个中转接口来支持间接的调用微信平台。
:::

## 接口说明

| 参数    | 说明                                |
|-------|-----------------------------------|
| 请求URL | `/unipay/assist/getWxAccessToken` |
| 请求方式  | `POST`                            |
| 请求类型  | `application/json`                |

## 请求参数

| 字段名<img width=70/> | 变量名      | 必填 | 类型     | 示例值                              | 描述<img width=200/>                   |
|--------------------|----------|----|--------|----------------------------------|--------------------------------------|
| 授权Code             | code     | 是  | String | 892e382a7093b81e6a               | 微信授权页面授权成功后回调返回的授权码，用于Oath2认证        |
| 用户IP               | clientIp | 否  | string | 127.0.0.1                        | 支持V4和V6，部分支付方式要求必填，如调用微信支付方式时，推荐传输次值 |
| 请求时间               | reqTime  | 是  | long   | 123123121                        | 使用时间戳(秒级)                            |
| 签名值                | sign     | 否  | string | 072695d112892e382a7093b81e6a52af | 如果在后台系统中开启验签选项后必填                    |

## 响应结果

::: tip

业务数据包裹在`公共响应参数`中的`data`字段，在`code`为`0`时才会有返回数据

:::

| 字段名<img width=70/> | 变量名         | 必传 | 类型     | 示例值                      | 描述 |
|--------------------|-------------|----|--------|--------------------------|----|
| 微信AccessToken      | accessToken | 是  | String | 2e382a7093b81e6a         |    |
| 微信用户唯一标识           | openId      | 是  | String | 3b81e6a2e3b812a78a709309 |    |


## 错误码

| 状态码<img width=70/> | 名称 | 备注   |
|--------------------|----|------|
| 0                  | 成功 | 获取成功 |
| 20000              | 失败 | 获取失败 |
|                    |    |      |


## HTTP请求示例

### 请求参数

```json
{
  "clientIp": "127.0.0.1",
  "sign": "",
  "reqTime": "123457711",
  "code": "892e382a7093b81e6a"
}
```

### 响应参数(成功)

```json
{
	"msg": "",
	"code": 0,
	"data": {
		"accessToken": "2e382a7093b81e6a",
		"openId": "3b81e6a2e3b812a78a709309"
	},
	"sign": "",
	"traceId": "vHugexb46msh"
}
```

### 响应参数(失败)

```json
{
  "msg": "未通过签名验证",
  "code": 20000,
  "data": null,
  "traceId": "vHugexb46msh"
}
```



## SDK请求示例

::: tip 提示

使用SDK可以简化接入支付的速度

:::

```java
package cn.bootx.platform.daxpay.sdk;

import cn.bootx.platform.daxpay.sdk.code.PayChannelEnum;
import cn.bootx.platform.daxpay.sdk.code.PayWayEnum;
import cn.bootx.platform.daxpay.sdk.model.PayOrderModel;
import cn.bootx.platform.daxpay.sdk.net.DaxPayConfig;
import cn.bootx.platform.daxpay.sdk.net.DaxPayKit;
import cn.bootx.platform.daxpay.sdk.param.pay.SimplePayParam;
import cn.bootx.platform.daxpay.sdk.response.DaxPayResult;
import org.junit.Before;
import org.junit.Test;

/**
 * 获取微信AccessToken
 * @author xxm
 * @since 2024/2/2
 */
public class TestOrderTest {

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
    public void test() {
        // 获取OpenId
        WxAccessTokenParam param = new WxAccessTokenParam();
        param.setCode(authCode);

        DaxPayResult<WxAccessTokenModel> result = DaxPayKit.execute(param);
        System.out.println(result);
    }
}
```

