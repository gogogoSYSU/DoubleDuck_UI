<template>
  <div class="dish_box">
    <img class="dish_pict" v-lazy="item.dish_pict" @click="$store.state.show = true"/>
    <div class="dish_ditail_box" @click="$store.state.show = true">
      <p class="dish_name">{{item.dish_name}}</p>
      <p class="dish_sale">{{'销量'+item.dish_sale}}</p>
      <p class="dish_price">{{'￥ '+item.dish_price}}</p>
    </div>
    <div class="buttons_box">
      <mt-button class="minus_button" v-show="isChoosed" v-on:click="minus_dish">-</mt-button>
      <p class="dishes_num" v-show="isChoosed">{{dishesNum}}</p>
      <mt-button class="add_button" v-on:click="add_dish">+</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dish',
  props: {
    item: {
      default: function () {
        /*
        return {
          dish_name: '清蒸双鸭',
          dish_pict: require('../../../assets/img/header.jpeg'),
          dish_sale: 666,
          dish_price: 18,
          dish_description: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
        }
        */
      }
    }
  },
  data () {
    return {
      isChoosed: false,
      dishesNum: 0
    }
  },
  methods: {
    minus_dish: function () {
      this.dishesNum = this.dishesNum - 1
      if (parseInt(this.dishesNum) === 0) {
        this.isChoosed = false
      }
    },
    add_dish: function () {
      this.dishesNum = this.dishesNum + 1
      if (parseInt(this.dishesNum) === 1) {
        this.isChoosed = true
      }
    },
    dishClick: function () {
      this.$emit('showDishDetail', this.item)
    }
  }
}
</script>

<style>
.dish_box {
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: row;
  border-block-end: solid;
  border-width: 0.1vw;
  padding: 1%;
  position: relative;
}

.dish_pict {
  height: 12vh;
  width: 12vh;
}

.dish_ditail_box {
  display: flex;
  flex-direction: column;
  height: 12vh;
  width: 40%;
  margin-left: 2%;
}

.dish_name {
  font-size: 5vw;
  text-align: start;
  margin-top: 0;
  margin-left: 5%;
  margin-bottom: 0;
}

.dish_sale {
  font-size: 3vw;
  text-align: start;
  margin-top: 2%;
  margin-left: 5%;
  margin-bottom: 0;
}

.dish_price {
  font-size: 5vw;
  text-align: start;
  margin-top: 5%;
  margin-left: 5%;
  margin-bottom: 0;
  color: red;
}

.buttons_box {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  position: absolute;
  right: 2%;
  bottom: 10%;
}

.dishes_num {
  font-size: 5vw;
  margin-left: 1.5vw;
  margin-bottom: 0;
  margin-top: 0;
}

.minus_button {
  height: 3.5vh;
  width: 3.5vh;
  background-color: rgb(253, 218, 88);
  border-radius: 50%;
}

.add_button {
  height: 3.5vh;
  width: 3.5vh;
  background-color: rgb(253, 218, 88);
  margin-left: 1.5vw;
  border-radius: 50%;
}
</style>
