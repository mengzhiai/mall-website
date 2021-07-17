<!--
 * @Date: 2021-07-17 16:08:29
 * @Description: 所有产品
 * @LastEditors: jun
 * @LastEditTime: 2021-07-17 17:07:27
 * @FilePath: \mi-mall\src\views\product\allProduct.vue
-->
<template>
<div class="all-product max-box">
  <div class="product-box flex-between flex-wrap">
    <div class="item" v-for="(item, i) in allList" :key="i">
      <div class="img-box" @click="goDetail(item.id)">
        <img :src="item.img" alt="">
      </div>
      <div class="content flex-between">
        <div>
          <div class="name">{{item.productName}}</div>
          <div class="des">{{item.description}}</div>
        </div>
        <div class="price_box flex">
          <div class="price">{{item.price}}<span v-if="item.category == 1">元起</span></div>
          <!-- <div class="price">{{item.seckillPrice}}<span v-if="item.category == 1">元起</span></div> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  classifyProduct
} from '@/api/common'
export default {
  data() {
    return {
      classifyId: '',
      allList: [{

      }]
    }
  },
  mounted() {
    this.classifyId = this.$route.query.classifyId;
    console.log('classifyId', this.classifyId);
    this.getList();
  },
  methods: {
    getList() {
      classifyProduct(this.classifyId).then(res => {
        if (res.code === 200) {
          this.allList = res.data;
        }
      })
    },

    goDetail(id) {
      this.$router.push({
        name: 'detail',
        query: {
          id
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.com-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.product-box {
  .item {
    width: calc(100% / 2 - 10px);
    margin-bottom: 20px;

    .img-box {
      text-align: center;
      height: 300px;
      background-color: rgb(245, 245, 245);
      cursor: pointer;

      img {
        width: 260px;
        height: 260px;
        margin: 20px auto;
      }
    }
  }

  .content {
    margin: 5px 20px;

    .name {
      font-size: 24px;
      font-weight: 500;
      margin-top: 5px;
    }

    .des {
      color: rgba(51, 51, 51, .7);
    }

    .price_box {
      line-height: 60px;

      .line {
        text-decoration: line-through;
      }

      .price {
        margin-left: 10px;
        font-size: 30px;
        color: #ff6700;

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
