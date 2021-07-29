<template>
<div>
  <div class="site-topbar">
    <div class="maxbox">
      <div class="containers flex-between">
        <div class="topbar-nav">
          <ul>
            <li v-for="item in topList" :key="item.id">
              <a :href="item.link">{{item.name}}</a>
              <!-- <router-link :to="links">{{item.name}}</router-link> -->
            </li>
          </ul>
        </div>
        <div class="flex" v-show="isLogin==false">
          <div class="topbar-info fr">
            <router-link tag="a" to="/login">登录</router-link>
            <router-link tag="a" to="/login">注册</router-link>
            <a href>消息通知</a>
          </div>
          <div class="topbar-cart">
            <a href>购物车(0)</a>
          </div>
        </div>
        <div class="flex" v-show="isLogin==true">
          <div class="topbar-info fr">
            <router-link tag="a" to="/"></router-link>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                {{loginPerson}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人中心</el-dropdown-item>
                <el-dropdown-item command="b">评价晒单</el-dropdown-item>
                <el-dropdown-item command="c">我的喜欢</el-dropdown-item>
                <el-dropdown-item command="d">小米账户</el-dropdown-item>
                <el-dropdown-item command="e">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <router-link tag="a" to="/">消息通知</router-link>
            <router-link tag="a" to="/">我的订单</router-link>
          </div>
          <div class="topbar-cart">
            <!-- <div>购物车</div> -->
            <router-link tag="a" to="/shoppingCart">购物车(0)</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="maxbox">
    <div class="site-header">
      <div class="containers flex-between">
        <div class="flex">
          <div class="header-logo" @click="goHome">
            <img src="@/assets/img/logo.png" alt />
          </div>
          <div class="header-nav">
            <ul class="flex">
              <li v-for="item in navList" :key="item.id">
                <router-link tag="a" :to="{path: item.link}">{{item.name}}</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-search">
          <el-input placeholder="请输入搜索内容" size="small">
            <el-button class="el-icon-search" slot="append"></el-button>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  getLocalStorage
} from '@/utils/localStore';
import {
  headerList
} from '@/api/common'
export default {
  data() {
    return {
      links: '',
      topList: [{
          name: '小米商城',
          link: ''
        },
        {
          name: 'MIUI',
          link: ''
        }, {
          name: 'loT',
          link: ''
        }, {
          name: '云服务',
          link: ''
        }, {
          name: '天星科技',
          link: ''
        }, {
          name: '有品',
          link: ''
        }, {
          name: '小爱开放平台',
          link: ''
        }, {
          name: '企业团购',
          link: ''
        },
        {
          name: '资质证照',
          link: ''
        },
        {
          name: '协议规则',
          link: ''
        },
        {
          name: '下载app',
          link: ''
        },
        {
          name: '智能生活',
          link: ''
        }
      ],
      navList: [],
      isLogin: true,
      loginPerson: "登录",
      loginState: null
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      headerList().then(res => {
        if (res.code === 200) {
          this.navList = res.data;
        }
      })
    },
    handleCommand(val) {
      if (val == "e") {
        this.$router.push('/');
        this.isLogin = false;
        localStorage.removeItem("loginStatus")
      }
    },

    goHome() {
      this.$router.push({
        name: 'home'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.site-topbar {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;

  li {
    display: inline-block;
    margin-right: 20px;

    a {
      color: #b0b0b0;
      display: block;

      &:hover {
        color: #fff;
      }
    }
  }
}

.topbar-info,
.topbar-cart {
  a {
    line-height: 40px;
    display: inline-block;
    margin-left: 15px;
    color: #d4d4d4;

    &:hover {
      color: #fff;
    }
  }
}

.topbar-cart {
  margin-left: 30px;
  margin-right: 0;
}

.site-header {
  margin: 40px 0;

  a:hover {
    color: #ff6700;
  }

  .header-logo {
    .logo {
        cursor: pointer;
      
      img {
        width: 50px;
        height: 50px;
        cursor: pointer;
      }
    }
  }

  .header-nav {
    margin: 0 50px;
    line-height: 30px;

    li {
      margin: 0 15px;
      text-align: center;
      font-size: 18px;
    }
  }

  .header-search {
    line-height: 50px;
  }
}

.el-dropdown-link {
  color: #d4d4d4;
  cursor: pointer;
}
</style>
