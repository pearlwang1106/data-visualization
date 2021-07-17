<template lang='pug'>
  el-container.content
    el-aside(width='200px')
      Menus(:list='list')
    el-main.management-content
      router-view
</template>

<script>

// components
import Menus from '../../components/menus';

// data
import { MENUS } from '../../utils/data';

export default {
  // name: 'App',
  data () {
    return {
      list: MENUS.management.children,
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
.management-content {
  padding: 16px!important;
  background: url('../../assets/other-bg.jpeg') no-repeat center;
  background-size: cover;
}
</style>
