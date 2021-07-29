<!--
 * @Date: 2021-06-24 00:02:32
 * @Description: 购物车
 * @LastEditors: jun
 * @LastEditTime: 2021-07-29 13:23:26
 * @FilePath: \mi-mall\src\views\cart\shoppingCart.vue
-->
<template>
<div class="shopping-cart">
  <div class="content">
    <div class="max-box">
      <div class="table-list">
        <el-table ref="tableData" :data="tableData" border stripe size="default" @selection-change="selectionChange">
          <el-table-column type="selection" width="80">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.checked" :label="true" @change="changeSelect(scope.row)"><br></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="productName" label="商品名称" width="350">
          </el-table-column>
          <el-table-column prop="price" label="单价" min-width="100">
            <template slot-scope="scope">
              <span>{{scope.row.price}}元</span>
            </template>
          </el-table-column>
          <el-table-column label="数量" width="240">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.num" :min="1" :max="10" label="数量" @change="changeNumer(scope.row)"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="合计" min-width="100">
            <template slot-scope="scope">
              <span class="theme-col">{{scope.row.totalPrice}}元</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <!-- <el-link type="warning" :underline="false">删除</el-link> -->
              <span class="icon" @click="deleteRow(scope.row)"><i class="el-icon-error"></i></span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="cart-bar flex-between">
        <div class="section-left flex">
          <div class="continue">继续购物</div>
          <div class="total">共<span>{{cartObj.number}}</span>件商品，已选择<span>{{cartObj.checkedLenth}}</span>件</div>
        </div>
        <div class="total-price flex">
          <div class="amount theme-col"><span class="money">合计: {{cartObj.amountPrice}}</span><span class="unit">元</span></div>
          <el-button type="primary" size="default" :disabled="cartObj.checkedLenth === 0" @click="goOrder">去结算</el-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  cartList,
  updateCartNumer,
  cartListDelete,
  updateChecked
} from '@/api/common'
export default {
  data() {
    return {
      tableData: [],
      amountPrice: 0,
      selectedList: [],
      cartObj: {
        amountPrice: 0,
        number: 0,
        checkedLenth: 0
      }
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.cartObj = {
        amountPrice: 0,
        number: 0,
        checkedLenth: 0
      }
      cartList().then(res => {
        if (res.code === 200) {
          let dataList = res.data.list;
          dataList.forEach(item => {
            if(item.checked == 1) {
              item.checked = true;
              this.cartObj.checkedLenth += 1;
            } else if(item.checked == 2){
              item.checked = false;
            }
            this.cartObj.number += item.num;
          })
          this.tableData = dataList;
          this.cartObj.amountPrice = res.data.amountPrice;
        }
      })
    },

    // toggleSelection(rows) {
    //   console.log('rows', rows);
    //   rows.forEach(row => {
    //     if (row.checked == 1) {
    //       // row 是要选中的那一行
    //       // true 是为选中
    //       this.$refs.tableData.toggleRowSelection(row, true)
    //     }
    //   })
    // },

    // 修改数量
    changeNumer(row) {
      let params = {
        id: row.id,
        num: row.num
      }
      updateCartNumer(params).then(res => {
        if (res.code === 200) {
          this.getList();
          this.$message.success(res.msg);
        }
      })
    },

    // 删除购物车
    deleteRow(row) {
      this.$handleConfirm('确定要删除吗?').then(() => {
        cartListDelete(row.id).then(res => {
          if (res.code === 200) {
            this.getList();
            this.$message.success(res.msg);
          }
        })
      }).catch(() => {})

    },

    selectionChange(val) {
      console.log('valll', val);
      this.selectedList = val;
      // this.getSelectedData();
    },


    changeSelect(row) {
      console.log('row', row);
      this.getChecked(row);
    },

    getChecked(row) {
      let params = {
        id: row.id
      }
      if(row.checked) {
        params.checked = 1;
      } else {
        params.checked = 2;
      }
      updateChecked(params).then(res => {
        if(res.code === 200) {
          this.getList();
          this.$message.success(res.msg);
        }
      })
    },



    getSelectedData() {
      this.tableData.forEach(item => {
        this.selectedList.forEach(ele => {
        })
      })
    },


    toggleRowSelection(row, selected) {
      console.log('a', row, selected);
    },

    goOrder() {
      this.$router.push({
        name: 'orderList'
      })
    }
  }
}
</script>

<style lang="scss" scoped>


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
