<!-- 商家名称和Logo显示组件 -->
<template>
<div class="store-info">
  <img class="store-logo" :src="logoSrc"/>
  <p class="store-name">{{storeName}}</p>
</div>
</template>

<script>
export default {
  props: {
    storeName: {
      default: '双鸭仔（大学城店）'
    },
    logoSrc: {
      default: 'https://github.com/gogogoSYSU/documents/raw/master/UI/customerDemo/images/1905/19055481/raw_1523944724.png'
    }
  }
}
</script>

<style>
.store-info {
  display:flex;
  align-items:center;
  justify-content:flex-start;
  background-color: white;
  margin-top: 5px;
  border-style: solid none solid none;
  border-width: 1;
  border-color: #f2f2f2;
}
.store-logo {
  height: 100%;
  width: 30%;
}
.store-name {
  height: 100%;
  width: 70%;
  font-size: 140%;
  font-weight: bold;
}
</style>
