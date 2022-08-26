import Layout from '@/layout'

export default {
  path: '/approvals',
  name: 'approvals',
  component: Layout,
  children: [
    {
      path: '',  // 表示默认二级路由的默认路由
      component: () => import('@/views/approvals'),
      // 路由的元信息 其实就是一个存储数据的地方 可以存放任何内容
      meta: {
        title: '审批',
        icon: 'tree-table'
      }
    }
  ]
}
