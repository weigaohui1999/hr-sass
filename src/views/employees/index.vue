<template>
  <div class="employees-container">
    <div class="app-container">
      <page-tools :show-before="true">
        <span slot="before">
          共{{ page.total }}多少条记录
        </span>
        <template v-slot:after>
          <el-button size="small" type="warning" @click="$router.push('/import?type=user')">导入</el-button>
          <el-button size="small" type="danger" @click="exportData">导出</el-button>
          <el-button size="small" :disabled="!checkPermission('aa')" type="primary" @click="showDialog = true">新增员工</el-button>
        </template>
      </page-tools>

      <el-card>
        <el-table border :data="list" v-loading="loading">
          <el-table-column label="序号" sortable="" type="index" />
          <el-table-column label="姓名" sortable="" prop="username"/>
          <el-table-column label="头像" sortable="" prop="username">
            <template slot-scope="{ row }">
              <img
                  slot="reference"
                  v-imageerror="require('@/assets/common/bigUserHeader.png')"
                  :src="row.staffPhoto"
                  style="border-radius: 50%; width: 100px; height: 100px; padding: 10px"
                  alt=""
                  @click="showQrCode(row.staffPhoto)">
            </template>
          </el-table-column>
          <el-table-column label="工号" sortable="" prop="workNumber"/>
          <el-table-column label="聘用形式" sortable="" prop="formOfEmployment" :formatter="formatEmployment"/>
          <el-table-column label="部门" sortable="" prop="departmentName"/>
          <el-table-column label="入职时间" sortable="" prop="timeOfEntry">
            <template slot-scope="{ row }">
              {{ row.timeOfEntry | formatDate }}
            </template>
          </el-table-column>
          <el-table-column label="账户状态" sortable="" prop="enableState">
            <template v-slot="{ row }">
              <el-switch :value="row.enableState === 1" />
            </template>
          </el-table-column>
          <el-table-column label="操作" sortable="" fixed="right" width="280">
            <template slot-scope="{ row }">
              <el-button type="text" size="small" @click="$router.push(`/employees/detail/${row.id}`)">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small" @click="editRole(row.id)">角色</el-button>
              <el-button type="text" size="small" @click="delEmployee(row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页组件 -->
        <el-row type="flex" justify="center" align="middle" style="height: 60px">
          <el-pagination layout="prev, pager, next" :current-page="page.page" :page-size="page.size" :total="page.total" @current-change="changePage"/>
        </el-row>
      </el-card>
    </div>
    <add-employee :show-dialog.sync="showDialog"/>
    <el-dialog title="二维码" :visible.sync="showCodeDialog" @opened="showQrCode" @close="imgUrl=''">
      <el-row type="flex" justify="center">
        <canvas ref="myCanvas" />
      </el-row>
    </el-dialog>
    <assign-role ref="assianRole" :show-role-dialog.sync="showRoleDialog" :user-id="userId"/>
  </div>
</template>

<script>
import { delEmployee, getEmployeeList } from '@/api/employees'
import EmployeeEnum from '@/api/constant/employees'
import AddEmployee from '@/views/employees/components/add-employee'
import { formatDate } from '@/filters'
import QrCode from 'qrcode'
import AssignRole from '@/views/employees/components/assign-role'
export default {
  components: { AssignRole, AddEmployee },
  data() {
    return{
      list: [],
      page: {
        page: 1,
        size: 10,
        total: 0
      },
      loading: false,
      showDialog: false,
      showCodeDialog: false,
      showRoleDialog: false,
      userId: ''
    }
  },
  created() {
    this.getEmployeeList()
  },
  methods: {
    formatEmployment(row, column, cellValue, index) {
      const obj = EmployeeEnum.hireType.find(item => item.id === cellValue)
      return obj ? obj.value : '未知'
    },
    async getEmployeeList() {
      this.loading = true
      const { total,rows } = await getEmployeeList(this.page)
      this.page.total = total
      this.list = rows
      this.loading = false
    },
    changePage(newPage) {
      this.page.page = newPage
      this.getEmployeeList()
    },
    async delEmployee(id) {
      await delEmployee(id).then(()=>{
        this.getEmployeeList()
        this.$message.success('删除员工成功')
      }).catch((err)=>{
        console.log(err)
      })
    },
    exportData() {
      const headers = {
        '姓名': 'username',
        '手机号': 'mobile',
        '入职日期': 'timeOfEntry',
        '聘用形式': 'formOfEmployment',
        '转正日期': 'correctionTime',
        '工号': 'workNumber',
        '部门': 'departmentName'
      }
      import('@/vendor/Export2Excel').then(async excel =>{
        const multiHeader = [['姓名', '主要信息', '', '', '', '', '部门']]
        const merges = ['A1:A2', 'B1:F1', 'G1:G2']
        const { rows } = await getEmployeeList({ page: 1, size: this.page.total })
        const data = this.formatJson(headers, rows)
        excel.export_json_to_excel({
          header: Object.keys(headers), // 表头
          data: data, // 表格数据
          multiHeader, // 复杂表头
          merges, // 合并表头
          filename: '员工资料表' // 文件名
        })
      })
    },
    // 将[{}] ,转为[[]]
    formatJson(headers, rows) {
      return rows.map(item => {
        return Object.keys(headers).map(
          key => {
            if(headers[key] ==='timeOfEntry' || headers[key] ==='correctionTime') {
              return formatDate(item[headers[key]])
            } else if(headers[key] ==='formOfEmployment') {
              const obj = EmployeeEnum.hireType.forEach(items => items.id = item[headers[key]])
              return obj ? obj.value : '未知'
            }
            return item[headers[key]]
          }
        )
      })
    },
    showQrCode(url) {
      if(url) {
        this.showCodeDialog = true
        this.$nextTick(() => {
          QrCode.toCanvas(this.$refs.myCanvas, url)
        })
      }
    },
    async editRole(id) {
      this.userId = id
      this.showRoleDialog = true
       await this.$refs.assianRole.getUserDetailById(id)
    }
  }
}
</script>

<style>

</style>
