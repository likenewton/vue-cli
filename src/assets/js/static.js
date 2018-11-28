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
  tplData
}
