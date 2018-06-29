<!-- 商家介绍栏组件 -->
<template>
  <div class="introduction">
    <p class="introduction-title">{{storeIntroTitle}}</p>
    <hr class="cutting-line">
    <p class="introduction-content">{{$store.state.shopDetail.shopIntroContent}}</p>
  </div>
</template>

<script>
export default {
  props: {
    storeIntroTitle: {
      default: '店铺介绍'
    },
    storeIntroContent: {
      default: '双鸭美食位于双鸭山大学数据科学与计算机学院楼旁边，特色菜有清蒸双鸭、红烧双鸭、双鸭肺片、双鸭烧烤等。'
    }
  }
}
</script>

<style>
.introductoin {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.introduction-title {
  font-size: 140%;
  font-weight: bold;
  text-align: left;
}
.cutting-line {
  size: 1;
  color: #f2f2f2;

}
.introduction-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 80%;
  text-align: left;
}
</style>
