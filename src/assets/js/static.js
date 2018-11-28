let tplData = {}
const context = require.context('../tpl/', true, /\d+\.(tpl)$/)
context.keys().forEach((filename) => {
  let key = filename.replace('./', '_').replace('.tpl', '')
  tplData[key] = context(filename)
})

module.exports = {
  download: {
    byss: {
      ios: 'https://agent.wcsdk.poker3a.com/static/ldy/byss/download.html',
      android: 'http://dmsdk.wcsdk.poker3a.com/android/download/54/10595'
    }
  },
  tplData,
  disTplList: [{
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
  }]
}
