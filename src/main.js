import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './store'
import routers from './routes/router'
import App from './App.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: routers
})
//取消 Vue 所有的日志与警告
Vue.config.silent = true;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')