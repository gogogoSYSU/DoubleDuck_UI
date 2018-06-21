<template>
  <div class="guide">
    <mt-button class="category" v-for="item in dishes" v-bind:key="item.id">
        {{item.category}}
      </mt-button>
  </div>
</template>

<script>
export default {
  name: 'guide',
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
          }
        ]
      }
    }
  }
}
</script>

<style>
.guide {
  display: flex;
  flex-direction: column;
  width: 23vw;
}

.category {
  width: 100%;
  height: 6vh;
  font-size: 4vw;
  background-color: rgb(254, 245, 230);
  border-radius: 0;
  color: black;
}
</style>
