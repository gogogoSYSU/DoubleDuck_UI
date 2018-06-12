<template>
  <div class="mainPage">
    <shopHeader></shopHeader>
    <dishesList></dishesList>
    <under></under>
  </div>
</template>

<script>

import shopHeader from '../components/shopHeader.vue'
import under from '../components/under.vue'
import dishesList from '../components/dishesList.vue'

export default {
  name: 'mainPage',
  components: {
    'shopHeader': shopHeader,
    'dishesList': dishesList,
    'under': under
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
