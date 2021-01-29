<template>
  <div class="todo-list">
    <!-- start of to-do list -->
    <b-row>
      <b-col md="10" class="container-lista">
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
      this.addItem(this.item)
      this.$router.push({ path : '/' }, this.item)
      this.item=''; // Clear form after successful save 
      
    }
  }
};
</script>
<style>
form {
  margin-bottom: 25px;
}

.container-lista {
  margin: 0 auto;
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