<template lang='pug'>
  el-container
    el-header 
      HeaderCom
    el-main
      el-row
        el-col(:span='6') 左
        el-col(:span='12') 中
        el-col(:span='6') 右1
</template>

<script>
import HeaderCom from '../../components/header';

export default {
  name: 'home',
  components: {
    HeaderCom
  }
}
</script>

<style lang="less">

</style>
