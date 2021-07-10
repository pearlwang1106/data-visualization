<template lang="pug">
    .information-circular
        p.monitor-title 信息通告
        VueSeamlessScroll(
            :data="CardPartsStatisticsList"
            class="seamless-warp"
            :class-option="classOption")
                el-row.info-item(
                    v-for="(item,index) in CardPartsStatisticsList"
                    :key="index")
                        el-col.d-line-clamp1(:span="20" style="text-align: left") {{item.desc}}
                        el-col(:span="4" style="text-align: right") {{item.time}}

</template>

<script>
import Charts from '../../../components/charts/index';
import VueSeamlessScroll from 'vue-seamless-scroll';

export default {
    name: "information-circular",
    components: {
        Charts,
        VueSeamlessScroll
    },
    data() {
        return {
            timer: null,
            chartOptions: {
                title: {
                    text: '视频监控'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['渠道', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {
                        color: '#1890ff'
                    }
                }]
            },
            CardPartsStatisticsList: [
                {
                    desc: '显示信息通告数据显示信息通告数据显示信息通告数据显示信息通告数据',
                    time: '07-10'
                },
                {
                    desc: '显示信息通告数据显示信息通告数据显示信息通告数据显示信息通告数据',
                    time: '07-10'
                },
                {
                    desc: '显示信息通告数据显示信息通告数据显示信息通告数据显示信息通告数据',
                    time: '07-10'
                },
                {
                    desc: '显示信息通告数据显示信息通告数据显示信息通告数据显示信息通告数据',
                    time: '07-10'
                },
                {
                    desc: '显示信息通告数据',
                    time: '07-10'
                },
                {
                    desc: '显示信息通告数据',
                    time: '07-10'
                },
                {
                    desc: '显示信息通告数据',
                    time: '07-10'
                },
                {
                    desc: '显示信息通告数据',
                    time: '07-10'
                }
            ]
        }
    },
    computed: {
        classOption () {
            return {
                step: 0.4, // 数值越大速度滚动越快
                limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: true, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                openWatch: true, // 开启数据实时监控刷新dom
                singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
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
.information-circular {
    width: calc(100% + 16px);
    height: 220px;
    margin: 0 -8px;
}
.monitor-title {
    font-size: 18px;
    line-height: 32px;
    font-weight: 500;
    padding: 0 8px;
}
.seamless-warp {
  width: 100%;
  height: calc(100% - 48px);
  margin-top: 18px;
  overflow: hidden;
    .info-item {
        font-size: 14px;
        padding: 0 8px;
        height: 36px;
        line-height: 36px;
        &:nth-child(2n) {
            background-color: rgba(0, 0, 0, .15);
        }
    }
    .el-col {
        text-align: center;
    }
}
</style>