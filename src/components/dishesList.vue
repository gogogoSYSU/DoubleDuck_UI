<template>
  <div class="dishes_list">
    <div class="left_list" v-infinite-scroll="loadMore">
      <mt-button class="category" v-for="item in dishes" v-bind:key="item.id">
        {{item.category}}
      </mt-button>
    </div>
    <div class="right_list" v-infinite-scroll="loadMore">
      <div class="dish_list" v-for="items in dishes" v-bind:key="items.id">
        <div class="category_box">
          <p class="category_word">{{mergeCategroy(items.category, items.dishes_num)}}</p>
        </div>
        <div class="dish_item_box" v-for="item in items.dishes_list" v-bind:key="item.id">
          <img class="dish_pict" :src="item.dish_pict">
          <div class="dish_ditail_box">
            <p class="dish_name">{{item.dish_name}}</p>
            <p class="dish_sale">{{'销量'+item.dish_sale}}</p>
            <p class="dish_price">{{'￥ '+item.dish_price}}</p>
          </div>
          <div class="buttons_box">
            <mt-button class="minus_button">-</mt-button>
            <p class="dishes_num">{{dishesNum}}</p>
            <mt-button class="add_button">+</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dishes_list',
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
                dish_pict: require('../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18
              },
              {
                dish_name: '红烧双鸭',
                dish_pict: require('../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18
              },
              {
                dish_name: '双鸭肺片',
                dish_pict: require('../../assets/img/header.jpeg'),
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
                dish_pict: require('../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18
              },
              {
                dish_name: '红烧双鸭',
                dish_pict: require('../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18
              },
              {
                dish_name: '双鸭肺片',
                dish_pict: require('../../assets/img/header.jpeg'),
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
                dish_pict: require('../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18
              },
              {
                dish_name: '红烧双鸭',
                dish_pict: require('../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18
              },
              {
                dish_name: '双鸭肺片',
                dish_pict: require('../../assets/img/header.jpeg'),
                dish_sale: 666,
                dish_price: 18
              }
            ]
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
          },
          {
            category: '清真类',
            dishes_num: 3,
            dishes_list: []
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
  },
  methods: {
    mergeCategroy: function (category, num) {
      return category + '(' + num + ')'
    }
  }
}
</script>

<style>

.dishes_list {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 15.2vh;
  margin-bottom: 8.2vh;
}

.left_list {
  display: flex;
  flex-direction: column;
  width: 23%;
  background-color: rgb(254, 245, 230);
  overflow: hidden;
}

.category {
  width: 100%;
  height: 6vh;
  font-size: 4vw;
  background-color: rgb(254, 245, 230);
  border-radius: 0;
  color: black;
}

.right_list {
  display: flex;
  flex-direction: column;
  width: 75%;
  overflow: hidden;
}

.dish_list {
  width: 100%;
  margin: 0;
}

.category_box {
  background-color: rgb(253, 218, 88);
  margin-top: 1%;
  height: 3.5vh;
}

.category_word {
  display: flex;
  font-size: 3.2vw;
  margin-left: 1vw;
  margin-top: 0px;
}

.dish_item_box {
  display: flex;
  flex-direction: row;
  border-block-end: solid;
  border-width: 0.1vw;
  padding: 1%;
}

.dish_pict {
  height: 12vh;
  width: 12vh;
}

.dish_ditail_box{
  height: 12vh;
  width: 40%;
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
  margin-top: 0;
  margin-left: 5%;
  margin-bottom: 0;
}

.dish_price {
  font-size: 5vw;
  text-align: end;
  margin-top: 5%;
  margin-right: 5%;
  margin-bottom: 0;
}

.buttons_box {
  display: flex;
  flex-direction: row;
  margin-top: 5.5vh;
  margin-left: 3vw;
  height: 4vh;;
}

.minus_button {
  height: 3.5vh;
  width: 3.5vh;
  background-color: rgb(253, 218, 88);
  margin-top: 2.5vh;
}

.subtract_png {
  height: 2.8vh;
  width: 2.8vh;
  display: flex;

}

div .mint_button {
  border-radius: 50%;
}

.dishes_num {
  font-size: 5vw;
  margin-left: 2.5vw;
}

.add_button {
  height: 3.5vh;
  width: 3.5vh;
  background-color: rgb(253, 218, 88);
  margin-left: 2.5vw;
  margin-top: 2.5vh;
}

.minus .add {
  text-align: center;
  margin: auto;
}
</style>
