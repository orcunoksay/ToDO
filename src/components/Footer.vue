<template>
  <div class="footer-container">
    <span>Total Tasks {{ totalItem }}</span>
    <div class="footer-btn">
      <el-button
        v-for="(btnItem, index) in buttonType"
        :key="index"
        :type="btnItem.btnStyle"
        @click="toggleList(index)"
        >{{ btnItem.title }}</el-button
      >
      <el-link :underline="false" @click="delDoneList">Clear</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    totalItem() {
      return this.$store.state.itemData.length;
    },
    buttonType() {
      return this.$store.state.buttonType;
    },
  },
  methods: {
    toggleList(value) {
      this.$store.commit("TOGGLELIST", value);
    },
    delDoneList() {
      this.$store.dispatch("delDoneList");
    },
  },
};
</script>

<style scoped>

.footer-container {
  height: 60px;
  display: flex;
}

.footer-container span {
  line-height: 36px;
  margin-left: 16px;
  color: #606266;
}

.footer-btn {
  margin-left: 56px;
}

.footer-btn .el-button {
  height: 36px;
  margin-left: 10px;
  width: 80px;
}

.footer-btn .el-link {
  margin-left: 100px;
}
</style>