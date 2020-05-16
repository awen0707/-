<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      align="center"
    >
      <el-table-column
        label="申请人"
        prop="name"
      />
      <el-table-column
        label="讲解名称"
        prop="account"
      />
      <el-table-column
        label="联系电话"
        prop="phone"
      />
      <el-table-column
        align="right"
      >
        <template slot="header">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <detail title="讲解信息" :data="row" align="center">
            <el-button
              size="mini"
            >详情</el-button>
          </detail>
          <el-button
            size="mini"
            type="primary"
          >通过</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import detail from './component/detail'

export default {
  components: { detail },
  data() {
    return {
      tableData: [{
        name: '王一',
        account: '1705',
        phone: '13888888887'
      }, {
        name: '王二',
        account: '1704',
        phone: '13888888888'
      }, {
        name: '王三',
        account: '1703',
        phone: '13888888889'
      }, {
        name: '王四',
        account: '1702',
        phone: '13888888880'
      }],
      search: ''
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
