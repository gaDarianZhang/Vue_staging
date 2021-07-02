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
    <li>id:{{$route.params.id}}</li>
    <li>title:{{$route.query.title}}</li>
    <li>content:{{$route.query.content}}</li>
    
  </ul>
</template>

<script>
  export default {
    name:"Detail"
  }
</script>

<style>

</style>