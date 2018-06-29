<template>
  <div class="dish_box">
    <img class="dish_pict" v-lazy="item.dish_pict" @click="showDetail"/>
    <div class="dish_ditail_box" @click="showDetail">
      <p class="dish_name">{{item.dish_name}}</p>
      <p class="dish_sale">{{'销量'+item.dish_sale}}</p>
      <p class="dish_price">{{'￥ '+item.dish_price}}</p>
    </div>
    <div class="buttons_box">
      <img v-show="isChoosed" src="../../assets/icon/minus.png" width="25" height="25" @click="minus_dish"/>
      <p class="dishes_num" v-show="isChoosed">{{gainDishNum}}</p>
      <img src="../../assets/icon/add.png" width="25" height="25" @click="add_dish"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { PaletteButton } from 'mint-ui'
Vue.component(PaletteButton.name, PaletteButton)
/* eslint-disable */
export default {
  name: 'dish',
  props: {
    item: {
      default: function () {
        return {
          dish_name: '清蒸双鸭',
          dish_pict: require('../../../assets/img/header.jpeg'),
          dish_sale: 666,
          dish_price: 18,
          dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
        }
      }
    }
  },
  data () {
    return {
      isChoosed: false
    }
  },
  computed: {
    gainDishNum: function () {
      for (var i = 0; i < this.$store.state.selectedDishes.length; i++) {
        if (this.$store.state.selectedDishes[i].dish_name === this.item.dish_name) {
          this.isChoosed = true
          return this.$store.state.selectedDishes[i].dish_copy
        }
      }
      this.isChoosed = false
      return 0
    }
  },
  methods: {
    minus_dish: function () {
      this.$store.state.thingsNum -= 1
      for (var i = 0; i < this.$store.state.selectedDishes.length; i++) {
        if (this.$store.state.selectedDishes[i].dish_name === this.item.dish_name) {
          this.$store.state.selectedDishes[i].dish_copy--
          this.$store.state.totalPrice -= this.item.dish_price
          if (this.$store.state.selectedDishes[i].dish_copy === 0) {
            this.$store.state.selectedDishes.splice(i, 1)
          }
        }
      }
    },
    add_dish: function () {
      this.$store.state.thingsNum += 1
      // 将选定的菜品添加到selectedDish中
      // 遍历数组，查看选择的菜品是不是已在selectDishes中
      for (var i = 0; i < this.$store.state.selectedDishes.length; i++) {
        if (this.$store.state.selectedDishes[i].dish_name === this.item.dish_name) {
          this.$store.state.selectedDishes[i].dish_copy++
          this.$store.state.totalPrice = this.$store.state.totalPrice + this.item.dish_price
          return
        }
      }
      this.$store.state.selectedDishes.push({
        dish_name: this.item.dish_name,
        dish_icon_url: this.item.dish_pict,
        dish_copy: 1,
        dish_price: this.item.dish_price})
      // 计算金额
      this.$store.state.totalPrice = this.$store.state.totalPrice + this.item.dish_price
    },
    showDetail: function () {
      this.$store.state.show = true
      this.$store.state.dishDetail.dish_name = this.item.dish_name
      this.$store.state.dishDetail.dish_pict = this.item.dish_pict
      this.$store.state.dishDetail.dish_sale = this.item.dish_sale
      this.$store.state.dishDetail.dish_price = this.item.dish_price
      this.$store.state.dishDetail.dish_discription = this.item.dish_discription
    }
  }
}
</script>

<style scoped>
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
  justify-content: space-between;
  position: absolute;
  right: 2%;
  bottom: 10%;
}

.dishes_num {
  font-size: 5vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
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
