// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

// 设置路由
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: () => import('./components/Customers')},
    {path: '/about', component: () => import('./components/About')}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
