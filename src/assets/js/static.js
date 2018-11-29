let [introductionTplData, strategyTplData, aboutTplData] = [{}, {}, {}]

const introduction = require.context('../tpl/introduction', true, /\d+\.(tpl)$/)
const strategy = require.context('../tpl/strategy', true, /\d+\.(tpl)$/)
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
  // 关于我们文章
  aboutTplData,
  // 游戏介绍展示文章
  introductionDisTplList: [{
    id: '_1', // 这个id很重要对应的是STATIC.tplData中的tpl
    title: '捕鱼圣手游戏介绍',
    logo: require('../image/logo_01.png')
  }],
  strategyDisTplList: [{
    id: '_1', // 这个id很重要对应的是STATIC.tplData中的tpl
    title: '终极狩猎，海魔来袭',
    date: '2018-11-25',
    logo: require('../image/logo_01.png')
  }, {
    id: '_2',
    title: '海妖漩涡，爆金无限',
    date: '2018-11-24',
    logo: require('../image/logo_02.png')
  }, {
    id: '_3',
    title: '钓鱼黑科技，告诉你如何新姿势钓鱼',
    date: '2018-11-24',
    logo: require('../image/logo_01.png')
  }, {
    id: '_4',
    title: '捕鱼圣手全新版本火热来袭',
    date: '2018-11-20',
    logo: require('../image/logo_02.png')
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
