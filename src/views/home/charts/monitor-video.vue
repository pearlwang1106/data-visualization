<template lang="pug">
    .category-three-box
        FEcharts(:options="chartOptions")
</template>

<script>
import FEcharts from '../../../components/charts/index.vue';
import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';

export default {
    name: "category-left-btm",
    components: {
        FEcharts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                ...CHART_OPTIONS,
                ...HOME_CHART_OPTIONS,
                title: {
                    ...HOME_CHART_OPTIONS.title,
                    text: '视频监控',
                },
                visualMap: {
                    show: false,
                    inRange: {
                        color: ['#f05326']
                    }
                },
                xAxis: {
                    ...HOME_CHART_OPTIONS.xAxis,
                    name: '数量',
                    type: 'value'
                },
                yAxis: {
                    ...HOME_CHART_OPTIONS.yAxis,
                    name: '设备名称',
                    type: 'category',
                    axisLine: {onZero: false},
                    boundaryGap: false,
                    data: ['设备A', '设备B', '设备C', '设备D', '设备E', '设备F', '设备G']
                },
                series: [
                    {
                        type: 'line',
                        symbolSize: 10,
                        symbol: 'circle',
                        smooth: true,
                        lineStyle: {
                            width: 3,
                            shadowColor: 'rgba(0,0,0,0.3)',
                            shadowBlur: 10,
                            shadowOffsetY: 8
                        },
                        data:[0, 50, 56, 46, 22, 25, 89]
                    }
                ]
            }
        }
    },
    created() {
        // this.changeData()
    },
    beforeDestroy() {
        // clearInterval(this.timer)
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
.category-three-box {
    width: 100%;
    height: 100%;
}
</style>