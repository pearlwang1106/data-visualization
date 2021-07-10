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
