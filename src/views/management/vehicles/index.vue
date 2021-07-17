<template lang='pug'>
  section(style="height: calc(100% - 56px)")
    section.search-btn
      el-radio-group(v-model="radio1" style="margin-right: 16px")
        el-radio-button(label="日")
        el-radio-button(label="周")
        el-radio-button(label="月")
        el-radio-button(label="年")
      el-date-picker(v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期")
      el-button(type="primary" class="search-button") 检索
    section.chart-wrapper
      chart(:options='options')
    section(class="chart-wrapper marginTop")
      el-row
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
        el-col(:span="8") 222

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
// components
import Chart from '../../../components/charts';
import List from '../../../components/list';

// mixins
import Mixins from '../../../mixins';

// setting data
import { CHART_OPTIONS } from '../../../utils/chart';

// mock data
import { mockXAix, mockChartData } from '../../../utils/mockData';


export default {
  data () {
    return {
      radio1: '日',
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
    }
  },

  mixins: [Mixins],
  components: {
    Chart,
    List,
  },
}
</script>

<style lang='less' scoped>
  .chart-wrapper {
    // border: 1px solid #f1f1f1;
    border: transparent;
    width: 100%;
    height: calc((100% - 56px) / 2);
  }
  .search-btn {
    margin-left: 8px;
    margin-bottom: 16px;
    .search-button {
      margin-left: 16px;
    }
  }
  .marginTop {
    margin-top: 3%;
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
</style>
