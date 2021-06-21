<!--
 * @Date: 2021-06-21 22:34:21
 * @Description: 商品详情
 * @LastEditors: jun
 * @LastEditTime: 2021-06-21 22:47:34
 * @FilePath: \mi-mall\src\views\productDetail\detail.vue
-->
<template>
<div class="detail max-box">
  <div class="banner-box flex">
    <el-carousel :interval="5000" trigger="click" height="400px">
      <el-carousel-item v-for="(item,i) in picList" :key="i">
        <img :src="item.url" class="click-cursor" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="instro">

  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      picList: [
        {
          url: 'http://img.jun666.cn/mall1623658458398'
        },
        {
          url: 'http://img.jun666.cn/mall1623658458398'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  .banner-box {
    width: 500px;
    .el-carousel {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>
