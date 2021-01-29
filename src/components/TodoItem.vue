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
          <span>{{ item.name }}</span>
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
b-list-group-item {

}
    
</style>