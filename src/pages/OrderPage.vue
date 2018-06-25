<template>
<div class="order_page">
  <div>
    <mt-header class="mt-header" title="订单详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  </div>
  <orderDishList :dishes="selectedDishes"></orderDishList>
  <p class="info" v-show="isShow">没有选择任何的菜品</p>
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
.mt-header {
  background-color: rgb(255, 179, 66);
}

.order_page {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #E6E6E6;
}

.info {
  margin-top:2%;
}
</style>
