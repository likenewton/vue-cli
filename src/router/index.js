import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Introduction from '@/components/introduction'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction
  }]
})
