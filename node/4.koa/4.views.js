const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')


let app = new Koa()
let router = new Router()


app.use(views(__dirname+'/views'),{
    map:{
        html:'html'
    }
})
// 坑：必须先views 再router
app.use(router.routes());

router.get('/',async ctx=>{
    await ctx.render('index')
})





app.listen(3000)