<template>
  <div class="container">
    <div class="wrapper">
      <Header/>
      <List/>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer.vue'
  import List from './components/List.vue'
  export default {
    components:{Header,Footer,List}
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    background-color: rgb(221, 210, 181);
  }
  ul,li{
    list-style: none;
    
  }
  .btn{
    padding: 0 7px;
    height: 28px;
    border: none;
    border-radius: 5px;
    background-color: rgb(230, 40, 40);
    cursor: pointer;
    color: rgb(248, 252, 255);
  }
  .btn:hover{
    background-color: rgb(194, 34, 34);
  }
  .btn:active{
    box-shadow: inset 1px 1px 6px 2px rgba(104, 17, 17, 0.3);
  }

  .container{
    width: 600px;
    /* height: 100px; */
    margin: 100px auto 0;
    background-color: rgb(247, 239, 239);
  }
  .container .wrapper{
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }

</style>