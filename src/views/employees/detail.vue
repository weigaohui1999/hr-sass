<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="登录账户设置">

            <!-- 放置表单 -->
            <el-form label-width="120px" :model="userInfo" ref="userInfo" :rules="rules" style="margin-left: 120px; margin-top:30px">
              <el-form-item label="姓名:">
                <el-input v-model="userInfo.username" style="width:300px" />
              </el-form-item>
              <el-form-item label="密码:">
                <el-input v-model="userInfo.password2" style="width:300px" type="password" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="saveUser">更新</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="个人详情" >
            <!--    动态组件      is指向一个变量，变量里面保存的是导入组件使用的别名  -->
            <el-row type="flex" justify="end">
              <el-tooltip content="打印个人基本信息">
                <router-link :to="`/employees/print/${userId}?type=personal`">
                  <i class="el-icon-printer" />
                </router-link>
              </el-tooltip>
            </el-row>
            <component :is="UserInfo" />
          </el-tab-pane>
          <el-tab-pane label="岗位信息" >
            <!--    动态组件        -->
            <el-row type="flex" justify="end">
              <el-tooltip content="打印岗位信息">
                <router-link :to="`/employees/print/${userId}?type=job`">
                  <i class="el-icon-printer"  />
                </router-link>
              </el-tooltip>
            </el-row>
            <component :is="JobInfo" />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getUserDetailById } from '@/api/user'
import { saveUserDetailById } from '@/api/employees'
import UserInfo from '@/views/employees/components/user-info'
import JobInfo from '@/views/employees/components/job-info'
export default {
  name: 'Detail',
  components: {
    UserInfo,
    JobInfo
  },
  data() {
    return{
      UserInfo: 'UserInfo',
      JobInfo: 'JobInfo',
      userId: this.$route.params.id,
      userInfo:{
        username: '',
        password2: ''
      },
      rules: {
        username: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        password2: [{ required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 9, message: '密码长度6-9位', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getUserDetailById()
  },
  methods: {
    async getUserDetailById() {
      this.userInfo = await getUserDetailById(this.userId)
    },
    saveUser() {
      this.$refs.userInfo.validate().then(async () => {
        await saveUserDetailById({ ...this.userInfo, password: this.userInfo.password2 })
        this.$message.success('保存成功')
      })
    }
  }
}
</script>

<style scoped>

</style>
