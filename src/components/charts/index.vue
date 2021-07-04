<template lang="pug">
    div(
        ref="chartDemo",
        class="chart-box"
    )
</template>

<script>
import * as echarts from 'echarts';
import _ from 'lodash'
import { addListener, removeListener } from "resize-detector";

export default {
    name: "FEcharts",
    props: {
        options: {
            type: Object,
            defult: {}
        }
    },
    data() {
        return {
            myChart: null
        }
    },
    watch: {
        options(val) {
            console.log('val', val);
            this.myChart.setOption(val);
        }
    },
    created() {
        this.resize = _.debounce(this.resize, 300)
    },
    mounted() {
        this.initCharts()
        addListener(this.$refs.chartDemo, this.resize)
    },
    beforeDestroy() {
        removeListener(this.$refs.chartDemo, this.resize)
        this.myChart.dispose()
        this.myChart = null
    },
    methods: {
        initCharts() {
            this.myChart = echarts.init(this.$refs.chartDemo);
            this.myChart.setOption(this.options)
        },
        resize() {
            this.myChart.resize()
        }
    }
}
</script>

<style lang="less">
.chart-box {
    width: 100%;
    height: 100%;
}
</style>