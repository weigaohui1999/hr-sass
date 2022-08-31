import store from '@/store'

export default {
  methods: {
    // 检查权限 ，key 是要检查的点
    checkPermission(key) {
      // 检查用户的point里面有没有key 有可以点击，没有则不允许点击
      const { userInfo } = store.state.user
      if(userInfo.roles && userInfo.roles.points) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false
    }
  }
}
