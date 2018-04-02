import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/home-page/home-page.vue'
import NewDetail from '../components/new-detail/new-detail.vue'
import Comments from '../components/comments/comments.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',               //首页
      component: HomePage
    },
    {
      path:'/newDetail/:id',
      name:'newDetail',               //文章内容
      component:NewDetail
    },{
      path:'/comments/:id',
      name:'comments',                //评论页面
      component:Comments
    }
  ]
})
