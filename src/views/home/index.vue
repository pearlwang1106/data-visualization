<template lang='pug'>
  el-container
    el-header header
    el-main
      el-row
        el-col(:span='6') 左
        el-col(:span='12') 中
        el-col(:span='6') 右1
</template>

<script>
export default {
  name: 'home',
}
</script>

<style>

</style>
