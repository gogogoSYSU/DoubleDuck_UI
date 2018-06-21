<template>
  <div class="order_dish_list">
    <div class="dish_list">
      <div class="dish_item" v-for="item in dishes" v-bind:key="item.id">
        <img class="dish_icon" :src="item.dish_icon_url">
        <div class="dish_detail">
          <p class="dish_name">{{item.dish_name}}</p>
          <p class="dish_copy">{{item.dish_copy}}</p>
        </div>
        <p class="dish_price">{{'¥ ' + item.dish_price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dishes: {
      default: function () {
        return [
          {
            dish_name: '清蒸双鸭',
            dish_icon_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg',
            dish_copy: 'x5',
            dish_price: 18.00
          },
          {
            dish_name: '红烧双鸭',
            dish_icon_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg',
            dish_copy: 'x2',
            dish_price: 18.25
          },
          {
            dish_name: '双鸭肺片',
            dish_icon_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg',
            dish_copy: 'x1',
            dish_price: 18.89
          }
        ]
      }
    }
  }
}
</script>

<style>

.order_dish_list {
  width: 100%;
}

.dish_list {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dish_item {
  display: flex;
  flex-direction: center;
  border-block-end: solod;
  border-width: 12px;
  padding: 1%;
  height: 120px;
  background-color: #FFFFFF;
}

.dish_icon {
  height: 112px;
  width: 112px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-left: 16px;
}

.dish_detail {
  margin-left: 4%;
}

.dish_name {
  font-size: 36px;
  text-align: start;
  margin-top: 6%;
  margin-left: 0;
  height: 36px;
}

.dish_copy {
  font-size: 5vw;
  text-align: start;
  margin-top: 0px;
  height: 12px;
  color: #E6E6E6;
}

.dish_price {
  font-size: 5vw;
  position: absolute;
  text-align: end;
  right: 60px;
}
</style>
