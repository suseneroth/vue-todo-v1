<template>
  <div class="todo-item">
    <b-list-group-item v-bind:class="{ checked: item.done }">
      <b-row>
        <b-col cols="1">
         <b-button type="submit" class="addtodo-button-start" v-on:click="moveItem(item)"
         >Klar</b-button>
        </b-col>
        <b-col cols="9">
          <ul class="todo-list-item">
            <li><span class="todo-list-item-heading">Filmens namn:</span> {{ item.name }}</li>
            <li><span class="todo-list-item-heading">Vem ska se den:</span> {{ item.author }}</li>
            <li><span class="todo-list-item-heading">Kort om filmen:</span> {{ item.desc }}</li>
            <li><span class="todo-list-item-heading">Inlagd:</span> {{ new Date(item.date).toLocaleString() }}</li>
          </ul>
        </b-col>
        <b-col cols="1">
          <b-button-close v-on:click="removeItem(item)"></b-button-close>
        </b-col>
      </b-row>
    </b-list-group-item>    
  </div>
</template>
<script>

export default {
  name: 'TodoItem',
  props: ['item'],
  methods: {
      removeItem(item) {
        this.$store.commit("removeItem", item)
      },
      completeTask(item) {
        item.done = !item.done;
      },
      moveItem(item) {
        this.$store.commit("moveItem", item)
      },
    }
  };
</script>

<style scoped>

 .droptarget {
      float: left; 
      width: 100px; 
      height: 35px;
      margin: 15px;
      padding: 10px;
      border: 1px solid #aaaaaa;
    }

.todo-list-item {
    list-style-type: none;
    line-height: 1.8;
}

.todo-list-item-heading {
    font-weight: bold;
    color: #7A191F;
}

.addtodo-button-start {
    background: #7A191F;
    border: #7A191F;
  }
    
</style>