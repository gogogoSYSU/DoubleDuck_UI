<template>
  <div class="detailBox">
    <mt-button class="cancelButton" v-on:click="$store.state.show = false">X</mt-button>
    <div class="detail_pict" v-bind:style="{'background-image':'url('+$store.state.dishDetail.dish_pict+')'}"></div>
    <div class="nameDetailBox">
      <p class="detailName">{{$store.state.dishDetail.dish_name}}</p>
      <p class="detailSale">{{'月售'+$store.state.dishDetail.dish_sale}}</p>
      <p class="detailPrice">{{'￥'+$store.state.dishDetail.dish_price}}</p>
    </div>
    <div class="discription">{{$store.state.dishDetail.dish_discription}}</div>
  </div>
</template>

<script>
export default {
  name: 'dishDetail'
}
</script>

<style>
.detailBox {
  width: 75vw;
  height: 60vh;
  z-index: 999;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 5px #888888;
  overflow: hidden;
}

.cancelButton {
  height: 4vh;
  width: 4vh;
  font-size: 3vh;
  color: white;
  position: absolute;
  left: 1.5%;
  top: 1%;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.5);
}

.detail_pict {
  width: 100%;
  height: 35%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.nameDetailBox {
  width: 100%;
  height: 18%;
  background-color: white;
  border-bottom-style: solid;
  border-bottom-width: 0.03vh;
  border-bottom-color: #888888;
}

.detailName {
  font-size: 5vw;
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
  margin-left: 3vw;
}

.detailSale {
  font-size: 3vw;
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
  margin-left: 3vw;
}

.detailPrice {
  font-size: 4.5vw;
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
  margin-left: 2.8vw;
  color: red;
}

.discription {
  width: 100%;
  height: 45%;
  margin-top: 2%;
  background-color: white;
  font-size: 3.8vw;
  overflow: scroll;
  text-align: start;
  padding: 2%;
}
</style>
