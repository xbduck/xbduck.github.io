(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{436:function(v,_,p){"use strict";p.r(_);var t=p(1),e=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("个人背景: 武汉理工大学(211)计算机系大三下，准备找实习。最近找大佬内推，投了北京字节跳动，据说是非常核心的一个小组。")]),v._v(" "),_("p",[v._v("3月17日下午 抖音架构组"),_("code",[v._v("前端实习生")]),v._v(" 一二三面 + HR 历时约 3.5 小时。")]),v._v(" "),_("p",[v._v("这份面经和牛客上的其它面经不太一样，不仅仅列几个题目就完事儿，中间掺杂了一些个人的一些表现以及和面试官的互动，让大家能更完整地感受到整个过程。另外，大厂面试嘛，你懂的，面试官喜欢从一个点切入往深了问，所以在会有非常多嵌套的问题，我觉得这才是真正的面试场景，而不是一条一条堆砌题目，跟做考试试卷一样。")]),v._v(" "),_("h2",{attrs:{id:"抖音一面-45min"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抖音一面-45min"}},[v._v("#")]),v._v(" 抖音一面(45min）：")]),v._v(" "),_("p",[v._v("- 自我介绍一下")]),v._v(" "),_("p",[v._v("- VueRouter 的原理你能不能说一下呢？(两种路由方式说了一下)")]),v._v(" "),_("p",[v._v("- 对于 History 路由而言，你觉得在服务端是如何做路由分发的呢？(愣住，面试官接下来跟我解释了一波)")]),v._v(" "),_("p",[v._v("- 你说你看过 Vue 源码，能不能介绍一下 Vuex 的 Mutation 和 Action 的区别吗？(mutation做同步操作，action一般用于异步)")]),v._v(" "),_("p",[v._v("- 为什么要设计出 Mutation 和 Action 这两个东西？(我开始不是很清楚，扯到 Redux，和面试官交流后，一致同意 Action 作为业务逻辑的封装更合适，提供了更大的自由度)")]),v._v(" "),_("p",[v._v("- 计算机网络看你写过文章，我就不问了。(我: 笑...)问你一点操作系统的哈，能不能说说磁盘寻道算法？(思考了一下，说了三种，FIFO，最短优先，电梯算法)")]),v._v(" "),_("p",[v._v("- 那你能不能说一说最短寻道时间优先的缺点是什么？(愣住，面试官耐心给我解释其实会造成远处的任务饥饿问题)")]),v._v(" "),_("p",[v._v("- 进程和线程的区别(解释了一波，顺便把Chrome为什么从单进程转成多进程架构说了一下)")]),v._v(" "),_("p",[v._v("- 知道哪些进程间通信(IPC)的方式？ (主从式、会话式、消息-邮箱机制、管道、共享内存、Unix Domain Socket，然后跟他讲我看过 Chromium IPC 的源码，内核里面把以前的 ChannelPosix 换成了 ChannelMojo，从而达到线程安全的目的，顺便解释了下线程安全，面试官表示很欣赏，说这个都看过，看来你学了不少)")]),v._v(" "),_("p",[v._v("- 能不能说说从输入 URL 到页面渲染经历了什么？(被问过很多次了，DNS 解析过程，HTML词法分析和语法分析，CSS解析，\n合成图层、合成线程调用光栅化线程池，生成位图后浏览器进程间通信过程，显卡缓存与显示器的关系，面试官说可以)")]),v._v(" "),_("p",[v._v("- 给你一道算法题，盛水最多的容器。直接给我最优解吧。\n"),_("img",{attrs:{src:"https://uploadfiles.nowcoder.com/images/20200318/247940667_1584492939154_BFC7365AD4D51DF16760D1EF516C48BF",alt:"图片说明",title:"图片标题"}}),v._v("\n我花了 15 分钟写完了，结果能跑通。给他解释了一下思路，他说这个算法核心的思路是什么？我说短板效应吧，他说其实是贪心。没答上来，感觉比较尴尬，我灵机一动，说可能贪心已经潜移默化到我的思想里面了吧，他大笑，说可以、很强，稍等一会儿去叫二面面试官。一面就这样愉快地结束了。")]),v._v(" "),_("h2",{attrs:{id:"抖音二面-1个小时"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抖音二面-1个小时"}},[v._v("#")]),v._v(" 抖音二面(1个小时)")]),v._v(" "),_("p",[v._v("这个面试官就比较高冷了，全程不露脸，说话语气特别凝重，可能沉默 5 秒钟然后问你一个非常严肃的问题。")]),v._v(" "),_("p",[v._v("- 简单的自我介绍")]),v._v(" "),_("p",[v._v("- ES5写一个数组去重(刚开始写了一个O(n^2)时间的)")]),v._v(" "),_("p",[v._v("- 能不能优化？ (我问能不能用新空间，他说可以，然后写了一个O(n)时间的)")]),v._v(" "),_("p",[v._v("- 能不能区别开数字和字符串？(想了想，最后还是用indexOf方式，最优的没想出来，面完猛然想出来了，当时脑子有点乱)")]),v._v(" "),_("p",[v._v("- 讲一讲 HTTPS 加密(对称加密有AES + CHACHA20, 分组模式以前有 CBC、CTR，TLS1.3 中只剩下 GCM，非对称加密 RSA、ECDHE)")]),v._v(" "),_("p",[v._v("- 怎么握手的呢？(讲了三个版本：传统 RSA、TLS1.2、TLS1.3, 后面也讲了 TLS1.3 的 Session ID、Session Ticket 以及 PSK)")]),v._v(" "),_("p",[v._v("- HTTPS 如何保证数据是否被篡改？(说了下有签名的过程)")]),v._v(" "),_("p",[v._v("- 签名是什么原理(私钥加密，公钥解密，比对哈希摘要)")]),v._v(" "),_("p",[v._v("- 你知道哪些哈希摘要算法(Sha256, Sha384)")]),v._v(" "),_("p",[v._v("- 你能不能介绍一下你的项目(说了下项目遇到的挑战，说了这几点: 1. 怎么解决闭包陷阱。2. 通过 EventLoop 解决 transform 失效的问题)")]),v._v(" "),_("p",[v._v("- 能不能说说你对 EventLoop 的理解(宏任务-微任务-UI渲染)")]),v._v(" "),_("p",[v._v("- 如果要在UI渲染之前做一些事情你会怎么办？(我会启动微任务执行吧)")]),v._v(" "),_("p",[v._v("- requestAnimationFrame 在 EventLoop 中是一个什么位置？(给他解释显示器和浏览器的 Vsync 信号，然后rAF首先执行，他貌似不满意，我请教了他一下，给我解释实际上rAF会在UI渲染之前)")]),v._v(" "),_("p",[v._v("- 分离图层做动画有什么好处呢？(给他讲了分层的原理，通过设置 CSS 的 will-change 可以转换为一个图层，调用 GPU 加速)")]),v._v(" "),_("p",[v._v("- 分离图层会发生重绘吗？(会)那既然重绘，它的好处在哪里？(不会影响其他的图层)")]),v._v(" "),_("p",[v._v("- 你觉得你哪些技术比较厉害？(Vue 源码，浏览器，服务端渲染)")]),v._v(" "),_("p",[v._v("- 你说你看过 Vue 的源码，能不能说说 computed 属性为什么能够在依赖改变的时候，自己发生变化？(我说 computed 和 watch 公用一个 Watcher 类，在 computed 的情况下有一个 dep 收集依赖，从而达到更新computed属性的效果，顺便跟他讲了computed Watcher如何跟渲染Watcher关联，以及 Vue 在二次收集依赖时用 cleanupDeps 卸载一些无用的 dep)")]),v._v(" "),_("p",[v._v("- 你觉得你的优势是什么？(1.深度思考的能力 2.善于分享 3.社区影响力)")]),v._v(" "),_("p",[v._v("- 你对 webpack 了解多少？(我说了下 webpack 的一些优化手段，打包时间方面，预编译、缓存、缩小构建目标，说了大概十个插件，然后打包体积上，JS 和 CSS 的Tree-Shaking 怎么配置)")]),v._v(" "),_("p",[v._v("- 你觉得 CommonJS 为什么不能做 Tree-Shaking ?")]),v._v(" "),_("p",[v._v("- ESModule 既然是编译时加载，那它可以做到运行时加载吗，想过这个问题吗？(愣了一会，说webpack 有动态 import 的方式)")]),v._v(" "),_("p",[v._v("- 写过 loader 和 plugin 吗？(实话实说，没有)那你知道两者有什么差异吗？(先loader后plugin)")]),v._v(" "),_("p",[v._v("- 你对未来的发展是如何规划的？(谈了谈我对五级工程师的看法，我的阶段目标是到达最低的第五级)")]),v._v(" "),_("p",[v._v("- 你觉得你在专业上的目标是怎样的？(成为领域前20%)")]),v._v(" "),_("p",[v._v("- 有什么想问我的？(问了下可能触及的技术栈，以及抖音在开源方面的打算)")]),v._v(" "),_("h2",{attrs:{id:"抖音三面-1个小时"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#抖音三面-1个小时"}},[v._v("#")]),v._v(" 抖音三面(1个小时)")]),v._v(" "),_("p",[v._v("这位小哥还是比较和蔼的，聊的很多东西跟具体的技术细节就关系不大啦。")]),v._v(" "),_("p",[v._v("- 你是如何接触到前端的？为什么要选择前端？为什么不去搞 c++ 底层系统研发、后端、人工智能？(说了下我的看法，他表示认可)")]),v._v(" "),_("p",[v._v("- 对学校的课抱着什么样的心态？")]),v._v(" "),_("p",[v._v("- 做这个项目的初衷是什么？里面有用到专业上学到的知识吗？")]),v._v(" "),_("p",[v._v("- 如果每次要生成不一样的 ID，你怎么来设计这个系统呢？(跟他聊了聊哈希冲突如何解决，他表示可以)")]),v._v(" "),_("p",[v._v("- 在学校应该学过 C 吧，你觉得 C 语言在设计上有什么好或者不好的地方呢？(提了下虚基类，实在想不起来这玩意啥用了，顺带说了下多继承的问题)")]),v._v(" "),_("p",[v._v("- 如果让你用 JS 来实现多继承的功能，你会怎么来做呢，或者用什么其他的方式？(说了下自己对于继承的看法，以及这个设计不太好的地方，然后更喜欢组合式的方式)")]),v._v(" "),_("p",[v._v("- 比如说你是你妈妈的儿子，同时也是公司里的员工、学校里的学生，你怎么去设计出你这个实例呢？(将不同的角色功能进行组合，然后实例化)")]),v._v(" "),_("p",[v._v("- 对前端的知识体系如果要分类的话，你怎么分类？(谈了谈未来前端发展的四个分支)")]),v._v(" "),_("p",[v._v("- 如果基础知识要细分的话，你怎么来分？(说了下学习基础知识的三部曲，第一级应用，第二级原理，第三级建设社区和贡献代码，我觉得我目前在第二级到第三级之间)")]),v._v(" "),_("ul",[_("li",[v._v("有想过去做一个开源的工具吗？(谈了谈自己对于开源的理解)\n- 在学校有参加什么社团吗？(有，在学校的一个协会，带组内的人一起学习)")])]),v._v(" "),_("p",[v._v("- 有什么想要问我的吗？(聊了聊面试官自己的技术经历，全程还是蛮愉快的)")]),v._v(" "),_("h2",{attrs:{id:"hr-面-30min"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hr-面-30min"}},[v._v("#")]),v._v(" HR 面:(30min)")]),v._v(" "),_("p",[v._v("- 做项目的初衷在什么地方？")]),v._v(" "),_("p",[v._v("- 歌曲倍速播放的功能是怎么实现的？为什么要想到这个？")]),v._v(" "),_("p",[v._v("- 公司的业务可能会压榨自己开源分享的时间，你会介意吗？")]),v._v(" "),_("p",[v._v("- 公司内的一些代码不能开源，和你自己的开源分享冲突了，你怎么办？")]),v._v(" "),_("p",[v._v("- 你为什么不早点去实习？现在才开始找实习？")]),v._v(" "),_("p",[v._v("- 看了你的 GPA ，还是蛮靠前的，你怎么平衡学校的学业和技术的学习的？")]),v._v(" "),_("p",[v._v("- 怎么看待别人在你博客下面发一些怼你的评论？")]),v._v(" "),_("p",[v._v("- 在学校有社团经历吗？")]),v._v(" "),_("p",[v._v("- 自己平时有什么兴趣爱好？")]),v._v(" "),_("p",[v._v("- 和室友关系咋样？")]),v._v(" "),_("h2",{attrs:{id:"整体感受"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整体感受"}},[v._v("#")]),v._v(" 整体感受")]),v._v(" "),_("p",[v._v("面试了一下午，前面三面连续说了太久，到 HR 面的时候声音已经嘶哑了，不过字节的面试体验还是非常好的，效率相当高。自我感觉还算不错，主要是因为两点:")]),v._v(" "),_("ol",[_("li",[v._v("面试官问的问题都是引导性的，而不是死扣一个具体的知识点叫你填空，通常给一个非常宽泛的话题，让你去发挥，因此给了自己非常大的发挥空间，不过这也和自己前期充分的准备有关系。")]),v._v(" "),_("li",[v._v("面试官尝试去问你一些更加深入的问题，直到把你问住，这是好事情，因为他的水平一般在你之上，能问出深度来，说明他很重视你。")])]),v._v(" "),_("p",[v._v("当然，最后拿到了抖音前端架构团队的 offer，并接了 offer。随后就是去北京，展开了连续 5 个月的实习。")])])}),[],!1,null,null,null);_.default=e.exports}}]);