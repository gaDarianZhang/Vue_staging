/* 该文件是Vue中路由器文件，路由器管理着所有路由 */


import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import About2 from '../pages/About2.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
			path:"/home",
			component:Home,
		},
		// {
		// 	path:'/about',
		// 	component:About
		// },
		{
			path:'/about',
			components:{
				ab:About,
				ab2:About2
			}
		},
	]
})
// 暴露路由器
export default router