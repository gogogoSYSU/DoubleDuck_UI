<template>
  <div class="radio">
    <mt-radio  mainStyle="color:rgb(255, 179, 66)" title="选择支付方式" align="right" v-model="value" :options="items"></mt-radio>
  </div>
</template>

<script>
import Vue from 'vue'
import { Radio } from 'mint-ui'
Vue.component(Radio.name, Radio)

export default {
  data () {
    return {
      value: '',
      /* items: [{
        id: '1',
        label: '美团支付',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      },
      {
        id: '2',
        label: '中国邮政储蓄银行',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      },
      {
        id: '3',
        label: '中国银行',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      },
      {
        id: '4',
        label: '微信支付',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      }] */
      items: ['美团支付', '微信支付', '中国邮政储蓄银行', '中国银行']
    }
  }
}
</script>

<style>
.radio {
  margin: 2% 2% 0% 2%;
  background-color: #FFFFFF;
}

.radio_item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 10%;
  margin-bottom: 1%;
}

.radio_img {
  height: 10%;
  width: 20%;
  margin-left: 4%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.radio_way {
  font-size: 120%;
  margin-top: 32px;
  margin-bottom: 32px;
}

.radio_check {
  height: 40px;
  width: 40px;
  position: absolute;
}

.radio_check input:checked+a {
  background: #99864E;
}

</style>
