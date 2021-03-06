import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Introduction from '@/components/introduction'
import Strategy from '@/components/strategy'
import About from '@/components/About'
import Download from '@/components/Download'
import Center from '@/components/Center'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  }, {
    path: '/Strategy',
    name: 'Strategy',
    component: Strategy
  }, {
    path: '/About',
    name: 'About',
    component: About
  }, {
    path: '/Download',
    name: 'Download',
    component: Download
  }, {
    path: '/Center',
    name: 'Center',
    component: Center
  }]
})

// 每当切换路由的时候将页面滚动至最顶端
router.beforeEach((to, from, next) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0
  next()
})

export default router
