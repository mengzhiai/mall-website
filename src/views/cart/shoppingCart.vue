<!--
 * @Date: 2021-06-24 00:02:32
 * @Description: 购物车
 * @LastEditors: jun
 * @LastEditTime: 2021-06-24 00:47:51
 * @FilePath: \mi-mall\src\views\cart\shoppingCart.vue
-->
<template>
<div class="shopping-cart">
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
        <el-button type="text" size="default">我的订单</el-button>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="max-box">
      <div class="table-list">
        <el-table :data="tableData" border stripe size="default">
          <el-table-column type="selection" width="80">
          </el-table-column>
          <el-table-column prop="name" label="商品名称" width="350">
          </el-table-column>
          <el-table-column prop="price" label="单价" min-width="100">
            <template slot-scope="scope">
              <span>{{scope.row.price}}元</span>
            </template>
          </el-table-column>
          <el-table-column label="数量" width="240">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.number" :min="1" :max="10" label="数量"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="合计" min-width="100">
            <template slot-scope="scope">
              <span class="theme-col">{{scope.row.amount}}元</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <!-- <el-link type="warning" :underline="false">删除</el-link> -->
              <span class="icon"><i class="el-icon-error"></i></span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="cart-bar flex-between">
        <div class="section-left flex">
          <div class="continue">继续购物</div>
          <div class="total">共<span>53</span>件商品，已选择<span>53</span>件</div>
        </div>
        <div class="total-price flex">
          <div class="amount theme-col"><span class="money">合计: 332232</span><span class="unit">元</span></div>
          <el-button type="primary" size="default">去结算</el-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        name: 'Redmi Note 10 Pro 6GB+128GB 星纱',
        price: 1699,
        number: 3,
        amount: 5097
      }, {
        name: 'Redmi Note 10 Pro 6GB+128GB 星纱',
        price: 1699,
        number: 3,
        amount: 5097
      }, {
        name: 'Redmi Note 10 Pro 6GB+128GB 星纱',
        price: 1699,
        number: 3,
        amount: 5097
      }, {
        name: 'Redmi Note 10 Pro 6GB+128GB 星纱',
        price: 1699,
        number: 3,
        amount: 5097
      }]
    }
  },
  methods: {
    
    goHome() {
      this.$router.push({
        name: 'home'
      })
    }
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

.el-dropdown-link {
  cursor: pointer;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.el-button--text {
  margin-left: 20px;
  color: #757575;

  &:hover {
    color: #ff6700;
  }
}

.content {
  padding: 38px 0;
  background: #f5f5f5;
}

.icon {
  cursor: pointer;
  i {
    font-size: 24px;
    &:hover {
      color: #fff;
      color: #e53935;
    }
  }

}

.cart-bar {
  line-height: 50px;
  background-color: #fff;
  margin: 20px 0;

  .section-left {
    margin-left: 20px;
  }

  .continue {
    margin-right: 20px;
  }

  .total {
    span {
      margin: 0 5px;
      color: #ff6700;
    }
  }
}

.total-price {
  .amount {
    .money {
      font-size: 20px;
      font-weight: 500;
    }

    .unit {
      font-size: 14px;
    }
  }

  .el-button {
    width: 200px;
    margin-left: 30px;
  }
}
</style>
