<template lang='pug'>
  el-container.homeIndex
    el-main.home-box
      div.header-title 天宇安防智慧园区
      el-row.home-box-row
        el-col(
          :span='6',
          class='home-box-left'
        )
          el-row
            el-col(:span="24")
              el-card(shadow="always")
                InformationCircular
          el-row.home-box-left-btm
            el-col(:span="24", class="left-btm-height")
              el-card(shadow="always", class="echarts-left-btm")
                //- chart-map
                StatisticsCar
            el-col(:span="24")
              el-card(shadow="always", class="echarts-left-btm")
                CustomIndex
                //- StatisticsVisitor
        el-col(
          :span='12',
          class='home-box-center'
        ) 
          el-row(
            class="home-center-top"
            :gutter='20'
          )
            el-col(:span="8")
              el-card.index-card(class="home-card")
                p.title 浏览量
                p.number 23,917
                p.d-font-12.desc 
                  span 周同比: 
                  span.increase 20%↑
                p.d-font-12.desc
                  span 月环比:
                  span.asc -10%↓
            el-col(:span="8")
              el-card.index-card.center.yellow(class="home-card")
                p.title 访问次数
                p.number 9,175
                p.d-font-12.desc 
                  span 周同比: 
                  span.increase 20%↑
                p.d-font-12.desc
                  span 月环比:
                  span.asc -10%↓
            el-col(:span="8")
              el-card.index-card.orange
                p.title 跳出次数
                p.number 8,267
                p.d-font-12.desc 
                  span 周同比: 
                  span.increase 20%↑
                p.d-font-12.desc
                  span 月环比:
                  span.asc -10%↓
          el-row(
            class="home-center-btm"
          )
            el-col(:span='24')
              el-card(shadow="always", class="home-center-map")
                //- img(src='../../assets/lbx.png' width='80%' height='50%')
            //- el-col(:span='24', class='echart-one')
              el-card(shadow="always", class="home-center-card")
                //- chart-map
                StatisticsCar
            //- el-col(:span="24", class='echart-one')
              el-card(shadow="always", class="home-center-card")
                StatisticsVisitor
        el-col(
          :span='6',
          class='home-box-right'
        )
          el-row
            el-col(:span='24')
              el-card(shadow="always")
                CarPie
          el-row.home-box-left-btm
            el-col(:span='24', class="left-btm-height")
              el-card(shadow="always", class="echarts-left-btm")
                MonitorFacilities
              el-card(shadow="always", class="echarts-left-btm")
                //- MonitorVideo
                CustomIndex
      div.menu-box   
        div.menu-box-item(@click="handleToManagement")
          span(style="margin-left: 50px;") 出入管理
        div.menu-box-item(@click="handleToMonitor")
          span 监控预警
        div.menu-box-item(@click="handleToSystem")
          span(style="margin-right: 50px;") 系统集成
</template>

<script>
// 信息通告
import InformationCircular from './charts/information-circular';
// 车辆统计
import CarPie from './charts/car-pie';
// 客流统计-访客统计
import StatisticsVisitor from './charts/statistics-visitor';
// 客流统计-车辆统计
import StatisticsCar from './charts/statistics-car';
// 视频监控
import MonitorVideo from './charts/monitor-video.vue';
// 设施监控
import MonitorFacilities from './charts/monitor-facilities';
// 仪表盘
// import ChartMap from './charts/chart-map';
import CustomIndex from './charts/custom-index';


export default {
  name: 'home',
  components: {
    InformationCircular,
    StatisticsVisitor,
    MonitorVideo,
    StatisticsCar,
    MonitorFacilities,
    CarPie,
    CustomIndex,
    // ChartMap,
  },
  methods: {
    handleToManagement() {
      this.$router.push({name: 'guards'});
    },
    handleToMonitor() {
      this.$router.push({name: 'fire'});
    },
    handleToSystem() {
      this.$router.push({name: 'system'});
    }
  }
}
</script>

