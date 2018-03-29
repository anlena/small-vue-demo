import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(MintUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
