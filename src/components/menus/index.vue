<template lang='pug'>
  el-menu
    el-menu-item-group
      el-menu-item(
        v-for='item in list.children'
        :key="item.value"
        :index='`${item.value}-${item.value}`') {{ item.label }}
</template>

<script>

export default {
  props: ['list'],
  data () {
    return {
    };
  },

  mounted () {
    console.error(this.list)
  }

}
</script>

<style>
</style>
