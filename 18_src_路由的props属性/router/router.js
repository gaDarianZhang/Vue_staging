import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News,
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              //声明接收params参数
              // path:'detail/:id/:title/:content',              
              // query参数路由不必改变路由地址，无需声明接收
              // path:'detail',
              path:'detail/:id',//可以同时接收params参数和query参数 /home/message/detail/01?title=laji&content=吃饭
              component:Detail,
              name:'detailInfo',
              // props:{carName:"极氪001"},通过props可以向路由组件传递props属性
              //props:true,//props为true时，自动将所有的【params】参数传递给路由组件的props

              //props还可以是一个函数，返回值传递给路由组件props，重点是他传入了route参数
              //route就是vc和vm上的$route,里边有params，query,path,name等属性
              props(route){
                console.log(route);
                const {id} = route.params
                const {title,content} = route.query
                return {id,title,content}
              }
            }

          ]
        }
      ]
    },
    {
      path:'/about',
      component:About
    }
  ]
});

export default router;