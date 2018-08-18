<template>
<div class="container" id="app">
    <transition name="fade">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    </transition> 
</div>
</template>
<script>
export default{
    name:'app',
    data(){
        return{   
        isLogin:false,
        userInfo:{
            nick:null,
            ulevel:null,
            uid:null,
            portrait:null,
        }
        }
     }
    }
</script>