<template>
<div>
  <b-container>
    <div class="todo-page">
       <h2>Lägg till något att göra</h2>
        <hr>
      <div class="container-addtodo">
        <b-form class="row" @submit.prevent="onSubmit">
          <b-col cols="10">
            <b-form-input
              id="item"
              class="w-100"
              name="item"
              type="text"
              placeholder="Vad ska jag göra nu då?"
              v-model="name"
              autocomplete="off"
            ></b-form-input>
            <b-form-input
              id="item"
              class="w-100"
              name="item"
              type="text"
              placeholder="Vem ska göra det då?"
              v-model="author"
              autocomplete="off"
            ></b-form-input>
             <b-form-input
              id="item"
              class="w-100"
              name="item"
              type="text"
              placeholder="Berätta mer i detajl."
              v-model="desc"
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
import { mapState } from 'vuex';

export default {
  data() {
    return {
      name:'', //variabel
      author: '',
      desc: ''
    }
  },
  computed: {
    ...mapState([
      'items'
    ])
  },
   methods: {
    onSubmit() {
      let newTodo = {
        name: this.name,
        author: this.author,
        desc: this.desc,
        date: Date.now(),
        done: this.done
      }
      this.$store.commit('addItem', newTodo)
      this.$router.push('/')
      this.item=''; // rensa formulär
    }
  }
}

</script>

<style>
  .container-addtodo {
    margin: 0 auto;
    max-width: 80%;
  }

  .w-100 {
    margin-top: 10px;
  }

</style>