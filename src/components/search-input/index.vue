<template lang='pug'>
  section.search-btn
      el-radio-group(v-model="radio" style="margin-right: 16px" @change="handleChageRadio")
        el-radio-button(label="日")
        el-radio-button(label="周")
        el-radio-button(label="月")
        el-radio-button(label="年")
      el-date-picker(v-model="value"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期")
      el-button(type="primary" class="search-button" @click="handleSearch") 检索
</template>

<script>

export default {
  props: ['searchData'],
  data () {
    return {
        radio: '日',
        value: '',
    };
  },

  watch: {
  },

  mounted () {
  },

  methods: {
    handleChageRadio() {
        this.searchData({type: this.radio})
    },
    handleSearch() {
        this.searchData({date: this.value})
    }
  },
}
</script>

<style lang="less" scoped>
.search-btn {
    margin-left: 8px;
    margin-bottom: 16px;
    .search-button {
      margin-left: 16px;
    }
  }
</style>
