<template>
<div>
 <b-jumbotron class="jumbotron-img" text-variant="white">
      <template slot="header">
        <b-container>Filmer som måste ses</b-container>
      </template>
      <template slot="lead">
        <b-container>Lägg till film på listan</b-container>
      </template>
      <b-button class="container-button" type="submit" to="/addtodo">Lägg till film</b-button>
    </b-jumbotron>
  <b-container>
    <div class="todo-page">
       <h2>Lägg till film på listan</h2>
        <hr>
      <div class="container-addtodo">
        <b-form class="row" @submit.prevent="onSubmit">
          <b-col cols="10">
            <b-form-input
              id="item"
              class="w-100"
              name="item"
              type="text"
              placeholder="Filmens namn"
              v-model="name"
              autocomplete="off"
            ></b-form-input>
            <b-form-input
              id="item"
              class="w-100"
              name="item"
              type="text"
              placeholder="Vem ska se den"
              v-model="author"
              autocomplete="off"
            ></b-form-input>
             <b-form-input
              id="item"
              class="w-100"
              name="item"
              type="text"
              placeholder="Kort om filmen"
              v-model="desc"
              autocomplete="off"
            ></b-form-input>
          </b-col>
          <b-col cols="2">
            <b-button type="submit" class="addtodo-button">Lägg till film</b-button>
         </b-col>
        </b-form>
      </div>
    </div>
  </b-container>
</div>
</template>

<script>

export default {
  data() {
    return {
      name:'',
      author: '',
      desc: ''
    }
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
      this.item='';
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

.addtodo-button {
    background: #7A191F;
    border: #7A191F;
    width: 120px;
    height: 35px;
    margin-top: 108px
  }

.todo-page-heading {
  color: #7A191F;
}

.container-button {
  padding: 10px 10px;
  background: #7A191F;
  border: #7A191F;
}

.container-footer{
  height: 100px;
  width: 100vw;
  background: #7A191F;
  color: #ffffff;
  position: fixed;
  bottom: 0;
}

</style>