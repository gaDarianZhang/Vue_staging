<template>
  <div>
    <h2>Count组件</h2>
    <h3>和为：{{$store.state.sum}}</h3>
    <h3>处理后的和为：{{$store.getters.mulSum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="$store.dispatch('sub',n)">-</button>
    <button @click="$store.dispatch('addOdd',n)">奇数加</button>
    <button @click="$store.dispatch('addSync',{time:1000,data:n})">异步加</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        n:1,
      }
    },
    methods: {
      add(){
        this.$store.dispatch('add',this.n)
      }
    },
  }
</script>

<style scoped>
  select{
    width: 50px;
    height: 30px;
  }
  button{
    width: 60px;
    height: 30px;
    margin: 0 10px;
  }
</style>