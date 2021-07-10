<template lang='pug'>
  section
    el-table.d-mt(:data='tableData' border)
      template(v-for='col in columns')
        el-table-column(v-if='col.name === "operation"' fixed='right' label='操作')
          template(slot-scope="scope")
            el-button(size="mini" type='text' @click='handleOperaClick(scope.row)') 开启/取消监控
        el-table-column(v-else :prop='col.name' :label='col.label')
    
    el-pagination(
      class='d-mt'
      background
      layout='sizes, prev, pager, next'
      :current-page='pagination.current'
      :page-size='pagination.pageSize'
      :page-sizes='pagination.sizes'
      :total='pagination.total'
      @size-change='onSizeChange'
      @current-change='onCurrentChange')
</template>

<script>
import { mockColumns, mockTableData } from '../../utils/mockData';
import { getDemoData } from '../../api';

export default {
  props: ['url', 'params', 'onOpearClick'],
  data () {
    return {
      columns: mockColumns,
      tableData: mockTableData,
      pagination: {
        current: 1,
        pageSize: 10,
        sizes: [10, 20, 40],
        total: 100,
      }
    }
  },

  mounted () {
    // 请求表格数据
    // this.getTableData();
  },

  methods: {
    async getTableData () {
      try {
        const result = await getDemoData(this.url, {
          ...this.params,
          page: this.pagination.current,
          size: this.pagination.pageSize,
        });
        if (result.success) {
          // success todo
        }
      }
      catch (e) {
        console.error(e);
      }
    },

    handleOperaClick (row) {
      this.onOpearClick && this.onOpearClick(row);
      // 操作列操作后，更新表格数据
      this.getTableData();
      // 调用开始或取消监控接口处理
    },

    // 翻页
    onCurrentChange (curr) {
      this.pagination.current = curr;
      this.getTableData();
    },

    // pagesize change
    onSizeChange (size) {
      this.pagination.pageSize = size;
      this.getTableData();
    }
  },
}
</script>

<style lang='less'>
</style>
