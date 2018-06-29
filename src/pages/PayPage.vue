<template>
<div class="pay_page">
  <mt-header class="mt-header" style="background-color:rgb(255, 179, 66)" title="订单支付">
    <mt-button slot="left" icon="back" @click="back">返回</mt-button>
  </mt-header>
  <div class="rest_time_to_pay">
    <p class="time">支付剩余时间<span v-show="isMinSingle">0</span>{{minute}}:<span v-show="isSecSingle">0</span>{{second}}</p>
    <p class="money">{{'¥' + $store.state.totalPrice}}</p>
    <p class="store_name">{{$store.state.storeName}}</p>
  </div>

  <choosePayWayRadio></choosePayWayRadio>

  <mt-button class="sure_pay_btn" size="large">
    <span class="text_pay">确认支付</span>
    <span class="text_unit">¥</span>
    <span class="text_money">{{$store.state.totalPrice}}</span>
  </mt-button>
</div>
</template>

<script>
import choosePayWayRadio from '../components/payPageCom/choosePayWayRadio.vue'
import { Toast, MessageBox } from 'mint-ui'

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
      // 判断时间是否已经用尽，如果用尽则弹窗提示然后返回上一页
      if (this.second === 0 && this.minute === 0) {
        Toast('超过支付时间')
        // 返回上一页
        this.$router.go(-1)
        // 终止程序运行
        return false
      }

      if (this.second === 59) {
        this.minute = this.minute - 1
      }

      if (this.second >= 10) {
        this.isSecSingle = false
      } else {
        this.isSecSingle = true
      }
      if (this.minute >= 10) {
        this.isMinSingle = false
      } else {
        this.isMinSingle = true
      }
      setTimeout(this.countdown, 1000)
    },
    back () {
      MessageBox.confirm('确认取消支付？', '提示').then(action => {
        if (action === 'confirm') {
          this.$router.go(-1)
        }
      })
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
  color: #2f373d;
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
  color: #2f373d;
  font-size: 120%;
  margin: 0% 0% 0% 0%;
}

.sure_pay_btn {
  background-color: rgb(255, 179, 66);
  margin-top:60%;
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
