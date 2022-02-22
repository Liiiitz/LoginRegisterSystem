<template>
  <div class="app">
    <el-container>
      <el-header>
        <el-row >
            <el-col :span="4">天气预报系统</el-col>
            <el-col :span="4" :offset="14">
              <i class="el-icon-user">&nbsp;&nbsp;&nbsp;admin_123</i>
            </el-col>
            <el-col :span="2"><a href="" class="el-icon-back">退出</a></el-col>
        </el-row>
      </el-header>
    </el-container>
    <el-container>
      <el-aside>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
        >
          <el-menu-item index="0" @click="isCollapse = !isCollapse">
            <i class="el-icon-menu"></i>
          </el-menu-item>
          <el-menu-item index="1" @click="ModeChange('ViewChart')">
            <i class="el-icon-view"></i>
           <span slot="title">图形</span>
          </el-menu-item>
          <el-menu-item index="2" @click="ModeChange('Document')">
            <i class="el-icon-document"></i>
            <span slot="title">文档</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <component v-bind:is="Change"></component>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ViewChart from '@/components/ViewChart';
import Document from '@/components/Document';
import "element-ui/lib/theme-chalk/index.css";
export default {
    name:'UserLogin',
    data:function(){
      return {
        Change:ViewChart,
        isCollapse: false,
      };
    },
    components:{ViewChart,Document},
    methods:{
      ModeChange(val){
      this.Change = val;
      }
    }
}
</script>

<style>
.el-header{
  background-color:#0776e6;
}
.el-row>.el-col{
  font-size:20px;
  color:aliceblue;
  line-height:60px;
}
.el-aside{
  width:auto !important;
  height:100%;
}
.el-col a{
  text-decoration: none;
  color:aliceblue;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
}
</style>