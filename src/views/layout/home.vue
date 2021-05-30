<!--
 * @Date: 2021-05-30 12:48:17
 * @Description: 首页
 * @LastEditors: jun
 * @LastEditTime: 2021-05-30 21:35:17
 * @FilePath: \mi-mall\src\views\layout\home.vue
-->
<template>
<div class="home">
  <siteHeader></siteHeader>
  <div class="containers">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import siteHeader from '@/components/common/siteHeader'

export default {
  components: {
    siteHeader
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
