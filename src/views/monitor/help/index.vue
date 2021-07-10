<template lang='pug'>
  section
    section.chart-wrapper
      chart(:options='options')
    list.d-mt(url='' :params='{}' :onOpearClick='handleOperaClick')
</template>

<script>
// components
import Chart from '../../../components/charts';
import List from '../../../components/list';

// mixins
import Mixins from '../../../mixins';

// setting data
import { CHART_OPTIONS } from '../../../utils/chart';

// mock data
import {  mockChartData } from '../../../utils/mockData';


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
    }
  },

  mixins: [Mixins],
  components: {
    Chart,
    List,
  },
}
</script>

<style lang='less'>
  .chart-wrapper {
    border: 1px solid #f1f1f1;
    width: 100%;
    height: 400px;
  }
</style>
