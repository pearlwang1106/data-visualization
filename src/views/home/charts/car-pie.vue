<template lang="pug">
    .car-pie
      p.monitor-title 车辆管理
      Charts(:options="chartOptions")
        
</template>

<script>
import Charts from '../../../components/charts/index';
import VueSeamlessScroll from 'vue-seamless-scroll';
import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';

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
                ...CHART_OPTIONS,
                ...HOME_CHART_OPTIONS,
                title: {
                    ...HOME_CHART_OPTIONS.title,
                    // text: '车辆统计',
                },
                tooltip: {
                    trigger: 'item'
                },
                xAxis: {
                    show: false,
                },
                yAxis: {
                    show: false,
                },
                legend: {
                    ...HOME_CHART_OPTIONS.legend,
                    top: '14%',
                    left: 'left',
                    orient: 'vertical',
                    textStyle: {
                        fontSize: '24px',
                        color: '#FFF'
                    }
                },
                series: [
                    {
                        name: '车俩统计',
                        type: 'pie',
                        radius: ['30%', '70%'],
                        // left: '8%',
                        // top: '5%',
                        avoidLabelOverlap: false,
                        itemStyle: {
                            opacity: 0.9
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '32',
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

<style lang="less" scoped>
.car-pie {
    width: 100%;
    height: 300px;
}
.monitor-title {
    font-size: 40px;
    line-height: 60px;
    font-weight: 500;
    padding: 0 8px;
}
</style>