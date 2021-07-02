import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import {Button,Input} from 'element-ui'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.component(Button.name,Button)
Vue.component(Input.name,Input)

new Vue({
  el:"#app",
  render:h=>h(App)  
})