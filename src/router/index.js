import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Page from '@/components/Page'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
// import HistoryForm from '@/components/HistoryForm'

import * as lib from '../lib'
import api from '../api'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Page',
      component: Page
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    }

    // {
    //   path: '/HistoryForm',
    //   name: 'HistoryForm',
    //   component: HistoryForm
    // }
  ]
})

router.beforeEach((to, from, next) => {
  lib.debug && console.debug(`OPEN: ${from.name}(${from.path}) -> ${to.name}(${to.path}) %o`, to)
  console.time('route')

  if (to.query && to.query.token) {
    api.setToken(to.query.token)
  }

  next()
})

export default router
