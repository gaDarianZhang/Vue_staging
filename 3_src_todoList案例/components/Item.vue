<template>
  <li
    @mouseenter="isEnter=true"
    @mouseleave="isEnter=false"
    :class="{'high-light':isEnter}"
  >
    <label>
      <input type="checkbox" v-model="item.done" @click="updateItem(index,$event)">
      <span>{{item.name}}</span>
    </label>
    <button 
      class="btn"
      :style="{display:isEnter?'block':'none'}"
      @click="deleteItem(index)"
    >删除</button>
  </li>
</template>

<script>
  export default {
    props:["item","index","updateItem","deleteItem"],
    data() {
      return {
        isEnter:false,
      }
    },


  }
</script>

<style>
  /* item */
  .list-wrapper li{
    height: 35px;
    border-bottom: 1px solid rgb(209, 202, 202);
    line-height: 35px;
    padding: 0 7px;
  }
  .list-wrapper li:last-of-type{
    border-radius: 5px;
  }
  .list-wrapper li input{
    margin-right: 5px;
  }
  .list-wrapper li button{
    float: right;
    margin-top: 3px;
    display: none;
  }
  .high-light{
    background-color: rgb(184, 187, 186);
  }
</style>