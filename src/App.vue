<template lang='pug'>
el-container#app.container-box
    el-header.header
      el-row
        el-col(:span='2')
          img(src='./assets/logo.png' width='40' height='40')
        el-col(:span='4') 天气
        el-col(:span='18')
          el-menu(mode='horizontal' background-color='#203450' text-color='#FFF')
            el-menu-item(
              v-for='(item, key) in menuList'
              :index='key'
              @click='$router.push({name: key})') {{ item.label }}

    el-main.main
      router-view

    el-footer.footer(v-if='$route.name !== "home"')
      p footer 信息
      p 2021 @Copyright
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
  },

  mounted () {
    console.error(111, this.menuList)
  },

  methods: {
  },
}
</script>

<style>
html,
body,
p {
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
.header,
.footer {
  height: 52px!important;
  line-height: 52px;
}
.header {
  background-color: #203450;
  color: #fff;
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
  height: 52px!important;
  line-height: 52px!important;
}
.el-menu--horizontal>.el-menu-item.is-active {
  font-weight: 600;
  color: #FFF!important;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0px !important;
.el-main {
  padding: 0!important;
}
.el-aside,
.el-menu,
.content {
  height: 100%;
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
</style>
