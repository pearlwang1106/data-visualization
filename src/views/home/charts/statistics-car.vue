<template lang="pug">
    div(class="home-echarts-one")
        Charts(:options="chartOptions")
</template>

<script>
import Charts from '../../../components/charts/index';
import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';

export default {
    name: "statistics-car",
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
                    text: '客流统计-车辆统计',
                },
                xAxis: [
                    {
                        ...HOME_CHART_OPTIONS.xAxis,
                        type: 'category',
                        name: '日期',
                        boundaryGap: true,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        ...HOME_CHART_OPTIONS.yAxis,
                        type: 'value',
                        scale: true,
                        name: '客流量',
                        max: 1200,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        data: (function (){
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
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
.home-echarts-one {
    width: 100%;
    height: 100%;
}
</style>