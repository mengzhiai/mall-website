/*
 * @Date: 2021-03-21 17:47:42
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-11 21:27:30
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

import { handleConfirm, handleMessage } from './utils/element';
Vue.prototype.$handleConfirm = handleConfirm;
Vue.prototype.$handleMessage = handleMessage;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
