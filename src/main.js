import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
import './assets/border.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'


if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

Vue.use(ElementUI,router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

