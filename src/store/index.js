import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    items: [
      {
        name: "Gå ut med hunden",
        author: "Susanne",
        desc: "Lorem ipsum",
        date: Date.now(),
        done: false
      },
      {
        name: "Handla mat",
        author: "Susanne",
        desc: "Lorem ipsum",
        date: Date.now(),
        done: false
      },
      {
        name: "Sjunga en sång",
        author: "Anna",
        desc: "Lorem ipsum",
        date: Date.now(),
        done: false
      },
      {
        name: "Träna",
        author: "Susanne",
        desc: "Lorem ipsum",
        date: Date.now(),
        done: false
      }
    ]
  },
  mutations: {
    addItem(state, item) {
      state.items.unshift(item)
    },
    editItem(state, { item, name = item.name, done = item.done }) {
      item.name = name;
      item.done = done;
    },
    removeItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
    }
  },
  actions: {
    toggleItem({ commit }, item) {
      commit("editItem", { item, done: !item.done });
    }, // ersätt med commit, se additem i AddTodo, men var?
  },
});

