<template lang='pug'>
  el-container.homeIndex
    el-main.home-box
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
                categoryLeftBtm
        el-col(
          :span='12',
          class='home-box-center'
        ) 
          el-row(
            class="home-center-top"
          )
            el-col(
              :span="8"
            )
              el-card(
                shadow="always"
                class="home-card"
              )
                span.title 浏览量
                span.number 23,917
            el-col(
              :span="8"
            )
              el-card(
                shadow="always"
                class="home-card"
              )
                span.title 访问次数
                span(class='number yellow') 9,175
            el-col(
              :span="8"
            )
              el-card(
                shadow="always"
              )
                span.title 跳出次数
                span(class='number green') 8,267
          el-row(
            class="home-center-btm"
          )
            el-col(:span='24', class='echart-one')
              el-card(shadow="always", class="home-center-card")
                StatisticsCar
            el-col(:span="24", class='echart-one')
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
                barRightBtm
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
import categoryLeftBtm from './charts/category-left-btm.vue';
import barRightBtm from './charts/bar-right-btm';


export default {
  name: 'home',
  components: {
    InformationCircular,
    StatisticsVisitor,
    categoryLeftBtm,
    StatisticsCar,
    barRightBtm,
    CarPie
  }
}
</script>

<style lang="less">
.homeIndex{
    width: 100%;
    height: 100%;
    
}
.home-box {
  width: 100%;
  height: 100%;
  // width: 2880px;
  // background: #002766;
  background:url('../../assets/bg.jpeg') no-repeat center;
  background-size: cover;
  padding: 20px !important;
  .el-card {
    // background-color: rgba(186,231,255, 0.6); 135 232 222
    // background-color: transparent;
    // background-color: rgba(135,232,222,0.2);
    // border-color: rgba(135,232,222,0.2);
    // box-shadow: 0 2px 12px 0 rgb(54 207 201  / 10%) !important;
    // box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  .home-box-row {
    height: 100%;
  }
  .home-box-left {
    height: 100%;
  }
  .home-box-left-btm {
    height: calc(100% - 240px - 20px);
  }
  .left-btm-height {
    height: 100%;
  }
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
    padding-left: 20px;
    padding-right: 20px;
    .el-card__body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    span.title {
      font-size: 16px;
      // color: #f0f0f0;
    }
    span.number {
      font-size: 28px;
      color: #1890ff;
      font-weight: bold;
    }
    span.yellow {
      color: #ffc53d;
    }
    span.green {
      color: #73d13d;
    }
  }
  .home-center-btm{
    height: calc(100% - 106px);
    box-sizing: border-box;
  }
  .home-card {
    margin-right: 20px;
    height: 106px;
    box-sizing: border-box;
  }
  .echarts-left-btm {
    margin-top: 20px;
    height: calc(100% - 22px);
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
}
</style>
