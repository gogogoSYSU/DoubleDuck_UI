<template>
  <div class="main_box">
    <mt-header class="header" title="" icon="field-error">
      <span slot="left">购物车</span>
      <mt-button class="text" slot="right" icon="field-error" @click="OnClear">清空</mt-button>
    </mt-header>
    <mt-cell style="text-align: left" v-for="dish in selectedDishes" :key="dish.id"
    :title="dish.dish_name" lable="test" >
      <div>
        <span>{{ dish.dish_copy }}</span>
      </div>
    </mt-cell>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, Cell } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Cell.name, Cell)

export default {
  computed: {
    selectedDishes: function () {
      return this.$store.state.selectedDishes
    }
  },
  methods: {
    OnClear: function () {
      this.selectedDishes.splice(0, this.selectedDishes.length)
      this.$store.state.selectedDishes.splice(0, this.$store.state.selectedDishes)
      this.$store.state.isShowShoppingCart = false
      this.$store.state.thingsNum = 0
      this.$store.state.totalPrice = 0
    }
  }
}
</script>

<style>
.main-box {
  background-color: rgb(253, 218, 88);
}
.header {
  background-color: rgb(253, 218, 88);
}
.text {
  text-align: right;
}
.header-icon {
  height: 20%;
  width:20%;
}
</style>
