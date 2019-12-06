const Koa = require('koa')
const Router = require('koa-router')


let app = new Koa()
let router = new Router()
app.use(router.routes());

router.get('/', (ctx, next) => {
    ctx.body = 'ok';
    console.log('get');
})

router.get('/:id', (ctx, next) => {
    ctx.body = 'id';
    console.log('get');
})


router.post('/',async ctx=>{
    console.log('post');
})

router.put('/',async ctx=>{
    console.log('put');
})

router.delete('/',async ctx=>{
    console.log('delete');
})





app.listen(4000)