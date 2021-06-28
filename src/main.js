import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* 
  默认引入的这个vue是不完整的（node_modules\vue\dist\vue.runtime.common.js），
  不能解析template内容，因此vue脚手架里边使用了一个webpack loader:vue-template-compiler
  用于解析template。但是问题又来了，这个插件只能用于解析.vue文件内的template，
  js文件内的template是无法被这个loader解析的。如果引入完整vue文件，文件体积就太大了。
  因此Vue里边就提供了一个h函数。定义一个render函数，Vue就是自动传入h函数，并调用。
*/

new Vue({
  render: h => h(App),
  /* render就相当于以下三步“” */
  // components:{App},
  // template:`<App/>`,
  // //调用loader
}).$mount('#app')
