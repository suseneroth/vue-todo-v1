import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        name: "Batman Returns",
        author: "Susanne och Lisa",
        desc: "Lorem ipsum dolor sit amet.",
        date: Date.now(),
        done: false
      },
      {
        name: "Leon",
        author: "Susanne och Svea",
        desc: "Lorem ipsum dolor sit amet.",
        date: Date.now(),
        done: false
      },
      {
        name: "Hello Dolly",
        author: "Anna",
        desc: "Lorem ipsum dolor sit amet.",
        date: Date.now(),
        done: false
      },
      {
        name: "Shawshank Redemption",
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
    },
    moveItem(state, item) {
      item.done = !item.done;
      state.items.push(state.items.shift(item));
    }
  },
});

