import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Manage from '@/pages/manage'
import IdenList from '@/pages/idenList'

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
        path: '/userList',
        component: IdenList,
        meta: ['数据管理', '用户列表']
      }, {
        path: '/idenList',
        component: IdenList,
        meta: ['数据管理', '认证列表']
      }]
    }
  ]
})
