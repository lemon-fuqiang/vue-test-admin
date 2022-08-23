import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../Layout/index.vue'



Vue.use(VueRouter)

const myroutes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/User')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: myroutes
})

export default router
