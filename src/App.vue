<!--
 * @Date: 2021-03-21 17:47:42
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-06-21 23:15:18
 * @FilePath: \mi-mall\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
