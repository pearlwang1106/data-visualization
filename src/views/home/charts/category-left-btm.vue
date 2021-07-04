<template lang="pug">
    div(
        class="category-three-box"
    )
        FEcharts(
            :options="chartOptions"
        )
</template>

<script>
import FEcharts from '../../../components/charts/index.vue';

export default {
    name: "category-left-btm",
    components: {
        FEcharts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                legend: {
                    data: ['高度(km)与气温(°C)变化关系']
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: 'Temperature : <br/>{b}km : {c}°C'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                yAxis: {
                    type: 'category',
                    axisLine: {onZero: false},
                    axisLabel: {
                        formatter: '{value} km'
                    },
                    boundaryGap: false,
                    data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
                },
                series: [
                    {
                        name: '高度(km)与气温(°C)变化关系',
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
                        data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
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