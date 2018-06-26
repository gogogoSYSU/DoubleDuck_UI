<!-- 商家介绍栏组件 -->
<template>
  <div class="introduction">
    <p class="introduction-title">{{storeIntroTitle}}</p>
    <hr class="cutting-line">
    <p class="introduction-content">{{storeIntroContent}}</p>
  </div>
</template>

<script>
export default {
  props: {
    storeIntroTitle: {
      default: '店铺介绍'
    },
    storeIntroContent: {
      default: '如果你无法简洁的表达你的想法，那只能说明你还不够了解它   ——阿尔伯特·爱因斯坦'
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
  font-size: 50%;
  text-align: left;
}
</style>
