---
title: 通道与支付方式
description: 支付通道编码与支付方式一览
---

# 通道与支付方式

> 以下编码均取自开源版真实枚举类,以代码为准。

## 支付通道 ChannelEnum

字典: `channel`。系统共定义 19 个通道枚举,主应用 `daxpay-channel` 模块已实现其中 5 个,其余可通过通道子应用按需扩展。

| code | 通道 | 状态 |
| ---- | ---- | ---- |
| `alipay` | 支付宝 | 内置 ✅ |
| `wechat` | 微信支付 | 内置 ✅ |
| `douyin_pay` | 抖音支付 | 内置 ✅ |
| `lakala_pay` | 拉卡拉 | 内置 ✅ |
| `ums_pay` | 银联商务 | 内置 ✅ |
| `union_pay` | 云闪付 | 可扩展 |
| `leshua_pay` | 乐刷 | 可扩展 |
| `vbill_pay` | 随行付 | 可扩展 |
| `ada_pay` | 汇付天下 | 可扩展 |
| `dougong_pay` | 斗拱 | 可扩展 |
| `hkrt_pay` | 海科融通 | 可扩展 |
| `fuyou_pay` | 富友 | 可扩展 |
| `sheng_pay` | 盛付通 | 可扩展 |
| `ysep_pay` | 银盛 | 可扩展 |
| `quick_pay` | 快钱 | 可扩展 |
| `sand_pay` | 杉德 | 可扩展 |
| `yee_pay` | 易宝 | 可扩展 |
| `jee_pay` | jeepay | 可扩展 |

## 支付方式 PayMethodEnum

字典: `pay_method`。`code` 全局唯一,每个支付方式绑定一个支付渠道(`provider`)。

### 聚合支付

| code | 含义 | provider |
| ---- | ---- | ---- |
| `aggregate_pay_qrcode` | 聚合扫码支付 | AGGREGATE_PAY |
| `aggregate_pay_barcode` | 聚合付款码支付 | AGGREGATE_PAY |

### 微信支付

| code | 含义 |
| ---- | ---- |
| `wechat_cashier` | 微信小程序收银台 |
| `wechat_qr` | 微信扫码 |
| `wechat_jsapi` | 微信 JSAPI |
| `wechat_mini` | 微信小程序 |
| `wechat_h5` | 微信 H5 |
| `wechat_app` | 微信应用支付 |
| `wechat_barcode` | 微信付款码 |

### 支付宝

| code | 含义 |
| ---- | ---- |
| `alipay_qr` | 支付宝扫码 |
| `alipay_order_qr` | 支付宝订单码 |
| `alipay_jsapi` | 支付宝 JSAPI |
| `alipay_mini` | 支付宝小程序 |
| `alipay_pc` | 支付宝电脑支付 |
| `alipay_h5` | 支付宝 H5 |
| `alipay_app` | 支付宝应用支付 |
| `alipay_barcode` | 支付宝付款码 |

### 银联

| code | 含义 |
| ---- | ---- |
| `union_qr` | 银联扫码 |
| `union_jsapi` | 银联 JSAPI |
| `union_h5` | 银联 H5 |
| `union_pay_barcode` | 银联付款码 |

### 抖音

| code | 含义 |
| ---- | ---- |
| `douyin_qr` | 抖音扫码支付 |
| `douyin_jsapi` | 抖音 JSAPI 支付 |
| `douyin_h5` | 抖音 H5 支付 |
| `douyin_app` | 抖音 APP 支付 |

### 卡组 (Visa / MasterCard)

| code | 含义 |
| ---- | ---- |
| `visa_card_gateway` | Visa 网关支付 |
| `visa_card_present` | Visa 刷卡支付 |
| `mastercard_card_gateway` | 万事达网关支付 |
| `mastercard_card_present` | 万事达刷卡支付 |

### 其他

| code | 含义 | 说明 |
| ---- | ---- | ---- |
| `other` | 其他支付方式 | 无固定渠道归属,provider 为 null |

## 通道子应用路由

主应用通过 HTTP 调用独立部署的通道子应用。配置位于 `application-dev.yml`:

```yaml
daxpay:
  channel:
    # 子应用1: 支付宝 + 微信支付(已启用)
    one:
      base-url: http://127.0.0.1:20100
    # 子应用2: 银联 + 拉卡拉(未来扩展,暂未启用)
    # two:
    #   base-url: http://127.0.0.1:20200
    # 子应用3: 抖音 + 其他通道(未来扩展,暂未启用)
    # three:
    #   base-url: http://127.0.0.1:20300
```

通道与子应用的对应关系由主应用的路由策略决定,新增通道可参照 `dax-pay-channel-one` 创建独立子应用。
