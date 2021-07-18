<template lang='pug'>
  el-menu(
    :default-active='activeKey'
    :unique-opened='true'
    :default-openeds='defaultOpends'
    class="cur-menu"
    text-color='#FFF')
    div.icon-logo
    template(v-for='(item, index) in list')
      el-submenu(
        v-if='item.children && item.children.length'
        :key='item.value'
        :index='item.value'
        @click='handleSubMenuClick(item)')
        div(slot='title') 
          img(:src="item.icon" width="20" height="20" style="margin-right: 10px")
          span {{ item.label }}
        el-menu-item-group(v-for='subItem in item.children' :key='subItem.value')
          el-menu-item(
            :index='subItem.value'
            :key='subItem.value'
            @click='handleMenuClick(subItem.value)') {{ subItem.label }}
      el-menu-item(
        v-else
        :index='item.value'
        :key='item.value'
        @click='handleMenuClick(item.value)')
        div 
          img(:src="item.icon" width="20" height="20" style="margin-right: 10px")
          span {{ item.label }}
</template>

<script>
import { MENUS } from '../../utils/data';

export default {
  data () {
    return {
      activeKey: '',
      list: MENUS,
      defaultOpends: [],
    };
  },

  watch: {
    '$route' () {
      this.isHome = this.$route.name === 'home';
    }
  },

  mounted () {
    const matched = this.$route.matched;
    console.log('matched', matched);
    if (matched[0]) {
      this.activeKey = matched[0].name;
      const oneKey = matched[0].path.split('-')[0].slice(1);
      this.defaultOpends.push(oneKey);
      this.defaultOpends.push(this.activeKey)
    }
  },

  methods: {
    handleSubMenuClick (menu) {
      this.activeKey = menu.value;
    },
    handleMenuClick (key) {
      if (this.$route.name === key) {
        return;
      }
      this.activeKey = key;
      this.$router.push({name: key});
    },
  }

}
</script>

<style lang="less" scoped>
.cur-menu {
  background-color: #011133;
  border-right: transparent;
}
.el-menu-item-group {
  background-color: #031948;
}
.el-menu-item {
  color: #bfbfbf;
}
.el-menu-item:focus, .el-menu-item:hover {
  background: #011133;
  color: #fff;
}
.el-menu-item.is-active {
  color: #fff;
  background-color: #1890ff;
}
.el-submenu__title:focus, .el-submenu__title:hover {
  background-color: #011133;
}
/deep/ .el-submenu__title:hover {
  background-color: #011133;
}
.icon-logo {
  width: 100%;
  height: 56px;
  color: #fff;
  background: url('../../assets/logo.png') no-repeat center;
  background-size: contain;
}
</style>
