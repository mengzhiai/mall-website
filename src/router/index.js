/*
 * @Date: 2021-03-21 17:47:42
 * @Description: 登录
 * @LastEditors: jun
 * @LastEditTime: 2021-07-11 21:49:27
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
    },
    {
      path: '/successTip',
      name: 'successTip',
      component: () => import('../views/common/successTip')
    }]
  },
  {
    path: '/shoppingIndex',
    name: 'shoppingIndex',
    component: () => import('../views/cart/index'),
    children: [
      {
        path: '/shoppingCart',
        name: 'shoppingCart',
        component: () => import('../views/cart/shoppingCart'),
      },
      {
        path: '/orderList',
        name: 'orderList',
        component: () => import('../views/order/orderList')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
