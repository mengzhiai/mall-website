<!--
 * @Date: 2021-06-23 23:32:47
 * @Description: 加入购物车成功
 * @LastEditors: jun
 * @LastEditTime: 2021-06-24 00:03:23
 * @FilePath: \mi-mall\src\views\common\successTip.vue
-->
<template>
<div class="max-box">
  <div class="">
    <div class="cart-box flex-center">
      <div><i class="el-icon-success"></i></div>
      <div class="txt">
        <div>已成功加入购物车</div>
        <div class="child">Redmi Note 10 Pro 6GB+128GB 星纱</div>
      </div>
    </div>
    <div class="btn-box align-center">
      <el-button size="default" @click="goPrev">返回上一级</el-button>
      <el-button type="primary" size="default" @click="goCart">去购物车</el-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goPrev() {
      this.$router.go(-1);
    },

    goCart() {
      this.$router.push({
        name: 'shoppingCart'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-box {
  i {
    color: #67C23A;
    font-size: 60px;
  }

  .txt {
    font-size: 26px;
    margin-left: 10px;
  }

  .child {
    font-size: 16px;
  }
}

.btn-box {
  margin-top: 20px;
}
</style>
