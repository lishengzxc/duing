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
| Bar | percent<br/>width<br/>height<br/>color | https://img.lishengcn.cn/progress?percent=25 | ![](https://img.lishengcn.cn/progress?percent=25) ![](https://img.lishengcn.cn/progress?percent=40&color=2196f3) |
| Circle | percent<br/>width<br/>color | https://img.lishengcn.cn/progress?percent=35&type=circle | ![](https://img.lishengcn.cn/progress?percent=35&type=circle) ![](https://img.lishengcn.cn/progress?percent=40&color=2196f3&type=circle) |
| Checkbox | checked<br/>size<br/>color | https://img.lishengcn.cn/checkbox?checked=1 | ![](https://img.lishengcn.cn/checkbox?checked=1) ![](https://img.lishengcn.cn/checkbox?checked=1&color=EA6F5A) ![](https://img.lishengcn.cn/checkbox?color=FFBE00) |
| Label | key<br/>value<br/>keyColor<br/>valueColor<br/>keyBgColor<br/>valueBgColor<br/>size | https://img.lishengcn.cn/label?key=解决率&value=99% | ![](https://img.lishengcn.cn/label?key=召回率&value=99%&t=3) ![](https://img.lishengcn.cn/label?key=UV&value=12400&keyBgColor=FFBE00&t=3) |
| Seal | value<br/>size<br/>valueBgColor<br/>valueColor<br/>ghost | https://img.lishengcn.cn/seal?value=FIXED | ![](https://img.lishengcn.cn/seal?value=FIXED&t=3) ![](https://img.lishengcn.cn/seal?value=BUG&valueBgColor=EA6F5A&t=3) ![](https://img.lishengcn.cn/seal?value=DUING&valueBgColor=EA6F5A&t=1&ghost=1&t=3) |
| Dot | width<br/>color | https://img.lishengcn.cn/dot | ![](https://img.lishengcn.cn/dot) ![](https://img.lishengcn.cn/dot?color=EA6F5A) ![](https://img.lishengcn.cn/dot?color=FFBE00) |
| Histogram | list<br/>color<br/>title | https://img.lishengcn.cn/histogram?list=[{"k":"k","v":1}]) | ![](https://img.lishengcn.cn/histogram?list=[{%22k%22:%225/20%22,%22v%22:1},{%22k%22:%225/21%22,%22v%22:10},{%22k%22:%225/22%22,%22v%22:6},{%22k%22:%225/23%22,%22v%22:3},{%22k%22:%225/23%22,%22v%22:4}]) |
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
You can get all "duing"s by **img.lishengcn.cn**. If it makes you feel convenient, you may help me to get one or two stable and better server. (I don't mean now is not stable, now is stable enough for the current user. But the service will be disable when deploying. It doesn't master by *200 from cache*)

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
