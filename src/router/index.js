import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/demo/home/Home'
import Active from '@/demo/active/Active'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/active',
      name: 'Active',
      component: Active
    }
  ]
})
