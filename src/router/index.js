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
        name: 'user',
        meta: { title: '管理员信息', icon: 'documentation', roles: ['admin'] }
      }
    ]
  },
  { path: '/data', component: () => import('@/views/data/index'), meta: { title: '数据管理', icon: 'documentation' }},
  { path: '/audit', component: () => import('@/views/audit/index'), meta: { title: '讲解审核', icon: 'documentation' }},
  { path: '/backup', component: () => import('@/views/backup/index'), meta: { title: '数据备份和恢复', icon: 'documentation' }},
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
