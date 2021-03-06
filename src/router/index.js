import Vue from 'vue'
import Router from 'vue-router'
import Nickname from '@/pages/nickname'
import FakeTalk from '@/pages/fake-talk'
import Salary from '@/pages/salary'
import Bonus from '@/pages/salary/bonus'
import TestPage from '@/pages/test-page'
import bus from '@/bus'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    redirect: { name: 'nickname' }
  },
  {
    path: '/nickname',
    name: 'nickname',
    component: Nickname,
    isMenu: true,
    meta: {
      title: '花名生成器',
      iconClass: 'el-icon-location'
    }
  },
  {
    path: '/fake-talk',
    name: 'fake-talk',
    component: FakeTalk,
    isMenu: true,
    meta: {
      title: '微信聊天记录',
      iconClass: 'el-icon-menu'
    }
  },
  {
    path: '/salary',
    name: 'salary',
    component: Salary,
    isMenu: true,
    meta: {
      title: '五险一金计算器',
      iconClass: 'el-icon-tickets'
    }
  },
  {
    path: '/bonus',
    name: 'bonus',
    component: Bonus,
    isMenu: true,
    meta: {
      title: '年终奖计算器',
      iconClass: 'el-icon-tickets'
    }
  },
  {
    path: '/test-page/:pageName',
    name: 'test-page',
    component: TestPage,
    isMenu: false,
    meta: {
      title: '测试页面',
      withMenu: false
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const { title = 'vvliebe', withMenu = true } = to.meta || {}
  bus.title = title
  bus.withMenu = withMenu
  next()
})

export default router
