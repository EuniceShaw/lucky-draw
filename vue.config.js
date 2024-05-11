module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/lucky-draw' : '/',
  devServer: {
    open: true, //配置自动启动浏览器
    host: 'localhost',
    https: false,
    hotOnly: false, //热更新
    port: 8020
    // 配置跨域-请求后端的接口
    // proxy: {
    //   // "/api": {
    //   //   target: "http://172.20.10.3:80", //对应自己的接口
    //   //   changeOrigin: true,
    //   //   ws: true,
    //   //   pathRewrite: {
    //   //     "^/api": ""
    //   //   }
    //   // }
    // }
  }
};
