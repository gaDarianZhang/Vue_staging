<template>
  <div>
    <h2 class="name">学校名字：{{name}}</h2>
    <h2 class="address">学校地址：{{address}}</h2>
    <span>收到了{{prop1}}--{{prop2}}--{{prop3}}</span>
  </div>
</template>

<script>
  export default {
    name:"School",
    data() {
      console.log(this.prop1,this.name);//"props 1"  undefined
      return {
        name:"家里蹲大学",
        address:"家里"
      }
    },
    props:{
      prop1:{
        type:String,
        required:true,
        default:'default prop1'
      },
      prop2:{
        type:Number
      },
      prop3:{
        type:String
      }
    },
    /* 
      这种写法时要用字符串，否则将prop1视为一个变量，那当然目前是没有这个变量的
    */
    // props:["prop1","prop2"],
  }
</script>

<style scoped>
  .name{
    background-color: aquamarine;
    color: bisque;
  }
  .address{
    background-color: cadetblue;
  }
</style>