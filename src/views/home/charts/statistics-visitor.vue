<template lang="pug">
    div(class="category-two-box")
        Charts(:options="chartOptions")
</template>

<script>
import Charts from '../../../components/charts/index.vue';
import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';

export default {
    name: "statistics-visitor",
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
                    text: '客流统计-访客统计',
                },
                color: ['#45a776'],
                xAxis: [
                    {
                        ...HOME_CHART_OPTIONS.xAxis,
                        type: 'category',
                        name: '日期',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        ...HOME_CHART_OPTIONS.yAxis,
                        type: 'value',
                        name: '客流量'
                    }
                ],
                series: [
                    {
                        name: '访客数量',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [1200, 1322, 1021, 1340, 990, 1230, 1120]
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
.category-two-box {
    width: 100%;
    height: 100%;
}
</style>