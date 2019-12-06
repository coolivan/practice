let newsRouter = require('./news');
// let adminRouter = require('./admin')

module.exports = (app)=>{
    app.use(newsRouter.routes());
    // app.use(adminRouter.routes())

    
}