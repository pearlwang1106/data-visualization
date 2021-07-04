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
    console.error(this.list)
  },

  methods: {
    handleMenuClick (key) {
      if (this.$route.name === key) {
        return;
      }

      this.$router.push({name: key});
      console.error('menu: ', key);
    },
  }

}
</script>

<style>
</style>
