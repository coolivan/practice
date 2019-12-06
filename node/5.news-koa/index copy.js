const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views')
const static = require('koa-static')

let app = new Koa();
let router = new Router()

app.use(static(__dirname+'/static'));

app.use(views(__dirname+'/views'),{
    map:{
        html:'pug'
    }
})

app.use(router.routes());
let newsData = require('./data/data.json');
let pageSize = 5;
let pageCount = Math.ceil(newsData.length/pageSize);


router.get('/', async ctx=>{
    let page = ctx.query.page||1;
    let renderData = newsData.slice((page-1)*pageSize,page*pageSize);
//    console.log(page)
    let currentUrl = `/?page=${page}`;
    
    await ctx.render('index.pug',{
        renderData,
        pageCount,
        currentUrl
    })
})


router.get('/detail/:id', async ctx=>{
    let id = ctx.params.id || 1;
    let renderData = newsData[id-1];
    await ctx.render('detail.pug',{
        renderData
    })
})

app.listen(3000)