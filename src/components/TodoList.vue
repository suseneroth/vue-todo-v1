<template>
  <div class="todo-list">
    <b-row>
      <b-col md="10" class="container-lista">
        <b-list-group>
          <TodoItem v-for="(item, index) of todolist" :key="index" :item="item" />
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
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
   todolist() {
     return this.$store.state.items
   },
   

  },
   methods: {
    onSubmit() {
      this.addItem(this.item)
      this.$router.push({ path : '/' }, this.item)
      this.item=''; // Rensa formulär
    }
  }
};
</script>
<style>
form {
  margin-bottom: 25px;
}

.todo-list {
  margin: 30px 0 100px 0;

}

.container-lista {
  margin: 0 auto;
}

.list-group-item {
  display: flex;
}

.list-group-item:hover{
  background-color: rgb(255, 215, 215);
}

.checked {
  font-style: italic;
  text-decoration: line-through !important;
  color: gray;
  background-color: #eeeeee;
}

.container-footer{
  height: 100px;
  width: 100vw;
  margin-top: 30px;
  background: #7A191F;
  color: #ffffff;
  z-index: 1;
}
</style>