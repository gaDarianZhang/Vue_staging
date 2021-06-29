/* 

  ref的使用：
    1.标签中直接编写 ref="xxxx"
    2.通过this.$refs.xxxx获取
    3.备注：
        1.若给html内置标签打ref，则获取到的是真实DOM节点。
        2.若给组件标签打ref，则获取到的是组件实例对象。
 */
<template>
  <div>
    <h1 class="name">School</h1>
    <button @click="showData">点击获取信息</button><br/>
    <!-- <input type="text" v-model="info"> -->
    <!-- 给input标签打了一个ref，input标签是html内置的标签，所以通过this.$refs.inp获取到的是【真实DOM节点】 -->
    <input type="text" ref="inp">
    <!-- 给School标签打了一个ref,School标签是组件标签，所以通过this.$refs.school获取到的是组件实例vc -->
    <Schoolll ref="school" :prop1="p1" :prop2="p2" prop3="origin string"/><!-- 不用v-bind而是直接prop1="p1"的话，p1被当做字符串。字符串就是这个属性的内容了 -->
  </div>
</template>

<script>
  import Schooll from './components/School.vue'


  export default {
    data() {
      return {
        info:'',
        p1:"props 1",
        p2:123
      }
    },
    components:{Schoolll:Schooll},
    methods: {
      showData(){
        console.log(this.$refs.school);
        console.log(this.$refs.inp.value);
      }
    },
  }
</script>

<style>

</style>