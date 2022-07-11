(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{493:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("对于"),s("code",[t._v("Accept")]),t._v("系列字段的介绍分为四个部分: "),s("strong",[t._v("数据格式")]),t._v("、"),s("strong",[t._v("压缩方式")]),t._v("、"),s("strong",[t._v("支持语言")]),t._v("和"),s("strong",[t._v("字符集")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"数据格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据格式"}},[t._v("#")]),t._v(" 数据格式")]),t._v(" "),s("p",[t._v("上一节谈到 HTTP 灵活的特性，它支持非常多的数据格式，那么这么多格式的数据一起到达客户端，客户端怎么知道它的格式呢？")]),t._v(" "),s("p",[t._v("当然，最低效的方式是直接猜，有没有更好的方式呢？直接指定可以吗？")]),t._v(" "),s("p",[t._v("答案是肯定的。不过首先需要介绍一个标准——"),s("strong",[t._v("MIME")]),t._v("(Multipurpose Internet Mail Extensions, "),s("strong",[t._v("多用途互联网邮件扩展")]),t._v(")。它首先用在电子邮件系统中，让邮件可以发任意类型的数据，这对于 HTTP 来说也是通用的。")]),t._v(" "),s("p",[t._v("因此，HTTP 从"),s("strong",[t._v("MIME type")]),t._v("取了一部分来标记报文 body 部分的数据类型，这些类型体现在"),s("code",[t._v("Content-Type")]),t._v("这个字段，当然这是针对于发送端而言，接收端想要收到特定类型的数据，也可以用"),s("code",[t._v("Accept")]),t._v("字段。")]),t._v(" "),s("p",[t._v("具体而言，这两个字段的取值可以分为下面几类:")]),t._v(" "),s("ul",[s("li",[t._v("text： text/html, text/plain, text/css 等")]),t._v(" "),s("li",[t._v("image: image/gif, image/jpeg, image/png 等")]),t._v(" "),s("li",[t._v("audio/video: audio/mpeg, video/mp4 等")]),t._v(" "),s("li",[t._v("application: application/json, application/javascript, application/pdf, application/octet-stream")])]),t._v(" "),s("h2",{attrs:{id:"压缩方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩方式"}},[t._v("#")]),t._v(" 压缩方式")]),t._v(" "),s("p",[t._v("当然一般这些数据都是会进行编码压缩的，采取什么样的压缩方式就体现在了发送方的"),s("code",[t._v("Content-Encoding")]),t._v("字段上， 同样的，接收什么样的压缩方式体现在了接受方的"),s("code",[t._v("Accept-Encoding")]),t._v("字段上。这个字段的取值有下面几种：")]),t._v(" "),s("ul",[s("li",[t._v("gzip: 当今最流行的压缩格式")]),t._v(" "),s("li",[t._v("deflate: 另外一种著名的压缩格式")]),t._v(" "),s("li",[t._v("br: 一种专门为 HTTP 发明的压缩算法")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gizp\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"支持语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持语言"}},[t._v("#")]),t._v(" 支持语言")]),t._v(" "),s("p",[t._v("对于发送方而言，还有一个"),s("code",[t._v("Content-Language")]),t._v("字段，在需要实现国际化的方案当中，可以用来指定支持的语言，在接受方对应的字段为"),s("code",[t._v("Accept-Language")]),t._v("。如:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" en\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" en\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"字符集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符集"}},[t._v("#")]),t._v(" 字符集")]),t._v(" "),s("p",[t._v("最后是一个比较特殊的字段, 在接收端对应为"),s("code",[t._v("Accept-Charset")]),t._v("，指定可以接受的字符集，而在发送端并没有对应的"),s("code",[t._v("Content-Charset")]),t._v(", 而是直接放在了"),s("code",[t._v("Content-Type")]),t._v("中，以"),s("strong",[t._v("charset")]),t._v("属性指定。如:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("最后以一张图来总结一下吧:")]),t._v(" "),s("p",[s("img",{attrs:{src:t.$withBase("/http/005.png")}})])])}),[],!1,null,null,null);s.default=n.exports}}]);