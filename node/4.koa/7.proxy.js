var Koa = require('koa');
var proxy = require('koa-proxy');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();
app.use(router.routes());

router.all('/a', async ctx=>{

  console.log(111);
  await app.use(proxy({
    host: 'http://www.baidu.com'
  }));
})





app.listen(4000);