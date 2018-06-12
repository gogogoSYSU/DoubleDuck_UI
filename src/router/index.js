import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../pages/mainPage.vue'
import dishesList from '../components/dishesList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: mainPage
    }
  ]
})
