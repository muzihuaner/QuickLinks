# 快链-友链接力
---

![](https://img.shields.io/badge/%E6%AC%A2%E5%93%A5%E7%A7%91%E6%8A%80-%E5%BF%AB%E9%93%BE-blue)![GitHub Repo stars](https://img.shields.io/github/stars/muzihuaner/QuickLinks?style=social)![GitHub watchers](https://img.shields.io/github/watchers/muzihuaner/QuickLinks?style=social)

开箱即用的网站友链交换解决方案。

<img src="https://cdn.jsdelivr.net/gh/muzihuaner/QuickLinks@main/assets/QuickLinks.gif" alt="example" style="zoom:80%;" />

- 预览：https://quickso.cn

- 首页：https://myquicklinks.vercel.app

  ------

## 项目介绍

快链是一个开箱即用的友链接力项目，您只需要将“快链”的徽标或者链接放入您的网页，提交审核，审核通过，就可以使用。

可以用来增加网页流量和交个朋友（李姐万岁~）

###### **原理**

每当有用户访问加入快链的网页时，点击快链后会***\*随机跳转\****到另一个加入快链的网页。加入快链的网页越多，友链接力的规模越大，分享流量的规模也越大。

“ 网页A → 快链 → 网页B → 快链 → 网页C → 快链 → 网页D → 快链 → 网页E → 快链 → 网页F … ”

示例：

![](https://gitee.com/muzihuaner/huangeimages/raw/master/img/20210217212713.png)
------

------


## 项目仓库

国际：Github

https://github.com/muzihuaner/QuickLinks

国内：Gitee

https://gitee.com/muzihuaner/QuickLinks

## 全站统计

https://www.51.la/?comId=21061677

------

## 使用

### 1.您的网页应满足：

- 愿为开放的网络做出贡献（如乐于分享知识经验等）；
- 没有违法以及影响体验的内容（如侵入式广告等）；
- 正常更新维护中（国内无法正常访问会被移除）；
- 尽量使用https（没有也是可以的）;

### 2.将快链放到您网页\**打开后就能看到的地方\**（让友链接力下去）：

- **最佳实践**：将 `快链` 的外链（`https://myquicklinks.vercel.app/`），加入您的**顶栏**导航或**侧栏**导航中，**便于访客看到并点击**：
  - 如是英文导航，可使用 `QuickLinks`；
  - 如需 Font Awesome ，推荐 `fa-bolt` （[点我预览](https://fontawesome.com/icons/bolt?style=solid)）；
  - 如需 Emoji，推荐 `⚡`；
- **额外可选**：将快链的徽标放到您的底部或其他位置，表示对快链的支持：
  - 动图 GIF：https://myquicklinks.vercel.app/assets/QuickLinks.gif
  - 深色 PNG：https://myquicklinks.vercel.app/assets/dark.png
  - 浅色 PNG：https://myquicklinks.vercel.app/assets/light.png
  - 方形徽标 GIF：https://myquicklinks.vercel.app/assets/F_QuickLinks.gif
  - 深色方形 PNG：https://myquicklinks.vercel.app/assets/F_dark.png
  - 浅色方形 PNG：https://myquicklinks.vercel.app/assets/F_light.png
  - 矢量 SVG：https://myquicklinks.vercel.app/assets/logo.svg
  - 💡 参考代码：（QuickLinks.gif 可替换为上方的其他图片，以适应您的网页主题；width 可限制图片的大小，让徽标看起来更合适。）

```html
<a href="https://myquicklinks.vercel.app/" target="blank" title="快链-友链接力">
    <img src="https://cdn.jsdelivr.net/gh/muzihuaner/QuickLinks@main/assets/QuickLinks.gif" alt="快链-友链接力" width="120">
</a>
```

- **简易方案**：将上方的代码插到您网页打开后就能看到的地方，如顶栏侧栏。

- **无缝接力 β**

可用 jsdelivr 加速，中间无快链跳转页。

```html
<head>
<script src="https://cdn.jsdelivr.net/gh/muzihuaner/QuickLinks@main/assets/QuickLinks.js"></script>
</head>
<body>
<a href="javascript:travelling()" title="快链-友链接力"><img src="https://cdn.jsdelivr.net/gh/muzihuaner/QuickLinks@main/assets/QuickLinks.gif" alt="快链-友链接力" width="120"></a>
</body>
```

>🔔 以上方案任选其一即可
### 首页可选镜像

- https://muzihuaner.github.io/QuickLinks
- https://muzihuaner.gitee.io/quicklinks
### 3.提个 issue，等待审核通过（有时间即维护）。

💡 常见的可能导致审核失败的原因：

- ⛔ 在网页里看不到“快链”，或把快链放到了默认收起的的菜单中 —— ✅ 推荐放在顶栏侧栏底部等打开网页就能看到的地方，便于访客看到并点击；
- ⛔ 网页不能访问（还没审核就挂了，ヾ(•ω•`)o）；

------
## 支持环境

现代浏览器及 IE11。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Opera |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                          IE11, Edge                          |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |
------
## 网页收录 ✅

当打开网页无法直接看到徽标或外链时，有 * 标记。

| 序号 | 位置 | 名称 | 网址 |
| --- | --- | --- | --- |
| 0 | 缺省 | 快链 | https://github.com/muzihuaner/QuickLinks |
| 1 | 底部 | 快点搜 | https://quickso.cn |
| 2 | 底部 | 欢哥互联 | https://huangenet.cn |
| 3 | 底部 | 知链短链 | https://zhiurl.cn |
| 4 | 底部 | 点滴记忆 | https://www.cnblogs.com/HGNET/ |


---

## 下线列表 🔥

如误处理或已修复问题，请提个 issue 吧，我们会尽快处理。常见的原因如下：
- **LOST**：网页国内打不开或网址解析失败；
- **QUIT**：网页看不到“快链”了，或已申请退出；
- **ERROR**：网页显示服务器或 CDN 报错信息；
- **BROKEN**：网页存在明显异常如 CSS 丢失等错误；

| 序号 | 原因 | 名称 | 网址 |
| --- | --- | --- | --- |
| ~~1~~ | LOST | 未添加 | https://xxx.com |


---

## Q&A

### Q：只能是博客加入吗？

A：**任何网页都可以**。

博客，主页，工具，导航等都可以，只要是乐于分享的网页就可以加入快链。

### Q：怎样支持快链？

A：有两种方案可选。

- [使用快链]在你的网页上放置快链的徽标，帮助宣传让更多的人加入快链。

- [打赏作者](https://huangetech.gitee.io/pay)

### Q：快链能增加我网页的流量吗？

A：**理论上会**。

不恰当的估算下：假设当前有 2 个网页加入了快链，每个网页有 10 人使用快链，那么每个网页似乎就增加了 `10*2*1/2=10` 的流量；如果有10个网页加入快链是不是还是平均下来增加 10 人的流量呢？显然不是，因为：

- 访客可通过快链多次友链接力；
- 有快链的网页多了，单站击量也会提高；

这样我们再算算，10个网页加入了快链，接力次数提升到3，每个网页有 15 人使用快链，那每个网页就增加了 `15*10*3/10=45` 的流量。
这也是为什么建议将快链的徽标放在您网页明显位置（推荐顶栏，侧栏）的原因，以便让友链一直接力下去，获得更多的流量。

实际上由于没有统计代码，不清楚流量具体的变化。但目前看来有更多站长在申请加入，故认为快链对网页流量是有益的 —— 至少站长们可以相互交友了 ;-)

### Q：快链是否安全会不会侵犯隐私？

A：安全，不侵犯隐私。

全部 https 抗劫持；开源无统计代码，不侵犯隐私；镜像自动部署，无人工干预。加入快链的网页全部经过人工筛选，确保流量从源头就是干净优质的。

### Q：快链给站长和访客带来了什么？

A：网络曾经从封闭走向开放，如今又走向了封闭。在此环境下，独立网页（类似“独立游戏”）的流量或多或少的受到影响。快链尝试让传统友链“活跃”，让网页相互接力，让流量相互流动，让网络开放起来。

- 站长：表示您支持网络的开放，并可获得更多的流量。
- 访客：发现更多优质的网页，一场说走就走的网上旅行。

### Q：我想修改徽标配合我的网页？

A：`assets` 文件夹中有各种图片素材，可修改自行托管。

### Q ：我需要变更网址或其他信息

提个 issues 吧。

您也可在域名到期前尽早的设置重定向，快链也会在维护中注意到并更正网址。

> 💡 购买域名时不要只注意是否便宜，还要注意**续费**的价格。静态网址可尝试 Vercel 托管。

### Q：举报问题网页或退出快链？

A：提个 issues 吧。

## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 :smiley:：

- 在你的公司或个人项目中使用 **快链**。
- 通过 [Issue](https://github.com/muzihuaner/QuickLinks/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/muzihuaner/QuickLinks/pulls) 改进 快链 的代码。

> 本项目参考 <br>
> https://github.com/XXIIVV/webring <br>
> https://github.com/volfclub/travellings <br>

