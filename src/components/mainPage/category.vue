<template>
  <div class="dishes_box">
    <div class="category_box">
      <p class="category_word">{{mergeCategroy(dishes.category, dishes.dishes_num)}}</p>
    </div>
    <div v-for="dish in dishes.dishes_list" v-bind:key="dish.id">
      <dish :item="dish"></dish>
    </div>  
  </div>
</template>

<script>
import dish from "./dish.vue"

export default {
  name: 'category',
  components: {
    'dish': dish
  },
  props: {
    dishes: {
      default: function () {
        return {
          category: '热销',
          dishes_num: 3,
          dishes_list: [
            {
              dish_name: '清蒸双鸭',
              dish_pict: require('../../../assets/img/header.jpeg'),
              dish_sale: 666,
              dish_price: 18
            },
            {
              dish_name: '红烧双鸭',
              dish_pict: require('../../../assets/img/header.jpeg'),
              dish_sale: 666,
              dish_price: 18
            },
            {
              dish_name: '双鸭肺片',
              dish_pict: require('../../../assets/img/header.jpeg'),
              dish_sale: 666,
              dish_price: 18
              }
          ]
        }
      }
    }
  },
  methods: {
    mergeCategroy: function (category, num) {
      return category + '(' + num + ')'
    }
  }
}
</script>

<style>
.dishes_box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 72vw;
}

.category_box {
  background-color: rgb(253, 218, 88);
  margin-top: 1%;
  height: 3.5vh;
  width: 100%;
}

.category_word {
  display: flex;
  font-size: 3.2vw;
  margin-left: 1vw;
  margin-top: 0px;
}

</style>
