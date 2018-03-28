import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/home-page/home-page.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    }
  ]
})
