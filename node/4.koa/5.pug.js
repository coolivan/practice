const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')


let app = new Koa()
let router = new Router()


app.use(views(__dirname+'/views'),{
    map:{
        html:'pug'
    }
})
// 坑：必须先views 再router
app.use(router.routes());

router.get('/',async ctx=>{
    let data = [{name:'lily',age:18},{name:'lisi',age:28}];
    let a = 10
    await ctx.render('index.pug',{
        data,
        a
    })
})





app.listen(3000)