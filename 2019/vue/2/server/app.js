const Koa = require('koa')
const KoaRouter = require('koa-router');

let datas = {
    items: require('./data/items.json'),
    users: require('./data/users.json'),
}

const app = new Koa();

app.use( async (ctx,next)=>{
    // let origin = ctx.headers.origin;
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    ctx.set('Access-Control-Allow-Credentials', true);

    await next();
})


const router = new KoaRouter();

app.use(router.routes())



router.get('/', async ctx => {
    ctx.body = 'api';
});

router.get('/login', async ctx => {
    let req = ctx.request.query;
    let {username} = datas.users.find(v=>v.username == req.username && v.password == req.password);
    ctx.body = username?{
        username,
        isLogin : true
    }:{
        isLogin:false
    };
});

router.get('/items', async ctx => {
    let sort = ctx.request.query.sort || 'desc';
    let items = datas.items.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);
    ctx.body = items;
});


router.get('/item/:id',async ctx=>{
    let id = Number(ctx.params.id);
    let item = datas.items.find(item => item.id === id);
    
    // 模拟请求速度
    await new Promise(resolve => {
        setTimeout(_=>resolve(), 2000);
    });

    if (!item) {
        ctx.throw(404, '没有该商品信息');
        return;
    }

    ctx.body = item;

})

app.listen(7777);