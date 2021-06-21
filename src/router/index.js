/*
 * @Date: 2021-03-21 17:47:42
 * @Description: 登录
 * @LastEditors: jun
 * @LastEditTime: 2021-06-21 22:40:50
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
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/productDetail/detail')
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
