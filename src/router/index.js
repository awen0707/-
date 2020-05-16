import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/user',
    component: Layout,
    meta: { title: '用户管理', icon: 'edit' },
    redirect: '/user/user',
    children: [
      {
        path: '/user/user',
        component: () => import('@/views/user/user'),
        name: 'user',
        meta: { title: '用户信息', icon: 'documentation' }
      },
      {
        path: '/user/admin',
        component: () => import('@/views/user/admin'),
        name: 'user1',
        meta: { title: '管理员信息', icon: 'documentation', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/audit',
    component: Layout,
    meta: { title: '讲解审核', icon: 'edit' },
    redirect: '/audit/comlpete',
    children: [
      {
        path: '/audit/comlpete',
        component: () => import('@/views/audit/complete'),
        name: 'complete',
        meta: { title: '已审核的申请', icon: 'documentation' }
      },
      {
        path: '/audit/incomlpete',
        component: () => import('@/views/audit/incomplete'),
        name: 'incomlpete',
        meta: { title: '未审核的申请', icon: 'documentation' }
      }
    ]
  },
  {
    path: '/br',
    component: Layout,
    meta: { title: '数据备份和恢复', icon: 'edit' },
    redirect: '/br/backup',
    children: [
      {
        path: '/br/backup',
        component: () => import('@/views/br/backup'),
        name: 'backup',
        meta: { title: '备份', icon: 'documentation' }
      },
      {
        path: '/br/recovery',
        component: () => import('@/views/br/recovery'),
        name: 'recovery',
        meta: { title: '恢复', icon: 'documentation' }
      }
    ]
  },
  { path: '/data', component: () => import('@/views/data/index'), meta: { title: '数据管理', icon: 'documentation' }},
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
