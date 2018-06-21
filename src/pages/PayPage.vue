<template>
<div class="pay_page">
  <div class="rest_time_to_pay">
    <p class="time">支付剩余时间 14:56</p>
    <p class="money">¥ 19.80</p>
    <p class="store_name">双鸭山饭店 - 5999号桌</p>
  </div>

  <choosePayWayRadio></choosePayWayRadio>

  <mt-button class="sure_pay_btn" type="default">
    <span class="text_pay">确认支付</span>
    <span class="text_unit">¥</span>
    <span class="text_money">192.80</span>
  </mt-button>
</div>
</template>

<script>
import choosePayWayRadio from '../components/payPageCom/choosePayWayRadio.vue'

export default {
  name: 'payPage',
  components: {
    'choosePayWayRadio': choosePayWayRadio
  }
}
</script>

<style>
.pay_page {
  background-color: #F4F5F6;
}

.rest_time_to_pay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
  height: 200px;
  margin: 20px;
  padding: 12px;
}

.time {
  color: #E6E6E6;
  font-size: 36px;
  margin: 0px;
}

.money {
  color: #000000;
  font-size: 56px;
  margin: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
}

.store_name {
  color: #E6E6E6;
  font-size: 28px;
  margin: 0px;
}

.sure_pay_btn {
  display: flex;
  justify-content: center;
  background-color: #28ACB0;
  width: 100%;
  height: 104px;
  font-size: 30px;
  align: right;
  position: absolute;
  bottom: 0;
}

.text_pay {
  font-size: 32px;
  color: #FFFFFF;
}

.text_unit {
  font-size: 44px;
  color: #FFFFFF;
}

.text_money {
  font-size: 56px;
  color: #FFFFFF;
}
</style>
