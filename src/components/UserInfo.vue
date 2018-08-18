<template>
  <transition name="fade">
    <div class="info">
    <img class="portrait"/>
    <div class="user-info">
       <h1 class="nick" v-text="'Hello></h1>
       <a href="javascript:;" class="logout" @click="logout" v-if="!isLogouting">[退出]</a>
    </div>
    </div>
    </transition>
</template>
<script>
export default{
    name:'UserInfo',
    data(){
        return{
            isLogouting:false,
        }
    },
    methods:{
        logout(){
            this.isLogouting = true;
            this.delCookie('session');

            setTimeout(()=>{
                this.$router.push('/login/');
                this.isLogouting = false;
            },3000)
        }
    }
}

</script>
<style scoped>
.portrait{background-image: url(../../src/assets/profile.png);width: 200px; height: 200px;}
.info{
    background: #50E3CE;
    width: 100%;
    heigth:600px;
    color:#fff;
    text-align:center;
    paddingtop:170px;
}
portrait{
    width: 200px;
    height: 200px;
    overflaw: hidden;
    -webkit-border-radius:100%;
    -moz-border-radius:100%;
    -ms-border-radius:100%;
    -o-border-radius:100%;
    border-radius:100%;background-color:#cccccc;margin:0 auto 15px; boreder:2px solid #2c3e50;display:block;
}
.user-info{
    margin: 38px 0 0 0;
    vertical-align: top;
    display: inline-block;
}
.logout{
    color: #2c350;
    display: block;
    margin-top: 20px;
}
</style>