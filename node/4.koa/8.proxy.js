const Koa = require('koa')
 
const app = new Koa()
 
const proxy = require('koa-server-http-proxy')
 
const proxyTable = {
  '/tb': {
    target: 'http://www.taobao.com',
    pathRewrite: { '^/tb': '/' },
    changeOrigin: true
  },
  '/jd': {
    target: 'http://www.jd.com',
    pathRewrite: { '^/jd': '/' },
    changeOrigin: true
  }
}
 
Object.keys(proxyTable).forEach((context) => {
  var options = proxyTable[context]
  app.use(proxy(context, options))
})
 
app.listen(3000)