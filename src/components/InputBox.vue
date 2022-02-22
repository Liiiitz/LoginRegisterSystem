<template>
  <div class="LogIn">
      <div class="UsersLogin">
          <span>登陆账号：</span>
          <el-input type="text" :title="usernameProxy.Tip" v-model="usernameProxy.username"></el-input>
      </div>
      <div class="LoginPassword">
          <span>登陆密码：</span>
          <el-input type="password" v-model="LoginCode"></el-input>
      </div>
      <div class="code">
          <span>验&nbsp; 证&nbsp; 码&nbsp; :</span>
          <el-input type="text" v-model="TextContent"></el-input>
          <ConfirmCode :confirmNum="confirmCode" class="confirm_code" />
      </div>
      <div class="LoginButton">
        <el-button @click="Examinate()"></el-button>
        <el-button @click="reset()"></el-button>
      </div>
  </div>
</template>

<script>
import ConfirmCode from './ConfirmCode.vue'
export default {
    name:'InputBox',
    components:{ConfirmCode},
    data(){ 
        return{
            usernameProxy: usernameProxy,
            username: "",
            LoginCode:'',
            TextContent: "",
            confirmCode: "",
        }
    },
  created() {
    this.getCode();
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    getCode() {
      this.confirmCode = Math.random().toString(36).slice(2, 6);
    },
     CheckUsername() {
      if (this.usernameProxy.username == this.users[0].username) {
        return true;
      } else {
        alert("用户名不存在");
        return false;
      }
    },
    CheckCode(){
      if(this.TextContent === this.confirmCode){
        return true;
      }else{
        alert("验证码错误");
        return false;
      }
    },
    CheckPassword() {
      if (this.LoginCode == this.users[0].LoginCode) {
        return true;
      } else {
        alert("密码错误");
        return false;
      }
    },
    Examinate(){
        if ( this.CheckUsername() &&
        this.CheckPassword() &&
        this.CheckCode()) {
          this.$router.replace("/UserLogin");
          document.getElementById("switch").style.display="none";
      } else {
        this.confirmCode = Math.random().toString(36).slice(2, 6);
        alert("登录失败");
      }
    },
    reset(){
            this.confirmCode = Math.random().toString(36).slice(2, 6)
    },
  }
  }
  var usernameProxy = new Proxy(
  {
    username: "",
    Tip: "",
  },
  {
    get(data, prop) {
      return data[prop];
    },
    set: function (data, prop, value) {
      data[prop] = value;
      if (prop.toString() == "username") {
        if (!/\W/.test(value) && /\d/.test(value) && /_/.test(value)) {
          usernameProxy.Tip = "输入合法";
        } else {
          usernameProxy.Tip = "输入不合法";
        }
      }
      return true;
    },
  }
);
</script>

<style>
.LogIn{
    float:right;
    margin-right:100px;
    margin-top:30px;
    height:400px;
    width:500px;
    background-image: url('./../assets/dlkk(1).jpg');
    background-repeat: no-repeat;
}
.UsersLogin{
    font-size: 13px;
    margin-top:80px;
    margin-left: 50px;
}
.LoginPassword,.code{
    font-size:13px;
    margin-top:20px;
    margin-left:50px;
}
.el-input{
    margin-left:20px;
    margin-top:15px;
    height:25px;
    width:180px;
}
.code>.el-input{
    width:100px;
}
.LoginButton{
    display: inline-block;
    margin-top:30px;
    margin-left:40px;
}
.LoginButton>.el-button:nth-child(1){
    height:40px;
    width:125px;
    background-image:url('./../assets/login(1).jpg');
}
.LoginButton>.el-button:nth-child(2){
    height:40px;
    width:125px;
    margin-left:20px;
    background-image:url('./../assets/cz(1).jpg');
}
.confirm_code{
    float: right;
    margin-right:160px;
    margin-top:15px;
}
</style>