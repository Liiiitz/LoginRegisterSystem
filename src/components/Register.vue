<template>
  <div class="Register">
      <div class="UserRegister">
          用&nbsp;户&nbsp;名&nbsp;：
          <el-input type="text" v-model="username"></el-input>
      </div>
      <div class="SetCode">
          输入密码：
          <el-input type="password" v-model="password"></el-input>
      </div>
      <div class="ConfirmCode">
          确认密码：
          <el-input type="password" v-model="confirm"></el-input>
      </div>
      <br>
      <br>
      <div class="group">
      <el-button type="primary" @click=register()>注册</el-button>
      <el-button type="warning" @click=reset()>登录</el-button>
      </div>
  </div>
</template>

<script>
export default {
    name:'Register',
    data(){
        return{
            username: "",
            password: "",
            confirm:"",
        }
    },
    methods:{
        register(){
            alert("To be continued");
        },
        reset(){
        }
    }
}
</script>

<style>
.Register{
     float:right;
    margin-right:185px;
    margin-top:30px;
    height:360px;
    width:410px;
    background-color:rgb(247,247,247);
}
.UserRegister{
    font-size: 13px;
    margin-top:50px;
    margin-left: 50px;
}
.SetCode,.ConfirmCode{
    font-size: 13px;
    margin-top:20px;
    margin-left: 50px;
}
.group{
    margin-left:70px;
}
.el-button:nth-child(1){
    width:100px;
    margin-right:20px;
}
.el-button:nth-child(2){
    width:100px;
}
</style>