<template lang="pug">
    .bar-two-box
      p.monitor-title 设施监控
      Charts(:options="chartOptions")
</template>

<script>
// import * as echarts from 'echarts';
import Charts from '../../../components/charts/index';
import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';

export default {
    name: "bar-right-btm",
    components: {
        Charts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                ...CHART_OPTIONS,
                ...HOME_CHART_OPTIONS,
                title: {
                    ...HOME_CHART_OPTIONS.title,
                    // text: '设施监控',
                },
                dataset: {
                    source: [
                        ['score', '数量', 'product'],
                        [89.3, 58212, '设备A'],
                        [57.1, 78254, '设备B'],
                        [74.4, 41032, '设备C'],
                        [50.1, 12755, '设备D'],
                        [89.7, 20145, '设备E'],
                        [68.1, 79146, '设备F'],
                        [19.6, 91852, '设备G']
                    ]
                },
                xAxis: {
                    ...HOME_CHART_OPTIONS.yAxis,
                    name: '数量'
                },
                yAxis: {
                    ...HOME_CHART_OPTIONS.xAxis,
                    type: 'category',
                    name: '设备名称'
                },
                visualMap: {
                    show: false,
                    orient: 'horizontal',
                    left: 'center',
                    min: 10,
                    max: 100,
                    text: ['High Score', 'Low Score'],
                    // Map the score column to color
                    dimension: 0,
                    inRange: {
                        // color: ['#93c555']
                        color: ['#20dbfd']
                    },
                },
                series: [
                    {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                //柱形图圆角，初始化效果
                                barBorderRadius:[0, 20, 20, 0],
                                opacity: 0.6,
                            }
                        },
                        encode: {
                            // Map the "amount" column to X axis.
                            x: 'amount',
                            // Map the "product" column to Y axis
                            y: 'product'
                        }
                    }
                ]
            }
        }
    },
    created() {
        // this.changeData()
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    methods: {
        changeData() {
            let self = this;
            this.timer = setInterval(() => {
                self.chartOptions.series[0].data = self.chartOptions.series[0].data.map(() => Math.floor(Math.random() * 100))
                // 重新改写chartOptions，以适应FEcharts里面监听options
                self.chartOptions = { ...self.chartOptions }
            }, 3000)
        }
    }
}
</script>

<style lang="less">
.bar-two-box {
    width: 100%;
    height: calc(100% - 62px);
}
.monitor-title {
    font-size: 40px;
    line-height: 60px;
    font-weight: 500;
    padding: 0 8px;
}
</style>