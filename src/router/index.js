import Vue from 'vue'
import Router from 'vue-router'
import header from '@/views/layout/components/header/header'
import layout from '@/views/layout'
import editor from '@/views/editor'
import Sidebar from '@/views/layout/components/Sidebar'
// import test from '@/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: layout
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component: Sidebar
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/test',
      name: 'test',
      component: layout
    },
    {
      path: '/test2',
      name: 'test2',
      component: layout
    },
    {
      path: '/articleList/',
      name: 'articleList',
      component: layout
    },
    {
      path: '/articlePie',
      name: 'articlePie',
      component: layout
    }
  ]
  // mode: 'history'
})
