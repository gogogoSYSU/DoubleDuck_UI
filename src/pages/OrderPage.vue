<template>
<div class="order_page">
  <orderDishList :dishes="selectedDishes"></orderDishList>
  <p v-show="isShow">没有选择任何的菜品</p>
  <under :totalPrice="totalPrice"></under>
</div>
</template>

<script>
import orderDishList from '../components/orderPageCom/orderDishList.vue'
import under from '../components/orderPageCom/under.vue'

export default {
  name: 'orderPage',
  components: {
    'orderDishList': orderDishList,
    'under': under
  },
  data () {
    return {
      selectedDishes: this.$store.state.selectedDishes,
      totalPrice: this.$store.state.totalPrice,
      isShow: false
    }
  },
  created () {
    if (this.$store.state.selectedDishes.length === 0) {
      this.isShow = true
    }
  }
}
</script>

<style>
.order_page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #E6E6E6;
}

</style>
