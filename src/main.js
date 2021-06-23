/*
 * @Date: 2021-03-21 17:47:42
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-06-23 23:51:23
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
import '/src/style/element.scss'
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
