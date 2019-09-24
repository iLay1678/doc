# 天气接口

## 请求URL

- `https://api.ifking.cn/api/weather?key=public`

## 请求方式

- GET/POST

## 参数


| 参数名 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | :---: |
| city | 否 | string | 为空则从IP地址获取 |



## 返回示例

```json
{
  "error": 0,
  "status": "success",
  "date": "2019-04-14",
  "results": [
    {
      "currentCity": "深圳市",
      "pm25": "30",
      "index": [
        {
          "des": "建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。",
          "tipt": "穿衣指数",
          "title": "穿衣",
          "zs": "舒适"
        },
        {
          "des": "不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。",
          "tipt": "洗车指数",
          "title": "洗车",
          "zs": "不宜"
        },
        {
          "des": "天气转凉，空气湿度较大，较易发生感冒，体质较弱的朋友请注意适当防护。",
          "tipt": "感冒指数",
          "title": "感冒",
          "zs": "较易发"
        },
        {
          "des": "有降水，推荐您在室内进行健身休闲运动；若坚持户外运动，须注意携带雨具并注意避雨防滑。",
          "tipt": "运动指数",
          "title": "运动",
          "zs": "较不宜"
        },
        {
          "des": "紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。",
          "tipt": "紫外线强度指数",
          "title": "紫外线强度",
          "zs": "弱"
        }
      ],
      "weather_data": [
        {
          "date": "周日 04月14日 (实时：22℃)",
          "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/zhenyu.png",
          "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/zhenyu.png",
          "weather": "阵雨",
          "wind": "无持续风向微风",
          "temperature": "26 ~ 21℃"
        },
        {
          "date": "周一",
          "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/xiaoyu.png",
          "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/xiaoyu.png",
          "weather": "小雨",
          "wind": "东风3-4级",
          "temperature": "23 ~ 20℃"
        },
        {
          "date": "周二",
          "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/baoyu.png",
          "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/baoyu.png",
          "weather": "大到暴雨",
          "wind": "无持续风向微风",
          "temperature": "23 ~ 20℃"
        },
        {
          "date": "周三",
          "dayPictureUrl": "http://api.map.baidu.com/images/weather/day/zhenyu.png",
          "nightPictureUrl": "http://api.map.baidu.com/images/weather/night/xiaoyu.png",
          "weather": "阵雨转小雨",
          "wind": "无持续风向微风",
          "temperature": "26 ~ 21℃"
        }
      ]
    }
  ]
}
```

