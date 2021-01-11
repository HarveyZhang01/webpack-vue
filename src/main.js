import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import routers from './routes/router'
import App from './App.vue'
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/css/chat.css'
import './assets/css/normalize.css'
import './assets/css/reset.css'
import i18n from '../public/lang/i18n'



Vue.use(VueRouter)


Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

let router = new VueRouter({
  // mode: 'history',
  routes: routers
})
//取消 Vue 所有的日志与警告
Vue.config.silent = true;
new Vue({
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')