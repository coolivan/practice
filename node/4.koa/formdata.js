const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const koabody = require('koa-body');
const fs = require('fs');

let app = new Koa();
let router =  new Router();

app.use(views(__dirname+'/views'),{
    html:'html'
})
app.use(koabody({
    multipart:true
}))

app.use(router.routes());


router.get('/', async ctx=>{
   await ctx.render('formdata.html')
})

router.post('/upload', async ctx=>{
    let data = ctx.request.body;
    let img = ctx.request.files.img;
    let fileData = fs.readFileSync(img.path);
    fs.writeFileSync('./static/upload/'+ img.name,fileData)

    ctx.body = {
        status:1
    }
})

app.listen(3000)
