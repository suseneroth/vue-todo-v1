<template>
  <div id="app">
   <b-jumbotron class="jumbotron-img" text-variant="white">
      <template slot="header">
        <b-container>Filmlistan</b-container>
      </template>
      <template slot="lead">
        <b-container>Lägg till film på listan</b-container>
      </template>
      <b-button class="container-button" type="submit" to="/addtodo">Lägg till film</b-button>
    </b-jumbotron>
    <b-container class="container-lista">
      <div class="todo-page">
        <h2 class="todo-page-heading">Filmer som måste ses</h2>
        <TodoList />
      </div>
    </b-container>
 
 </div>
</template>

<script>
  import TodoList from '@/components/TodoList.vue'
  export default {
    name: 'TodoView',
    components: {
      TodoList
    }
  }
</script>

<style scoped>
.todo-page-heading {
  color: #7A191F;
}

.container-button {
  padding: 10px 10px;
  background: #7A191F;
  border: #7A191F;
}

.container-lista {
  height: auto;
}

.container-footer{
  height: 30px;
  width: 100vw;
  margin-top: 30px;
  background: #7A191F;
  color: #ffffff;
  z-index: 1;
}
</style>