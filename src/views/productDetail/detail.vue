<!--
 * @Date: 2021-06-21 22:34:21
 * @Description: 商品详情
 * @LastEditors: jun
 * @LastEditTime: 2021-07-11 20:24:53
 * @FilePath: \mi-mall\src\views\productDetail\detail.vue
-->
<template>
<div class="detail max-box flex-between">
  <div class="banner-box">
    <el-carousel :interval="5000" trigger="click" height="400px">
      <el-carousel-item v-for="(item,i) in picList" :key="i">
        <img :src="item.url" class="click-cursor" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="content">
    <div class="title">{{productForm.productName}}</div>
    <div class="description">
      {{productForm.label}}
    </div>
    <div class="price">{{productForm.price}}元</div>
    <div class="version common-select">
      <div class="con-tit">选择版本</div>
      <div class="wrap flex-between">
        <div class="item" v-for="(item, i) in versionList" :key="i" :class="{active: activeVer == i }" @click="selectedVersion(item,i)">{{item.name}}</div>
      </div>
    </div>
    <div class="version common-select">
      <div class="con-tit">颜色</div>
      <div class="wrap flex-between">
        <div class="item" v-for="(item, i) in colorList" :key="i" :class="{active: activeCol == i }" @click="selectedColor(item, i)">{{item.color}}</div>
      </div>
    </div>
    <div class="selected-list">
      <div class="flex-between">
        <div class="type">Redmi Note 10 Pro 6GB+128GB 星纱</div>
        <div>{{productForm.price}}元</div>
      </div>
      <div class="total-price">总计：{{productForm.price}}元</div>
    </div>
    <div class="add-cart" @click="addCart">加入购物车</div>
  </div>
</div>
</template>

<script>
import {
  productDetail,
  addCartShop
} from '@/api/common'
export default {
  data() {
    return {
      picList: [{
          url: 'http://img.jun666.cn/mall1623658458398'
        },
        {
          url: 'http://img.jun666.cn/mall1623658458398'
        }
      ],
      versionList: [{
          id: 1,
          name: '6GB+128GB',
          price: 1699
        },
        {
          id: 2,
          name: '6GB+128GB',
          price: 1899
        },
        {
          id: 3,
          name: '6GB+128GB',
          price: 2099
        }
      ],
      colorList: [{
          id: 1,
          color: '星沙'
        },
        {
          id: 2,
          color: '幻青'
        }, {
          id: 3,
          color: '月魄'
        }
      ],
      activeVer: 0,
      activeCol: 0,

      productId: null,
      productForm: {

      }
    }
  },
  mounted() {
    this.productId = this.$route.query.id;
    this.getDetail();
  },
  methods: {
    getDetail() {
      productDetail(this.productId).then(res => {
        if (res.code === 200) {
          this.productForm = res.data;
        }
      })
    },
    selectedVersion(item, index) {
      this.activeVer = index;
    },

    selectedColor(item, index) {
      this.activeCol = index;
    },

    addCart() {
      let params = {
        productId: this.productForm.id
      }
      addCartShop(params).then(res => {
        if (res.code === 200) {
          this.$message.success('加入购物车成功');
          this.$router.push({
            name: 'successTip'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  .banner-box {
    width: 650px;

    .el-carousel {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

  .content {
    width: 700px;
    margin-left: 100px;
  }
}

.content {
  .title {
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 400;
    color: #212121;
  }

  .description {
    color: #b0b0b0;
    margin: 0;
    padding: 0;
    padding-top: 8px;
    line-height: 1.5;
  }

  .price {
    font-size: 22px;
    line-height: 1;
    color: #ff6700;
    padding: 15px 0;
  }

  .con-tit {
    font-size: 18px;
    font-weight: 500;
    margin: 15px 0 2px;
  }
}

.version {
  .wrap {
    flex-wrap: wrap;
  }

  .item {
    width: calc(100% / 2 - 20px);
    border: 1px solid #e0e0e0;
    margin-right: 12px;
    margin-top: 10px;
    line-height: 42px;
    height: 42px;
    position: relative;
    border: 1px solid #e0e0e0;
    list-style: none;
    cursor: pointer;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    float: left;
    font-size: 16px;
    text-align: center;

    &:hover {
      z-index: 3;
      border-color: #ff6700;
    }
  }

  .active {
    color: #ff6700;
    border-color: #ff6700;
  }
}

.selected-list {
  background: #f9f9fa;
  padding: 30px;
  margin: 30px 0;

  .total-price {
    color: #ff6700;
    font-size: 24px;
    padding-top: 20px;
  }
}

.add-cart {
  width: 298px;
  height: 52px;
  line-height: 52px;
  font-size: 16px;
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f25807;
    border-color: #f25807;
    color: #fff;
  }
}
</style>
