<!--
 * @Date: 2021-07-12 00:52:19
 * @Description: 编辑地址
 * @LastEditors: jun
 * @LastEditTime: 2021-07-12 01:12:27
 * @FilePath: \mi-mall\src\views\order\address.vue
-->
<template>
<div class="address">
  <el-form :model="addressForm" ref="addressForm" :rules="rules" label-width="100px" :inline="false" size="medium">
    <el-form-item label="收货人姓名:">
      <el-input v-model="addressForm.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="电话:">
      <el-input v-model="addressForm.tel" placeholder="请输入电话"></el-input>
    </el-form-item>
    <el-form-item label="地址:">
      <el-input v-model="addressForm.detailAddress" placeholder="请输入详情地址"></el-input>
    </el-form-item>
    <el-form-item label="邮编:">
      <el-input v-model="addressForm.postCode" placeholder="请输入邮编"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      addressForm: {
        name: '',
        tel: '',
        detailAddress: '',
        postCode: ''
      },
      rules: {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
