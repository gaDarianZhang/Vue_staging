<template>
  <div class="footer">
    <div class="left">
      <input type="checkbox">
      <span>已完成0</span>/<span>全部3</span>
    </div>    
    <button class="btn">删除全部已完成</button>
  </div>
</template>

<script>
  export default {

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