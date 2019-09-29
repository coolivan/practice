module.exports = {
  devServer: {
    lintOnSave:false,
    proxy: {
      '/api': {
        target: 'http://localhost:7777',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}