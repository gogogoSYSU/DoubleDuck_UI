import Vue from 'vue'
import Router from 'vue-router'
import shopHeader from '../pages/ShopHeader.vue'
import orderPage from '../pages/OrderPage.vue'
import storeInfoPage from '../pages/storeInfoPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: shopHeader
    },
    {
      path: '/OrderPage',
      name: 'OrderPage',
      component: orderPage
    },
    {
      path: '/storeInfoPage',
      name: 'storeInfoPage',
      component: storeInfoPage
    }
  ]
})
