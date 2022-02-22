<template>
  <div class="app">
    <el-row>
      <el-col :span="12">
        <div id="PieChart" style="width: 600px; height: 300px"></div>
      </el-col>
      <el-col :span="12">
        <div id="BarChart" style="width: 450px; height: 300px"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20">
        <div id="LineChart" style="width: 800px; height: 300px"></div>
      </el-col>
      <el-col :span="2">
        <el-checkbox-group v-model="CheckList">
            <el-checkbox label="温度"></el-checkbox>
            <el-checkbox label="湿度"></el-checkbox>
            <el-checkbox label="光照强度"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name:'ViewChart',
    data(){
        return{
            CheckList: ['温度','湿度','光照强度']
        }
    },
    mounted() {
    let conditionData = this.$store.state.conditionData;
    var BarChart = echarts.init(document.getElementById('BarChart'));
    BarChart.setOption({
      title: {
        text: "条形图",
      },
      legend: {
        selected: {
          temp: true,
          humidity: true,
          light: true,
        },
      },
      tooltip: {},
      dataset: {
        source: conditionData,
      },
      xAxis: { type: "time", name: "时间" },
      yAxis: {},
      series: [
        {
          name: "温度",
          type: "bar",
          encode: {
            x: "time",
            y: "temp",
          },
        },
        {
          name: "湿度",
          type: "bar",
          encode: {
            x: "time",
            y: "humidity",
          },
        },
        {
          name: "光照强度",
          type: "bar",
          encode: {
            x: "time",
            y: "light",
          },
        },
      ],
    });
    var LineChart = echarts.init(document.getElementById('LineChart'));
    LineChart.setOption({
      title: {
        text: "折形图",
      },
      legend: {
        selected: {
          temp: true,
          humidity: true,
          light: true,
        },
      },
      tooltip: {},
      dataset: {
        source: conditionData,
      },
      xAxis: { type: "time", name: "时间" },
      yAxis: {},
      series: [
        {
          name: "温度",
          type: "line",
          encode: {
            x: "time",
            y: "temp",
          },
        },
        {
          name: "湿度",
          type: "line",
          encode: {
            x: "time",
            y: "humidity",
          },
        },
        {
          name: "光照强度",
          type: "line",
          encode: {
            x: "time",
            y: "light",
          },
        },
      ],
    });
    var PieChart = echarts.init(document.getElementById('PieChart'));
    PieChart.setOption({
      title: {
        text: "饼状图",
      },
      legend: {
        orient: "vertical",
        x: "left",
        y: "center",
      },
      series: [
        {
          type: "pie",
          label: {
            normal: {
              show: true,
              formatter: "{b}:{c}({d}%)",
            },
          },
          data: [
            {
              value: 111,
              name: "上午",
            },
            {
              value: 222,
              name: "下午",
            },
            {
              value: 333,
              name: "晚上",
            },
          ],
        },
      ],
    });
  },
}
</script>

<style>
</style>