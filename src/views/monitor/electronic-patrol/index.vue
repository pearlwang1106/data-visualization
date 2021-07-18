<template lang='pug'>
  section(style="height: calc(100% - 56px)")
    SearchInput(:searchData="searchData")
    section.chart-wrapper-monitor
      el-row(style="width:100%; height: 100%")
        el-col(:span="8" style="height: 100%")
          chart(:options='optionsOne')
        el-col(:span="8" style="height: 100%")
          chart(:options='optionsOne')
        el-col(:span="8" style="height: 100%")
          chart(:options='optionsTwo')
    section.chart-wrapper-monitor
      chart(:options='options')
    section.chart-wrapper-monitor
      el-row(style="width:100%; height: 100%; margin-top: 2%")
        el-col(:span="12" style="height: 100%")
          chart(:options='optionsThree')
        el-col(:span="12" style="height: 100%")
          chart(:options='optionsThree')
    //- list.d-mt(url='' :params='{}' :onOpearClick='handleOperaClick')
</template>

<script>
// components
import Chart from '../../../components/charts';
import List from '../../../components/list';
import SearchInput from '../../../components/search-input';

// api
import { getDemoData } from '../../../api';

// mixins
import Mixins from '../../../mixins';

// setting data
import { CHART_OPTIONS } from '../../../utils/chart';

// mock data
import { mockXAix, mockChartData } from '../../../utils/mockData';


export default {
  data () {
    return {
      options: {
        ...CHART_OPTIONS,
        title: {
          ...CHART_OPTIONS.title,
          text: '每日访问量',
        },
        legend: {
          ...CHART_OPTIONS.legend,
          data: mockChartData.map(item => item.name)
        },
        tooltip: {
          ...CHART_OPTIONS.tooltip,
          axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
          }
        },
        xAxis: {
          ...CHART_OPTIONS.xAxis,
          data: mockXAix,
        },
        series: mockChartData.map(item => {
          return {
            ...item,
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            
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
            trigger: 'axis'
        },
        legend: {
            orient: 'vertical',
            left: '10%',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold'
            }
        },
        radar: [
        {
            indicator: [
                {text: '品牌', max: 100, color: '#fff'},
                {text: '内容', max: 100, color: '#fff'},
                {text: '可用性', max: 100, color: '#fff'},
                {text: '功能', max: 100, color: '#fff'}
            ],
            center: ['50%', '50%']
        }],
        series: [
        {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            areaStyle: {},
            data: [
                {
                    value: [60, 73, 85, 40],
                    name: '某软件'
                }
            ]
        }]
      },
      optionsThree: {
        xAxis: {
          ...CHART_OPTIONS.yAxis,
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          ...CHART_OPTIONS.yAxis,
            type: 'value',
            boundaryGap: [0, '30%']
        },
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
                gt: 1,
                lt: 3,
                color: 'rgba(0, 255, 255, 0.4)'
            }, {
                gt: 5,
                lt: 7,
                color: 'rgba(0, 255, 255, 0.4)'
            }]
        },
        series: [
            {
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                lineStyle: {
                    color: '#eed777',
                    width: 3
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: {show: false},
                    data: [
                        {xAxis: 1},
                        {xAxis: 3},
                        {xAxis: 5},
                        {xAxis: 7}
                    ]
                },
                areaStyle: {},
                data: [
                    ['2019-10-10', 200],
                    ['2019-10-11', 560],
                    ['2019-10-12', 750],
                    ['2019-10-13', 580],
                    ['2019-10-14', 250],
                    ['2019-10-15', 300],
                    ['2019-10-16', 450],
                    ['2019-10-17', 300],
                    ['2019-10-18', 100]
                ]
            }
        ]
      }
    }
  },

  mixins: [Mixins],

  components: {
    Chart,
    List,
    SearchInput
  },

  methods: {
    async getEchartsData(url, params) {
      try {
        const result = await getDemoData(url, {
          ...params,
        });
        if (result.success) {
          // success todo
        }
      } catch(err) {
        console.log(err)
      }
    },
    searchData(params) {
      // 获取ecahrts图表数据
      this.getEchartsData(params);
      // other request data todo
      // ...
    }
  }
}
</script>

<style lang='less' scoped>
  .chart-wrapper-monitor {
    border: transparent;
    width: 100%;
    height: calc((100% - 56px) / 3);
  }
</style>
