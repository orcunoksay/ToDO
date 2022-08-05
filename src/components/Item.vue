<template>
  <li>
    <el-checkbox v-model="item.done" @input="isDone(item.id, item.done)">
      <span v-show="!item.edit">{{ item.title }}</span>
      <el-input
        size="mini"
        v-model="item.title"
        v-show="item.edit"
        @blur="saveTodo(item.id)"
        ref="inputTitle"
      ></el-input>
    </el-checkbox>
    <el-link :underline="false" @click="delTodo(item.id)"
      >Delete<i class="el-icon-delete"></i>
    </el-link>
    <el-link icon="el-icon-edit" :underline="false" @click="editTodo(item.id)"
      >Edit</el-link
    >
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  methods: {
    delTodo(id) {
      this.$store.commit("DELTODO", id);
    },
    isDone(id, status) {
      this.$store.commit("UPDATEDONE", { id, status });
    },
    editTodo(id) {
      this.$store.commit("EDITTODO", id);
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    saveTodo(id) {
      this.$store.dispatch("saveTodo", { id: id, newStr: event.target.value });
    },
  },
};
</script>

<style>
.list-container li {
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
  padding-left: 15px;
}

.list-container li:last-child {
  border: 0;
}

.list-container .el-link {
  float: right;
  margin: 0 10px;
}
</style>