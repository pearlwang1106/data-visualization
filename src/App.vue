<template lang='pug'>
  #app
    el-container.container-box
      el-header.header
        el-row
          el-col(:span='2')
            img(src='./assets/logo.png' width='40' height='40')
          el-col(:span='4') 天气
          el-col(:span='18')
            el-menu(mode='horizontal' background-color='#203450' text-color='#FFF' :router='true')
              el-menu-item(v-for='(item, key) in menuList' :index='key' :key="key") {{ item.label }}
      div.content-box
        router-view(v-if='$route.name === "home"')
        template(v-else)
          el-aside(width='120px')
            Menus(:list='menuList[$route.name]')
            el-main
              router-view
</template>

<script>

// components
import Menus from './components/menus';

// data
import { MENUS } from './utils/data';

export default {
  name: 'App',
  data () {
    return {
      menuList: MENUS,
    };
  },
  components: {
    Menus,
  },

  watch: {
    '$route' () {
      console.error(this.$route)
    }
  },

  mounted () {
    console.error(111, this.menuList)
  },

  methods: {
    handleMenuItemClick (item) {
      console.error(item)
    }
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
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
.content-box {
  width: 100%;
  height: calc(100% - 52px);
  box-sizing: border-box;
}
.header {
  height: 52px!important;
  line-height: 52px;
  background-color: #203450;
  color: #fff;
}
.el-menu--horizontal>.el-menu-item {
  height: 52px!important;
  line-height: 52px!important;
}
.el-menu--horizontal>.el-menu-item.is-active {
  font-weight: 600;
  color: #FFF!important;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px !important;
}
</style>
