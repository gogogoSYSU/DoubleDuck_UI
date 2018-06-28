<template>
  <div class="dishes_list">
    <dishDetail class="dishDetail" v-show="$store.state.show"></dishDetail>
    <div class="left_list">
      <guide :dishes="dishes"></guide>
    </div>
    <div class="right_list">
      <div v-for="category in dishes" v-bind:key="category.id">
        <category :dishes="category"></category>
      </div>
    </div>
  </div>
</template>

<script>
import guide from './guide.vue'
import category from './category.vue'
import dishDetail from './dishDetail.vue'

export default {
  name: 'dishes_list',
  components: {
    'guide': guide,
    'category': category,
    'dishDetail': dishDetail
  },
  computed: {
    dishes () {
      if (this.$store.state.hasSearchResult === false) {
        return this.$store.state.dishes
      } else {
        return this.$store.state.searchResultDishes
      }
    }
  }
}
</script>

<style>
.dishDetail {
  position: fixed;
  top: 20vh;
  left: 15vw;
}

.dishes_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 14.8vh;
}

.left_list {
  height: 77vh;
  overflow: scroll;
  background-color: rgb(254, 245, 230);
  margin-left: 0.1vw;
}

.right_list {
  display: flex;
  flex-direction: column;
  width: 75%;
  overflow: scroll;
  height: 77vh;
}

</style>
