const Koa  = require('koa')
const serve = require('koa-static');
const  { historyApiFallback } = require('koa2-connect-history-api-fallback');
const proxy = require('koa2-proxy-middleware')
const path = require('path')
const app = new Koa();
// 这句话 的意思是除接口之外所有的请求都发送给了 index.html
app.use(historyApiFallback({
  whiteList: ['/prod-api']
}));  // 这里的whiteList是 白名单的意思
// 配置代理
app.use(proxy({
  targets: {
    '/prod-api/(.*)': {
      target: 'http://ihrm.itheima.net/api',
      changeOrigin: true,
      pathRewrite: {
        '/prod-api': ''
      }
    }
  }
}))
app.use(serve(__dirname + "/public")); //将public下的代码静态化

app.listen(3333, () => {
  console.log('人资项目启动')
})
