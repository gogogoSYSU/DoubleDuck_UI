<!-- 商家详细信息列表显示组件 -->
<template>
  <div>
    <mt-cell style="text-align:left" v-for="item in items" v-bind:key="item.id" :title="item.title">
        <span>{{item.info}}</span>
        <img class="icon" slot="icon" :src="item.src"/>
    </mt-cell>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell } from 'mint-ui'
Vue.component(Cell.name, Cell)

export default {
  props: {
    items: {
      default: function () {
        return [
          {
            title: '电话',
            src: require('./../../assets/icon/电话.png'),
            info: '8888 8888'
          },
          {
            title: '地址',
            src: require('./../../assets/icon/地址.png'),
            info: '广州大学城GOGO双鸭山'
          },
          {
            title: '时间',
            src: require('./../../assets/icon/时间.png'),
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
  background-color:rgb(255, 179, 66);
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
  width: 8%;
}
.info {
  height: 100%;
  width: 95%;
}
</style>
