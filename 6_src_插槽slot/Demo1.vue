<template>
  <div class="demo1">
    <h2>Demo1</h2>
    <slot :demoInfo1="demo1Name" demoInfo2="辣鸡" name="slot1">默认值</slot>
    <br>
    <slot :obj="obj" demoInfo2="辣鸡" name="slot2">默认值</slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        demo1Name:"demo1",
        obj:{name:"张三",gender:"男"}
      }
    },
  }
</script>

<style>
.demo1{
  background-color: gray;
}
.demo1::before{
  content: '';
  display: table;
}
</style>