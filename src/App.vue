<template>
  <div class="app">
    <router-view></router-view>
    <div id="switch">
    <img src="./assets/lcsj(1).jpg" alt="" style="margin-left:100px;">
    <transition name="animation"
      @after-enter="show = false"
      @after-leave="show = true"
      appear>
      <img src="./assets/logo.jpg" alt="" style="height:50px;width:50px;border-radius:50%" v-show="show">
    </transition>
    <div class="page">
      <div class="border">
        <component v-bind:is="Change"></component>
        <el-button  @click="ModeChange('InputBox')">登录</el-button>
        <el-button  @click="ModeChange('Register')">注册</el-button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import InputBox from './components/InputBox.vue'
import Register from './components/Register.vue'
export default {
  name: 'App',
  components:{InputBox, Register},
  created() {
    this.$store.dispatch("UsersData");
  },
   mounted() {
    this.$store.dispatch("loadData");
  },
  data(){
    return{
      show:'',
      Change:InputBox,
    }
  },
  methods:{
    ModeChange(val){
      this.Change = val;
    }
  }
}
</script> 
<style scoped>
.page{
  background-image: url('./assets/bgg(1).png');
}
.border{
  margin-left:100px;
  height:440px;
  background-image: url('./assets/dt(1).jpg');
  background-repeat: no-repeat;
}
.border>.el-button{
  vertical-align:middle;
  text-align: center;
  width:70px;
  height:40px;
  float:right;
}
.animation-enter,
.animation-leave-to {
  opacity: 0.1;
}
.animation-enter-active,
.animation-leave-active {
  transition: 2s;
}
.animation-enter-to,
.animation-leave {
  opacity: 1;
}
</style>
