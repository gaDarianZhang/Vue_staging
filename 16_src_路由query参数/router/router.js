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
              component:Detail
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