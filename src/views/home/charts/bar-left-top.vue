<template lang="pug">
    div(
        class="home-echarts-one"
    )
        FEcharts(
            :options="chartOptions"
        )
</template>

<script>
import FEcharts from '../../../components/charts/index.vue'

export default {
    name: "bar-left-top",
    components: {
        FEcharts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                title: {
                    text: '客流统计-车辆统计',
                    subtext: '纯属虚构'
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
                legend: {
                    data:['最新成交价', '预购队列']
                },
                dataZoom: {
                    show: false,
                    start: 0,
                    end: 100
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: (function (){
                            var now = new Date();
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                now = new Date(now - 2000);
                            }
                            return res;
                        })()
                    },
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: (function (){
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(10 - len - 1);
                            }
                            return res;
                        })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: '价格',
                        max: 30,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    },
                    {
                        type: 'value',
                        scale: true,
                        name: '预购量',
                        max: 1200,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name: '预购队列',
                        type: 'bar',
                        xAxisIndex: 1,
                        yAxisIndex: 1,
                        data: (function (){
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.push(Math.round(Math.random() * 1000));
                            }
                            return res;
                        })()
                    },
                    {
                        name: '最新成交价',
                        type: 'line',
                        data: (function (){
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                len++;
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
.home-echarts-one {
    width: 100%;
    height: 100%;
}
</style>