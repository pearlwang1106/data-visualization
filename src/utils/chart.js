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
];

const TEXT_COLOR = '#b7c9e0';

const AXIS_STYLE = {
  nameTextStyle: {
    color: TEXT_COLOR,
  },
  axisTick: {
    inside: true,
  },
  axisLabel: {
    color: TEXT_COLOR,
  },
  splitLine: {
    lineStyle: {
      width: 0.5,
      type: 'dashed',
      color: ['#f1f1f1'],
    },
  },
};

const LEGEND_STYLE = {
  itemStyle: {
    borderWidth: 0,
  },
  textStyle: {
    color: TEXT_COLOR,
  }
};

export const CHART_OPTIONS = {
  title: {
    text: '',
    textStyle: {
      color: '#fff'
    },
  },
  color: COLORS,
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '5%',
    left: 'center',
    data: [],
    textStyle: {
      color: '#fff',
      fontWeight: 'bold'  
    }
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
    axisLine: {
      show: true,
      lineStyle: {
        width: 2,
        color: '#1890ff'
      }
    },
    axisLabel: {
      color: '#fff',
      fontWeight: 'bold'
    },
  },
  yAxis: {
    type: 'value',
    // splitLine: {
    //   lineStyle: {
    //     width: 0.5,
    //     type: 'dashed',
    //     color: ['#f1f1f1'],
    //   },
    // },
    axisLine: {
      show: true,
      lineStyle: {
        width: 2,
        color: '#1890ff'
      }
    },
    axisLabel: {
      color: '#fff',
      fontWeight: 'bold'
    },
    splitLine: {
      lineStyle: {
        width: 0
      }
    }
  },
  dataset: {},
  series: [],
};

export const HOME_CHART_OPTIONS = {
  title: {
    text: '',
    textStyle: {
      color: TEXT_COLOR,
    }
  },
  color: COLORS,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
        label: {
            backgroundColor: '#283b56'
        }
    }
  },
  legend: {
    ...LEGEND_STYLE,
  },
  grid: {
    left: '3%',
    right: '8%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    show: false,
  },
  xAxis: {
    ...AXIS_STYLE,
    type: 'category',
    // data: [],
  },
  yAxis: {
    ...AXIS_STYLE,
    type: 'value',
  },
  dataset: {},
  series: [],
};
