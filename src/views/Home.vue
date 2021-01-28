<template>
    <div id="app">
      <router-view/>
        <b-jumbotron bg-variant="info" text-variant="white">
          <template slot="header">
            <b-container>Vuex ToDo App</b-container>
          </template>
          <template slot="lead">
            <b-container>Built using Bootstrap-Vue.js</b-container>
          </template>
          <template slot="lead">
            <b-container class="container-button">
              <router-link to="/addtodo"><b-button>Lägg till</b-button></router-link>
            </b-container>
          </template>
       </b-jumbotron>
  </div>
</template>
<script>


export default {
  
 
}
</script>

<style scoped>
  .container-button {
   padding: 10px 10px;
  }
</style>