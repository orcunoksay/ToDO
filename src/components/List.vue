<template>
  <ul class="list-container">
    <Item v-for="item in itemData" :key="item.id" :item="item"></Item>
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  components: {
    Item,
  },

  computed: {
    itemData() {
      return this.$store.state.itemData
    }
  },
};
</script>

<style>
.list-container {
  border: 1px solid #ccc;
  list-style: none;
  margin: 15px auto;
}
</style>