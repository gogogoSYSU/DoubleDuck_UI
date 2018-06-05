<template>
  <div class="shop_header">
    <img class="shop_img" src="../../assets/img/header.jpeg"/>
    <div class="shop_name">
      <div class="shop_title">
        <h5>双鸭美食（大学城店）</h5>
      </div>
      <mt-search id="shop_search" v-model="msg"></mt-search>
    </div>
    <a href="#"><img class="like" src="../../assets/img/like.png" width="10%"/></a>
    <p class="like_num">999+</p>
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
  height: 100px;
  background-color: #D0F5A9;
}
.shop_img {
  width: 80px;
  margin: 10px;
  float: left;
}
.shop_name {
  float: left;
  width: 50%;
  height: 100%;
}
.shop_title {
  height: 30%;
}
.shop_title h5 {
  width: 100%;
  margin-right: 0px;
  text-align: left;
}
div .mint-searchbar {
  background-color: transparent;
  padding: 0px;
}
div .mint-searchbar-inner {
  border-radius: 10px;
  height: 14px;
}
.like {
  position: relative;
  top: 20px;
}
.like_num {
  font-size: 5px;
  position: relative;
  top: 5px;
}
</style>
