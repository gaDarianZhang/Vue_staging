<template>
  <div>
    <h2>demo 组件</h2>
    <button @click="test">点击按钮触发自定义事件</button>
  </div>
</template>

<script>
  export default {
    methods: {
      test(){
        this.$emit("custom-event",1,2)
      }
    },
  }
</script>

<style scoped>
div{
  background-color: bisque;
  padding: 10px;
}
</style>