<style lang="less">
.homeIndex{
    width: 100%;
    height: 100%;
    
}
@font-face{
	font-family: yjsz;
	src:url('../../assets/fonts/yjsz.TTF'),
}
.home-box {
  width: 100%;
  height: 100%;
  // width: 2880px;
  // background: #002766;
  // background:url('../../assets/bg.jpeg') no-repeat center;
  // background-size: cover;
  padding: 20px !important;
  .el-card {
    border: none;
    box-shadow: -3px 5px 10px rgba(0, 0, 0, .6);
    background-color: transparent;
    color: #b7c9e0;;
    // background-color: rgba(186,231,255, 0.6); 135 232 222
    // background-color: transparent;
    // background-color: rgba(135,232,222,0.2);
    // border-color: rgba(135,232,222,0.2);
    // box-shadow: 0 2px 12px 0 rgb(54 207 201  / 10%) !important;
    // box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    .el-card__body {
      padding: 12px;
    }
  }
  .home-box-row {
    height: 100%;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 60px;
  }
  .home-box-left {
    height: 100%;
  }
  .home-box-left-btm {
    height: calc(100% - 240px - 20px);
    .el-card {
      height: 360px;
    }
  }
  // .left-btm-height {
  //   // height: 100%;
  // }
  .home-box-center {
    height: 100%;
    box-sizing: border-box;
    .echart-one {
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      height: calc(50% - 20px);
      box-sizing: border-box;
    }
  }
  .home-box-right {
    height: 100%;
    box-sizing: border-box;
  }
  .home-center-top {
    padding-left: 140px;
    padding-right: 140px;
    .el-card__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;
      // align-items: center;
      // text-align: center;
    }
    .title {
      color: #b7c9e0;
      font-size: 20px;
      font-weight: 500;
      text-shadow: none;
      // line-height: 32px;
      // color: #f0f0f0;
    }
    .index-card {
      border-left: 8px solid rgba(238, 255, 0, .5);
      box-shadow: none;
      padding-left: 8px;
      // color: rgba(21, 45, 90, .8);
      color: rgb(238, 255, 0);
      text-shadow: 0 0 25px rgb(238, 255, 0);
      width: 200px;
      margin: 0 auto;
      .desc {
        margin-top: 12px;
        color: #fff;
        font-weight: 700;
        text-shadow: none;
        &:last-child {
          margin-top: 0;
        }
        .increase {
          color: #ec6363;
        }
        .asc {
          color: #17e817;
        }
      }
      &.yellow {
        border-color: rgba(0, 255, 92, .5);
        color: rgba(0, 255, 92);
        text-shadow: 0 0 25px rgba(0, 255, 92);
      }
      &.orange {
        border-color: rgba(255, 166, 0, .5);
        color: rgba(255, 166, 0);
        text-shadow: 0 0 25px rgba(255, 166, 0);
      }
    }
    .index-card.center {
      // background: url(../../assets/circle2.png) no-repeat;
      background-size: 100%;
      // color: #0ac1c7;
      // margin-top: -20px;
    }
    .number {
      font-family: yjsz;
      font-size: 50px;
      line-height: 30px;
    }
    // span.yellow {
    //   color: #cdd066;
    // }
    // span.green {
    //   color: #456f2c;
    // }
  }
  .home-center-map {
    // width:5.18rem;
    // top:1.07rem;
    // left: 1.4rem;
    z-index: 1;
    width: 100%;
    height: 1140px;
    background: url(../../assets/lbx.png) no-repeat;
    background-size: 90%;
    background-position: center;
    box-shadow: none!important;
    animation: myfirst 10s infinite linear;
  }
  .home-center-btm{
    height: calc(100% - 106px);
    box-sizing: border-box;
  }
  .home-card {
    // margin-right: 20px;
    height: 106px;
    box-sizing: border-box;
  }
  .echarts-left-btm {
    margin-top: 20px;
    height: 300px;
    .el-card__body{
      height: 100%;
      box-sizing: border-box;
    }
  }
  .home-center-card {
    height: 100%;
    box-sizing: border-box;
    .el-card__body{
      height: 100%;
      box-sizing: border-box;
    }
  }

  @keyframes myfirst
  {
  from {transform: rotate(0deg);}
  to {transform: rotate(-359deg);}
  }
}
.header-title {
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
}
.menu-box {
  position: absolute;
  bottom: 100px;
  width: 700px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  // background:#f00;
  display: flex;
  opacity: 0.8;
  &-item {
    width: 200px;
    height: auto;
    background: url('../../assets/caifen-01.png') no-repeat center;
    background-size: contain;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 40px;
    }
    &:nth-child(2) {
      background: url('../../assets/caifen-02.png') no-repeat center;
      background-size: contain;
    }
    &:nth-child(3) {
      background: url('../../assets/caifen-05.png') no-repeat center;
      background-size: contain;
    }
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
