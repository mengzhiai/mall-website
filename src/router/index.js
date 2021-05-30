/*
 * @Date: 2021-03-21 17:47:42
 * @Description: 登录
 * @LastEditors: jun
 * @LastEditTime: 2021-05-30 22:56:47
 * @FilePath: \mi-mall\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/layout/home'),
    redirect: '/homePage',
    children: [{
      path: '/homePage',
      name: 'homePage',
      component: () => import('../views/layout/homePage')
    }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
