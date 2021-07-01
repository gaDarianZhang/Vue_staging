<template>
  <div class="footer">
    <div class="left">
      <input type="checkbox" v-model="allDone">
      <span>已完成{{doneNum}}</span>/<span>全部{{todoItems.length}}</span>
    </div>    
    <button class="btn" @click="deleteDone">删除全部已完成</button>
  </div>
</template>

<script>
  export default {
    props:["todoItems","updateAll","deleteDone"],
    computed:{
      doneNum(){
        return this.todoItems.reduce((preState,nextValue)=>preState+=nextValue.done?1:0,0)
      },
      allDone:{
        get(){
          return this.doneNum===this.todoItems.length && this.todoItems.length
        },
        set(done){
          this.updateAll(done)
        }
      }
    }
  }
</script>

<style>
  /* footer */
  .footer{
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
  }
  .footer .left input{
    margin-right: 5px;
  }
</style>