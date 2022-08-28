import Layout from '@/layout'

export default {
  path: '/employees',
  name: 'employees',
  component: Layout,
  children: [
    {
      path: '',  // 表示默认二级路由的默认路由
      component: () => import('@/views/employees'),
      // 路由的元信息 其实就是一个存储数据的地方 可以存放任何内容
      meta: {
        title: '员工',
        icon: 'people'
      }
    },
    {
      path: 'detail/:id',
      component: () => import('@/views/employees/detail'),
      hidden: true,
      meta: {
        title: '员工详情'
      }
    },
    {
      path: 'print/:id',
      component: () => import('@/views/employees/print'),
      hidden: true,
      meta: {
        title: '员工打印'
      }
    }
  ]
}
