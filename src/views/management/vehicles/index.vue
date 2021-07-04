<template lang='pug'>
  section
    section.chart-wrapper
      chart(:options='options')
    el-table.d-mt(:data='tableData' border)
      el-table-column(v-for='col in columns' :key='col.name' :prop='col.name' :label='col.label')
</template>

<script>
import Chart from '../../../components/charts';

export default {
  data () {
    return {
      options: {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
      },
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
  },

  components: {
    Chart,
  }
}
</script>

<style lang='less'>
  .chart-wrapper {
    border: 1px solid #f1f1f1;
    width: 100%;
    height: 400px;
  }
</style>
