<template lang='pug'>
  el-menu
    el-menu-item-group
      el-menu-item(
        v-for='item in list'
        @click='handleMenuClick(item.value)'
        ) {{ item.label }}
</template>

<script>

export default {
  props: ['prePath', 'list'],
  data () {
    return {
    };
  },

  mounted () {
  },

  methods: {
    handleMenuClick (key) {
      if (this.$route.name === key) {
        return;
      }

      this.$router.push({name: key});
    },
  }

}
</script>

<style>
</style>
