/*
 * @Date: 2021-02-10 23:07:42
 * @Description: http
 * @LastEditors: jun
 * @LastEditTime: 2021-07-11 21:23:29
 * @FilePath: \mi-mall\src\utils\http.js
 */

import { service } from './request'

export function get(url, data) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: data
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}


export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}


export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    service
      .put(url, data)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        Message({ message: err.msg, type: 'error' });
      });
  });
}


export function deleteFn(url, params) {
  return new Promise((resolve, reject) => {
    service.delete(url, params)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        Message({ message: err.msg, type: 'error' });
      })
  });
}