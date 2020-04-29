import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Business from '@/components/Business'
import About from '@/components/About'
import Contact from '@/components/Contact'
import ServiceView from '@/components/ServiceView'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)


export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/aboutUS',
      name: 'aboutUS',
      component: About
    },
    {
      path: '/contactUS',
      name: 'contactUS',
      component: Contact
    },
    {
      path: '/serviceView',
      name: 'serviceView',
      component: ServiceView
    },
    {
      path: '/**',
      name: 'All',
      component: Home
    },
  ]
})
