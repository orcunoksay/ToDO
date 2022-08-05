import Vue from "vue";
import Vuex from "vuex";
import { nanoid } from "nanoid";

Vue.use(Vuex); 

const actions = {
  addTodo: function (context, value) {
    if (value.trim() !== "") {
      context.commit("ADDTODO", value);
    } else {
      alert("Can't be empty. Please put in a task.");
    }
  },
  saveTodo: function (context, value) {
    if (value.newStr.trim() !== "") {
      context.commit("SAVETODO", value);
    } else {
      alert("Can't be empty!");
    }
  },
  delDoneList: function (context) {
    let countNumber = 0;
    for (var i = 0; i < state.itemData.length; i++) {
      if (state.itemData[i].done) countNumber++;
    }
    if (countNumber > 0) {
      context.commit("DELDONELIST");
    } else {
      alert("You did not select any task to be deleted. Please select a task then try again.");
    }
  },
};

const mutations = {
  ADDTODO: function (state, value) {
    const newObj = {
      id: nanoid(),
      title: value,
      done: false,
      edit: false,
    };
    state.itemData.unshift(newObj);
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  DELTODO: function (state, value) {
    state.itemData = state.itemData.filter((element) => {
      return element.id !== value;
    });
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  UPDATEDONE: function (state, value) {
    state.itemData.forEach((element) => {
      if (element.id === value.id) element.done = value.status;
    });
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  EDITTODO: function (state, value) {
    state.itemData.forEach((element) => {
      if (element.id === value) {
        element.edit = !element.edit;
      }
    });
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  SAVETODO: function (state, value) {
    state.itemData.forEach((element) => {
      if (element.id === value.id) {
        element.title = value.newStr;
        element.edit = false; 
      }
    });
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  TOGGLELIST: function (state, value) {
    state.itemData = JSON.parse(localStorage.getItem("itemData")) || [];
    if (value === 1) {
      state.itemData = state.itemData.filter((element) => {
        return !element.done;
      });
    } else if (value === 2) {
      state.itemData = state.itemData.filter((element) => {
        return element.done;
      });
    }
    for (var i = 0; i < state.buttonType.length; i++) {
      state.buttonType[i].btnStyle = "";
    }
    state.buttonType[value].btnStyle = "primary";
  },

  DELDONELIST: function (state) {
    state.itemData = JSON.parse(localStorage.getItem("itemData")) || [];
    state.itemData = state.itemData.filter((element) => {
      return !element.done;
    });
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
};


const state = {
  itemData: JSON.parse(localStorage.getItem("itemData")) || [],
  buttonType: [
    {
      btnStyle: "primary",
      title: "All",
    },
    {
      btnStyle: "",
      title: "Do",
    },
    {
      btnStyle: "",
      title: "Done",
    },
  ],
};

const getters = {};
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});

export default store;
