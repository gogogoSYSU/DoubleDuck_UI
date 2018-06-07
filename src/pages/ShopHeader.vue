<template>
  <div class="shop_header">
    <img class="shop_img" src="../../assets/img/header.jpeg"/>

    <div class="shop_name">
      <div class="shop_title">
        <h5>双鸭美食（大学城店）</h5>
      </div>
      <mt-search id="shop_search" v-model="msg"></mt-search>
    </div>

    <div class="detail">
      <a href="#"><img class="shop_detail_pic" src="../../assets/img/right_arrow.png"/></a>
      <img class="vertical_line" src="../../assets/img/vertical_line.png"/>
    </div>

    <div class="like">
      <img class="like_pic" src="../../assets/img/like.png" />
      <p class="like_num">999+</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop_detail_header',
  components: {
  },
  data () {
    return {
      msg: 'hello'
    }
  },
  props: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style>
.shop_header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-image: url(../../assets/img/header_bg.jpg);
}
.shop_img {
  width: 80px;
  margin: 10px;
}
.shop_name {
  flex-grow: 1;
  height: 100%;
}
.shop_title {
  height: 30%;
  margin-bottom: 10px;
}
.shop_title h5 {
  width: 100%;
  margin-top: 20px;
  margin-right: 0px;
  text-align: left;
  color: #FFFFFF;
  font-family: "Microsoft Yahei";
  font-weight: normal;
  font-size: 19px;
}
div .mint-searchbar {
  background-color: transparent;
  padding: 0px;
  width: 200px;
}
div .mint-searchbar-inner {
  border-radius: 10px;
  height: 14px;
}
.mint-searchbar-inner .mintui-search {
  color: #2f373d;
}
.detail {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.shop_detail_pic {
  width: 10px;
  margin-top: 25px;
  margin-right: 10px;
}
.vertical_line {
  width: 5px;
  height: 80px;
  margin-top: 8px;
}
.like {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 60px;
}
.like_pic {
  width: 30px;
}
.like_num {
  font-size: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #FFFFFF;
}
</style>
