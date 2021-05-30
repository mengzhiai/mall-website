/*
 * @Date: 2021-03-21 18:34:29
 * @Description: 公用api
 * @LastEditors: jun
 * @LastEditTime: 2021-05-31 00:10:58
 * @FilePath: \mi-mall\src\api\common.js
 */
import baseUrl from './baseUrl'
import { get, post } from '../utils/http.js'


// 登录
export function login(data) {
  return post(baseUrl.api + '/user/login', data)
}


// 获取导航
export function headerList() {
  return get(baseUrl.api + '/web/common/headerList')
}

// 获取轮播图
export function bannerList() {
  return get(baseUrl.api + '/web/common/bannerList')
}

// 商品分类列表
export function classifyList() {
  return get(baseUrl.api + '/web/common/classifyList')
}


