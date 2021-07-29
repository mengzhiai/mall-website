<!--
 * @Date: 2021-05-30 21:37:55
 * @Description: 中间内容
 * @LastEditors: jun
 * @LastEditTime: 2021-07-27 23:31:45
 * @FilePath: \mi-mall\src\views\layout\homePage.vue
-->
<template>
<div class="wrap">
  <div class="max-box">
    <div class="home-page">
      <div class="page category">
        <div @mouseleave="onMouseOut">
          <div class="item flex-between" v-for="(item, i) in menuList" :key="i" @click="classifyFun(item.id)" @mouseenter="onMouseOver(item.id)">
            <div>{{item.name}}</div>
            <div><i class="el-icon-arrow-right"></i></div>
          </div>
        </div>
      </div>
      <div class="page">
        <el-carousel :interval="5000" arrow="always" height="420px">
          <el-carousel-item v-for="(item,i) in picList" :key="i">
            <img :src="item.img" :title="item.title" class="click-cursor" @click="bannerDeail(item.id)" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="category-product flex flex-wrap" v-show="isCategory">
        <div class="item flex" v-for="(item, i) in classifyDataList" :key="i">
          <div class="ico-img">
            <img :src="item.img" alt="">
          </div>
          <div>{{item.productName}}</div>
        </div>
      </div>
    </div>
    <div class="sub flex-between">
      <div class="list">
        <img src="@/assets/img/sub1.jpg" alt />
      </div>
      <div class="list">
        <img src="@/assets/img/sub1.jpg" alt />
      </div>
      <div class="list">
        <img src="@/assets/img/sub2.jpg" alt />
      </div>
      <div class="list">
        <img src="@/assets/img/sub3.jpg" alt />
      </div>
    </div>
    <div class="common-img">
      <img src="@/assets/img/img1.jpg" alt />
    </div>
  </div>
  <div class="all">
    <div class="max-box" v-for="item in productList" :key="item.id">
      <div class="common-title">
        <div class="name">{{item.name}}</div>
        <div class="more" @click="moreFun(item.id)">
          查看全部
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="product">
        <div class="item" v-for="(ele, e) in item.list" :key="e" @click="detail(ele.id)">
          <div class="top-txt" v-if="ele.isNew==1">新品</div>
          <div class="cen-img">
            <img :src="ele.img" alt />
          </div>
          <div class="name">{{ele.productName}}</div>
          <div class="detail">{{ele.description}}</div>
          <div class="price">{{ele.price}}元</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  bannerList,
  classifyList
} from '@/api/common'
export default {
  data() {
    return {
      menuList: [],
      picList: [],
      sideImg: require("@/assets/img/xm9.jpg"),
      electric: [],
      productList: [],
      isCategory: false,
      classifyDataList: []
    };
  },
  mounted() {
    this.getBanner();
    this.getList();
  },
  methods: {
    getBanner() {
      bannerList().then(res => {
        if (res.code === 200) {
          this.picList = res.data;
        }
      })
    },

    // 分类列表
    getList() {
      classifyList().then(res => {
        if (res.code === 200) {
          this.productList = res.data;
          this.menuList = res.data;
        }
      })
    },

    onMouseOver(id) {
      this.isCategory = true;
      let classifyData = [];
      this.menuList.forEach(item => {
        if (item.id == id && item.list.length) {
          classifyData = item.list;
        }
      })
      this.classifyDataList = classifyData;
    },

    onMouseOut() {
      this.isCategory = false;
    },

    // banner详情页
    bannerDeail(id) {
      this.detail(id);
    },

    //商品详情页
    detail(id) {
      this.$router.push({
        name: 'detail',
        query: {
          id
        }
      });
    },

    // 查看更多
    moreFun(id) {
      this.$router.push({
        name: 'allProduct',
        query: {
          classifyId: id
        }
      })
    },

    classifyFun(id) {
      this.moreFun(id);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__container {
  height: 420px !important;
}

.wrap {
  .home-page {
    display: grid;
    grid-template-columns: 200px repeat(1, 1fr);
    position: relative;

    .category {
      padding: 20px 0;

      .item {
        width: 100%;
        height: 42px;
        padding: 0 20px;
        line-height: 42px;
        color: #fff;
        box-sizing: border-box;
        cursor: pointer;

        &:hover {
          background: #ff6700;
          color: #fff;
        }
      }
    }

    .page:nth-child(1) {
      // border: 1px solid #ccc;
      background-color: rgba(0, 0, 0, 0.6);

      ul {
        padding: 0 20px;

        li {
          line-height: 40px;
          text-align: left;
          color: #fff;
          cursor: pointer;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;

          i {
            text-align: right;
            line-height: 40px;
            font-weight: bold;
          }

          &:hover {
            color: #fff;
            background-color: #ff6700;
          }
        }
      }
    }

    .page:nth-child(2) {
      height: 400px;

      .el-carousel {
        >div {
          height: 500px !important;
        }
      }

      img {
        // width: 100%;
        height: 400px;
      }
    }
  }

  .sub {
    /* display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    grid-gap: 20px; */
    margin-top: 20px;

    .list {
      width: calc(100% / 4 - 20px);

      img {
        width: 100%;
        height: 170px;
      }
    }
  }

  .common-img {
    margin: 30px 0;

    img {
      width: 100%;
    }
  }

  .common-title {
    text-align: left;
    padding: 30px 0 20px;
    display: flex;
    justify-content: space-between;

    .name {
      font-size: 20px;
      font-weight: 900;
    }

    .more {
      &:hover {
        color: #ff6700;
        cursor: pointer;
      }
    }
  }

  .all {
    width: 100%;
    background-color: #f5f5f5;
  }

  .product {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;

    .item {
      background-color: #fff;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s linear;
      position: relative;

      &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
      }

      .top-txt {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 60px;
        height: 25px;
        line-height: 25px;
        margin: 0 auto;
        color: #fff;
        background-color: #83c44e;
      }

      .cen-img {
        padding: 10px;

        // margin-top: 20px;
        img {
          width: 100%;
          max-height: 180px;
        }
      }

      .name {
        margin: 10px 0;
      }

      .price {
        color: #ff6700;
        margin: 15px 0;
      }
    }
  }
}

.click-cursor {
  cursor: pointer;
}

.category-product {
  width: calc(100% - 200px);
  position: absolute;
  left: 200px;
  top: 0;
  height: 400px;
  border: 1px solid #f00;
  background-color: #fff;
  z-index: 100;

  .item {
    width: calc(100% / 4);
    line-height: 80px;

    .ico-img {
      img {
        width: 50px;
        height: 50px;
        margin: 15px 5px 15px 20px;
      }
    }
  }
}
</style>
