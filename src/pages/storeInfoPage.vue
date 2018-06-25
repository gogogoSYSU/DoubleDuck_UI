<!-- 商家信息主页面 -->
<template>
  <div class="main-page">
    <mt-header class="mt-header" title="订单详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <store-img-swipe :imgs="storeInfo.imgs"></store-img-swipe>
    <store-info-title :storeName="storeInfo.name" :logoSrc="storeInfo.logo"></store-info-title>
    <store-info-list></store-info-list>
    <store-intro :storeIntroTitle="storeInfo.introTitle" :storeIntroContent="storeInfo.introContent"></store-intro>
  </div>
</template>

<script>
import storeImgSwipe from '../components/storeInfoPage/storeImgSwipe'
import storeInfoTitle from '../components/storeInfoPage/storeInfoTitle'
import storeInfoList from '../components/storeInfoPage/storeInfoList'
import storeIntro from '../components/storeInfoPage/storeIntro'
// 引入axios组件以访问json文件
import axios from 'axios'

export default {
  data () {
    return {
      storeInfo: []
    }
  },
  components: {
    'store-img-swipe': storeImgSwipe,
    'store-info-title': storeInfoTitle,
    'store-info-list': storeInfoList,
    'store-intro': storeIntro
  },
  created () {
    this.getStoreInfo()
  },
  methods: {
    // 本地json获取商家信息
    getStoreInfo () {
      axios.get('../static/data.json')
        .then((res) => {
          console.log(res)
          this.storeInfo = res.data.store.info
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
