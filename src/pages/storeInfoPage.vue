<!-- 商家信息主页面 -->
<template>
  <div class="main-page">
    <store-img-swipe :imgs="storeInfo.imgs"></store-img-swipe>
    <store-info-title :storeName="storeInfo.name" :logoSrc="storeInfo.logo"></store-info-title>
    <store-info-list></store-info-list>
    <store-intro :storeIntroTitle="storeInfo.introTitle" :storeIntroContent="storeInfo.introContent"></store-intro>
  </div>
</template>

<script>
import storeImgSwipe from '@/components/storeImgSwipe'
import storeInfoTitle from '@/components/storeInfoTitle'
import storeInfoList from '@/components/storeInfoList'
import storeIntro from '@/components/storeIntro'
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

<style>
.main-page {
}
</style>
