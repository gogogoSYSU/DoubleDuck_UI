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
import dish from './dish.vue'
export default {
  name: 'category',
  components: {
    'dish': dish
  },
  props: {
    dishes: {
      default: function () {
        return {
          category: 'default',
          dishes_num: 3,
          dishes_list: [
            {
              /*
              dish_name: 'defalut',
              dish_pict: require('../../../assets/img/header.jpeg'),
              dish_sale: 666,
              dish_price: 18,
              dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
              */
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
