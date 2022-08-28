import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
// 全局自定义指令
import * as directives from '@/directives'
import App from './App'
import store from './store'
import router from './router'
import Print from 'vue-print-nb'
// 过滤器
import * as filters from '@/filters'
// 自定义组件
import Components from '@/components'

import '@/icons' // icon
import '@/permission' // permission control

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 全局注册自定义组件
Vue.use(Components)
Vue.use(Print)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
