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
                    top: '10%',
                    left: 'center'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '70%'],
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
                            {value: 1048, name: '搜索引擎'},
                            {value: 735, name: '直接访问'},
                            {value: 580, name: '邮件营销'},
                            {value: 484, name: '联盟广告'},
                            {value: 300, name: '视频广告'}
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