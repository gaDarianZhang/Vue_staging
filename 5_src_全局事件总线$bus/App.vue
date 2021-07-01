<template>
  <div id="app">
    <h1>App component</h1>
    <!-- 
      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      customEvent这个事件名称是自己命名的，
      传给了Demo,那么就只能在Demo内用this.$emit来触发这个事件。
      那这样的话，其实就只能用于父子之间，在子组件内触发了父组件内定义的事件。
    -->
    <!-- 第一种写法 -->
    <Demo @custom-event="fire"/>
    <hr>
    <!-- 第二种写法 -->
    <Demo2 ref="nod"/>
  </div>
</template>

<script>
import Demo from './Demo.vue'
import Demo2 from './Demo2.vue'
  export default {
    components:{Demo,Demo2},
    methods: {
      fire(a,b){
        console.log("custom-event is firing",a,b);
      }
    },
    // 对应于自定义事件的第二种写法
    mounted() {
      // console.log(this);
      this.$refs.nod.$on('custom-event',this.fire)
    },
    // beforeCreate() {
    //   this.__proto__.__proto__.$bus = this.__proto__.__proto__
    // },
  }
</script>

<style>
  #app{
    padding: 10px;
    border: 1px solid red;
    background-color: skyblue;
  }
</style>