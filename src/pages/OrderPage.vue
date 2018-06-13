<template>
<div class="order_page">
  <orderDishList></orderDishList>
  <under></under>
</div>
</template>

<script>
import orderDishList from '../components/orderPageCom/orderDishList.vue'
import under from '../components/orderPageCom/under.vue'

export default {
  name: 'testPage',
  components: {
    'orderDishList': orderDishList,
    'under': under
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
