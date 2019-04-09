// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.$ = window.jQuery = require('jQuery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

import { routes } from './router/index'

const router = new VueRouter({
   routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
