<!--
 * @Date: 2021-07-11 21:48:20
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-12 22:25:07
 * @FilePath: \mi-mall\src\views\cart\index.vue
-->
<template>
<div>
  <div class="header">
    <div class="max-box flex-between">
      <div class="flex">
        <div class="logo" @click="goHome">
          <img src="https://s02.mifile.cn/assets/static/image/logo-mi2.png" alt="">
        </div>
        <div class="my-cart">我的购物车</div>
        <div class="tip">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
      </div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            永远相信<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>评价晒单</el-dropdown-item>
            <el-dropdown-item>我的喜欢</el-dropdown-item>
            <el-dropdown-item>小米账户</el-dropdown-item>
            <el-dropdown-item>我的订单</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button class="order" type="text" size="default">我的订单</el-button>
      </div>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goHome() {
      this.$router.push({
        name: 'home'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
  position: relative;
  z-index: 20;
  height: 80px;
  line-height: 80px;

  .logo {
    img {
      width: 48px;
      height: 48px;
      overflow: hidden;
      vertical-align: middle;
      cursor: pointer;
    }
  }

  .my-cart {
    font-size: 28px;
    margin: 0 20px;
    font-weight: 400;
    color: #424242;
  }

  .tip {
    margin-left: 15px;
    color: #757575;
  }
}

.order {
  margin-left: 10px;
}
</style>
