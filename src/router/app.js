import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../components/App.vue'
import Login from '../components/Login.vue'
import UserInfo from '../components/UserInfo.vue'

Vue.use(VueRouter)
const router=new VueRouter({
  routes: [{
    path:'/login',
    component:Login
  }, {
    path:'/user_info',
    component:UserInfo
  }]
})
 function getCookie(name){
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg))
    return (arr[2]);
    else
    return null;
 } 
 Vue.prototype.getCookie = getCookie;

Vue.prototype.delCookie =(name)=>{
       var exp = new Date();
       exp.setTime(exp.getTime() - 1);
       var cval = getCookie(name);
       if(cval != null)
       document.cookie = name + "=" +cval + ";expires=" + exp.toGMTString();
}

/*! lhq 2016-09-20 */
function hex_sha1(a){return binb2hex(core_sha1(AlignSHA1(a)))}function sha1_vm_test(){return"a9993e364706816aba3e25717850c26c9cd0d89d"==hex_sha1("abc")}function core_sha1(a){for(var b=a,c=Array(80),d=1732584193,e=-271733879,f=-1732584194,g=271733878,h=-1009589776,i=0;i<b.length;i+=16){for(var j=d,k=e,l=f,m=g,n=h,o=0;o<80;o++){o<16?c[o]=b[i+o]:c[o]=rol(c[o-3]^c[o-8]^c[o-14]^c[o-16],1);var p=safe_add(safe_add(rol(d,5),sha1_ft(o,e,f,g)),safe_add(safe_add(h,c[o]),sha1_kt(o)));h=g,g=f,f=rol(e,30),e=d,d=p}d=safe_add(d,j),e=safe_add(e,k),f=safe_add(f,l),g=safe_add(g,m),h=safe_add(h,n)}return new Array(d,e,f,g,h)}function sha1_ft(a,b,c,d){return a<20?b&c|~b&d:a<40?b^c^d:a<60?b&c|b&d|c&d:b^c^d}function sha1_kt(a){return a<20?1518500249:a<40?1859775393:a<60?-1894007588:-899497514}function safe_add(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function rol(a,b){return a<<b|a>>>32-b}function AlignSHA1(a){for(var b=(a.length+8>>6)+1,c=new Array(16*b),d=0;d<16*b;d++)c[d]=0;for(d=0;d<a.length;d++)c[d>>2]|=a.charCodeAt(d)<<24-8*(3&d);return c[d>>2]|=128<<24-8*(3&d),c[16*b-1]=8*a.length,c}function binb2hex(a){for(var b=hexcase?"0123456789ABCDEF":"0123456789abcdef",c="",d=0;d<4*a.length;d++)c+=b.charAt(a[d>>2]>>8*(3-d%4)+4&15)+b.charAt(a[d>>2]>>8*(3-d%4)&15);return c}function calcDigest(){var a=hex_sha1(document.SHAForm.SourceMessage.value);document.SHAForm.MessageDigest.value=a}var hexcase=0,chrsz=8;
var app = new Vue({
  data:{},
  el: '#app',
  render: h=>h(App),
  router,
  created(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      if(!this.getCookie('session')){
        this.$router.push('/login');
      }else{
        this.$router.push('/user_info');
      }
    }
  }
})
