<template>
  <ul>
    <li>news001</li><input type="text">
    <li>news002</li><input type="text">
    <li>news003</li><input type="text">
  </ul>
</template>

<script>
  export default {
    name:'News',
    mounted(){
      console.log("News挂载了");
    },
    beforeDestroy(){
      console.log("News组件要销毁了");
    }
  }
</script>

<style>

</style>