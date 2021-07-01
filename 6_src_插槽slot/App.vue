<template>
  <div id="app">
    <Demo1>
      <template v-slot:slot1="info">
        替换值{{info.demoInfo1}}--{{info.demoInfo2}}
      </template>
      <template v-slot:slot2={obj}>
        {{obj.name}}--{{obj.gender}}
      </template>
    </Demo1>
  </div>
</template>

<script>
  import Demo1 from './Demo1'
  export default {
    components:{Demo1}
  }
</script>

<style>
#app{
  width:300px;
  height: 400px;
  padding: 10px;
  background-color: aquamarine;
}
</style>