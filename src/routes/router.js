const routes = [
  {path: '/', redirect: '/index', component: () => import('../views/Index.vue')},
  {path: '/index',  component: () => import('../views/Index.vue')},
  {path: '/login',  component: () => import('../views/Login.vue')},
]

export default routes