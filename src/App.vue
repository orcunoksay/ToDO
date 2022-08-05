<template>
  <div class="main">
    <Header></Header>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main {
  width: 600px;
  margin: 100px auto;
}
</style>