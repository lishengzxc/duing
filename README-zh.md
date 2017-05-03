<div align="center">
  <img src="https://github.com/lishengzxc/duing/blob/master/logo.jpg?raw=true" width="300">
</div>

---

> 进度条图标 SVG 生成器服务

![](https://img.shields.io/npm/v/duing.svg)
![](https://travis-ci.org/lishengzxc/duing.svg?branch=master)
![](https://codecov.io/gh/lishengzxc/duing/branch/master/graph/badge.svg)
![](https://david-dm.org/lishengzxc/duing/dev-status.svg)
![](https://david-dm.org/lishengzxc/duing.svg)
![](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)
![](https://img.shields.io/badge/license-MIT-blue.svg)

## 功能
| 类型 | 可配置参数 | Url | 预览 |
| ------------- | ------------- | ----- | ----- |
| Bar | percent, width, height, color | https://img.lishengcn.cn/progress?percent=25 | ![](https://img.lishengcn.cn/progress?percent=25) ![](https://img.lishengcn.cn/progress?percent=40&color=2196f3) |
| Circle | percent, width, color | https://img.lishengcn.cn/progress?percent=35&type=circle | ![](https://img.lishengcn.cn/progress?percent=35&type=circle) ![](https://img.lishengcn.cn/progress?percent=40&color=2196f3&type=circle) |
| Checkbox | checked, size, color | https://img.lishengcn.cn/checkbox?checked=1 | ![](https://img.lishengcn.cn/checkbox?checked=1) ![](https://img.lishengcn.cn/checkbox?checked=1&color=EA6F5A) ![](https://img.lishengcn.cn/checkbox?color=FFBE00) |
| Label | key, value, keyColor, valueColor, keyBgColor, valueBgColor, size | https://img.lishengcn.cn/label?key=解决率&value=99% | ![](https://img.lishengcn.cn/label?key=召回率&value=99%&t=2) ![](https://img.lishengcn.cn/label?key=UV&value=12400&keyBgColor=FFBE00&t=2) |
| Seal | value, size, valueBgColor, valueColor, ghost | https://img.lishengcn.cn/seal?value=FIXED | ![](https://img.lishengcn.cn/seal?value=FIXED&t=2) ![](https://img.lishengcn.cn/seal?value=BUG&valueBgColor=EA6F5A&t=2) ![](https://img.lishengcn.cn/seal?value=DUING&valueBgColor=EA6F5A&t=1&ghost=1&t=2) |
| Dot | width, color | https://img.lishengcn.cn/dot | ![](https://img.lishengcn.cn/dot) ![](https://img.lishengcn.cn/dot?color=EA6F5A) ![](https://img.lishengcn.cn/dot?color=FFBE00) |
| Count (WIP) | ... | ... | ... |
| ... | ... | ... | ... |

## 部署
```bash
$ docker build -t duing-image .
$ docker run --rm --name duing -p 3000:3000 duing-image
```
> 我在生产环境使用 [caddy](https://github.com/mholt/caddy) 来提供稳定的服务！(HTTPS, HTTP/2) 你可以直接从 **img.lishengcn.cn** 获取服务，当然也可以自己部署它。

## 开发
```bash
$ npm install
$ npm run dev
```

## 贡献
欢迎~

## 资助
你可以通过 **img.lishengcn.cn** 得到所有的“duing”，如果它为你提供了方便，你或许可以帮助我获得1个或者2个更好更稳定云服务器。（我的意思并不是说目前不稳定，对于目前的用户来说是稳定的，可能在部署的时候会出现短暂的服务不可用情况。但是我又提供了 *200 from cache* 来缓解这一情况）

<img src="https://github.com/lishengzxc/duing/blob/master/qrcode.jpg?raw=true" width="180">

## License
MIT License

Copyright (c) 2017 ls

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

很强
