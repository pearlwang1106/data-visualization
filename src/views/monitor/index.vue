<template lang='pug'>
  el-container.content
    el-aside(width='140px')
      Menus(:list='list')
    el-main.monitor-content
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
        value: 'fire',
        label: '消防监控',
      }, {
        value: 'security',
        label: '防盗监控',
      }, {
        value: 'help',
        label: '求助报警',
      }, {
        value: 'electronic',
        label: '电子巡更',
      }, {
        value: 'environmental',
        label: '环境监控',
      }]
    };
  },
  components: {
    Menus,
  },

  watch: {
  },

  mounted () {
  },

  methods: {
  },
}
</script>

<style lang='less'>
.monitor-content {
  padding: 16px!important;
}
</style>
