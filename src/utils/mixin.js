/*
 * @Date: 2021-03-13 11:35:11
 * @Description: 公用混入
 * @LastEditors: jun
 * @LastEditTime: 2021-03-13 11:39:35
 * @FilePath: \admin-mall\src\utils\mixin.js
 */

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          disabledBtn: false,
          formLoading: false,
          commonLoading: false,
          dialogTitle: '',
          editDialog: false
        }
      },
      /* mounted() {
        this.disabledBtn = false;
        this.formLoading = false;
      }, */
      methods: {
        /* disabledStart() {
          this.disabledBtn = true;
          this.formLoading = true;
        },
        disabledClose() {
          this.disabledBtn = false;
          this.formLoading = false;
        } */
      }
    })
  }
}
