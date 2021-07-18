<template lang='pug'>
  el-menu(
    :default-active='activeKey'
    :unique-opened='true'
    :default-openeds='defaultOpends'
    class="cur-menu"
    text-color='#FFF')
    template(v-for='(item, index) in list')
      el-submenu(
        v-if='item.children && item.children.length'
        :key='item.value'
        :index='item.value'
        @click='handleSubMenuClick(item)')
        span(slot='title') {{ item.label }}
        el-menu-item-group(v-for='subItem in item.children' :key='subItem.value')
          el-menu-item(
            :index='subItem.value'
            :key='subItem.value'
            @click='handleMenuClick(subItem.value)') {{ subItem.label }}
      el-menu-item(
        v-else
        :index='item.value'
        :key='item.value'
        @click='handleMenuClick(item.value)') {{ item.label }}
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
    if (matched[1]) {
      this.activeKey = matched[1].name;
    }
    this.defaultOpends = [this.activeKey];
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

<style scoped>
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
</style>
