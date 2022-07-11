(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{286:function(_,v,o){"use strict";o.r(v);var t=o(13),e=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("三次握手前，服务端的状态从"),v("code",[_._v("CLOSED")]),_._v("变为"),v("code",[_._v("LISTEN")]),_._v(", 同时在内部创建了两个队列："),v("strong",[_._v("半连接队列")]),_._v("和"),v("strong",[_._v("全连接队列")]),_._v("，即"),v("strong",[_._v("SYN队列")]),_._v("和"),v("strong",[_._v("ACCEPT队列")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"半连接队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#半连接队列"}},[_._v("#")]),_._v(" 半连接队列")]),_._v(" "),v("p",[_._v("当客户端发送"),v("code",[_._v("SYN")]),_._v("到服务端，服务端收到以后回复"),v("code",[_._v("ACK")]),_._v("和"),v("code",[_._v("SYN")]),_._v("，状态由"),v("code",[_._v("LISTEN")]),_._v("变为"),v("code",[_._v("SYN_RCVD")]),_._v("，此时这个连接就被推入了"),v("strong",[_._v("SYN队列")]),_._v("，也就是"),v("strong",[_._v("半连接队列")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"全连接队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全连接队列"}},[_._v("#")]),_._v(" 全连接队列")]),_._v(" "),v("p",[_._v("当客户端返回"),v("code",[_._v("ACK")]),_._v(", 服务端接收后，三次握手完成。这个时候连接等待被具体的应用取走，在被取走之前，它会被推入另外一个 TCP 维护的队列，也就是"),v("strong",[_._v("全连接队列(Accept Queue)")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"syn-flood-攻击原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#syn-flood-攻击原理"}},[_._v("#")]),_._v(" SYN Flood 攻击原理")]),_._v(" "),v("p",[_._v("SYN Flood 属于典型的 DoS/DDoS 攻击。其攻击的原理很简单，就是用客户端在短时间内伪造大量不存在的 IP 地址，并向服务端疯狂发送"),v("code",[_._v("SYN")]),_._v("。对于服务端而言，会产生两个危险的后果:")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("处理大量的"),v("code",[_._v("SYN")]),_._v("包并返回对应"),v("code",[_._v("ACK")]),_._v(", 势必有大量连接处于"),v("code",[_._v("SYN_RCVD")]),_._v("状态，从而占满整个"),v("strong",[_._v("半连接队列")]),_._v("，无法处理正常的请求。")])]),_._v(" "),v("li",[v("p",[_._v("由于是不存在的 IP，服务端长时间收不到客户端的"),v("code",[_._v("ACK")]),_._v("，会导致服务端不断重发数据，直到耗尽服务端的资源。")])])]),_._v(" "),v("h2",{attrs:{id:"如何应对-syn-flood-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何应对-syn-flood-攻击"}},[_._v("#")]),_._v(" 如何应对 SYN Flood 攻击？")]),_._v(" "),v("ol",[v("li",[_._v("增加 SYN 连接，也就是增加半连接队列的容量。")]),_._v(" "),v("li",[_._v("减少 SYN + ACK 重试次数，避免大量的超时重发。")]),_._v(" "),v("li",[_._v("利用 SYN Cookie 技术，在服务端接收到"),v("code",[_._v("SYN")]),_._v("后不立即分配连接资源，而是根据这个"),v("code",[_._v("SYN")]),_._v("计算出一个Cookie，连同第二次握手回复给客户端，在客户端回复"),v("code",[_._v("ACK")]),_._v("的时候带上这个"),v("code",[_._v("Cookie")]),_._v("值，服务端验证 Cookie 合法之后才分配连接资源。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);