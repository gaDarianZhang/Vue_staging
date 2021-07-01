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
      },
      test2(x){
        console.log("demo通过demo-event收到的数据：",x);
      }
    },
    mounted() {
      console.log(this);
      this.$bus.$on('demo-event',this.test2)
    },
    beforeDestroy() {
      // 关闭事件
      this.$bus.$off('demo-event')
    },
  }
</script>

<style scoped>
div{
  background-color: bisque;
  padding: 10px;
}
</style>