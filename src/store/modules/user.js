import { getToken, removeToken, setTimeStamp, setToken } from '@/utils/auth'
import { getUserDetailById, getUserInfo, login } from '@/api/user'
import { resetRouter } from '@/router'

const state = {
  // 设置token为共享状态
  token: getToken(),
  userInfo: {}
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(state.token)
  },
  REMOVE_TOKEN: (state) => {
    state.token = null
    removeToken()
  },
  SET_USERINFO: (state, result) => {
    state.userInfo = result
  },
  REMOVE_USERINFO: (state) => {
    state.userInfo = {}
  }
}
const actions = {
  async login (context, data) {
    const result = await login(data)
    setTimeStamp()
    context.commit('SET_TOKEN' , result)
  },
  async getUserInfo (context) {
    const result = await getUserInfo()
    const baseInfo = await getUserDetailById(result.userId)
    context.commit('SET_USERINFO', { ...result, ...baseInfo })
    return result
  },
  logout(context) {
    context.commit('REMOVE_TOKEN')
    context.commit('REMOVE_USERINFO')
    // 重置路由
    resetRouter()
    // 还有一步  vuex中的数据是不是还在
    // 要清空permission模块下的state数据
    // vuex中 user子模块  permission子模块
    // 子模块调用子模块的action  默认情况下 子模块的context是子模块的
    // 父模块 调用 子模块的action
    context.commit('permission/SET_ROUTES', [], { root: true })
    // 子模块调用子模块的action 可以 将 commit的第三个参数 设置成  { root: true } 就表示当前的context不是子模块了 而是父模块
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

