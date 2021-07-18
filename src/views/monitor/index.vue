<template lang='pug'>
  el-container.content
    el-aside(width='200px')
      Menus(:list='list')
    el-main.monitor-content
      router-view
</template>

<script>

// components
import Menus from '../../components/menus';

// data
import { MENUS } from '../../utils/data';

// data
export default {
  data () {
    return {
      list: MENUS.monitor.children,
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
  background: url('../../assets/other-bg.jpeg') no-repeat center;
  background-size: cover;
}
</style>
