<template lang="pug">
    div(
        class="category-one-box"
    )
        FEcharts(
            :options="chartOptions"
        )
</template>

<script>
import FEcharts from '../../../components/charts/index.vue';

export default {
    name: "category-one",
    components: {
        FEcharts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
               xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
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
.category-one-box {
    width: 100%;
    height: 220px;
}
</style>