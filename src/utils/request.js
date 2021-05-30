/*
 * @Date: 2021-02-10 23:04:50
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-03-20 23:21:06
 * @FilePath: \admin-mall\src\utils\request.js
 */

/*
* @Author: your name
* @Date: 2020-04-03 15:20:58
* @LastEditTime: 2020-04-28 19:02:31
* @LastEditors: jun
* @Description: In User Settings Edit
* @FilePath: \custom_html\src\utils\request.js
*/
/****   request.js   ****/
/* // 导入axios
import axios from 'axios'
// 使用element-ui Message做消息提醒
import { Message } from 'element-ui';
import { Loading } from 'element-ui'

let baseURL = 'localhost:5000';

// if (process.env.NODE_ENV == 'test') {
//   // baseURL = 'http://114.116.111.227:20005'
// } else if (process.env.NODE_ENV == 'prod') {
//   baseURL = ''
// }


// 全局loading

let loading;
//使用Element loading-start 方法
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中,请稍后...',
    background: 'rgba(0,0,0,0.5)',
  })
}
//使用Element loading-close 方法
function endLoading() {
  loading.close()
}



//1. 创建新的axios实例，
const service = axios.create({
  // baseURL: 'http://114.116.111.227:20002',
  baseURL: baseURL,
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000
})


// 2.请求拦截器
service.interceptors.request.use(config => {
  //请求开始开启loading
  startLoading();
  // console.log(config);
  //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
  config.data = JSON.stringify(config.data);
  config.headers = {
    'Content-Type': 'Content-Type: application/json',
    'jtoken': sessionStorage.getItem('jtoken')
  }
  return config
}, error => {
  Promise.reject(error)
})

// 3.响应拦截器
service.interceptors.response.use(response => {
  if (response.status == 200) {
    let jtoken = response.headers['jtoken'];
    let refjtoken = response.headers['refjtoken'];
    if (jtoken != '' && jtoken !== undefined) {
      sessionStorage.setItem('jtoken', jtoken)
    }
    endLoading();
  }

  return response
}, error => {
  // 接收到异常响应的处理开始
  if (error && error.response) {
    endLoading();
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        // window.location.href = "/NotFound"
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 500:
        error.message = '服务器端出错'
        break;
      case 501:
        error.message = '网络未实现'
        break;
      case 502:
        error.message = '网络错误'
        break;
      case 503:
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    Message.error('连接服务器失败')
  }
  Message.error(error.message)
  //处理结束
  return Promise.resolve(error.response)
})
//4.导出文件
export default service
 */





//src/utils/request.js
import axios from 'axios'
import { Message } from 'element-ui';

import router from '@/router/index';

// 创建 axios 实例
let service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
  timeout: 10000, // request timeout
})

//  请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    config.headers['Accept'] = 'application/json'
    config.headers['Request-From'] = 'mobile'
    let token = localStorage.getItem('token') || null;
    if (token) {
      // 如果token不为null，否则传token给后台
      config.headers['token'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    //届时根据后端返回success或者code值判断
    console.log('res', res);
    if(res.code == 200) {
      return res;
    } else if(res.code == 401){
      Message.error(res.msg);
      router.replace({
        path:'/'
      })
    } else {
      Message.error(res.msg);
      return res;
    }
  },
  (error) => {
    //响应错误
    return Promise.reject(error)
  }
)

export {
  service
};
