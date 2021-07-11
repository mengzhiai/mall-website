/*
 * @Date: 2021-03-21 18:34:29
 * @Description: 公用api
 * @LastEditors: jun
 * @LastEditTime: 2021-07-12 01:21:33
 * @FilePath: \mi-mall\src\api\common.js
 */
import baseUrl from './baseUrl'
import { get, post, put, deleteFn } from '../utils/http.js'


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


// 获取商品详情
export function productDetail(id) {
  return get(baseUrl.api + '/web/common/productDetail', {id})
}

// 添加到购物车
export function addCartShop(data) {
  return post(baseUrl.api + '/web/common/addCart', data)
}

// 购物车列表
export function cartList(data) {
  return get(baseUrl.api + '/web/common/cartList', data)
}

// 更新购物车数量
export function updateCartNumer(data) {
  return post(baseUrl.api + '/web/common/updateCartNumer', data)
}

// 删除购物车
export function cartListDelete(id) {
  return deleteFn(baseUrl.api + `/web/common/cartList/${id}`)
}

/* --地址管理-- */
// 地址列表
export function addressList(data) {
  return get(baseUrl.api + '/web/common/addressList', data)
}


// 添加地址
export function addAddress(data) {
  return post(baseUrl.api + '/web/common/addAddress', data)
}

// 地址详情
export function addressDetail(id) {
  return get(baseUrl.api + `/web/common/addressDetail/${id}`)
}

// 修改地址
export function updateAddress(data) {
  return put(baseUrl.api + '/web/common/updateAddress', data)
}

// 删除地址
export function deleteAddress(id) {
  return deleteFn(baseUrl.api + `/web/common/deleteAddress/${id}`)
}