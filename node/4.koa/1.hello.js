const Koa = require('koa')

let app = new Koa()

app.use(async ctx=>{
    ctx.body = 'Hello world';
    console.log(ctx);
})

app.listen(3000)