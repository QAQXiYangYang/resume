/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

const base = {
  title: '杨阳的简历',
  name: '杨阳',
  position: '前端工程师',
  shortDescription: '一腔热血的激情，一夜失眠的创意，一个像素的执着。 ',
  description: '我是一个充满热情、创意丰富、善于解决问题的前端工程师。希望找到能让我充分发挥这些特长的工作！ :)',
  infomations: [{
    icon: 'https://cdn.ijason.cc/static/svgs/info/nowCity.svg',
    key: '居住地',
    value: '北京 · 昌平区'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/email.svg',
    key: '邮箱',
    value: '15931430204@sina.cn'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/phone.svg',
    key: '手机号',
    value: '+86 15931430204'
  }],
  skills: [{
    value: 'HTML',
    logo: 'https://cdn.ijason.cc/static/images/logos/html.png'
  }, {
    value: 'CSS',
    logo: 'https://cdn.ijason.cc/static/images/logos/css.png'
  }, {
    value: 'JavaScript',
    logo: 'https://cdn.ijason.cc/static/images/logos/javascript.png',
    style: {
      background: 'linear-gradient(to bottom, #ffeb0e , #efdd1b)',
      'border-color': '#ffeb0e'
    }
  }, {
    value: 'Node.js',
    logo: 'https://cdn.ijason.cc/static/images/logos/nodejs.png',
    style: {
      background: 'linear-gradient(to bottom, #8ccf00 , #80bd01)',
      'border-color': '#8ccf00'
    }
  }, {
    value: 'PHP',
    logo: 'https://cdn.ijason.cc/static/images/logos/php.png',
    style: {
      background: 'linear-gradient(to bottom, #8093d1 , #7b8ec9)',
      'border-color': '#8093d1'
    }
  }, {
    value: 'Python',
    logo: 'https://cdn.ijason.cc/static/images/logos/python.png'
  }, {
    value: 'Photoshop',
    logo: 'https://cdn.ijason.cc/static/images/logos/photoshop.png',
    style: {
      background: '#001d26',
      border: '5px solid #00c8ff'
    }
  }, {
    value: 'Sketch',
    logo: 'https://cdn.ijason.cc/static/images/logos/sketch.png',
    style: {
      background: 'linear-gradient(to bottom, #1d0f4f , #130a33)',
      'border-color': '#1d0f4f'
    }
  }],
  projectRefer: '在我的 Github 查看更多项目',
  designs: {
    first: {
      background: `#EDF1F5`,
      mainImage: 'http://www.beforeyou.me/img/linjia.png',
      title: '邻家便利店',
      subTitle: '网上商城',
      desc: '邻家便利店是依托邻里家便利店开设的网上超市.力求为顾客提供优质、安全的服务和商品。',
      link: 'http://www.linjia-cvs.cn/html/home.html#reloaded',
      linkRefer: '去查看详情',
      posi: 'left'
    },
    second: {
      background: '#222',
      mainImage: 'http://www.beforeyou.me/img/dangning.gif',
      title: '当宁消防网',
      subTitle: '',
      desc: '当宁消防网是一个消防电子类产品销售及技术服务网络平台.',
      link: '',
      linkRefer: '',
      posi: 'left'
    },
    third: {
      background: '#F8F8F8',
      mainImage: 'http://www.beforeyou.me/img/home.gif',
      title: '公司主页',
      subTitle: '',
      desc: '为小咪渣旅游和时代传奇教育制作公司首页',
      link: '',
      linkRefer: '',
      posi: 'left'
    }
  },
  articles: [{
    title: 'js中的执行环境',
    thumb: '浅谈js中的执行环境',
    url: 'https://www.zybuluo.com/1002522146/note/779498',
    time: '2017-03-14'
  }, {
    title: 'Webpack入门指南',
    thumb: 'webpack的自我介绍就是一个打包工具，将模块间的依赖关系构建成整体的静态资源.',
    url: 'https://www.zybuluo.com/1002522146/note/806635',
    time: '2017-03-09'
  }, {
    title: 'JS模块化',
    thumb: '聊JS模块化的个人笔记',
    url: 'https://www.zybuluo.com/1002522146/note/804222',
    time: '2017-03-04'
  }, {
    title: 'Node.js进阶のMongoose',
    thumb: 'Mongoose库简而言之就是对node环境中MongoDB数据库操作的封装，一种对象模型工具，可以将数据库中的数据转换为JavaScript对象供我们使用。',
    url: 'https://www.zybuluo.com/1002522146/note/790018',
    time: '2017-03-03'
  },
  {
    title: 'Vue源码分析笔记',
    thumb: '数据代理(MVVM.js)/模板解析(compile.js)/数据劫持-->数据绑定',
    url: 'https://www.zybuluo.com/1002522146/note/793111',
    time: '2017-02-27'
  }, {
    title: '面试的一些 JavaScript 算法',
    thumb: '汇总了一些 JavaScript 面试的算法题，有简单有复杂，给出的解法也有多种，如果大家有什么更好的写法，私聊我~',
    url: 'https://www.zybuluo.com/1002522146/note/857333',
    time: '2017-03-02'
  }]
}

