<template>
  <div class="under">
    <div class="total">
      <p class="total_num">合计</p>
      <p class="total_price">￥55.82</p>
      <mt-button class="commit_order_btn" type="default">提交订单</mt-button>
    </div>
  </div>
</template>

<style>
.total {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  background-color: #333333;
  width: 100%;
  height: 8%;
}

.total_num {
  color: #D9D9D9;
  font-size: 32px;
  margin-right: 12px;
}

.total_price {
  color: #FFFFFF; //font-weight: bold;
  font-size: 36px;
  margin-right: 5%;
}

.commit_order_btn {
  background-color: #FFCB50;
  margin-right: 0px;
  color: #000000;
  font-size: 36px;
  height: 100%;
  width: 32%;
}
</style>
