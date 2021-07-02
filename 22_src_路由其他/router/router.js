import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'
import Test from '../pages/Test.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  // 路由模式
  // mode:"history",//


  /* 
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  1.路由配置的位置（层级），就代表了路由匹配成功后那个组件的位置。
  比如，Message组件是在Home组件内部，当地址/home/message匹配到Message后，
  Message组件就去放在Home组件内的占位符。及时这个路由地址写的是/home/news/message，
  这个Message并不会去放在News组件内，而是根据路由层级中的父组件来放入的。
  2.我把{
              path:'/home/message',
              component:Message,
            },
  放在routes的最顶级的第一个，那么就会用Message组件去替换App内的那个占位符。
  而不是先用Home组件去替换App中的占位符，再用Message组件去替换Home组件内的占位符。
  但是，如果我把这个配置放在routes的最后边的话，就是先匹配Home组件，再匹配上Message组件了。
  说明了url是按照路由注册的顺序去匹配的
  3.vue-router貌似是按【路由注册顺序】【严格匹配】的
  */
  routes:[
    /* 重定向

    */
    {
      path:'/home/news',
      redirect:'/home'
    },
    // {
    //   path:'/ma/news/sd',
    //   component:Test
    // },
    {
      path:'/home',
      component:Home,
      props(){console.log(2);},
      children:[
        {
          path:'news',
          component:News,
        },
        {
          path:'message',
          component:Message,
          props(){console.log(3);},
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
    },
    // {
    //   path:'/home/message',
    //   component:Message,
    //   props(){console.log("1");}
    // },

  ]
});

export default router;