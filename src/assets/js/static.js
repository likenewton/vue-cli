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
    title: '我是tpl_1',
    date: '2018-11-25',
    logo: require('../image/logo_01.png')
  }, {
    id: '_2',
    title: '我是tpl_2',
    date: '2018-11-24',
    logo: require('../image/logo_02.png')
  }]
}
