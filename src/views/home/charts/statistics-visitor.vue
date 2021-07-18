<template lang="pug">
    div(class="category-two-box")
      p.monitor-title 客流统计-访客统计
      Charts(:options="chartOptions")
</template>

<script>
import * as echarts from 'echarts';
import Charts from '../../../components/charts/index.vue';
import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';

export default {
    name: "statistics-visitor",
    components: {
        Charts
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                ...CHART_OPTIONS,
                ...HOME_CHART_OPTIONS,
                title: {
                    ...HOME_CHART_OPTIONS.title,
                    // text: '客流统计-访客统计',
                },
                color: ['#45a776'],
                xAxis: [
                    {
                        ...HOME_CHART_OPTIONS.xAxis,
                        type: 'category',
                        name: '日期',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        ...HOME_CHART_OPTIONS.yAxis,
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
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#030e61',
                                opacity: 0.6,
                            }
                        },
                        data: [1200, 1322, 1021, 1340, 990, 1230, 1120]
                    },
                    {
                        name: '车辆梳理',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        smooth: true,
                        itemStyle: {
                            normal: {
                                //柱形图圆角，初始化效果
                                // color: '#032c61',
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#032c61'},
                                        {offset: 0.4, color: 'rgba(3, 44, 97, .5)'},
                                        {offset: 1, color: 'rgba(0, 0, 0, .1)'}
                                    ]
                                ),
                                opacity: 0.6,
                            }
                        },
                        data: [600, 722, 521, 640, 490, 630, 520]
                    },
                    {
                        name: '测试数据',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        smooth: true,
                        itemStyle: {
                            normal: {
                                //柱形图圆角，初始化效果
                                color: '#02563b',
                                opacity: 0.6,
                            }
                        },
                        data: [1600, 1722, 1521, 1640, 1490, 1630, 1520]
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

<style lang="less" scoped>
.category-two-box {
    width: 100%;
    height: 100%;
}
.monitor-title {
    font-size: 40px;
    line-height: 60px;
    font-weight: 500;
    padding: 0 8px;
}
</style>