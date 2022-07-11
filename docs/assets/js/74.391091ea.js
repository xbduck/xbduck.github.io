(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{492:function(_,v,t){"use strict";t.r(v);var o=t(1),r=Object(o.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("RFC 规定 HTTP 的状态码为"),v("strong",[_._v("三位数")]),_._v("，被分为五类:")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("1xx")]),_._v(": 表示目前是协议处理的中间状态，还需要后续操作。")]),_._v(" "),v("li",[v("strong",[_._v("2xx")]),_._v(": 表示成功状态。")]),_._v(" "),v("li",[v("strong",[_._v("3xx")]),_._v(": 重定向状态，资源位置发生变动，需要重新请求。")]),_._v(" "),v("li",[v("strong",[_._v("4xx")]),_._v(": 请求报文有误。")]),_._v(" "),v("li",[v("strong",[_._v("5xx")]),_._v(": 服务器端发生错误。")])]),_._v(" "),v("p",[_._v("接下来就一一分析这里面具体的状态码。")]),_._v(" "),v("h2",{attrs:{id:"_1xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[_._v("#")]),_._v(" 1xx")]),_._v(" "),v("p",[v("strong",[_._v("101 Switching Protocols")]),_._v("。在"),v("code",[_._v("HTTP")]),_._v("升级为"),v("code",[_._v("WebSocket")]),_._v("的时候，如果服务器同意变更，就会发送状态码 101。")]),_._v(" "),v("h2",{attrs:{id:"_2xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[_._v("#")]),_._v(" 2xx")]),_._v(" "),v("p",[v("strong",[_._v("200 OK")]),_._v("是见得最多的成功状态码。通常在响应体中放有数据。")]),_._v(" "),v("p",[v("strong",[_._v("204 No Content")]),_._v("含义与 200 相同，但响应头后没有 body 数据。")]),_._v(" "),v("p",[v("strong",[_._v("206 Partial Content")]),_._v("顾名思义，表示部分内容，它的使用场景为 HTTP 分块下载和断电续传，当然也会带上相应的响应头字段"),v("code",[_._v("Content-Range")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"_3xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[_._v("#")]),_._v(" 3xx")]),_._v(" "),v("p",[v("strong",[_._v("301 Moved Permanently")]),_._v("即永久重定向，对应着"),v("strong",[_._v("302 Found")]),_._v("，即临时重定向。")]),_._v(" "),v("p",[_._v("比如你的网站从 HTTP 升级到了 HTTPS 了，以前的站点再也不用了，应当返回"),v("code",[_._v("301")]),_._v("，这个时候浏览器默认会做缓存优化，在第二次访问的时候自动访问重定向的那个地址。")]),_._v(" "),v("p",[_._v("而如果只是暂时不可用，那么直接返回"),v("code",[_._v("302")]),_._v("即可，和"),v("code",[_._v("301")]),_._v("不同的是，浏览器并不会做缓存优化。")]),_._v(" "),v("p",[v("strong",[_._v("304 Not Modified")]),_._v(": 当协商缓存命中时会返回这个状态码。详见"),v("RouterLink",{attrs:{to:"/perform/001.html"}},[_._v("浏览器缓存")])],1),_._v(" "),v("h2",{attrs:{id:"_4xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[_._v("#")]),_._v(" 4xx")]),_._v(" "),v("p",[v("strong",[_._v("400 Bad Request")]),_._v(": 开发者经常看到一头雾水，只是笼统地提示了一下错误，并不知道哪里出错了。")]),_._v(" "),v("p",[v("strong",[_._v("403 Forbidden")]),_._v(": 这实际上并不是请求报文出错，而是服务器禁止访问，原因有很多，比如法律禁止、信息敏感。")]),_._v(" "),v("p",[v("strong",[_._v("404 Not Found")]),_._v(": 资源未找到，表示没在服务器上找到相应的资源。")]),_._v(" "),v("p",[v("strong",[_._v("405 Method Not Allowed")]),_._v(": 请求方法不被服务器端允许。")]),_._v(" "),v("p",[v("strong",[_._v("406 Not Acceptable")]),_._v(": 资源无法满足客户端的条件。")]),_._v(" "),v("p",[v("strong",[_._v("408 Request Timeout")]),_._v(": 服务器等待了太长时间。")]),_._v(" "),v("p",[v("strong",[_._v("409 Conflict")]),_._v(": 多个请求发生了冲突。")]),_._v(" "),v("p",[v("strong",[_._v("413 Request Entity Too Large")]),_._v(": 请求体的数据过大。")]),_._v(" "),v("p",[v("strong",[_._v("414 Request-URI Too Long")]),_._v(": 请求行里的 URI 太大。")]),_._v(" "),v("p",[v("strong",[_._v("429 Too Many Request")]),_._v(": 客户端发送的请求过多。")]),_._v(" "),v("p",[v("strong",[_._v("431 Request Header Fields Too Large")]),_._v("请求头的字段内容太大。")]),_._v(" "),v("h2",{attrs:{id:"_5xx"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[_._v("#")]),_._v(" 5xx")]),_._v(" "),v("p",[v("strong",[_._v("500 Internal Server Error")]),_._v(": 仅仅告诉你服务器出错了，出了啥错咱也不知道。")]),_._v(" "),v("p",[v("strong",[_._v("501 Not Implemented")]),_._v(": 表示客户端请求的功能还不支持。")]),_._v(" "),v("p",[v("strong",[_._v("502 Bad Gateway")]),_._v(": 服务器自身是正常的，但访问的时候出错了，啥错误咱也不知道。")]),_._v(" "),v("p",[v("strong",[_._v("503 Service Unavailable")]),_._v(": 表示服务器当前很忙，暂时无法响应服务。")])])}),[],!1,null,null,null);v.default=r.exports}}]);