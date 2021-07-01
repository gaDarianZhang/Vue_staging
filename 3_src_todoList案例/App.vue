<template>
  <div class="container">
    <div class="wrapper">
      <Header :addItem="addItem"/>
      <List :todoItems="todoItems" :updateItem="updateItem" :deleteItem="deleteItem"/>
      <Footer :todoItems="todoItems" :updateAll="updateAll" :deleteDone="deleteDone"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer.vue'
  import List from './components/List.vue'
  import {nanoid} from 'nanoid'
  export default {
    components:{Header,Footer,List},
    data() {
      console.log("data");
      return {
        todoItems:[
					{id:'001',name:'抽烟',done:true},
					{id:'002',name:'喝酒',done:false},
					{id:'003',name:'烫头',done:true},
					{id:'004',name:'敲代码',done:false},
				]
      }
    },
    methods: {
      updateItem(index,event){
        this.todoItems[index].done = event.target.checked;
      },
      addItem(event){
        const name = event.target.value;
        if (!name.trim()) return alert("输入内容不能为空")
        const newObj = {id:nanoid(8),name,done:false}
        this.todoItems.unshift(newObj)
        event.target.value = ""
      },
      deleteItem(index){
        if (confirm("确定要删除该项吗？")) {
          this.todoItems.splice(index,1)
        }
      },
      updateAll(done){
        this.todoItems = this.todoItems.map(item=>({...item,done}))
      },
      deleteDone(){
        if (confirm("确定删除所有已完成项？")) {
          this.todoItems = this.todoItems.filter(item=>!item.done)
        }
      }
    },
    watch:{
      todoItems(newValue,old){
        console.log("todoItems变了");
        console.log(newValue);
        console.log(old);
      }
    }
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