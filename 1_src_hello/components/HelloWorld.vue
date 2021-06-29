<template>
  <h2>Hello{{name}}</h2>
</template>

<script>
  export default {
    data() {
      return {
        name:'张三丰'
      }
    },
  }
</script>

<style>
  h2{
    background-color: orange;
    color: aqua;
  }
</style>