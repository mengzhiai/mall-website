/*
 * @Date: 2021-02-10 22:56:09
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-27 00:39:07
 * @FilePath: \mi-mall\vue.config.js
 */
const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


module.exports = {
  publicPath: "./", // 默认'/'，部署应用包时的基本 URL
  outputDir: "dist", // 'dist', 生产环境构建文件的目录
  assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        // 旧版本sass-loader
        // data: `@import "~@/assets/scss/variables.scss";`,
        // 新版本sass-loader
        prependData: `@import "@/style/base.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  
  
  devServer: {
      // overlay: {
      //   warnings: true,
      //   errors: true
      // },
      open: false,
      host: 'localhost',
      port: 9090,
      https: false,
      hotOnly: false,
      proxy: {
          '/api': {
              // target: "http://localhost:5000",
              target: "http://mall.jun666.cn",
              changeOrigin: true,
              ws: true, // proxy websockets
              pathRewrite: { //重写路径
                  "^/api": ''
              }
          }
      }
  }
};
