<template lang='pug'>
  el-row(:gutter='16')
    el-col.content-left(:span='8')
      .chart-container
        chart(:options='options')
      
      p 小视频
      el-row.d-mt(:gutter='16')
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
      el-row.d-mt(:gutter='16')
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
      el-row.d-mt(:gutter='16')
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
      el-row.d-mt(:gutter='16')
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
        el-col(:span='12')
          .video-list-item(@click='handleVideoClick') 点击切换
    el-col(:span='16')
      video.video-wrapper(
        height='640'
        width='100%'
        :src='videoSrc'
        autoplay
        controls)
      el-row.d-mt(:gutter='16')
        el-col(:span='8')
          .chart-container
            chart(:options='options')
        el-col(:span='8')
          .chart-container
            chart(:options='areaOptions')
        el-col(:span='8')
          .chart-container
            chart(:options='lineOptions')
      //- list(url='' :params='{}' :onOpearClick='handleOperaClick')
</template>

<script>
// components
import * as echarts from 'echarts';
import List from '../../../components/list';
import Chart from '../../../components/charts';
import { CHART_OPTIONS, HOME_CHART_OPTIONS } from '../../../utils/chart';
// import { mockXAix, mockChartData } from '../../../utils/mockData';

export default {
  data () {
    return {
      videoSrc: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      options: {
        ...CHART_OPTIONS,
        ...HOME_CHART_OPTIONS,
        title: {
            ...HOME_CHART_OPTIONS.title,
            text: '视频数量统计',
        },
        xAxis: [
            {
                ...HOME_CHART_OPTIONS.xAxis,
                type: 'category',
                name: '日期',
                boundaryGap: true,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日','周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                ...HOME_CHART_OPTIONS.yAxis,
                type: 'value',
                scale: true,
                name: '数量',
                max: 1200,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [
            {
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius:[20, 20, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        ),
                        opacity: 0.6,
                    }
                },
                data: (function (){
                    var res = [];
                    var len = 16;
                    while (len--) {
                        res.push(Math.round(Math.random() * 1000));
                    }
                    return res;
                })()
            }
        ]
      },
      areaOptions: {
                ...CHART_OPTIONS,
                ...HOME_CHART_OPTIONS,
                title: {
                    ...HOME_CHART_OPTIONS.title,
                    text: '名称',
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
            },
      lineOptions: {
                ...CHART_OPTIONS,
                ...HOME_CHART_OPTIONS,
                title: {
                    ...HOME_CHART_OPTIONS.title,
                    text: '名称',
                },
                color: ['#45a776'],
                xAxis: [
                    {
                        ...HOME_CHART_OPTIONS.xAxis,
                        type: 'category',
                        name: '日期',
                        boundaryGap: false,
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
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
                        emphasis: {
                            focus: 'series'
                        },
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#fff',
                                opacity: 0.6,
                            }
                        },
                        data: [1200, 1322, 1021, 1340, 990, 1230, 1120, 400, 500, 600, 700]
                    },
                    {
                        name: '车辆梳理',
                        type: 'line',
                        stack: '总量',
                        emphasis: {
                            focus: 'series'
                        },
                        smooth: true,
                        itemStyle: {
                            normal: {
                                //柱形图圆角，初始化效果
                                color: 'red',
                                opacity: 0.6,
                            }
                        },
                        data: [600, 722, 521, 640, 490, 630, 520, 500, 600, 800, 900]
                    },
                ]
            },
    }
  },

  components: {
    List,
    Chart,
  },

  mounted () {
  },

  methods: {
    handleOperaClick (row) {
      console.info('row info: ', row);
      // 调用开始或取消监控接口处理
    },

    handleVideoClick () {
      const a = 'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4';
      const b = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';

      if (this.videoSrc === a) {
        this.videoSrc = b;
      }
      else {
        this.videoSrc = a;
      }
    }
  },
}
</script>

<style lang='less' scoped>
  .video-wrapper {
    background-color: #DDD;
  }
  .chart-container {
    width: 100%;
    height: 280px;
  }
  .content-left {
    color: #EEE;
  }
  .video-list-item {
    padding: 16px;
    height: 120px;
    background-color: rgba(185, 173, 266, .3);
    cursor: pointer;
  }
</style>
