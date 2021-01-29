<template>
<div>
  <b-container>
    <div class="todo-page">
       <h2>Lägg till något att göra</h2>
        <hr>
      <div class="container-addtodo">
        <b-form class="row" @submit.prevent="onSubmit">
          <b-col cols="10">
    <!-- bind to local `item` state -->
            <b-form-input
              id="item"
              class="w-100"
              name="item"
              type="text"
              placeholder="Vad ska jag göra nu då?"
              v-model="item"
              autocomplete="off"
            ></b-form-input>
          </b-col>
          <b-col cols="2">
            <b-button type="submit" variant="dark">Lägg till</b-button>
         </b-col>
        </b-form>
      </div>
    </div>
  </b-container>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
name: 'TodoAdd',
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
  .container-addtodo {
    margin: 0 auto;
    max-width: 60%;
  }

</style>