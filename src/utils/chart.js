// 图表颜色配置
const COLORS = [
  '#3682be',
  '#45a776',
  '#f05326',
  '#eed777',
  '#334f65',
  '#b3974e',
  '#38cb7d',
  '#ddae33',
  '#844bb3',
  '#93c555',
  '#5f6694',
  '#df3881',
]

export const CHART_OPTIONS = {
  title: {
    text: ''
  },
  color: COLORS,
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '5%',
    left: 'center',
    data: [],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '12%',
    containLabel: true
  },
  toolbox: {
    feature: {
        saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    data: [],
  },
  yAxis: {
    type: 'value'
  },
  dataset: {},
  series: [],
};
