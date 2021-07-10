<template lang='pug'>
  el-menu(:default-active='activeKey')
    el-menu-item-group
      el-menu-item(
        v-for='item in list'
        :key='item.value'
        :index='item.value'
        @click='handleMenuClick(item.value)'
        ) {{ item.label }}
</template>

<script>

export default {
  props: ['prePath', 'list'],
  data () {
    return {
      activeKey: '',
    };
  },

  mounted () {
    const matched = this.$route.matched;
    if (matched[1]) {
      this.activeKey = matched[1].name;
    }
  },

  methods: {
    handleMenuClick (key) {
      console.error('key', key);
      if (this.$route.name === key) {
        return;
      }
      this.activeKey = key;
      this.$router.push({name: key});
    },
  }

}
</script>

<style>
</style>
