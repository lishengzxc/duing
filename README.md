<div align="center">
  <img src="https://github.com/lishengzxc/duing/blob/master/logo.jpg?raw=true" width="300">
</div>

---

> The progress bar / status badge of SVG generator service

![](https://img.shields.io/npm/v/duing.svg)
![](https://travis-ci.org/lishengzxc/duing.svg?branch=master)
![](https://codecov.io/gh/lishengzxc/duing/branch/master/graph/badge.svg)
![](https://david-dm.org/lishengzxc/duing/dev-status.svg)
![](https://david-dm.org/lishengzxc/duing.svg)
![](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)
![](https://img.shields.io/badge/license-MIT-blue.svg)

## Features
| Type | Config | Url | Preview |
| ------------- | ------------- | ----- | ----- |
| Bar | percent, width, height, color | https://img.lishengcn.cn/progress?percent=25 | ![](https://img.lishengcn.cn/progress?percent=25) ![](https://img.lishengcn.cn/progress?percent=40&color=2196f3) |
| Circle | percent, width, color | https://img.lishengcn.cn/progress?percent=35&type=circle | ![](https://img.lishengcn.cn/progress?percent=35&type=circle) ![](https://img.lishengcn.cn/progress?percent=40&color=2196f3&type=circle) |
| Checkbox | checked, size, color | https://img.lishengcn.cn/checkbox?checked=1 | ![](https://img.lishengcn.cn/checkbox?checked=1) ![](https://img.lishengcn.cn/checkbox?checked=1&color=EA6F5A) ![](https://img.lishengcn.cn/checkbox?color=FFBE00) |
| Label | key, value, keyColor, valueColor, keyBgColor, valueBgColor, size | https://img.lishengcn.cn/label?key=解决率&value=99% | ![](https://img.lishengcn.cn/label?key=解决率&value=99%) ![](https://img.lishengcn.cn/label?key=PV&value=12400&keyBgColor=FFBE00) |
| Seal | value, size, valueBgColor, valueColor, ghost | https://img.lishengcn.cn/seal?value=FIXED | ![](https://img.lishengcn.cn/seal?value=FIXED) ![](https://img.lishengcn.cn/seal?value=BUG&valueBgColor=EA6F5A) |
| Dot | width, color | https://img.lishengcn.cn/dot | ![](https://img.lishengcn.cn/dot) ![](https://img.lishengcn.cn/dot?color=EA6F5A) ![](https://img.lishengcn.cn/dot?color=FFBE00) |
| Count (WIP) | ... | ... | ... |
| ... | ... | ... | ... |

## Deploy Run
```bash
$ docker build -t duing-image .
$ docker run --rm --name duing -p 3000:3000 duing-image
```
> I used [caddy](https://github.com/mholt/caddy) to make it in product environment well! (HTTPS, HTTP/2) Not only you can get service from **img.lishengcn.cn**, but also can deploy it by yourself.

## Dev
```bash
$ npm install
$ npm run dev
```

## Contributing
Welcome~

## Donate
You can get all "duing"s by **img.lishengcn.cn**. If it make you convenience, you may help me to get one or two stable and better server. (I don't mean now is not stable, now is stable enough for the current user. But the service will be disable when deploying. It doesn't master by *200 from cache*)

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
