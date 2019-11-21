# 二维码生成

## 请求URL

- `https://api.ifking.cn/api/qrcode`

## 请求方式

- GET

## 参数


| 参数名 | 类型 | 必选 | 默认值 | 其他 | 说明 |
| :--- | :--- | :--- | --- | --- | --- |
| data | 字符串 | 是 |  |  | 待生成二维码的内容,如果是url为避免错误请先进行url编码 |
| e | 枚举类型 | 否 | L | 范围：L/M/Q/H | 错误纠正级别，L为最小，H为最佳 |
| p | 整型 | 否 | 300 |  | 设置二维码的大小，这里二维码应该是正方形的，所以相当于长宽 |
| m | 整型 | 否 | 10 |  | 二维码白色边框尺寸 |


## png返回示例

![qrcode](https://api.ifking.cn/api/qrcode?data=https://ifking.cn)





