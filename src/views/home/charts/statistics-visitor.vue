<template lang="pug">
    div(class="category-two-box")
        Charts(:options="chartOptions")
</template>

<script>
import Charts from '../../../components/charts/index.vue';

export default {
    name: "statistics-visitor",
    components: {
        Charts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                title: {
                    text: '客流统计-访客统计'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '8%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        name: '日期',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
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