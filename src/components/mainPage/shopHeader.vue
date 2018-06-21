<template>
  <div class="shop_header">

    <img class="shop_img" :src="shopImg"/>

    <div class="shop_name_box">
      <div class="shop_title">
        <p class="shop_name">{{shopName}}</p>
        <a href="#/storeInfoPage"><img class="shop_detail_pic" :src="shopDetailPict"/></a>
      </div>
      <mt-search id="shop_search" v-model="hotDishes"></mt-search>
    </div>

    <img class="vertical_line" src="../../../assets/img/vertical_line.png"/>

    <div class="hot">
      <img class="hot_pic" src="../../../assets/img/hot.png" />
      <p class="hot_num">{{sales}}<span class="red">+</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop_detail_header',
  props: {
    shopImg: {
      default: require('../../../assets/img/header.jpeg')
    },
    shopDetailPict: {
      default: require('../../../assets/img/right_arrow.png')
    },
    shopName: {
      default: '双鸭美食(大学城店)'
    },
    hotDishes: {
      default: '双鸭三宝'
    },
    sales: {
      default: 999
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
  height: 15vh;
  width: 7vh;
  margin-left: 2vw;
}

.hot_pic {
  height: 7.5vh;
  width: 7vh;
  margin-top: 2.2vh;
}

.hot_num {
  color: white;
  margin-top: -0.2vh;
  font-size: 2.2vh;
  text-align: center;
}

.red {
  color: red;
}
</style>
