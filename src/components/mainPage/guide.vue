<template>
  <div class="guide">
    <mt-button class="category" v-for="item in dishes" v-bind:key="item.id">
        {{item.category}}
      </mt-button>
  </div>
</template>

<script>
export default {
  name: 'guide',
  computed: {
    dishes () {
      return this.$store.state.dishes
    }
  }
}
</script>

<style>
.guide {
  display: flex;
  flex-direction: column;
  width: 23vw;
}

.category {
  width: 100%;
  height: 6vh;
  font-size: 4vw;
  background-color: rgb(254, 245, 230);
  border-radius: 0;
  color: black;
}
</style>
