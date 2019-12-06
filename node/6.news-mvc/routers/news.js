const Router = require('koa-router');

let newsController = require('../controller/news');
let newsRouter = new Router({
    prefix:'/news'
})


newsRouter.get('/',newsController.showIndex);
newsRouter.get('/:id',newsController.showDetail);

module.exports = newsRouter;