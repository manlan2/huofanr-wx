# 活范儿小程序

## start
```bash
npm install wepy-cli -g
cd myproject
npm install
wepy build --watch
```
[wepy](https://wepyjs.github.io/wepy/#/)

## 重要提醒
1. 使用微信开发者工具-->添加项目，项目目录请选择 `myproject/dist` 目录。
2. 微信开发者工具-->项目-->关闭ES6转ES5。
3. 微信开发者工具-->项目-->关闭上传代码时样式自动补全。
4. 微信开发者工具-->项目-->关闭代码压缩上传。
具体请看 [wepy](https://wepyjs.github.io/wepy/) 文档

## 小程序的坑
- 有些路径前面必须加斜杠，比如
```javascript
usingComponents: {
  'wxc-icon': '/minui/@minui/wxc-icon/_dist/index'
},
```
- 书写 sass 时，`>` 选择器最多只能嵌套一层，否则报错
-