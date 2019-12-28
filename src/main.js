// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/router'
import IconSvg from './components/icons/IconSvg'
import ElementUI from 'element-ui'
import './theme/element/index.css'

Vue.use(ElementUI)
Vue.component('icon-svg', IconSvg)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
