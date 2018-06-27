<template>
    <div class="footer">
        <div class="basket">
            <img class="basket_img" src= "../../../assets/img/cart.png" @click="OnShoppingCart" width="30" height="30">
        </div>
        <div class="red_point" v-show="this.$store.state.selectedDishes.length === 0 ? false : true">{{$store.state.thingsNum}}</div>
        <div class="black_box">
            <p class="total_money_0" v-show="!Boolean($store.state.selectedDishes.length === 0 ? false : true)">吃点什么好呢……</p>
            <p class="total_money" v-show="Boolean($store.state.selectedDishes.length === 0 ? false : true)">{{'￥' + $store.state.totalPrice}}</p>
        </div>
        <a href="#/orderPage" class="yellow_a"><mt-button class="yellow_box" :disabled="this.$store.state.selectedDishes.length === 0 ? true : false">选好了</mt-button></a>
    </div>
</template>

<script>
export default {
  name: 'under',
  methods: {
    OnShoppingCart () {
      this.$store.state.isShowShoppingCart = ~this.$store.state.isShowShoppingCart
    }
  }
}
</script>

<style>
.footer {
    display: flex;
    height: 10.5vh;
    width: 100%;
    position: fixed;
    bottom: 0;
}

.basket {
    height: 8vh;
    width: 8vh;
    background-color:rgb(253, 218, 88);
    border-radius: 50%;
    position: absolute;
    bottom: 1.2vh;
    left: 3vw;
}

.basket_img {
    height: 5.5vh;
    width: 5.5vh;
    margin-top: 1.4vh;
    margin-left: -0.5vw;
}

.red_point {
    display: flex;
    height: 2.8vh;
    width: 2.8vh;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 7.5vh;
    top: 0.8vh;
    color: white;
    align-content: center;
    justify-content: center;
    font-size: 4vw;
}

.black_box {
    display: flex;
    height: 8vh;
    background-color: #333333;
    width: 70%;
    align-self: flex-end;
    justify-content: flex-end;
}

.total_money_0 {
    color: rgb(230, 230, 230);
    font-size: 2.5vh;
    display: flex;
    align-self: center;
    margin-right: 2vw;
}

.total_money {
    color: rgb(230, 230, 230);
    font-size: 3.2vh;
    display: flex;
    align-self: center;
    margin-right: 2vw;
}

.yellow_a {
    width: 30%;
    height: 8vh;
    align-self: flex-end;
}

.yellow_box {
    width: 100%;
    height: 100%;
    font-size: 2.5vh;
    color: black;
    background-color: rgb(253, 218, 88);
    border-radius: 0;
}
</style>
