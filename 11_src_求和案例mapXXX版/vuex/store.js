import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex)

const state={
  sum:0,
  name:"zhang",
}

const actions={
  add(context,value){
    console.log(context,value);
    context.commit('ADD',value)
  },
  sub(context,value){ 
    context.commit("SUB",value)
  },
  addOdd(context,value){
    context.state.sum%2?context.commit("ADD",value):''
  },
  addAsync(context,value){
    setTimeout(()=>{
      context.commit("ADD",value.data)
    },value.time)
  }
}

const mutations={
  ADD(state,value){
    // console.log(state,value);
    state.sum+=value
  },
  SUB(state,value){
    state.sum-=value
  }
}

const getters={
  mulSum(state,b){
    console.log(state,b);
    console.log(getters);
    return state.sum*10
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store