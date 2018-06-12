<template>
  <div class="pay_page">
    <div class="rest_time_to_pay">
       <p class="time">支付剩余时间 14:56</p>
       <p class="money">¥ 19.80</p>
       <p class="store_name">双鸭山饭店 - 5999号桌</p>
    </div>

    <mt-button class="sure_pay_btn" type="default">
     <span class="text_pay">确认支付</span>
     <span class="text_unit">¥</span>
     <span class="text_money">192.80</span>
    </mt-button>
  </div>
</template>

<style>
.pay_page {
 background-color: #F4F5F6;
}
.rest_time_to_pay {
 background-color: #FFFFFF;
}
.time {
 color: #E6E6E6;
 font-size: 14px;
 margin: 0px;
}
.money {
 color: #000000;
 font-size: 24px;
 margin: 0px;
 margin-top: 4px;
 margin-bottom: 4px;
}
.store_name {
 color: #E6E6E6;
 font-size: 10px;
 margin: 0px;
}
.sure_pay_btn {
 background-color: #28ACB0;
 width: 100%;
 height: 52px;
 font-size: 30px;
 align: right;
 margin-bottom: 0px;
}
.text_pay {
 font-size: 16px;
 color: #FFFFFF;
}
.text_unit {
 font-size: 22px;
 color: #FFFFFF;
}
.text_money {
 font-size: 28px;
 color: #FFFFFF;
}
</style>
