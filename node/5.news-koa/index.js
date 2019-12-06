const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const Router = require('koa-router');

let app = new Koa();
let router = new Router();

app.use(static(__dirname+'/static'));
app.use(views(__dirname + '/views'),{
    html:'pug'
})

app.use(router.routes());

let data = require('./data/data.json');

let pageSize = 5;
let pageCount = Math.ceil(data.length/pageSize);

router.get('/', async ctx=>{
    let page = ctx.query.page || 1;
    let renderData = data.slice((page-1)*pageSize,page*pageSize);
    let currentUrl = `?page=${page}`;
    await ctx.render('index.pug',{
        renderData,
        pageCount,
        currentUrl
    })
})

router.get('/:id',async ctx=>{
    let {id} = ctx.params;
    let renderData = data[id-1];
    
    await ctx.render('detail.pug',{
        renderData
    })
})


app.listen(3000)
