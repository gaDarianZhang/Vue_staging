import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false //关闭生产提示

const vm = new Vue({
	el:'#app',
	router,
	render:h => h(App)
})
console.log(vm);