import router from '@/router'
import store from '@/store'
// 引入进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 白名单
const whiteList = ['/login', '/404']
// 前置守卫
router.beforeEach(async (to,from,next)=> {
  // 开启进度条
  nprogress.start()
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if(!store.getters.userId) {
        const { roles } = await store.dispatch('user/getUserInfo')
        console.log(roles)
        // 筛选用户可用路由
        const routes = await store.dispatch('permission/filterRoutes', roles.menus)
        console.log(routes)
        // routes 就是用户所有拥有的路由权限
        router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }]) // 添加动态路由到路由表
        next(to.path) //
      } else {
        next()
      }
    }
  } else {
    // 如果to的包含在 白名单里面
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  // 解决手动切换地址时，进度条不会关闭的问题
  nprogress.done()
})
// 后置守卫
router.afterEach(() => {
  // 关闭进度条
  nprogress.done()
})
