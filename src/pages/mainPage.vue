<template>
  <div class="mainPage" style="position:relative">
    <shopHeader style="z-index:1"></shopHeader>
    <dishesList style="z-index:1" :dishes="dishes"></dishesList>
    <div class="under-menu">
      <shoppingCart style="z-index:2;position:fixed;width:95%" v-show="this.$store.state.isShowShoppingCart"></shoppingCart>
      <under style="z-index:2;float:bottom;width:95%"></under>
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
</style>
