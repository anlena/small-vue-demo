### mongodb+express+vue代码实现掘金最热文章收藏评论分析





[原文地址](https://juejin.im/post/5a13d6956fb9a04504077f30#heading-10)



安装node,mongodb环境

数据库连接文件在mongidb/dbconfig中

```
DB_URL = 'mongodb://localhost:27017/juejin';(替换成你自己的数据目录)
```



# install

```
npm install

cd server

node app.js

打开view,双击打开index.html
```







## 项目详情

1. 爬取数据存储在数据库，然后从数据库读取数据，在页面渲染。
2. 里面有瀑布流插件(masonry)使用和ecahrts,还有imagesloaded（图片加载插件）。