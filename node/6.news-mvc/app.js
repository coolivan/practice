const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const body = require('koa-body');

let router = require('./routers');

let app = new Koa();

app.use(body({
    multipart:true
}))

app.use(views(__dirname+'/views'),{
    map:{
        html:'pug'
    }
})

app.use(static(__dirname+'/static'))

router(app)

app.listen(3000)