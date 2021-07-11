/*
 * @Date: 2021-07-09 00:10:32
 * @Description: element-ui公用方法封装
 * @LastEditors: jun
 * @LastEditTime: 2021-07-10 15:43:05
 * @FilePath: \admin-mall\src\utils\element.js
 */
import Vue from 'vue'

import { MessageBox, Message } from 'element-ui';

const handleConfirm = ((text = '确定执行此操作吗？', type = 'warning') => {
  return MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: type,
    center: false
  })
})

const handleMessage = ((text = '操作成功', type = 'success') => {
  return Message({
    message: text,
    type: type
  });
})



export {
  handleConfirm,
  handleMessage
}