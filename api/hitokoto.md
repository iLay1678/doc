# 一言

#### from [https://hitokoto.cn/api](https://hitokoto.cn/api)
## 1、说明
一言网(Hitokoto.cn)创立于2016年，隶属于萌创Team，目前网站主要提供一句话服务。
动漫也好、小说也好、网络也好，不论在哪里，我们总会看到有那么一两个句子能穿透你的心。我们把这些句子汇聚起来，形成一言网络，以传递更多的感动。如果可以，我们希望我们没有停止服务的那一天。
简单来说，一言指的就是一句话，可以是动漫中的台词，也可以是网络上的各种小段子。
或是感动，或是开心，有或是单纯的回忆。来到这里，留下你所喜欢的那一句句话，与大家分享，这就是一言存在的目的。
*:本段文本源自hitokoto.us
## 2、Api
这是一个Hitokoto Api更新时间表：

| 时间 | 影响Api | 调整 |
| --- | --- | --- |
| 2018年6月之前 | 旧版API（http://api.hitokoto.cn和https://sslapi.hitokoto.cn） | 旧版API将在6月份之前以切换解析的方式合并到v1API中。也就意味着调整之后请求此API无异于请求v1API。调整后此接口的稳定性将不再受到维护。 |
| 2018年7月之前 | v1API（https://v1.hitokoto.cn） | v1API将发布最终版本。v1接口将会在未来存在较长时间。 |
| v2 发布（预计2019年6月） | v2API（域名未知） | 上线v2API。 |


**目前 v1 接口已进入功能锁定阶段，任何需求请在 v2 功能申请表中提出。**
**由于我们属于公益性运营，为了保证资源的公平利用和不过度消耗公益资金，我们会不定期的屏蔽某些大流量的站点。如果您的站点的流量比较大，我们建议您提前联系我们获得授权后再开始使用。（合理的站点请求闸值: 20QPS， 超过闸值的请求可能会被限速）**
以下为API详细信息：
### 请求地址：
HTTPS: https://v1.hitokoto.cn/ (域名已启用 HSTS， 并已加入 HSTS Preload List 计划)
## 3、参数
| 参数名称 | 类型 | 描述 |  |  |  |
| --- | --- | --- | --- | --- | --- |
| c | 可选 | Cat，即类型。提交不同的参数代表不同的类别，具体： |  |  |  |
|  |  | a | Anime - 动画 |  |  |
|  |  | b | Comic – 漫画 |  |  |
|  |  | c | Game – 游戏 |  |  |
|  |  | d | Novel – 小说 |  |  |
|  |  | e | Myself – 原创 |  |  |
|  |  | f | Internet – 来自网络 |  |  |
|  |  | g | Other – 其他 |  |  |
|  |  | 其他不存在参数 | 任意类型随机取得 |  |  |
| encode | 可选 |  |  |  |  |
|  |  | text | 返回纯净文本 |  |  |
|  |  | json | 返回不进行unicode转码的json文本 |  |  |
|  |  | js | 返回指定选择器(默认.hitokoto)的同步执行函数。 |  |  |
|  |  | 其他不存在参数 | 返回unicode转码的json文本 |  |  |
| charset | 可选 |  |  |  |  |
|  |  | utf-8 | 返回 UTF-8 编码的内容，支持与异步函数同用。 |  |  |
|  |  | gbk | 返回 GBK 编码的内容，不支持与异步函数同用。 |  |  |
| callback | 可选 |  |  |  |  |
|  |  | 回调函数 | 将返回的内容传参给指定的异步函数。 |  |  |

## 4、返回（默认json格式）
| **返回参数名称** | **描述** |
| --- | --- |
| id | 本条一言的id。
可以链接到https://hitokoto.cn?id=[id]查看这个一言的完整信息。 |
| hitokoto | 一言正文。编码方式unicode。使用utf-8。 |
| type | 类型。请参考第三节参数的表格。 |
| from | 一言的出处。 |
| creator | 添加者。 |
| created_at | 添加时间。 |
| 注意：如果encode参数为text，那么输出的只有一言正文。 |  |

## 5、示例
https://v1.hitokoto.cn/（从7种分类中随机抽取）

https://v1.hitokoto.cn/?c=b （请求获得一个分类是漫画的句子）

https://v1.hitokoto.cn/?c=f&encode=text （请求获得一个来自网络的句子，并以纯文本格式输出）
### 网页使用示例:
```html
<p id="hitokoto">:D 获取中...</p>
<!-- 以下写法，选取一种即可 -->
<!-- 现代写法，推荐 -->
<!-- 兼容低版本浏览器 (包括 IE)，可移除 -->
<script src="https://cdn.jsdelivr.net/npm/bluebird@3/js/browser/bluebird.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/whatwg-fetch@2.0.3/fetch.min.js"></script>
<!--End-->
<script>
  fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
      console.error(err);
    })
</script>
<!-- 老式写法，兼容性最忧 -->
<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
    }
  }
  xhr.send();
</script>
<!-- 新 API 方法， 十分简洁 -->
<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
```
