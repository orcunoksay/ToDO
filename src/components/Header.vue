<template>
  <div class="input-container">
    <el-input placeholder="Add task" v-model="input" clearable>
    </el-input>
    <el-button type="primary" @click="addTodo">Add Task</el-button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.input);
      this.input = "";
    },
  },
};
</script>

<style scoped>
.input-container {
  width: 600px;
  display: flex;
}

.el-button {
  width: 100px;
  margin-left: 15px;
}
</style>