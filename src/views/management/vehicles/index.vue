<template lang='pug'>
  section(style="height: calc(100% - 56px)")
    SearchInput(:searchData="searchData")
    section.chart-wrapper
      chart(:options='options')
    section(class="chart-wrapper marginTop")
      el-row(style="height: 100%;")
        el-col(:span="8")
          div(class="beng-col-bg")
            p.center-title 高区换热泵 (45kw/11kw)
            el-row
              el-col(:md="8" :lg="6" :xl="4" v-for="(item, index) in 6" :key="index")
                div.div-card
                  img(src="../../../assets/icon-shuibeng.png")
                  div.desc 
                    span(v-if="index === 0") 频率&nbsp;&nbsp;&nbsp;
                    span 50.000HZ
          div(class="beng-col-bg" style="margin-top: 16px")
            p(class="center-title") 中区换热泵 (11kw/30kw)
            el-row
              el-col(:md="8" :lg="6" :xl="4" v-for="(item, index) in 6" :key="index")
                div.div-card
                  img(src="../../../assets/icon-shuibeng.png")
                  div.desc 
                    span(v-if="index === 0") 频率&nbsp;&nbsp;&nbsp;
                    span 50.000HZ
          div(class="beng-col-bg" style="margin-top: 16px")
            p(class="center-title") 冷冻泵 (75kw/37kw)
            el-row
              el-col(:md="8" :lg="6" :xl="4" v-for="(item, index) in 6" :key="index")
                div.div-card
                  img(src="../../../assets/icon-shuibeng-hui.png")
                  div.desc 
                    span(v-if="index === 0") 频率&nbsp;&nbsp;&nbsp;
                    span 50.000HZ
        el-col(:span="8" class="chart-center")
          div.div-tags
            el-tag(color="#20AE51") 杰出
            el-tag(color="#FFED44") 优良
            el-tag(color="#FF9618") 中
            el-tag(color="#DA462C") 差
          el-row(style="width: 100%;height: calc(100% - 60px);")
            el-col(:span="12" style="height: 100%;")
              div.chart-pie-left
                chart(:options='optionsLeft')
            el-col(:span="12" style="height: 100%;")
              div.chart-pie-right
                chart(:options='optionsLeft')
        el-col(:span="8")
          div(class="jing-col-bg")
            p.center-title (45kw/11kw)
            el-row
              el-col(:md="8" :lg="6" :xl="4" v-for="(item, index) in 6" :key="index")
                div.div-card
                  img(src="../../../assets/icon-jing.png")
                  div.desc 
                    span(v-if="index === 0") 频率&nbsp;&nbsp;&nbsp;
                    span 50
          div(class="jing-col-bg" style="margin-top: 16px")
            p.center-title (45kw/11kw)
            el-row
              el-col(:md="8" :lg="6" :xl="4" v-for="(item, index) in 6" :key="index")
                div.div-card
                  img(src="../../../assets/icon-jing.png")
                  div.desc 
                    span(v-if="index === 0") 频率&nbsp;&nbsp;&nbsp;
                    span 50
          div(class="jing-col-bg" style="margin-top: 16px")
            p.center-title (45kw/11kw)
            el-row
              el-col(:md="8" :lg="6" :xl="4" v-for="(item, index) in 6" :key="index")
                div.div-card
                  img(src="../../../assets/icon-jing.png")
                  div.desc 
                    span(v-if="index === 0") 频率&nbsp;&nbsp;&nbsp;
                    span 50
    //- list.d-mt(url='' :params='{}' :onOpearClick='handleOperaClick')
</template>

<script>
import * as echarts from 'echarts';

// api
import { getDemoData } from '../../../api';

// components
import Chart from '../../../components/charts';
import List from '../../../components/list';
import SearchInput from '../../../components/search-input';

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
          ...CHART_OPTIONS.legend,
          data: ['数量统计', '占比统计']
        },
        xAxis: {
          ...CHART_OPTIONS.xAxis,
          data: mockXAix,
        },
        yAxis: [
          {
            ...CHART_OPTIONS.yAxis,
            type: 'value',
            name: '数量统计',
            nameTextStyle: {
              color: '#fff',
              fontWeight: 'bold'
            }
        },
        {
            ...CHART_OPTIONS.yAxis,
            type: 'value',
            name: '占比统计',
            nameTextStyle: {
              color: '#fff',
              fontWeight: 'bold'
            }
        }
        ],
        series: [{
          ...mockChartData[0],
          type: 'bar',
          name: '数量统计',
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
        }, {
            type: 'line',
            name: '占比统计',
            yAxisIndex: 1,
            itemStyle: {
              color: '#eed777'
            },
            data: [20, 22, 33, 45, 63, 10, 20, 23, 23, 16, 12, 62, 20, 22, 33, 45, 63, 10, 20, 23, 23, 16, 12, 62, 10, 14, 15, 50, 60, 45, 42]
        }],
      },
      optionsLeft: {
        series: [
          {
          type: 'gauge',
          radius: '80%',
          axisLine: {
              lineStyle: {
                  width: 35,
                  color: [
                    [ 0.05, "#DA462C" ],//0-50%处的颜色
                    [ 0.1, "#FF9618" ],//51%-70%处的颜色
                    [ 0.3, "#FFED44" ],//70%-90%处的颜色
                    [ 1,"#20AE51" ]//90%-100%处的颜色
                  ]
              }
          },
          axisTick: {
              show: false,
          },
          splitLine: {
              show:false,
          },
          axisLabel: {
              show: false,
          },
          detail: {
              show: false,
          },
          data: [{
              value: 70
          }]
      },
          {
          type: 'gauge',
          radius: '60%',
          title: {
            color: '#fff',
            fontSize: 30
          },
          axisLine: {
              lineStyle: {
                  width: 35,
                  color: [
                      [1, '#002766']
                  ]
              }
          },
          pointer: {
              itemStyle: {
                  color: 'auto'
              }
          },
          axisTick: {
              distance: -30,
              length: 10,
              lineStyle: {
                  color: '#fff',
                  width: 2
              }
          },
          splitLine: {
              distance: -35,
              length: 35,
              lineStyle: {
                  color: '#fff',
                  width: 2
              }
          },
          axisLabel: {
              color: '#fff',
              distance: 40,
              fontSize: 20
          },
          detail: {
              valueAnimation: true,
              formatter: '{value}',
              color: 'auto'
          },
          data: [{
              value: 70,
              name: 'COP'
          }]
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
  .chart-wrapper {
    // border: 1px solid #f1f1f1;
    border: transparent;
    width: 100%;
    height: calc((100% - 56px) / 2);
  }
  .marginTop {
    margin-top: 2%;
  }
  p.center-title {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .div-card {
    width: 100%;
    text-align: center;
    img {
      width: 64px;
      height: 64px;
    }
    .desc {
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      margin-top: 10px;
    }
  }
  .beng-col-bg {
    background-color:rgba(24,144,255, 0.2);
    padding: 10px;
    box-sizing: border-box;
    margin-right: 8px;
  }
  .jing-col-bg {
    background-color:rgba(0,39,102, 0.5);
    padding: 10px;
    box-sizing: border-box;
    margin-left: 8px;
  }
  .chart-center {
    height: 100%;
  }
  .chart-pie-left {
    height: 100%;
  }
  .chart-pie-right {
    height: 100%;
  }
  .div-tags {
    text-align: center;
    /deep/ .el-tag {
      border-color: transparent;
      color: #fff;
      margin-right: 10px;
    }
  }
</style>
