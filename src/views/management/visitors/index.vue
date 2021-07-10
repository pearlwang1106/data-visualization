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
        legend: {
          data: mockChartData.map(item => item.name)
        },
        xAxis: {
          ...CHART_OPTIONS.xAxis,
          data: mockXAix,
        },
        series: mockChartData.map(item => {
          return {
            ...item,
            stack: '总量',
            type: 'line',
          }
        }),
      },
    }
  },
  mixins: [Mixins],
  components: {
    Chart,
    List,
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
