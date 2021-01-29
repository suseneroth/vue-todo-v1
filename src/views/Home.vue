<template>
  <div id="app">
   <b-jumbotron  bg-variant="info" text-variant="white">
      <template slot="header">
        <b-container>Vad ska jag göra idag då?</b-container>
      </template>
      <template slot="lead">
        <b-container>Dagens göromål</b-container>
      </template>
      <b-button type="submit" variant="dark" to="/addtodo">Lägg till</b-button>
    </b-jumbotron>
    <b-container class="container-lista">
      <div class="todo-page">
        <h2>Att göra idag</h2>
        <hr>
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
  .container-button {
   padding: 10px 10px;
  }
</style>