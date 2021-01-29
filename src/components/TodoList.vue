<template>
  <div class="todo-list">
    <!-- start of to-do form -->
    <b-form class="row" @submit.prevent="onSubmit">
  <b-col cols="10">
  <!-- bind to local `item` state -->
    <b-form-input
      id="item"
      class="w-100"
      name="item"
      type="text"
      placeholder="What do you want to buy?"
      v-model="item"
      autocomplete="off"
    ></b-form-input>
  </b-col>
  <b-col cols="2">
    <b-button type="submit" variant="primary">Add Task</b-button>
  </b-col>
</b-form>
    <!-- end of to-do form -->
    <!-- start of to-do list -->
    <b-row>
      <b-col md="10">
        <b-list-group>
          <TodoItem v-for="(item, index) in items" :key="index" :item="item" />
        </b-list-group>
      </b-col>
    </b-row>
    <!-- end of to-do list -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },

  data() {
    return {
      item:''
    }
  },
  computed: {
    ...mapState([
      'items'
    ])
  },
   methods: {
    ...mapActions([
      'addItem',
    ]),
    onSubmit() {
      this.addItem(this.item);
      this.item=''; // Clear form after successful save 
    },
  }
};
</script>
<style>
form {
  margin-bottom: 25px;
}
.list-group-item {
  display: flex;
}
.list-group-item:hover{
  background-color: aliceblue;
}
.checked {
  font-style: italic;
  text-decoration: line-through !important;
  color: gray;
  background-color: #eeeeee;
}
</style>