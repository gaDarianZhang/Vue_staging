<template>
  <div class="demo">
    <h2 class="title">子组件，这里边使用了插槽</h2>
    <slot>默认插槽值</slot><br>
    <slot name='hasName'>具名插槽的默认值</slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .demo{
    width: 300px;
    height: 400px;
    background-color: aquamarine;
  }
</style>