<template>
  <div class="dishes_list">
    <dishDetail class="dishDetail" v-show="showDetail" @showDishDetail="showDishDetail" @unshowDishDetail="unshowDishDetail"></dishDetail>
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
import guide from './guide.vue'
import category from './category.vue'
import dishDetail from './dishDetail.vue'

export default {
  name: 'dishes_list',
  components: {
    'guide': guide,
    'category': category,
    'dishDetail': dishDetail
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
                dish_price: 18,
                dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
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
                dish_price: 18,
                dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
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
                dish_price: 18,
                dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
              },
              {
                dish_name: '红烧双鸭',
                dish_pict: require('../../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18,
                dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
              },
              {
                dish_name: '双鸭肺片',
                dish_pict: require('../../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18,
                dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
              }
            ]
          }
        ]
      }
    }
  },
  data () {
    return {
      showDetail: true
    }
  },
  methods: {
    unshowDishDetail: function () {
      this.showDetail = false
    },
    showDishDetail: function (item) {
      this.dishDetail = item
      this.showDetail = true
    }
  }
}
</script>

<style>
.dishDetail {
  position: fixed;
  top: 20vh;
  left: 15vw;
}

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
