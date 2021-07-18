<template lang='pug'>
el-container#app.container-box(:class='isHome ? "home-page" : ""')
    el-header.header(:class='isHome ? "home-header" : ""')
      el-row(style="height: 100%")
        el-col(:lg="3" :xl="1" class="head-logo")
          img(src='./assets/logo.png' width='64' height='64')
        //- el-col(:lg="4" :xl="3" class="app-weather")
          iframe(
            width="300"
            scrolling="no"
            height="24"
            frameborder="0"
            allowtransparency="true"
            src="https://i.tianqi.com?c=code&id=34&color=%23FFFFFF&icon=1&site=14")
        //- el-col(:lg="17" :xl="20")
          el-menu(mode='horizontal' background-color='transparent' text-color='#FFF' :default-active='activeKey')
            el-menu-item(
              v-for='(item, key) in menuList'
              :key='key'
              :index='key'
              @click='$router.push({name: key})')
              div
                img(:src="item.icon" width="20" height="20")
                span {{ item.label }}


    el-main.main
      router-view

    //- el-footer.footer(v-if='$route.name !== "home"')
    //-   p footer 信息
    //-   p 2021 @Copyright
</template>

<script>
// components
import ScreenAdapter from './components/screen-adapter';
import Menus from './components/menus';
// data
import { MENUS } from './utils/data';
// utils
import { get } from 'lodash';
export default {
  name: 'App',
  data () {
    return {
      activeKey: '',
      menuList: MENUS,
      isHome: true,
    };
  },
  components: {
    Menus,
    ScreenAdapter
  },
  watch: {
    '$route' () {
      this.isHome = this.$route.name === 'home';
    }
  },
  mounted () {
    this.activeKey = get(this.$route,'matched[0].name', '');
  },
  methods: {
  },
}
</script>

<style lang="less">
html,
body,
p {
  margin: 0;
  padding: 0;
}
@font-face{
	font-family: yjsz;
	src:url('./assets/fonts/yjsz.TTF'),
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  width: 100%;
  height: 100vh;
}
.container-box {
  width: 100%;
  height: 100%;
}
.home-page {
  background: url('./assets/bg.jpeg') no-repeat center;
  background-color: rgba(35, 82, 122);
  background-size: cover;
}
.content-box {
  width: 100%;
  height: calc(100% - 52px);
  box-sizing: border-box;
}
.header {
  height: 64px!important;
  line-height: 64px;
}
.footer {
  height: 52px!important;
  line-height: 52px;
}
.header {
  border-bottom: 1px solid rgba(0, 0, 0, .3);
  // background-color: #203450;
  // background: #001529;
  // background-color: #011645;
  background-color: #011133;
  color: #fff;
}
.home-header {
  background-color: transparent;
  border-bottom:0px;
  // .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: rgba(0, 0, 0, .6)!important;
  }
}
.head-logo {
  width: auto;
  height: 64px;
  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
}
.main {
  height: calc(100vh - 104px);
}
.footer {
  text-align: center;
  line-height: 24px;
  font-size: 13px;
  color: #666;
  background-color: #f1f1f1;
}
.el-menu--horizontal>.el-menu-item {
  height: 64px!important;
  line-height: 32px!important;
  text-align: center;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(0, 0, 0, .3)!important;
}
.el-menu--horizontal>.el-menu-item.is-active {
  font-weight: 600;
  color: #FFF!important;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px !important;
}
.el-main {
  padding: 0!important;
}
.el-aside,
.el-menu,
.content {
  height: 100%;
}
.el-pagination {
  padding: 0;
  text-align: right;
  .btn-next {
    margin-right: 0!important;
  }
}
.d-mt {
  margin-top: 8px;
}
.d-mr {
  margin-right: 8px;
}
.d-mb {
  margin-bottom: 8px;
}
.d-ml {
  margin-left: 8px;
}
.d-font-12 {
  font-size: 12px;
  line-height: 20px;
}
.d-line-clamp1 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app-weather {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>