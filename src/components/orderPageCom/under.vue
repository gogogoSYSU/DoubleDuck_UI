<template>
  <div class="under">
    <div class="word_box">
      <p class="total_num">合计</p>
      <p class="total_price">{{'￥' + totalPrice}}</p>
    </div>
    <a class="commit_a" href="#/PayPage"><mt-button class="commit_order_btn" type="default">提交订单</mt-button></a>
  </div>
</template>

<script>
export default {
  name: 'commit_under',
  props: {
    totalPrice: {
      default: function () {
        return 55.82
      }
    }
  }
}
</script>

<style>

.under {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background-color: #333333;
  width: 100%;
  height: 8%;
}

.word_box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 62%;
  margin-left: 2%;
  margin-top:0%;
  text-align: center;
}

.total_num {
  color: #D9D9D9;
  font-size: 5vw;
  width: 20%;
  line-height: 100%;
}

.total_price {
  color: #FFFFFF;
  font-size: 5vw;
  text-align: center;
  margin-left: 5%;
  line-height: 100%;
}

.commit_a {
  width: 30%;
  height: 100%;
}

.commit_order_btn {
  background-color: #FFCB50;
  color: #000000;
  font-size: 5vw;
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>
