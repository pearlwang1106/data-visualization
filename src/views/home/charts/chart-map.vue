<template lang="pug">
    .car-pie
        Charts(:options="chartOptions")
        
</template>

<script>
import Charts from '../../../components/charts/index';
import VueSeamlessScroll from 'vue-seamless-scroll';
// import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';
import { option8 } from './chart-map-data';
// import { option } from './data';

export default {
    name: "car-pie",
    components: {
        Charts,
        VueSeamlessScroll
    },
    data() {
        return {
            timer: null,
            chartOptions: option8,
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
    // height: 220px;
}
</style>