const en = {
  title: `Mr. Yang's resume`,
  name: 'Yang Yang',
  position: 'Front end Engineer',
  shortDescription: 'A passion of blood，Sleepless nights creative，One pixel obsession。',
  description: `I am a passionate, creative and problem solving front end engineer. I hope to find a job that will give me full scope for these special skills!`,
  infomations: [{
    icon: 'https://cdn.ijason.cc/static/svgs/info/nowCity.svg',
    key: 'Live in',
    value: 'Beijing, Changping District'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/email.svg',
    key: 'Email',
    value: '15931430204@sina.cn'
  }, {
    icon: 'https://cdn.ijason.cc/static/svgs/info/phone.svg',
    key: 'Phone Number',
    value: '+86 15931430204'
  }],
  projects: [{
    image: 'https://cdn.ijason.cc/static/images/projects/goszu.jpg',
    desc: 'A website navigation for students of Shenzhen University. It collects many commonly used websites and some websites hard to find. This site is powered by Vue.js and Node.js for backend.',
    url: 'http://www.goszu.com/',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/goszu_qrcode.png'
  }, {
    image: 'https://cdn.ijason.cc/static/images/projects/powerusage.jpg',
    desc: `It's a website that can query the remaining electricity of dormitory, predict available days based on your usage, and also can push low-power-warning via Wechat.`,
    url: 'http://www.wacxt.cn/powerusage/',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/powerusage_qrcode.png'
  }, {
    image: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp.jpg',
    desc: `A app can auto sync class schedule from server. You can inquire your class infomations everywhere. It's based on Cordova and Vue.js and Node.js for backend. `,
    url: 'https://github.com/heyszu/szuschedule-app',
    qrcode: 'https://cdn.ijason.cc/static/images/projects/szucheduleapp_qrcode.png'
  }],
  projectRefer: 'See more projects in my Github',
  designs: {
    jingmei: {
      background: `#859398`,
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_jingmei.png',
      title: 'Silence',
      subTitle: 'Theme for FlymeOS',
      desc: 'This is a theme designing for MEIZU Flyme Theme Competition 2014. No edges and corners icons, with low saturation color and the wallpaper to bring out a quiet feeling.',
      link: 'http://www.ui.cn/detail/26910.html',
      linkRefer: 'See detail in ui.cn',
      posi: 'left'
    },
    mi4Mockup: {
      background: '#222',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/mockup_mi4.png',
      title: 'Mi4 Mockup',
      subTitle: 'Phone mockup psd',
      desc: 'Copy painting from offcial website of Xiaomi 4. Fully vector painting, the screen use intelligent object, can be embedded in the display picture.',
      link: 'http://www.ui.cn/detail/21758.html',
      linkRefer: 'See detail in ui.cn',
      posi: 'left'
    },
    logos: {
      background: '#F8F8F8',
      mainImage: 'https://cdn.ijason.cc/static/images/designs/logos.png',
      title: 'Logos',
      subTitle: '',
      desc: 'Design for some websites and Wechat Public Accounts.',
      link: '',
      linkRefer: '去 ui.cn 查看详情',
      posi: 'left'
    }
  }
}

export default {
  cn: {
    website: base,
    route: routeMap.map(v => v.cn)
  },
  en: {
    website: Object.assign({}, base, en),
    route: routeMap.map(v => v.en)
  }
}
