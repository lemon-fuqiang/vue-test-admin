import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../Layout/index.vue'
import page404 from '../views/error-page/404.vue'
import login from '../views/login/index'



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
      {
        path: '/sortTable',
        name: 'sortTable',
        component: () => import('../views/Table/sortTable')
      },
      {
        path: '/editTable',
        name: 'editTable',
        component: () => import('../views/Table/editTable')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: page404
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: myroutes
})

export default router
