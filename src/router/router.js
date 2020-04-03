import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Manage from '@/pages/manage'
import Iden from '@/pages/identity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage,
      children: [{
        path: '',
        component: Home,
        meta: []
      }, {
        path: '/iden',
        component: Iden,
        meta: ['数据管理', '身份认证']
      }]
    }
  ]
})
