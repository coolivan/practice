const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const views = require('koa-views');
const body = require('koa-body');
const fs = require('fs');
const path = require('path');

let app = new Koa();
app.use(static(__dirname+'/static'));
app.use(views(__dirname+'/views'),{
    html:'pug'
});
app.use(body({
    multipart:true
}))

let router = new Router();
app.use(router.routes());

router.get('/', async ctx=>{
    await ctx.render('login.pug')
})

let userData = require('./data/users.json');
router.post('/checkName', async ctx=>{
    let {username} = ctx.request.body; 
    let isUser = userData.some(v=>v.username == username);
    let res = {
        status:0,
        info:'用户名错误'
    }
    if(isUser){
        res = {
            status:1,
            info:'用户名正确'
        }
    }
    ctx.body = res;
    // console.log(username,isUser);
})


router.post('/', async ctx=>{
    let {username,pwd} = ctx.request.body; 
    let res = userData.find(v=> v.username === username && v.pwd === parseInt(pwd))
    


    if(typeof res !== 'undefined'){
        ctx.cookies.set('uid',res.uid,{
            maxAge:86400*7*1000
        })
        await ctx.render('photo.pug',{
            username
        })
        // ctx.redirect('photo.html')
    }else{
        await ctx.render('login.html')
    }
})

let imageData = require('./data/images.json');
router.post('/upload',async ctx=>{
    // console.log(ctx.request.files);
    // fs写入upload
    // 方法一
    let file = ctx.request.files['img'];
    let readStream = fs.createReadStream(file.path);
    let filePath = `static/upload/${file.name}`;
    let writeStream = fs.createWriteStream(filePath);
    readStream.pipe(writeStream);
    // 方法二
    // let fileData = fs.readFileSync(file.path);
    // fs.writeFileSync('./static/upload/'+ file.name,fileData)
    
    // 写入images.json
    let uid = ctx.cookies.get('uid');
    let img ={
        imgUrl:`upload/${file.name}`,
        imgName : file.name,
        uid
    }
    imageData.push(img);
    let res = fs.writeFileSync('data/images.json',JSON.stringify(imageData));
    ctx.body = res;
})


// 查询相册数据
router.get('/getImageData', async ctx=>{
    let uid = ctx.cookies.get('uid');
    let res = imageData.filter(v=>v.uid == uid);
    ctx.body = res;
})

app.listen(3000)