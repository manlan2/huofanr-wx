# 活范儿小程序

## Start
```bash
npm install wepy-cli -g
cd myproject
npm install
wepy build --watch
```

## 重要提醒
1. 使用微信开发者工具-->添加项目，项目目录请选择 `myproject/dist` 目录。
2. 微信开发者工具-->项目-->关闭ES6转ES5。
3. 微信开发者工具-->项目-->关闭上传代码时样式自动补全。
4. 微信开发者工具-->项目-->关闭代码压缩上传。
[wepy 文档](https://wepyjs.github.io/wepy/) 文档
[wepy wiki](https://github.com/wepyjs/wepy/wiki)
[wepy API](https://github.com/Tencent/wepy/blob/master/docs/md/api.md)

## Build
```bash
npm run build
```

## 生成 web 版本
```bash
wepy build --output web
```

## 第三方 UI 库
[minui](https://github.com/meili/minui)
[zanui](https://github.com/youzan/zanui-weapp)

## 小程序的坑
- 有些路径前面必须加斜杠，比如
```javascript
usingComponents: {
  'wxc-icon': '/minui/@minui/wxc-icon/_dist/index'
},
```
- 书写 sass 时，`>` 选择器最多只能嵌套一层，否则报错

## wepy 的坑
- [组件传参不支持传对象的子对象](https://github.com/wepyjs/wepy/issues/375)
- 使用 wx API 时，wx 可用 wepy 代替，比如 wx.redirect => wepy.redirect
- 最好不用使用 PUG，各种意想不到的 BUG
- [在 wepy 下使用 wxParse](http://blog.csdn.net/wyk304443164/article/details/77977577)
- [页面之间通信](https://wepyjs.github.io/wepy/#/api?id=wepypage-class)
