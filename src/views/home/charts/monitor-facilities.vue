<template lang="pug">
    div(class="bar-two-box")
        Charts(:options="chartOptions")
</template>

<script>
import Charts from '../../../components/charts/index.vue'

export default {
    name: "bar-right-btm",
    components: {
        Charts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                title: {
                    text: '设施监控'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
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
                grid: {
                    left:'3%',
                    bottom: '3%',
                    right: '15%',
                    containLabel: true
                },
                xAxis: {name: '数量'},
                yAxis: {type: 'category', name: '设备名称'},
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
                        color: ['#65B581']
                    }
                },
                series: [
                    {
                        type: 'bar',
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
    height: 100%;
}
</style>