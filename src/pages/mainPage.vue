<template>
  <div class="mainPage">
    <shopHeader></shopHeader>
    <dishesList :dishes="dishes"></dishesList>
    <under></under>
  </div>
</template>

<script>

import shopHeader from '../components/mainPage/shopHeader.vue'
import under from '../components/mainPage/under.vue'
import dishesList from '../components/mainPage/dishesList.vue'

export default {
  name: 'mainPage',
  components: {
    'shopHeader': shopHeader,
    'dishesList': dishesList,
    'under': under
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.mainPage {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

</style>
