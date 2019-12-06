const Router = require('koa-router');

let adminController = require('../controller/admin');

let adminRouter = new Router({
    prefix:'/admin/'
})

// adminRouter.get('/login',adminController.login);
adminRouter.get('/',adminController.showIndex);


module.exports = adminRouter;