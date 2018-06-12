import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import orderPage from '../pages/OrderPage.vue'
import storeInfoPage from '../pages/storeInfoPage.vue'
import payPage from '../pages/PayPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: mainPage
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
    },
    {
      path: '/PayPage',
      name: 'PayPage',
      component: payPage
    }
  ]
})
