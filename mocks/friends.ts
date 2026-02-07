import { http, HttpHandler, HttpResponse } from 'msw';

const friends: Friend[] = [
  {
    name: "阮一峰的网络日志",
    url: "https://www.ruanyifeng.com/blog/",
    avatar: "https://www.ruanyifeng.com/favicon.ico",
    description: "知名技术博主，分享 Web 开发与科技资讯"
  },
  {
    name: "张鑫旭-鑫空间",
    url: "https://www.zhangxinxu.com/wordpress/",
    avatar: "https://www.zhangxinxu.com/favicon.ico",
    description: "专注前端开发，CSS 与 JavaScript 专家"
  },
  {
    name: "廖雪峰的官方网站",
    url: "https://www.liaoxuefeng.com/",
    avatar: "https://www.liaoxuefeng.com/static/img/logo.png",
    description: "Python、Git、Java 等教程作者"
  },
  {
    name: "酷壳 – CoolShell",
    url: "https://coolshell.cn/",
    avatar: "https://coolshell.cn/wp-content/themes/coolshe/images/logo.png",
    description: "陈皓的技术博客，涵盖编程与系统架构"
  },
  {
    name: "左耳朵耗子",
    url: "https://coolshell.cn/author/haoel",
    avatar: "https://coolshell.cn/wp-content/uploads/2013/04/haoel.jpg",
    description: "资深工程师，分享技术与思考"
  },
  {
    name: "Vue.js 作者尤雨溪",
    url: "https://evanyou.me/",
    avatar: "https://evanyou.me/images/avatar.png",
    description: "Vue.js 创始人个人博客"
  },
  {
    name: "AlloyTeam",
    url: "http://www.alloyteam.com/",
    avatar: "http://www.alloyteam.com/favicon.ico",
    description: "腾讯 AlloyTeam 前端团队博客"
  },
  {
    name: "凹凸实验室",
    url: "https://aotu.io/",
    avatar: "https://aotu.io/favicon.ico",
    description: "京东用户体验设计部前端团队"
  },
  {
    name: "小胡子哥的个人网站",
    url: "https://www.barretlee.com/",
    avatar: "https://www.barretlee.com/static/images/avatar.jpg",
    description: "前端工程师，关注性能与工程化"
  },
  {
    name: "冴羽的博客",
    url: "https://github.com/mqyqingfeng/Blog",
    avatar: "https://avatars.githubusercontent.com/u/17982705?v=4",
    description: "JavaScript 深入系列作者"
  },
  {
    name: "ConardLi's Blog",
    url: "https://github.com/ConardLi/conardli.github.io",
    avatar: "https://avatars.githubusercontent.com/u/25027560?v=4",
    description: "前端进阶与源码解析"
  },
  {
    name: "ssh 的博客",
    url: "https://shanyue.tech/",
    avatar: "https://shanyue.tech/favicon.ico",
    description: "DevOps 与前端全栈开发者"
  },
  {
    name: "Jimmy's Blog",
    url: "https://jimmycai.com/",
    avatar: "https://jimmycai.com/favicon.ico",
    description: "前端与云原生技术分享"
  },
  {
    name: "TIGERB 的技术博客",
    url: "https://github.com/TIGERB/easy-tips",
    avatar: "https://avatars.githubusercontent.com/u/12166403?v=4",
    description: "PHP 与 Go 后端开发实践"
  },
  {
    name: "刘遄的 Linux 教程",
    url: "https://www.linuxprobe.com/",
    avatar: "https://www.linuxprobe.com/favicon.ico",
    description: "《Linux 就该这么学》作者"
  },
  {
    name: "郭霖的 Android 博客",
    url: "https://blog.csdn.net/guolin_blog",
    avatar: "https://profile.csdnimg.cn/5/1/3/1_guolin_blog",
    description: "Android 开发权威教程作者"
  },
  {
    name: "stormzhang",
    url: "https://stormzhang.com/",
    avatar: "https://stormzhang.com/assets/images/avatar.png",
    description: "前滴滴工程师，分享成长与技术"
  },
  {
    name: "Hsivawfg's Blog",
    url: "https://hsivawfg.github.io/",
    avatar: "https://hsivawfg.github.io/favicon.ico",
    description: "算法与前端技术笔记"
  },
  {
    name: "Chen's Blog",
    url: "https://chenyfan.com/",
    avatar: "https://chenyfan.com/favicon.ico",
    description: "计算机视觉与 AI 工程师"
  },
  {
    name: "稀土掘金优秀作者主页",
    url: "https://juejin.cn/user/1234567890/posts",
    avatar: "https://p3-passport.byteacctimg.com/img/user-avatar/abcdef123456~300x300.image",
    description: "精选技术社区优质创作者"
  }
];


const friendsHandlers: HttpHandler[] = [
  http.get('/api/friends/get', ({ params }) => {
    return HttpResponse.json({
      code: 1,
      data: {
        list: friends
      }
    })
  })
]

export default friendsHandlers