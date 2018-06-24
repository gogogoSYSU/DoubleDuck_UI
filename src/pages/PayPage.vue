<template>
<div class="pay_page">
  <div class="rest_time_to_pay">
    <p class="time">支付剩余时间<span v-show="isMinSingle">0</span>{{minute}}:<span v-show="isSecSingle">0</span>{{second}}</p>
    <p class="money">¥ {{totalPrice}}</p>
    <p class="store_name">{{storeName}}</p>
  </div>

  <choosePayWayRadio></choosePayWayRadio>

  <mt-button style="background-color: rgb(255, 179, 66);margin-top:60%" size="large">
    <span class="text_pay">确认支付</span>
    <span class="text_unit">¥</span>
    <span class="text_money">{{totalPrice}}</span>
  </mt-button>
</div>
</template>

<script>
import choosePayWayRadio from '../components/payPageCom/choosePayWayRadio.vue'
import { Toast } from 'mint-ui'

export default {
  name: 'payPage',
  components: {
    'choosePayWayRadio': choosePayWayRadio
  },
  data () {
    return {
      minute: 15,
      second: 0,
      // 秒数是否只有个位数
      isSecSingle: true,
      // 分钟数是否只有个位数
      isMinSingle: false,
      totalPrice: this.$store.state.totalPrice,
      storeName: this.$store.state.storeName
    }
  },
  created () {
    setTimeout(this.countdown, 1000)
  },
  methods: {
    countdown () {
      this.second = (this.second - 1 + 60) % 60
      // 判断时间是否已经用尽，如果用尽则弹窗警告
      if (this.second === 0 && this.minute === 0) {
        Toast('超过支付时间')
        // 返回上一页
        // this.$router.go(-1)
        // 终止程序运行
        return false
      }

      if (this.second === 59) {
        this.minute = this.minute - 1
      }

      if (this.second >= 10) {
        this.isSecSingle = false
      }
      else {
        this.isSecSingle = true
      }
      if (this.minute >= 10) {
        this.isMinSingle = false
      }
      else {
        this.isMinSingle = true
      }
      setTimeout(this.countdown, 1000)
    }
  }
}
</script>

<style>
.pay_page {
  display: flex;
  flex-direction: column;
  background-color: #F4F5F6;
}

.rest_time_to_pay {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #FFFFFF;
  height: 90%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
}

.time {
  color: #E6E6E6;
  font-size: 120%;
  margin: 0px;
}

.money {
  color: #000000;
  font-size: 300%;
  margin: 0px;
  margin-top: 2%;
  margin-bottom: 0%;
}

.store_name {
  color: #E6E6E6;
  font-size: 120%;
  margin: 0% 0% 0% 0%;
}

.sure_pay_btn {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #FFCB50;
  width: 100%;
  height: 10%;
  font-size: 120%;
  padding:0%;

  bottom: 0;
}

.text_pay {
  font-size: 100%;
  width: 50%;
  color: #FFFFFF;
  margin:10% 0% 10% 0%；
}

.text_unit {
  font-size: 100%;
  color: #FFFFFF;
}

.text_money {
  font-size: 100%;
  color: #FFFFFF;
}
</style>
