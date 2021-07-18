<template lang='pug'>
  section(style="height: calc(100% - 56px)") 
    SearchInput(:searchData="searchData") 
    el-row(class="chart-wrapper-help")
      el-col(:span="12" style="height:100%")
        //- div.card-box
        //-   div.card-box-item
        //-     div(class="card-box-top icon-one")
        //-     div.card-box-btom 76%
        //-   div.card-box-item
        //-     div(class="card-box-top icon-two")
        //-     div.card-box-btom 78%
        //-   div.card-box-item
        //-     div(class="card-box-top icon-three")
        //-     div.card-box-btom 48%
        //-   div.card-box-item
        //-     div(class="card-box-top icon-four")
        //-     div.card-box-btom 78%
        //-   div.card-box-item
        //-     div(class="card-box-top icon-three")
        //-     div.card-box-btom 48%
        div.ehcarts-pie
          el-row(style="height:100%;width:100%")
            el-col(:span="12" style="height:100%")
              chart(:options='optionsOne')
            el-col(:span="12" style="height:100%")
              chart(:options='optionsTwo')

      el-col(:span="12" style="height:100%")
        chart(:options='optionsThree')
    el-row(class="chart-wrapper-help" style="padding-top: 20px")
      el-col(:span="6" style="padding-right: 20px")
        div.pinlv-title 使用频率
        el-progress(:text-inside="true" :stroke-width="30" :percentage="70" style="margin-bottom: 30px")
        el-progress(:text-inside="true" :stroke-width="30" :percentage="34" color="#ffec3d" style="margin-bottom: 30px")
        el-progress(:text-inside="true" :stroke-width="30" :percentage="55" color="#722ed1" style="margin-bottom: 30px")
        el-progress(:text-inside="true" :stroke-width="30" :percentage="67" color="#0ff" style="margin-bottom: 30px")
        el-progress(:text-inside="true" :stroke-width="30" :percentage="80" color="#52c41a" style="margin-bottom: 30px")
        el-progress(:text-inside="true" :stroke-width="30" :percentage="23" color="#fa8c16" style="margin-bottom: 30px")
        el-progress(:text-inside="true" :stroke-width="30" :percentage="70" color="#fa541c" style="margin-bottom: 30px")
        el-progress(:text-inside="true" :stroke-width="30" :percentage="47" color="#8c8c8c" style="margin-bottom: 30px")
      el-col(:span="12" style="height:100%")
        chart(:options='optionsFour')
      el-col(:span="6" style="height:100%")
        div.card-box
          div.card-box-item
            div(class="card-box-top icon-one")
            div.card-box-btom 76%
          div.card-box-item
            div(class="card-box-top icon-two")
            div.card-box-btom 78%
          div.card-box-item
            div(class="card-box-top icon-three")
            div.card-box-btom 48%
          div.card-box-item
            div(class="card-box-top icon-four")
            div.card-box-btom 78%
          div.card-box-item
            div(class="card-box-top icon-three")
            div.card-box-btom 48%
        div(style="height:calc(100% - 100px)")
          chart(:options='optionsFive')
    //- section.chart-wrapper-help
      //- chart(:options='options')
    //- list.d-mt(url='' :params='{}' :onOpearClick='handleOperaClick')
</template>

<script>
import * as echarts from 'echarts';

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
        legend: {
          data: mockChartData.map(item => item.name)
        },
        tooltip: {
          trigger: 'item'
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          show: false,
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ]
          }]
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
        color: ['#188df0', '#ffec3d'],
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
            barWidth: '50',
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
      },
      optionsFour: {
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
      optionsFive: {
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
  .chart-wrapper-help {
    // border: 1px solid #f1f1f1;
    border:transparent;
    width: 100%;
    height: calc((100% - 56px) / 2);
  }
  .card-box {
    display: flex;
    &-item {
      width: 25%;
      height: 100px;
      border:1px solid #0ff;
      border-radius: 5px;
      margin-right: 10px;
      &:nth-child(2) {
        border:1px solid #ffec3d;
      }
      &:nth-child(4) {
        border:1px solid #722ed1;
      }
    }
    &-top {
      width: 100%;
      height: 50%;
      line-height: 50px;
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
    .icon-one {
      background: #0ff url('../../../assets/icon-feng.png') no-repeat center;
      background-size: 32px 32px;
    }
    .icon-two {
      background: #ffec3d url('../../../assets/icon-wu.png') no-repeat center;
      background-size: 32px 32px;
    }
    .icon-three {
      background: #0ff url('../../../assets/icon-yu.png') no-repeat center;
      background-size: 32px 32px;
    }
    .icon-four {
      background: #722ed1 url('../../../assets/icon-shachen.png') no-repeat center;
      background-size: 32px 32px;
    }
    &-btom {
      width: 100%;
      height: 50%;
      line-height: 50px;
      color: #fff;
      font-weight: bold;
      text-align: center;
    }
  }
  .ehcarts-pie {
    margin-top: 20px;
    height: calc(100% - 120px);
  }
  .pinlv-title {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    padding-bottom: 20px;
  }
</style>
