import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Item from '@/page/item/item'
import Score from '@/page/score/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path:'/item',
      component:Item
    },{
      path:'/score',
      component:Score
    }
  ]
})
