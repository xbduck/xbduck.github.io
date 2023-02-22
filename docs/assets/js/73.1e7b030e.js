(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{465:function(t,v,_){"use strict";_.r(v);var s=_(1),e=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[v("strong",[t._v("URI")]),t._v(", 全称为(Uniform Resource Identifier), 也就是"),v("strong",[t._v("统一资源标识符")]),t._v("，它的作用很简单，就是区分互联网上不同的资源。")]),t._v(" "),v("p",[t._v("但是，它并不是我们常说的"),v("code",[t._v("网址")]),t._v(", 网址指的是"),v("code",[t._v("URL")]),t._v(", 实际上"),v("code",[t._v("URI")]),t._v("包含了"),v("code",[t._v("URN")]),t._v("和"),v("code",[t._v("URL")]),t._v("两个部分，由于 URL 过于普及，就默认将 URI 视为 URL 了。")]),t._v(" "),v("h2",{attrs:{id:"uri-的结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#uri-的结构"}},[t._v("#")]),t._v(" URI 的结构")]),t._v(" "),v("p",[t._v("URI 真正最完整的结构是这样的。")]),t._v(" "),v("p",[v("img",{attrs:{src:t.$withBase("/http/004.png")}})]),t._v(" "),v("p",[t._v("可能你会有疑问，好像跟平时见到的不太一样啊！先别急，我们来一一拆解。")]),t._v(" "),v("p",[v("strong",[t._v("scheme")]),t._v(" 表示协议名，比如"),v("code",[t._v("http")]),t._v(", "),v("code",[t._v("https")]),t._v(", "),v("code",[t._v("file")]),t._v("等等。后面必须和"),v("code",[t._v("://")]),t._v("连在一起。")]),t._v(" "),v("p",[v("strong",[t._v("user:passwd")]),t._v("@ 表示登录主机时的用户信息，不过很不安全，不推荐使用，也不常用。")]),t._v(" "),v("p",[v("strong",[t._v("host:port")]),t._v("表示主机名和端口。")]),t._v(" "),v("p",[v("strong",[t._v("path")]),t._v("表示请求路径，标记资源所在位置。")]),t._v(" "),v("p",[v("strong",[t._v("query")]),t._v("表示查询参数，为"),v("code",[t._v("key=val")]),t._v("这种形式，多个键值对之间用"),v("code",[t._v("&")]),t._v("隔开。")]),t._v(" "),v("p",[v("strong",[t._v("fragment")]),t._v("表示 URI 所定位的资源内的一个"),v("strong",[t._v("锚点")]),t._v("，浏览器可以根据这个锚点跳转到对应的位置。")]),t._v(" "),v("p",[t._v("举个例子:")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("https")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("wd"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("rsv_spt"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("这个 URI 中，"),v("code",[t._v("https")]),t._v("即"),v("code",[t._v("scheme")]),t._v("部分，"),v("code",[t._v("www.baidu.com")]),t._v("为"),v("code",[t._v("host:port")]),t._v("部分（注意，http 和 https 的默认端口分别为80、443），"),v("code",[t._v("/s")]),t._v("为"),v("code",[t._v("path")]),t._v("部分，而"),v("code",[t._v("wd=HTTP&rsv_spt=1")]),t._v("就是"),v("code",[t._v("query")]),t._v("部分。")]),t._v(" "),v("h2",{attrs:{id:"uri-编码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#uri-编码"}},[t._v("#")]),t._v(" URI 编码")]),t._v(" "),v("p",[t._v("URI 只能使用"),v("code",[t._v("ASCII")]),t._v(", ASCII 之外的字符是不支持显示的，而且还有一部分符号是界定符，如果不加以处理就会导致解析出错。")]),t._v(" "),v("p",[t._v("因此，URI 引入了"),v("code",[t._v("编码")]),t._v("机制，将所有"),v("strong",[t._v("非 ASCII 码字符")]),t._v("和"),v("strong",[t._v("界定符")]),t._v("转为十六进制字节值，然后在前面加个"),v("code",[t._v("%")]),t._v("。")]),t._v(" "),v("p",[t._v("如，空格被转义成了"),v("code",[t._v("%20")]),t._v("，"),v("strong",[t._v("三元")]),t._v("被转义成了"),v("code",[t._v("%E4%B8%89%E5%85%83")]),t._v("。")])])}),[],!1,null,null,null);v.default=e.exports}}]);