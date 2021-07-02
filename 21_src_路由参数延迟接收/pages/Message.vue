<template>
  <div>
    <ul>
      <li v-for="(item) in messageArr" :key="item.id">
        <!-- 携带params参数 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}/${item.content}`">{{item.title}}</router-link>&nbsp;&nbsp; -->
        <!-- 携带query参数 -->
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}&content=${item.content}`">{{item.title}}</router-link> -->
        <!-- 同时携带params参数和query参数 -->
        <!-- <router-link :to="`/home/message/detail/${item.id}?title=${item.title}&content=${item.content}`">{{item.title}}</router-link> -->

        <router-link 
          :to="{
            name:'detailInfo',
            params:{id:item.id},
            query:{title:item.title,content:item.content}
          }"
        >{{item.title}}</router-link>
        &nbsp;
        <button @click="replaceDetail(item)">repalce查看详情</button>
        <button @click="pushDetail(item)">push查看详情</button>
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
    methods: {
      replaceDetail(item){
        // 注意，用的是$router，不是$route
        this.$router.replace({
            name:'detailInfo',
            params:{id:item.id},
            query:{title:item.title,content:item.content}
          })
      },
      pushDetail(item){
        // 注意，用的是$router，不是$route
        this.$router.push({
            name:'detailInfo',
            params:{id:item.id},
            query:{title:item.title,content:item.content}
          })
      }
    },
    mounted(){
      console.log("Message挂载了");
    },
    beforeDestroy(){
      console.log("Message组件要销毁了");
    }
  }
</script>

<style>

</style>