<template>
  <div class="mainPage" style="position:relative">
    <shopHeader style="z-index:2"></shopHeader>
    <dishesList style="z-index:1;"></dishesList>
    <div class="under-menu">
      <shoppingCart class="shoppingcart" v-show="$store.state.isShowShoppingCart"></shoppingCart>
      <under style="z-index:4;width:100%"></under>
    </div>

  </div>
</template>

<script>

import shopHeader from '../components/mainPage/shopHeader.vue'
import under from '../components/mainPage/under.vue'
import dishesList from '../components/mainPage/dishesList.vue'
import shoppingCart from '../components/mainPage/shoppingCart.vue'

export default {
  name: 'mainPage',
  components: {
    'shopHeader': shopHeader,
    'dishesList': dishesList,
    'under': under,
    'shoppingCart': shoppingCart
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.mainPage {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.under-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.shoppingcart {
  z-index: 3;
  position: fixed;
  width: 100%;
  position: fixed;
  bottom: 8vh;
}
</style>
