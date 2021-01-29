<template>
  <div class="todo-item">
    <b-list-group-item v-bind:class="{ checked: item.done }">
      <b-row>
        <b-col cols="1">
          <b-form-checkbox
            :checked="item.done"
            @change="changeItemStatus(item)"
          >
          </b-form-checkbox>
        </b-col>
        <b-col cols="9">
          <ul class="todo-list-item">
            <li>Vad som ska göras: {{ item.name }}</li>
            <li>Detaljer: {{ item.desc }}</li>
            <li>Ska utföras av: {{ item.author }}</li>
            <li>Inlagt: {{ new Date(item.date).toLocaleString() }}</li>
          </ul>
        </b-col>
        <b-col cols="1">
          <b-button-close @click="removeItem(item)"></b-button-close>
        </b-col>
      </b-row>
    </b-list-group-item>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

  export default {
    name: 'TodoItem',
    props: ['item'],
    methods: {
      ...mapActions([
          'toggleItem'
      ]),
      changeItemStatus(item) {
          this.toggleItem(item);
      },
      removeItem(item) {
          this.$store.commit("removeItem", item)
      },
    }
  };
</script>

<style scoped>
.todo-list-item {
    list-style-type: none;
    line-height: 1.8;
}
    
</style>