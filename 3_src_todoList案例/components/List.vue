<template>
  <div class="list-wrapper">
    <ul>
      <Item 
        v-for="(item,index) in todoItems" 
        :key="item.id"
        :item="item"
        :index="index"
        :updateItem="updateItem"
        :deleteItem="deleteItem"
      />
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'
  export default {
    components:{Item},
    props:["todoItems","updateItem","deleteItem"]
  }
</script>

<style>
  /* List */
  .list-wrapper{

    border: 1px solid rgb(209, 202, 202);
    border-bottom: none;
    margin: 20px 0;
    border-radius: 5px;

  }


</style>