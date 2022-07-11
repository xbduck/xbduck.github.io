(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{423:function(t,a,s){"use strict";s.r(a);var e=s(1),o=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("浏览器的本地存储主要分为"),a("code",[t._v("Cookie")]),t._v("、"),a("code",[t._v("WebStorage")]),t._v("和"),a("code",[t._v("IndexDB")]),t._v(", 其中"),a("code",[t._v("WebStorage")]),t._v("又可以分为"),a("code",[t._v("localStorage")]),t._v("和"),a("code",[t._v("sessionStorage")]),t._v("。接下来我们就来一一分析这些本地存储方案。")]),t._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" Cookie")]),t._v(" "),a("p",[a("code",[t._v("Cookie")]),t._v(" 最开始被设计出来其实并不是来做本地存储的，而是为了弥补"),a("code",[t._v("HTTP")]),t._v("在"),a("strong",[t._v("状态管理上的不足")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("HTTP")]),t._v(" 协议是一个无状态协议，客户端向服务器发请求，服务器返回响应，故事就这样结束了，但是下次发请求如何让服务端知道客户端是谁呢？")]),t._v(" "),a("p",[t._v("这种背景下，就产生了 "),a("code",[t._v("Cookie")]),t._v(".")]),t._v(" "),a("p",[t._v("Cookie 本质上就是浏览器里面存储的一个很小的文本文件，内部以键值对的方式来存储(在chrome开发者面板的"),a("code",[t._v("Application")]),t._v("这一栏可以看到)。向同一个域名下发送请求，都会携带相同的 Cookie，服务器拿到 Cookie 进行解析，便能拿到客户端的状态。")]),t._v(" "),a("p",[t._v("Cookie 的作用很好理解，就是用来做"),a("strong",[t._v("状态存储")]),t._v("的，但它也是有诸多致命的缺陷的：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("容量缺陷。Cookie 的体积上限只有"),a("code",[t._v("4KB")]),t._v("，只能用来存储少量的信息。")])]),t._v(" "),a("li",[a("p",[t._v("性能缺陷。Cookie 紧跟域名，不管域名下面的某一个地址需不需要这个 Cookie ，请求都会携带上完整的 Cookie，这样随着请求数的增多，其实会造成巨大的性能浪费的，因为请求携带了很多不必要的内容。")])]),t._v(" "),a("li",[a("p",[t._v("安全缺陷。由于 Cookie 以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改，在 Cookie 的有效期内重新发送给服务器，这是相当危险的。另外，在"),a("code",[t._v("HttpOnly")]),t._v("为 false 的情况下，Cookie 信息能直接通过 JS 脚本来读取。")])])]),t._v(" "),a("h2",{attrs:{id:"localstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localstorage"}},[t._v("#")]),t._v(" localStorage")]),t._v(" "),a("h3",{attrs:{id:"和cookie异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和cookie异同"}},[t._v("#")]),t._v(" 和Cookie异同")]),t._v(" "),a("p",[a("code",[t._v("localStorage")]),t._v("有一点跟"),a("code",[t._v("Cookie")]),t._v("一样，就是针对一个域名，即在同一个域名下，会存储相同的一段"),a("strong",[t._v("localStorage")]),t._v("。")]),t._v(" "),a("p",[t._v("不过它相对"),a("code",[t._v("Cookie")]),t._v("还是有相当多的区别的:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("容量。localStorage 的容量上限为"),a("strong",[t._v("5M")]),t._v("，相比于"),a("code",[t._v("Cookie")]),t._v("的 4K 大大增加。当然这个 5M 是针对一个域名的，因此对于一个域名是持久存储的。")])]),t._v(" "),a("li",[a("p",[t._v("只存在客户端，默认不参与与服务端的通信。这样就很好地避免了 Cookie 带来的"),a("strong",[t._v("性能问题")]),t._v("和"),a("strong",[t._v("安全问题")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("接口封装。通过"),a("code",[t._v("localStorage")]),t._v("暴露在全局，并通过它的 "),a("code",[t._v("setItem")]),t._v(" 和 "),a("code",[t._v("getItem")]),t._v("等方法进行操作，非常方便。")])])]),t._v(" "),a("h3",{attrs:{id:"操作方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作方式"}},[t._v("#")]),t._v(" 操作方式")]),t._v(" "),a("p",[t._v("接下来我们来具体看看如何来操作"),a("code",[t._v("localStorage")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sanyuan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sanyuan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \nlocalStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("接着进入相同的域名时就能拿到相应的值:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("从这里可以看出，"),a("code",[t._v("localStorage")]),t._v("其实存储的都是字符串，如果是存储对象需要调用"),a("code",[t._v("JSON")]),t._v("的"),a("code",[t._v("stringify")]),t._v("方法，并且用"),a("code",[t._v("JSON.parse")]),t._v("来解析成对象。")]),t._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("p",[t._v("利用"),a("code",[t._v("localStorage")]),t._v("的较大容量和持久特性，可以利用"),a("code",[t._v("localStorage")]),t._v("存储一些内容稳定的资源，比如官网的"),a("code",[t._v("logo")]),t._v("，存储"),a("code",[t._v("Base64")]),t._v("格式的图片资源，因此利用"),a("code",[t._v("localStorage")])]),t._v(" "),a("h2",{attrs:{id:"sessionstorage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage"}},[t._v("#")]),t._v(" sessionStorage")]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("p",[a("code",[t._v("sessionStorage")]),t._v("以下方面和"),a("code",[t._v("localStorage")]),t._v("一致:")]),t._v(" "),a("ul",[a("li",[t._v("容量。容量上限也为 5M。")]),t._v(" "),a("li",[t._v("只存在客户端，默认不参与与服务端的通信。")]),t._v(" "),a("li",[t._v("接口封装。除了"),a("code",[t._v("sessionStorage")]),t._v("名字有所变化，存储方式、操作方式均和"),a("code",[t._v("localStorage")]),t._v("一样。")])]),t._v(" "),a("p",[t._v("但"),a("code",[t._v("sessionStorage")]),t._v("和"),a("code",[t._v("localStorage")]),t._v("有一个本质的区别，那就是前者只是会话级别的存储，并不是持久化存储。会话结束，也就是页面关闭，这部分"),a("code",[t._v("sessionStorage")]),t._v("就不复存在了。")]),t._v(" "),a("h3",{attrs:{id:"应用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景-2"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("ol",[a("li",[t._v("可以用它对表单信息进行维护，将表单信息存储在里面，可以保证页面即使刷新也不会让之前的表单信息丢失。")]),t._v(" "),a("li",[t._v("可以用它存储本次浏览记录。如果关闭页面后不需要这些记录，用"),a("code",[t._v("sessionStorage")]),t._v("就再合适不过了。事实上微博就采取了这样的存储方式。")])]),t._v(" "),a("h2",{attrs:{id:"indexdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexdb"}},[t._v("#")]),t._v(" IndexDB")]),t._v(" "),a("p",[a("code",[t._v("IndexDB")]),t._v("是运行在浏览器中的"),a("code",[t._v("非关系型数据库")]),t._v(", 本质上是数据库，绝不是和刚才WebStorage的 5M 一个量级，理论上这个容量是没有上限的。")]),t._v(" "),a("p",[t._v("关于它的使用，本文侧重原理，而且 MDN 上的教程文档已经非常详尽，这里就不做赘述了，感兴趣可以看一下"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API/Using_IndexedDB",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("接着我们来分析一下"),a("code",[t._v("IndexDB")]),t._v("的一些重要特性，除了拥有数据库本身的特性，比如"),a("code",[t._v("支持事务")]),t._v("，"),a("code",[t._v("存储二进制数据")]),t._v("，还有这样一些特性需要格外注意：")]),t._v(" "),a("ol",[a("li",[t._v("键值对存储。内部采用"),a("code",[t._v("对象仓库")]),t._v("存放数据，在这个对象仓库中数据采用"),a("strong",[t._v("键值对")]),t._v("的方式来存储。")]),t._v(" "),a("li",[t._v("异步操作。数据库的读写属于 I/O 操作, 浏览器中对异步 I/O 提供了支持。")]),t._v(" "),a("li",[t._v("受同源策略限制，即无法访问跨域的数据库。")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("浏览器中各种本地存储和缓存技术的发展，给前端应用带来了大量的机会，PWA 也正是依托了这些优秀的存储方案才得以发展起来。重新梳理一下这些本地存储方案:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("cookie")]),t._v("并不适合存储，而且存在非常多的缺陷。")]),t._v(" "),a("li",[a("code",[t._v("Web Storage")]),t._v("包括"),a("code",[t._v("localStorage")]),t._v("和"),a("code",[t._v("sessionStorage")]),t._v(", 默认不会参与和服务器的通信。")]),t._v(" "),a("li",[a("code",[t._v("IndexDB")]),t._v("为运行在浏览器上的非关系型数据库，为大型数据的存储提供了接口。")])])])}),[],!1,null,null,null);a.default=o.exports}}]);