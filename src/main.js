/*
 * @Date: 2021-03-21 17:47:42
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-03-21 18:06:06
 * @FilePath: \mi-mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/style/common.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
