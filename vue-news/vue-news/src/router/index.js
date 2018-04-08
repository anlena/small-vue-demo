import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/home-page/home-page.vue'
import NewDetail from '../components/new-detail/new-detail.vue'
import Comments from '../components/comments/comments.vue'
import Collect from '../components/collect/collect.vue'
import ThemeDetail from '../components/theme-detail/theme-detail.vue'
import EditorsList from '../components/editors-list/editors-list.vue'
import Editor from '../components/editor/editor.vue'

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
    },{
      path:'/collcet',
      name:'collect',                 //收藏页
      component:Collect
    },{
      path:'/themeDetail/:id',
      name:'themeDetail',             //主题内容
      component:ThemeDetail
    },{
      path:'/editorsList/:id',
      name:'editorsList',             //作者列表
      component:EditorsList
    },{
      path:'/editor/:id',
      name:'editor',                  //作者详情
      component:Editor
    }
  ],
  linkActiveClass:'active'
})
