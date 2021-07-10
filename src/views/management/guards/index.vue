<template lang='pug'>
  section
    video.video-wrapper(
      height='400'
      width='100%'
      src='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      autoplay
      controls)
    list(url='' :params='{}' :onOpearClick='handleOperaClick')
</template>

<script>
// components
import List from '../../../components/list';

export default {
  data () {
    return {
    }
  },

  components: {
    List
  },

  mounted () {
  },

  methods: {
    handleOperaClick (row) {
      console.info('row info: ', row);
      // 调用开始或取消监控接口处理
    },
  },
}
</script>

<style lang='less'>
  .video-wrapper {
    background-color: #DDD;
  }
</style>
