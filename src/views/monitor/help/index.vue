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
        title: {
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['最高气温', '最低气温']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name: '最高气温',
                type: 'line',
                data: [10, 11, 13, 11, 12, 12, 9],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '最低气温',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: '最大值'
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
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
