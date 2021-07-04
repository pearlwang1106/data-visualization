<template lang='pug'>
  el-container
    el-header 
      HeaderCom
    el-main.home-box
      el-row
        el-col(
          :span='6',
          class='home-box-left'
        )
          demo
        el-col(
          :span='12',
          class='home-box-center'
        ) 中
        el-col(
          :span='6',
          class='home-box-right'
        ) 右1
</template>

<script>
import HeaderCom from '../../components/header';
import demo from '../../components/charts/demo';

export default {
  name: 'home',
  components: {
    HeaderCom,
    demo
  }
}
</script>

<style lang="less">
.home-box {
  // width: 100%;
  width: 2880px;
  height: auto;
  .home-box-left {
    height: auto;
    background-color:#ccc;
  }
  .home-box-center {
    height: auto;
  }
  .home-box-right {
    height: auto;
    background-color:#000;
  }
}
</style>
