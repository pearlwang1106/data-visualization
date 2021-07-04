<template lang='pug'>
  el-container.content
    el-aside(width='140px')
      Menus(:list='list')
    el-main
      router-view
</template>

<script>

// components
import Menus from '../../components/menus';

// data
export default {
  // name: 'App',
  data () {
    return {
      list: [{
      value: 'guards',
      label: '门禁监控',
    }, {
      value: 'visitors',
      label: '访客管理',
    }, {
      value: 'elevators',
      label: '电梯监控',
    }, {
      value: 'vehicles',
      label: '车辆管理',
    }]
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
</style>
