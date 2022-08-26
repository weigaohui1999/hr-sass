<template>
  <div v-loading="loading" class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <tree-tools :tree-node="company" :is-root="true"/>
        <el-tree :data="departs" :default-expand-all="true" :props="defaultProps">
          <tree-tools slot-scope="{ data }" :tree-node="data" @delDepts="getDepartments" @addDepts="addDepts" @editDepts="editDepts"/>
        </el-tree>
      </el-card>
    </div>
    <add-dept ref="addDept" :show-dialog.sync="showDialog" :tree-node="node" @addDepts="getDepartments"/>
  </div>

</template>

<script>
import TreeTools from '@/views/departments/components/tree-tools'
import { getDepartments } from '@/api/departments'
import addDept from '@/views/departments/components/add-dept'
import { tranListTreeData } from '@/utils'
export default {
  components: { TreeTools, addDept },
  data () {
    return {
      company: {},
      departs: [],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      },
      showDialog: false,
      node: {},
      loading: false
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments () {
      this.loading = true
      await getDepartments().then(data => {
        this.company = { name: data.companyName, manager: '负责人', id: '' }
        this.departs = data.depts
        tranListTreeData(data.depts, '')
      })
      this.loading = false
    },
    addDepts(node) {
      this.showDialog = true
      this.node = node
    },
    editDepts(node) {
      this.showDialog = true
      this.node = node

      this.$refs.addDept.getDepartDetail(node.id)
    }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px
}
</style>
