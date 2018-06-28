<template>
  <div class="shop_header">

    <img class="shop_img" :src="shopImg" @click="gotostoreInfoPage"/>

    <div class="shop_name_box">
      <div class="shop_title" @click="gotostoreInfoPage">
        <p class="shop_name">{{$store.state.shopDetail.shopName}}</p>
        <a href="#/storeInfoPage"><img class="shop_detail_pic" src="../../../assets/img/right_arrow.png"/></a>
      </div>
      <input type="search" id="shop_search" placeholder="搜索菜品" v-model="inputKeyword" v-on:input="searchDish"/>
    </div>

    <img class="vertical_line" src="../../../assets/img/vertical_line.png"/>

    <div class="hot">
      <img class="hot_pic" v-on:click="OnLike" src="../../../assets/img/hot.png" width="25" height="25" />
      <p class="hot_num">{{$store.state.shopDetail.hots}}<span class="red">+</span></p>
    </div>
  </div>
</template>
 /* eslint-disable */
<script>
import { Indicator } from 'mint-ui'

export default {
  name: 'shop_detail_header',
  data () {
    return {
      hotDishes: this.$store.state.shopDetail.hotDishes,
      shopImg: this.$store.state.shopDetail.shopImg
    }
  },
  methods: {
    OnLike: function () {
      console.log('test')
      Indicator.open('点赞+1')
      this.$store.state.hots++
      Indicator.close()
    },
    gotostoreInfoPage: function () {
      this.$router.push({path: 'storeInfoPage'})
    },
    searchDish: function () {
      var value = this.$store.state.inputKeyword
      this.$store.state.searchResultDishes[0].dishes_list.splice(0, this.$store.state.searchResultDishes[0].dishes_list.length)
      if (value !== '') {
        for (var i = 0; i < this.$store.state.dishes.length; i++) {
          for (var j = 0; j < this.$store.state.dishes[i].dishes_list.length; j++) {
            var thisDish = this.$store.state.dishes[i].dishes_list[j]
            if (thisDish.dish_name.indexOf(value) >= 0) {
              this.$store.state.searchResultDishes[0].dishes_list.push(thisDish)
            }
          }
        }
      }
      if (this.$store.state.searchResultDishes[0].dishes_list.length !== 0) {
        this.$store.state.hasSearchResult = true
      } else {
        this.$store.state.hasSearchResult = false
      }
    }
  },
  computed: {
    inputKeyword: {
      get () {
        return this.$store.state.inputKeyword
      },
      set (value) {
        this.$store.commit('updateKeyword', value)
      }
    }
  }
}
</script>

<style>
.shop_header {
  display: flex;
  flex-direction: row;
  height: 15vh;
  width: 100%;
  background-image: url('../../../assets/img/header_bg.jpg');
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 9999;
}

.shop_img {
  height: 10vh;
  width: 10vh;
  margin-left: 1.5vh;
  margin-top: 2.5vh;
  background-color: #ffffff;
}

.shop_name_box {
  height: 12vh;
  width: 58vw;
  margin-top: 1.5vh;
  margin-left: 1vh;
  padding: 0%;
}

.shop_title {
  height: 5.5vh;
  width: 55vw;
  text-align: left;
  flex-flow: row;
  display: flex;
  justify-content: space-between;
}

.shop_name {
  color: #ffffff;
  font-size: 5.5vw;
  margin-top: 0.8vh;
  margin-bottom: 0;
  width: 90%;
  height: 6vh;
  margin-left: 0;
  overflow: hidden;
}

.shop_detail_pic {
  height: 2.5vh;
  width: 2.5vh;
  margin-top: 2.3vh;
  margin-right: 0vh;
}

.mint-search {
  height: 4.5vh;
  width: 95%;
  margin: 0%;
  margin-top: 0.5vh;
}

div .mint-searchbar{
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding-left: 0;
}

div .mint-searchbar-inner{
  height: 100%;
  width: 100%;
  border-radius: 20px;
}

.vertical_line {
  height: 12vh;
  width: 1vh;
  margin-top: 1.5vh;
}

.hot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 4vw;
}

.hot_pic {
  height: 4vh;
  width: 4vh;
  margin-top: 2.2vh;
}

.hot_num {
  color: white;
  margin-top: -0.2vh;
  font-size: 2.2vh;
  text-align: left;
}

.red {
  color: red;
}

#shop_search {
  height: 4vh;
  width: 55vw;
  margin-top: 3%;
  border-radius: 3vh;
  font-size: 2vh;
  padding-left: 3%;
}
</style>
