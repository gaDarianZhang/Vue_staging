<template>
  <div>
    <h2>这是demo2组件</h2>
    <button @click="test">点击按钮触发自定义事件</button>
  </div>
</template>

<script>
  export default {
    methods: {
      test(){
        this.$emit("custom-event",3,4)
      }
    },
  }
</script>

<style scoped>
  div{
    background-color: pink;
    padding: 10px;
  }

</style>