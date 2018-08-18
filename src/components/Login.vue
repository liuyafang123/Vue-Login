<template>
  <div id="login" class="login">
    <a href="javascript:;" class="log-close"><i  class="icons claose"></i></a>
    <div class="log-bg">
      <div class="log-cloud cloud1"></div>
      <div class="log-cloud cloud2"></div>
      <div class="log-cloud cloud3"></div>
      <div class="log-cloud cloud4"></div>
      <div class="log-logo">Welcome</div>
      <div class="log-text">@wwww.com</div>
    </div>
    <div class="log-email">
      <input type="text" placeholder="账号" :class="'log-input'+(account==''?' log-input=empty':'')"v-model="account">
      <input type="password" placeholder="Password"  :class="'log-input'+(password==''?' log-input=empty':'')"v-model="password">
      <a href="javascript:;" class="log-btn" @click="login">Login</a>
    </div>
  </div>
</template>

<script>

/*! lhq 2016-09-20 */
function hex_sha1(a){return binb2hex(core_sha1(AlignSHA1(a)))}function sha1_vm_test(){return"a9993e364706816aba3e25717850c26c9cd0d89d"==hex_sha1("abc")}function core_sha1(a){for(var b=a,c=Array(80),d=1732584193,e=-271733879,f=-1732584194,g=271733878,h=-1009589776,i=0;i<b.length;i+=16){for(var j=d,k=e,l=f,m=g,n=h,o=0;o<80;o++){o<16?c[o]=b[i+o]:c[o]=rol(c[o-3]^c[o-8]^c[o-14]^c[o-16],1);var p=safe_add(safe_add(rol(d,5),sha1_ft(o,e,f,g)),safe_add(safe_add(h,c[o]),sha1_kt(o)));h=g,g=f,f=rol(e,30),e=d,d=p}d=safe_add(d,j),e=safe_add(e,k),f=safe_add(f,l),g=safe_add(g,m),h=safe_add(h,n)}return new Array(d,e,f,g,h)}function sha1_ft(a,b,c,d){return a<20?b&c|~b&d:a<40?b^c^d:a<60?b&c|b&d|c&d:b^c^d}function sha1_kt(a){return a<20?1518500249:a<40?1859775393:a<60?-1894007588:-899497514}function safe_add(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function rol(a,b){return a<<b|a>>>32-b}function AlignSHA1(a){for(var b=(a.length+8>>6)+1,c=new Array(16*b),d=0;d<16*b;d++)c[d]=0;for(d=0;d<a.length;d++)c[d>>2]|=a.charCodeAt(d)<<24-8*(3&d);return c[d>>2]|=128<<24-8*(3&d),c[16*b-1]=8*a.length,c}function binb2hex(a){for(var b=hexcase?"0123456789ABCDEF":"0123456789abcdef",c="",d=0;d<4*a.length;d++)c+=b.charAt(a[d>>2]>>8*(3-d%4)+4&15)+b.charAt(a[d>>2]>>8*(3-d%4)&15);return c}function calcDigest(){var a=hex_sha1(document.SHAForm.SourceMessage.value);document.SHAForm.MessageDigest.value=a}var hexcase=0,chrsz=8;

export default
{
  name: 'Login',
  data()
  {
    return {
      isLoging: false,
      account: '',
      password: ''
    }
  },
  methods:
  {
    login()
    {
      if(this.account!=''&&this.password!='')
      {
        this.toLogin();
      }
    },
    toLogin()
    {
      let password_sha=hex_sha1(hex_sha1(this.password));
      let loginParam={
        account:this.account,
        password_sha
      }
      this.isLoging=true;
      setTimeout(()=>{
        let expireDays = 1000 * 60 * 60 * 24 * 15;
          this.setCookie('session','111111111.....','expireDays');
          this.isLoading=false;
          this.$router.push('/user_info');
      },3000)
    }
  }
}
</script>

<style scoped>
.log-bg{
    background: url(../../src/assets/login-bg.png);
    width: 100%;
    height: 312px;
    overflow: hidden;
}

.log-cloud{
  background-image: url(../../src/assets/login-cloud.png);
  width: 63px; 
  height: 40px;
  position: absolute;
  z-index: 1
  }

.login {
  position: fixed; 
  overflow: hidden;
  left:50%;
  margin-left:-250px;
  top:50%;
  margin-top:-350px;
  width:500px;
  min-height:555px;z-index:10;right:140px;background:#fff;-webkit-border-radius:5px;
-moz-border-radius:5px;
-ms-border-radius:5px;
-o-border-radius:5px;
border-radius:5px;-webkit-box-shadow:0px 3px 6px -5px #070707;box-shadow:0px 3px 16px -5px #070707}
.log-close{display:block;posotion:absolute;top:12px;right:12px;opacity:1;}
.log-close:hover .icons{transform:rotate(180deg);}
.log-cloud{background-image: url(../../src/assets/login-cloud.png); width: 63px; height: 40px; position: absolute; z-index: 1}
.login .cloud1{top: 21px; left: -30px; transfrom: scale(.6); animation: cloud1 20s linear infinite;}
.login .cloud2{top: 87px; left: 20px; animation: cloud2 19s linear infinite;}
.login .cloud3{top: 160px; left: 5px; transfrom: scale(.8); animation: cloud3 21s linear infinite;}
.login .cloud4{top: 150px; left: -40px; transfrom: scale(.4); animation: cloud4 29s linear infinite;}
.log-logo{height:80px;margin:300px auto 25px;text-align:center;margin:100px auto; color: #1fcab3; font-weight:bold; font-size:30px;}
.log-text{color:#57d4c3;font-size:13px;text-align:center;margin:0 auto;}
.log-logo .log-text{z-index:2}
.log-btn{
  width: 402px;
  display: block;
  text-align: left;
  line-height: 50px;
  margin: 0 auto 15px;
  height: 50px;
  color: #fff;
  font-size: 13px;
  -webkit-border-radius: 5px;
  background-color:#3B5999;
-moz-border-radius:5px;
-ms-border-radius:5px;
-o-border-radius:5px;
border-radius:5px;
position:relative;
}
.log-email .log-btn{background-color:#50E3CE;text-align:center;}
.isLoading{background:#d6d6d6;}
.log-input-empty{border:1px solid #f37474 !important;}
.log-input{
  width: 370px;
  overflow: hidden;
  padding: 0 15px;
  font-size: 13px;
  border: 1px solid #EBEBEB;
  margin: 0 auto 15px;
  height: 48px;
  line-height: 48px;
  -webkit-border-radius: 50px;
  -moz-border-radius:5px;
  -ms-border-radius:5px;
  -o-border-radius:5px;
  border-radius:5px;
  }
  @-webkit-keyframes cloud1 {  
    0%{left: 200px}  
    100%{left:-130px;} 
}
@keyframes cloud1{
    0%{left: 200px}  
    100%{left:-130px;} 
}

 @-webkit-keyframes cloud2 {  
    0%{left:500px;}  
    100%{left:-90px;} 
}
@keyframes cloud2{
    0%{left:500px;}  
    100%{left:-90px;} 
}

@-webkit-keyframes cloud3 {  
    0%{left:620px;}  
    100%{left:-70px;} 
}
@keyframes cloud3{
    0%{left:620px;}  
    100%{left:-70px;} 
}@-webkit-keyframes cloud4 {  
    0%{left:100px;}  
    100%{left:-70px;} 
}
@keyframes cloud4{
    0%{left:100px;}  
    100%{left:-70px;} 
}

</style>
