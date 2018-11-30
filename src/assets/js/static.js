let [introductionTplData, strategyTplData, centerTplData, aboutTplData] = [{}, {}, {}, {}]

const introduction = require.context('../tpl/introduction', true, /\d+\.(tpl)$/)
const strategy = require.context('../tpl/strategy', true, /\d+\.(tpl)$/)
const center = require.context('../tpl/center', true, /\d+\.(tpl)$/)
const about = require.context('../tpl/about', true, /\d+\.(tpl)$/)

// 将tpl文件打包进js中
introduction.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  introductionTplData[key] = introduction(filename)
})
strategy.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  strategyTplData[key] = strategy(filename)
})
center.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  centerTplData[key] = center(filename)
})
about.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  aboutTplData[key] = about(filename)
})

module.exports = {
  // 下载地址
  download: {
    byss: {
      ios: 'https://agent.wcsdk.poker3a.com/static/ldy/byss/download.html',
      android: 'http://dmsdk.wcsdk.poker3a.com/android/download/54/10595'
    }
  },
  // 游戏介绍文章
  introductionTplData,
  // 游戏攻略文章
  strategyTplData,
  // 用户中心
  centerTplData,
  // 关于我们文章
  aboutTplData,
  // 游戏介绍展示文章
  introductionDisTplList: [{
    id: '_1', // 这个id很重要对应的是STATIC.tplData中的tpl
    title: '捕鱼圣手游戏介绍',
    logo: require('../image/logo_01.png')
  }],
  strategyDisTplList: [{
    id: '_1',
    title: '捕鱼圣手之新手抓鱼小技巧',
    date: '2018-11-30',
    logo: require('../image/logo_01.png')
  }],
  centerDisTplList: [{
    id: '_1',
    title: '我的账号',
    icon: '&#xe607;'
  }, {
    id: '_2',
    title: '修改密码',
    icon: '&#xe657;'
  }],
  aboutDisTplList: [{
    id: '_1',
    title: '公司介绍',
    icon: '&#xe633;'
  }, {
    id: '_2',
    title: '用户协议',
    icon: '&#xe61d;'
  }, {
    id: '_3',
    title: '家长监护工程',
    icon: '&#xe6ac;'
  }, {
    id: '_4',
    title: '用户纠纷处理',
    icon: '&#xe6c5;'
  }, {
    id: '_5',
    title: '网络游戏服务格式化协议必备条款',
    icon: '&#xe604;'
  }]
}
