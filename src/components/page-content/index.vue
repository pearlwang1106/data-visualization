<template lang='pug'>
  el-container.content
    el-aside(width='140px')
      Menus(:list='list')
    el-main
      router-view(name='content')
</template>

<script>

// components
import Menus from '../menus';

export default {
  props: ['list'],
  data () {
    return {
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

<style>
</style>
