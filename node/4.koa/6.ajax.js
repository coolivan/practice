const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const views = require('koa-views');
const body = require('koa-body');

let app = new Koa();
app.use(static(__dirname+'/static'));
app.use(views(__dirname+'/views'));
app.use(body({
    multipart:true
}))

let router = new Router();
app.use(router.routes());

router.get('/ajax', async ctx=>{
    console.log('get:',ctx.query);
    ctx.body = ctx.query
})

router.post('/ajax', async ctx=>{
    console.log('post:',ctx.request.body);
    ctx.body = ctx.request.body
})


app.listen(3000)