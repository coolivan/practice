let newsData = require('../model/news').getData();


module.exports = {
    async showIndex(ctx){
        let pageSize = 5;
        let pageCount = Math.ceil(newsData.length/pageSize);
        let page = ctx.query.page||1;
        let currentUrl = `?page=${page}`;
        let renderData = newsData.slice((page-1)*pageSize,page*pageSize);  
        
        await ctx.render('news/index.pug',{
            renderData,
            pageCount,
            currentUrl
        })
    },

    async showDetail(ctx){
        let id = ctx.params.id || 1;
        let renderData = newsData[id-1];
        await ctx.render('news/detail.pug',{
            renderData
        })  
    }
}


