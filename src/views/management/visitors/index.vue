<template lang='pug'>
  section(style="height: 100%")
    section.search-btn
      el-date-picker(v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期")
    section.chart-wrapper
      el-row(style="width: 100%;height: 100%")
        el-col(:span="12" style="height: 100%")
          chart(:options='optionsOne')
        el-col(:span="12" style="height: 100%")
          chart(:options='optionsTwo')
    section(class="chart-wrapper marginTop")
      chart(:options='options')
    //- list.d-mt(url='' :params='{}' :onOpearClick='handleOperaClick')
    section(class="chart-wrapper marginTop")
      chart(:options='optionsThree')
</template>

<script>
// components
import * as echarts from 'echarts';
import Chart from '../../../components/charts';
import List from '../../../components/list';

// setting data
import { CHART_OPTIONS } from '../../../utils/chart';

// mock data
import { mockXAix, mockChartData } from '../../../utils/mockData';

// mixins
import Mixins from '../../../mixins';

export default {
  data () {
    return {
      // 目前为静态
      options: {
        ...CHART_OPTIONS,
        title: {
          ...CHART_OPTIONS.title,
          text: '每日访问量',
        },
        grid: {
          ...CHART_OPTIONS.grid,
          top: '16%',
          bottom: 0
        },
        legend: {
          data: mockChartData.map(item => item.name),
          textStyle: {
            color: '#fff',
            fontWeight: 'bold'  
          }
        },
        xAxis: {
          ...CHART_OPTIONS.xAxis,
          data: mockXAix
        },
        yAxis: {
          ...CHART_OPTIONS.yAxis,
        },
        series: mockChartData.map(item => {
          return {
            ...item,
            smooth: true,
            stack: '总量',
            type: 'line',
          }
        }),
      },
      optionsOne: {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: '10%',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold'
            }
        },
        color: ['#188df0', '#0ff'],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '80%'],
                label: {
                    color: '#fff',
                    fontWeight: 'bold'
                },
                labelLine: {
                    show: true
                },
                data: [
                    {value: 1048, name: '7F总人数'},
                    {value: 335, name: '6F总人数'}
                ]
            }
        ]
      },
      optionsTwo: {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: '10%',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold'
            }
        },
        color: ['#0ff', '#eed777'],
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '80%'],
                label: {
                    color: '#fff',
                    fontWeight: 'bold'
                },
                labelLine: {
                    show: true
                },
                data: [
                    {value: 848, name: '7F总访问量'},
                    {value: 535, name: '6F总访问量'}
                ]
            }
        ]
      },
      optionsThree: {
        title: {
          ...CHART_OPTIONS.title,
          text: '档口日均人数',
        },
        grid: {
          ...CHART_OPTIONS.grid,
          top: '16%',
          bottom: '14%'
        },
        xAxis: {
          ...CHART_OPTIONS.xAxis,
          data: ['7F-A', '7F-B', '7F-C', '7F-D', '7F-E', '7F-F', '6F-A', '6F-B', '6F-C', '6F-D', '6F-E', '6F-F']
        },
        yAxis: {
          ...CHART_OPTIONS.yAxis,
        },
        series: [{
            data: [1500, 400, 650, 880, 70, 900, 930, 500, 340, 730, 210, 1200],
            type: 'bar',
            barWidth: '30',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            },
        }]
      }
    }
  },
  mixins: [Mixins],
  components: {
    Chart,
    List,
  }
}
</script>

<style lang='less' scoped>
  .chart-wrapper {
    // border: 1px solid #f1f1f1;
    border: transparent;
    width: 100%;
    height: 30%;
  }
  .marginTop {
    margin-top: 3%;
  }
  .search-btn {
    /deep/ .el-input__inner {
      height: 30px;
      line-height: 30px;
    }
    /deep/ .el-date-editor .el-range__icon {
      line-height: 25px;
    }
    /deep/ .el-date-editor .el-range-separator {
      line-height: 25px;
    }
  }
</style>
