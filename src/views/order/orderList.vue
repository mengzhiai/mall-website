<!--
 * @Date: 2021-07-11 21:42:20
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-12 01:43:00
 * @FilePath: \mi-mall\src\views\order\orderList.vue
-->
<template>
<div class="order-list">
  <div class="max-box">
    <div class="address-list">
      <div class="order-title">订单列表</div>
      <div class="flex">
        <div class="item" v-for="(item, i) in addressTableList" :key="i">
          <div class="name">{{item.name}}</div>
          <div class="tel">{{item.tel}}</div>
          <div class="address">{{item.detailAddress}}</div>
          <div class="edit" @click="editAddress(item.id)">修改</div>
          <div class="delete" @click="deleteAddressRow(item.id)"><i class="el-icon-close"></i></div>
        </div>
        <div class="item add" @click="createAddress">
          <div>
            <i class="el-icon-circle-plus-outline"></i>
            <div class="txt">添加新地址</div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-box">
      <div class="order-title">订单列表</div>
      <div class="item flex-between" v-for="(item, i) in orderList" :key="i">
        <div class="flex">
          <div><img :src="item.img" alt=""></div>
          <div>{{item.name}}</div>
        </div>
        <div class="price">{{item.price}}元<span> X{{item.number}}</span></div>
        <div></div>
        <div class="total-price">{{item.totalPrice}}元</div>
      </div>
    </div>
    <div class="bottom-box flex-right">
      <el-button size="default" @click="goCart">返回购物车</el-button>
      <el-button type="primary" size="default">立即下单</el-button>
    </div>
  </div>

  <el-dialog :title="addressTitle" :visible.sync="addressDialog" width="600px" :close-on-click-modal="false">
    <addressData ref="addressData" v-if="addressDialog"></addressData>
    <div class="flex-center">
      <el-button size="medium" @click="addressDialog = false">取消</el-button>
      <el-button size="medium" type="primary" @click="submitAddress">确定</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
import addressData from './address.vue'
import {
  addressList,
  addAddress,
  addressDetail,
  updateAddress,
  deleteAddress
} from '@/api/common'
export default {
  components: {
    addressData
  },
  data() {
    return {
      addressTableList: [],
      orderList: [{
        name: 'xiaomi 11',
        price: '12312',
        number: '21312',
        totalPrice: 'w4234323'
      }, {
        name: 'xiaomi 11',
        price: '12312',
        number: '21312',
        totalPrice: 'w4234323'
      }],

      addressDialog: false,
      addressTitle: ''
    }
  },
  mounted() {
    this.getAddress();
  },
  methods: {
    getAddress() {
      addressList().then(res => {
        if (res.code === 200) {
          this.addressTableList = res.data;
        }
      })
    },

    createAddress() {
      this.addressDialog = true;
      this.addressTitle = '新增地址';
    },

    submitAddress() {
      let params = this.$refs.addressData.addressForm;
      if (!params.id) {
        // 新建
        addAddress(params).then(res => {
          this.commonAddressVal(res);
        })
      } else {
        // 编辑
        updateAddress(params).then(res => {
          this.commonAddressVal(res);
        })
      }
    },

    commonAddressVal(res) {
      if (res.code === 200) {
        this.getAddress();
        this.addressDialog = false;
        this.$handleMessage(res.msg);
      }
    },

    // 编辑地址
    editAddress(id) {
      this.addressDialog = true;
      this.addressTitle = '编辑地址';
      addressDetail(id).then(res => {
        if (res.code === 200) {
          this.$refs.addressData.addressForm = res.data;
        }
      })
    },

    // 删除地址
    deleteAddressRow(id) {
      this.$handleConfirm('确定要删除该地址吗?').then(() => {
        deleteAddress(id).then(res => {
          if (res.code === 200) {
            this.getAddress();
            this.$handleMessage(res.msg);
          }
        })
      }).catch(() => {})

    },

    goCart() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
.order-list {
  background-color: #f5f5f5;
  padding: 40px 0;

  .max-box {
    background-color: #fff;
    padding: 10px 30px;
  }
}

.order-title {
  font-size: 20px;
  font-weight: bold;
  margin: 30px 0 10px;
}

.address-list {
  .flex {
    flex-wrap: wrap;
  }

  .item {
    width: calc(100% / 4 - 20px);
    height: 140px;
    border: 1px solid #e0e0e0;
    cursor: pointer;
    padding: 15px 10px 0;
    margin-right: 20px;
    margin-bottom: 10px;
    box-sizing: border-box;
    position: relative;

    &:hover {
      border-color: #b0b0b0;

      .edit {
        display: block;
      }

      .delete {
        display: block;
      }
    }

    .name {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .tel {
      margin: 10px 0;
    }

    .address {
      line-height: 25px;
    }

    .edit {
      display: none;
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: #ff6700;
    }

    .delete {
      position: absolute;
      right: -10px;
      top: -10px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background-color: #f00;
      border-radius: 50%;
      display: none;

      i {
        font-size: 15px;
        color: #fff;
      }
    }
  }

  .add {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    i {
      font-size: 30px;
      color: #b0b0b0;
    }

    .txt {
      margin-top: 5px;
    }

    &:hover {
      i {
        color: #6e6e6e;
      }
    }
  }
}

.order-box {
  .item {
    height: 60px;
    line-height: 60px;
    font-size: 18px;

    .price {
      span {
        font-size: 14px;
        margin-left: 10px;
      }
    }

    .total-price {
      color: #ff6701;
    }
  }
}

.bottom-box {
  margin-top: 30px;
  border-top: 1px solid #ccc;
  padding: 20px 0;
}
</style>
