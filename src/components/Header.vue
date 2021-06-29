<template>
  <div class="header">
    <input type="text">
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  /* header */
  .header input{
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    border: 1px solid rgb(209, 202, 202);
    border-radius: 5px;
    padding: 0 7px;
    outline: none;
    font-size: 15px;
  }

  .header input:focus{
    box-shadow: 0px 0px 5px 3px rgb(110, 182, 211,.3);
  }
</style>