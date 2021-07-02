<template>
  <div>
    <ul>
      <li v-for="(item) in messageArr" :key="item.id">
        <router-link :to="`/home/message/detail/${item.id}/${item.title}/${item.content}`">{{item.title}}</router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:"Message",
    data() {
      return {
        messageArr:[
					{id:'001',title:'消息1',content:'爱抽烟'},
					{id:'002',title:'消息2',content:'爱喝酒'},
					{id:'003',title:'消息3',content:'爱打麻将'},
				]
      }
    },
  }
</script>

<style>

</style>