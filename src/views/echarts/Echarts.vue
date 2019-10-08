<template>
  <div id="echarts" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    initEcharts() {
      let myChart = this.$echarts.init(document.getElementById("echarts"));
      console.log("myChart", myChart);
      let option = {
        title: {
          text: "ECharts 入门示例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    this.initEcharts();
  }
};
</script>

<style></style>
