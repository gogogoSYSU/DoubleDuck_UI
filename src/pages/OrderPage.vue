<template>
<div class="order_page">
  <div class="dish_list">
    <mt-index-list :show-indicator="false">
      <mt-cell class="mt_cell_zhishi" title="芝士年糕（3个）" label="x10" align="left">
        <span>￥ 13.88</span>
        <img class="img_zhishi" slot="icon" src="../../assets/img/header.jpeg" align="left" width="40" height="40">
      </mt-cell>
      <mt-cell class="mt_cell_peigen" title="培根" label="x2" align="left">
        <span>￥ 14</span>
        <img class="img_peigen" slot="icon" src="../../assets/img/header.jpeg" align="left" width="40" height="40">
      </mt-cell>
      <mt-cell class="mt_cell_gurou" title="骨肉相连（1串）" label="x5" align="left">
        <span>￥ 14.0</span>
        <img class="img_gurou" slot="icon" src="../../assets/img/header.jpeg" align="left" width="40" height="40">
      </mt-cell>
    </mt-index-list>
  </div>

  <div class="total" align="right">
    <span class="total_num">合计</span>
    <span class="total_price">￥55.82</span>
    <mt-button class="commit_order_btn" type="default">提交订单</mt-button>
  </div>
</div>
</template>

<style>
.order_page {
  background-color: #EEEEEE;
}

.dish_list {
  background-color: #FFFFFF;
  height: auto;
}

.mt_cell_zhishi {
  background-color: #F8F8F8;
  margin: 4px;
  padding: 8px;
}

.img_zhishi {
  margin-right: 10px;
}

.mt_cell_peigen {
  background-color: #F8F8F8;
  margin: 4px;
  padding: 8px;
}

.img_peigen {
  margin-right: 10px;
}

.mt_cell_gurou {
  background-color: #F8F8F8;
  margin: 4px;
  padding: 8px;
}

.img_gurou {
  margin-right: 10px;
}

.total {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #333333;
  width: 100%;
}

.total_num {
  color: #D9D9D9;
  font-size: 14px;
}

.total_price {
  margin-right: 10px;
  color: #FFFFFF; //font-weight: bold;
}

.commit_order_btn {
  background-color: #FFCB50;
  right: 0;
  color: #000000;
  font-size: 14px;
  width: 100px;
}
</style>
