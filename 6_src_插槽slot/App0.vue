<template>
  <div id='app'>
    <Demo/>
    <Demo>替换掉了默认插槽值</Demo>
    <Demo>
      <!--  <template slot="hasName"> 2.6.0前用法，被v-slot代替-->
      <template v-slot:hasName>
        有名则【替换具名插槽默认值】，没名则替换默认插槽值
      </template>
      <template >
        有名则替换具名插槽默认值，没名则【替换默认插槽值】
      </template>
    </Demo>
    <Demo>

    </Demo>
  </div>
</template>

<script>
  import Demo from './Demo0.vue'
  export default {
    components:{Demo},
  }
</script>

<style>
  #app{
    display: flex;
    justify-content: space-around;
    
  }
</style>