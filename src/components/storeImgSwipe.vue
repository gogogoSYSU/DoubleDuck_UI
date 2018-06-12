<!--图片滚动显示组件 -->
<template>
  <div class="mint-swipe">
    <mt-swipe :auto="1000">
      <mt-swipe-item v-for="img in imgs" :key="img.id">
        <img class="swipe-img" :src="img.url" alt="logo" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  props: ['imgs']
}
</script>

<style>
.mint-swipe{
  height: 200px;
  margin-top: 0px;
  margin: 1px;
  margin-left: 0px;
  margin-right: 0px;
  background-color: #f2f2f2;
}
.swipe-img{
  height: 100%;
  width: 100%;
}
</style>
