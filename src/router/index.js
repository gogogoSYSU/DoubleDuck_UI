import Vue from 'vue'
import Router from 'vue-router'
import shopHeader from '../pages/ShopHeader.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: shopHeader
    }
  ]
})
