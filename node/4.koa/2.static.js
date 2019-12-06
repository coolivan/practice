const Koa = require('koa')
const static = require('koa-static')


let app = new Koa()

app.use(static(__dirname+'/static'))



app.listen(3000)