(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{485:function(a,t,e){"use strict";e.r(t);var n=e(1),r=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在 http 中，有两种主要的表单提交的方式，体现在两种不同的"),t("code",[a._v("Content-Type")]),a._v("取值:")]),a._v(" "),t("ul",[t("li",[a._v("application/x-www-form-urlencoded")]),a._v(" "),t("li",[a._v("multipart/form-data")])]),a._v(" "),t("p",[a._v("由于表单提交一般是"),t("code",[a._v("POST")]),a._v("请求，很少考虑"),t("code",[a._v("GET")]),a._v("，因此这里我们将默认提交的数据放在请求体中。")]),a._v(" "),t("h2",{attrs:{id:"application-x-www-form-urlencoded"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#application-x-www-form-urlencoded"}},[a._v("#")]),a._v(" application/x-www-form-urlencoded")]),a._v(" "),t("p",[a._v("对于"),t("code",[a._v("application/x-www-form-urlencoded")]),a._v("格式的表单内容，有以下特点:")]),a._v(" "),t("ul",[t("li",[a._v("其中的数据会被编码成以"),t("code",[a._v("&")]),a._v("分隔的键值对")]),a._v(" "),t("li",[a._v("字符以"),t("strong",[a._v("URL编码方式")]),a._v("编码。")])]),a._v(" "),t("p",[a._v("如：")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 转换过程: {a: 1, b: 2} -> a=1&b=2 -> 如下(最终形式)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a%3D1%26b%3D2"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"multipart-form-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multipart-form-data"}},[a._v("#")]),a._v(" multipart/form-data")]),a._v(" "),t("p",[a._v("对于"),t("code",[a._v("multipart/form-data")]),a._v("而言:")]),a._v(" "),t("ul",[t("li",[a._v("请求头中的"),t("code",[a._v("Content-Type")]),a._v("字段会包含"),t("code",[a._v("boundary")]),a._v("，且"),t("code",[a._v("boundary")]),a._v("的值有浏览器默认指定。例: "),t("code",[a._v("Content-Type: multipart/form-data;boundary=----WebkitFormBoundaryRRJKeWfHPGrS4LKe")]),a._v("。")]),a._v(" "),t("li",[a._v("数据会分为多个部分，每两个部分之间通过分隔符来分隔，每部分表述均有 HTTP 头部描述子包体，如"),t("code",[a._v("Content-Type")]),a._v("，在最后的分隔符会加上"),t("code",[a._v("--")]),a._v("表示结束。")])]),a._v(" "),t("p",[a._v("相应的"),t("code",[a._v("请求体")]),a._v("是下面这样:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Content-Disposition: form-data;name="data1";\nContent-Type: text/plain\ndata1\n----WebkitFormBoundaryRRJKeWfHPGrS4LKe\nContent-Disposition: form-data;name="data2";\nContent-Type: text/plain\ndata2\n----WebkitFormBoundaryRRJKeWfHPGrS4LKe--\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),t("p",[a._v("值得一提的是，"),t("code",[a._v("multipart/form-data")]),a._v(" 格式最大的特点在于:"),t("strong",[a._v("每一个表单元素都是独立的资源表述")]),a._v("。另外，你可能在写业务的过程中，并没有注意到其中还有"),t("code",[a._v("boundary")]),a._v("的存在，如果你打开抓包工具，确实可以看到不同的表单元素被拆分开了，之所以在平时感觉不到，是以为浏览器和 HTTP 给你封装了这一系列操作。")]),a._v(" "),t("p",[a._v("而且，在实际的场景中，对于图片等文件的上传，基本采用"),t("code",[a._v("multipart/form-data")]),a._v("而不用"),t("code",[a._v("application/x-www-form-urlencoded")]),a._v("，因为没有必要做 URL 编码，带来巨大耗时的同时也占用了更多的空间。")])])}),[],!1,null,null,null);t.default=r.exports}}]);