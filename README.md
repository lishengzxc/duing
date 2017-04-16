<div align="center">
 <img src="https://github.com/lishengzxc/duing/blob/master/logo.jpg?raw=true" width="300">
</div>

---

> The progress bar / status badge of SVG generator server

![](https://travis-ci.org/lishengzxc/duing.svg?branch=master)
![](https://david-dm.org/lishengzxc/duing/dev-status.svg)
![](https://david-dm.org/lishengzxc/duing.svg)
![](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![](https://img.shields.io/badge/license-MIT-blue.svg)

## Deploy Run
```bash
$ docker build -t duing-image .
$ docker run --rm --name duing -p 3000:3000 duing-image
```
> I can use [caddy](https://github.com/mholt/caddy) to make it in product environment awesome!

## Dev
```bash
$ npm install
$ npm run dev
```

## Contributing
Welcome~

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