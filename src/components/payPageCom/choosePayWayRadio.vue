<template>
  <div class="radio">
    <div class="radio_item" v-for='item in items' :key="item.id">
      <img class="radio_img" :src="item.url" />
      <p class="radio_way">{{item.value}}</p>
      <input class='radio_check' type='radio' name="payWay"><i></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        id: '1',
        value: '美团支付',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      },
      {
        id: '2',
        value: '中国邮政储蓄银行',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      },
      {
        id: '3',
        value: '中国银行',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      },
      {
        id: '4',
        value: '微信支付',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg'
      }]
    }
  }
}
</script>

<style>
.radio {
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #FFFFFF;
}

.radio_item {
  display: flex;
  flex-direction: center;
  height: 100px;
}

.radio_img {
  height: 60px;
  width: 60px;
  margin-left: 4%;
  position: absolute;
  margin-top: 20px;
  margin-bottom: 20px;
}

.radio_way {
  font-size: 36px;
  margin-left: 20%;
  margin-top: 32px;
  margin-bottom: 32px;
}

.radio_check {
  height: 40px;
  width: 40px;
  position: absolute;
  margin-top: 26px;
  margin-bottom: 26px;
  margin-left: 82%;
}

.radio_check input:checked+a {
  background: #99864E;
}

</style>
