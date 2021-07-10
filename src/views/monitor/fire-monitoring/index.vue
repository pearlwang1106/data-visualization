<template lang='pug'>
  section
    video.video-wrapper(height='300' width='100%')
    el-table.d-mt(:data='tableData' border)
      el-table-column(v-for='col in columns' :key='col.name' :prop='col.name' :label='col.label')
</template>

<script>
export default {
  data () {
    return {
      columns: [{
        name: 'number',
        label: '序号',
      }, {
        name: 'code',
        label: '编码',
      }, {
        name: 'name',
        label: '名称',
      }, {
        name: 'total',
        label: '用户总数',
      }, {
        name: 'reguler',
        label: '正常用户数',
      }, {
        name: 'arrears',
        label: '欠费用户数',
      }],
      tableData: [{
        number: 1,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 2,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 3,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 4,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 5,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 6,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 7,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 8,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 9,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }, {
        number: 10,
        code: 73637653,
        name: '兴丰农村饮水安全工程',
        total: 454545,
        reguler: 34335,
        arrears: 35
      }]
    }
  }
}
</script>

<style lang='less'>
  .video-wrapper {
    background-color: #DDD;
  }
</style>
