import Vue from 'vue'
import Router from 'vue-router'
import lang from '@/components/lang'
import index from '@/components/index'
import about from '@/components/about'
import history from '@/components/history'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lang',
      name: 'lang',
      component: lang
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/history',
      name: 'history',
      component: history
    }
  ]
})
