<template>
  <div class="idenList-page">
    <head-top></head-top>
    <div class="table_container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="用户ID" prop="userid"></el-table-column>
        <el-table-column label="学校名称" prop="school"></el-table-column>
        <el-table-column label="专业名称" prop="major"></el-table-column>
        <el-table-column label="入学年份" prop="year"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="Success"
              @click="check(scope.$index, scope.row)">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
        <div class="Pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="20"
              layout="total, prev, pager, next"
              :total="count">
            </el-pagination>
        </div>
        <el-dialog title="身份认证信息" :visible.sync="dialogFormVisible" width="500px">
          <span class="dia">用户ID：{{iden.userid}}</span>
          <span class="dia">学校名称：{{iden.school}}</span>
          <span class="dia">专业名称：{{iden.major}}</span>
          <span class="dia">入学年份：{{iden.year}}</span>
          <div class="imgs">
            <img  alt="" :src='iden.imgStr' class="img">
            <img  alt="" :src='iden.imgStrs' class="img">
          </div>
          <div slot="footer" class="dialog-footer" @click="exam">
            <el-button>不通过</el-button>
            <el-button type="primary">通过</el-button>
          </div>
        </el-dialog>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
export default {
  inject: ['reload'],
  data () {
    return {
      iden: {},
      offset: 0,
      limit: 20,
      count: 0,
      tableData: [],
      currentPage: 1,
      selectTable: {},
      dialogFormVisible: false,
      categoryOptions: [],
      selectedCategory: [],
      address: {}
    }
  },
  mounted () {
    this.initData()
  },
  components: {
    headTop
  },
  methods: {
    initData () {
      this.axios.post('/api/data/idenSelect')
        .then(res => {
          this.tableData = []
          res.data.forEach(item => {
            const tableData = {}
            tableData.userid = item.userid
            tableData.school = item.school
            tableData.major = item.major
            tableData.year = item.year + '年'
            tableData.imgStr = item.imgStr
            tableData.imgStrs = item.imgStrs
            this.tableData.push(tableData)
            this.count = this.tableData.length
          })
        })
    },
    check (index, row) {
      this.iden = row
      this.dialogFormVisible = true
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.initData()
    },
    exam (e) {
      let target = e.target || e.srcElement
      let uid = this.iden.userid
      let school = this.iden.school
      let major = this.iden.major
      let year = this.iden.year
      console.log(year)
      if (target.innerHTML === '通过') {
        this.axios.post('/api/data/upUser', {uid}) // 更新用户权限
          .then((res) => {
            console.log(res)
          })
        this.axios.post('/api/data/inSeni', { // 插入学长学姐
          uid, school, major, year
        }).then((res) => {
          console.log(res)
        })
        let exam = 1
        this.axios.post('/api/data/upIden', {exam, uid}) // 改变身份认证状态
          .then((res) => {
            console.log(res)
          })
        this.dialogFormVisible = false
        this.reload()
      } else {
        let exam = 2
        this.axios.post('/api/data/upIden', {exam, uid}) // 改变身份认证状态
          .then((res) => {
            console.log(res)
          })
        this.dialogFormVisible = false
        this.reload()
      }
    }
  }
}
</script>

<style lang="scss">
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
.table_container{
    padding: 20px;
}
.Pagination{
    display: flex;
    justify-content: flex-start;
    margin-top: 8px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
}
.avatar {
    width: 120px;
    height: 120px;
    display: block;
}
.dia {
  width: 100%;
  display: block;
  margin: 8px 10px;
}
.img {
  width: 200px;
  margin: 10px;
  border: 1px solid #20a0ff;
}
</style>
