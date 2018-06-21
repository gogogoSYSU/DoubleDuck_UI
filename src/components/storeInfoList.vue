<!-- 商家详细信息列表显示组件 -->
<template>
  <div class="info-list">
    <div class="info-list-item" v-for="item in items" v-bind:key="item.id">
      <img class="icon" :src="item.src" alt="icon"/>
      <p class="info">{{item.info}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: function () {
        return [
          {
            src: require('./../assets/icon/电话.png'),
            info: '8888 8888'
          },
          {
            src: require('./../assets/icon/地址.png'),
            info: '广州大学城GOGO双鸭山'
          },
          {
            src: require('./../assets/icon/时间.png'),
            info: '09:30-22:30'
          }
        ]
      }
    }
  }
}
</script>

<style>
.info-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.info-list-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-style: solid;
  border-width: 1;
  border-color: #f2f2f2;
}
.icon {
  height: 100%;
  width: 5%;
}
.info {
  height: 100%;
  width: 95%;
}
</style>
