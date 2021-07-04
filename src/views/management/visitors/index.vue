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
          // text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
              saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
              type: 'value'
          }
        ],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
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
