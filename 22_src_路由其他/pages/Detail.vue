<template>
  <ul>
    <!-- 接收params参数 -->
    <!-- <li>id:{{$route.params.id}}</li>
    <li>title:{{$route.params.title}}</li>
    <li>content:{{$route.params.content}}</li> -->

    <!-- 接收query参数 -->
    <!-- <li>id:{{$route.query.id}}</li>
    <li>title:{{$route.query.title}}</li>
    <li>content:{{$route.query.content}}</li> -->
  <!-- 同时接收params参数和query参数 -->
    <!-- <li>id:{{$route.params.id}}</li>
    <li>title:{{$route.query.title}}</li>
    <li>content:{{$route.query.content}}</li> -->

    <!-- 像上边那样写还是很麻烦的，怎么能直接去取params参数和query参数用呢？
          就可以使用路由的props属性，通过路由中的props属性给路由组件传递props
    -->
    <li>id:{{id}}</li>
    <li>title:{{title}}</li>
    <li>content:{{content}}</li>
  </ul>
</template>

<script>
  export default {
    name:"Detail",
    props:["id","title"],
    data() {
      return {
        content:''
      }
    },
    // 路由参数延迟接受
    watch:{
      $route:{
        immediate:true,
        deep:true,
        handler(newRoute){
          setTimeout(() => {
            console.log(this);
            this.content = newRoute.query.content
          }, 1000);
        }
      }
    }
  }
</script>

<style>

</style>