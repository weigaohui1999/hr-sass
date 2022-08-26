import { getToken, removeToken, setTimeStamp, setToken } from '@/utils/auth'
import { getUserDetailById, getUserInfo, login } from '@/api/user'

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
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

