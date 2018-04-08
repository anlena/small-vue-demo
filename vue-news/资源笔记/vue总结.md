1. ##### 代理请求数据

   * 在config目录下新建的proxyConfig.js,在index.js引入

     ```js
     module.exports = {
       proxy: {
         '/api':{
           target:'http://news-at.zhihu.com',
           changeOrigin: true,
           pathRewrite: {
             '^/api': '/api/4'
           }
         }
       }
      }
     ```

     ​

2. ##### 路由跳转问题

   ##### 

3. ##### vuex使用总结(结合完成项目和文档)

4. ##### 整个项目的从头到尾的完整描述，不是倒推

5. ##### 

