<template lang="pug">
    div(class="car-pie")
        Charts(:options="chartOptions")
        
</template>

<script>
import Charts from '../../../components/charts/index.vue'
import VueSeamlessScroll from 'vue-seamless-scroll'

export default {
    name: "car-pie",
    components: {
        Charts,
        VueSeamlessScroll
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                title: {
                    text: '车辆统计'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '14%',
                    left: 'left',
                    orient: 'vertical'
                },
                series: [
                    {
                        name: '车俩统计',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        left: '20%',
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 1048, name: '车辆型号A'},
                            {value: 735, name: '车辆型号B'},
                            {value: 580, name: '车辆型号C'},
                            {value: 484, name: '车辆型号D'},
                            {value: 300, name: '车辆型号E'}
                        ]
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
.car-pie {
    width: 100%;
    height: 220px;
}
</style>