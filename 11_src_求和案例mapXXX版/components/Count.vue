<template>
  <div>
    <h2>Count组件</h2>
    <!-- <h3>和为：{{$store.state.sum}}</h3> -->
    <h3>和为：{{sum}}</h3>

    <!-- <h3>处理后的和为：{{$store.getters.mulSum}}</h3> -->
    <h3>处理后的和为：{{mulSum}}</h3>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br>
    <!-- <button @click="$store.dispatch('add',n)">+</button> -->
    <!-- 
      不用dispatch，直接commit
    -->
    <button @click="$store.commit('ADD',n)">+</button>
    <button @click="$store.dispatch('sub',n)">-</button>
    <button @click="$store.dispatch('addOdd',n)">奇数加</button>
    <button @click="$store.dispatch('addAsync',{time:1000,data:n})">异步加</button>
    <br>
    <!-- 使用了mapMutations和mapActions -->
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="addOdd(n)">奇数加</button>
    <button @click="addAsync({time:1000,data:n})">异步加</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
  export default {
    data() {
      return {
        n:1,
      }
    },
    methods: {
      // add(){
      //   /* 
      //     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //     简单的业务可以不通过dispatch找到action再去commit,可以直接commit
      //   */
      //   // this.$store.dispatch('add',this.n)
      //   this.$store.commit('ADD',this.n)
      // }

      /* 
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        之所以要改成传参的形式，是为了解释mapxxxx之后的样子。mapxxx后就是这样子的，
        第一个参数会传给actions或mutations中的value，如果不传参的话，
        @click等事件的回调默认就会传入$event，这样就接收不到value了。
      */
      // add(value){
      //   this.$store.commit('ADD',value)
      // }

      ...mapActions(['addOdd','addAsync']),
      ...mapMutations({add:'ADD',sub:'SUB'})
    },
    computed:{
      // sum(){
      //   return this.$store.state.sum
      // },
      ...mapState(['sum','name']),
      ...mapGetters({mulSum:'mulSum'}),
    }
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