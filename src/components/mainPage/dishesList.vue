<template>
  <div class="dishes_list">
    <div class="left_list">
      <guide :dishes="dishes"></guide>
    </div>
    <div class="right_list">
      <div v-for="category in dishes" v-bind:key="category.id">
        <category :dishes="category"></category>
      </div>
    </div>
  </div>
</template>

<script>
import guide from "./guide.vue";
import category from "./category.vue"

export default {
  name: 'dishes_list',
  components: {
    'guide': guide,
    'category': category
  },
  props: {
    dishes: {
      default: function () {
        return [
          {
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
          },
          {
            category: '清真类',
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
          },
          {
            category: '红烧类',
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
        ]
      }
    },
    isEmpty: {
      default: false
    },
    dishesNum: {
      default: 1
    }
  }
}
</script>

<style>

.dishes_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 14.8vh;
}

.left_list {
  height: 77vh;
  overflow: scroll;
  background-color: rgb(254, 245, 230);
  margin-left: 0.1vw;
}

.right_list {
  display: flex;
  flex-direction: column;
  width: 75%;
  overflow: scroll;
  height: 77vh;
}

</style>
