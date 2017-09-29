<template>
  <div id="lineChart"></div>
</template>

<script>
export default {
  name:'lineChart',
  data(){
    return{
      undefined:0
    }
  },
  props:{
    lineChartValue:{
      type:String
    },
    tmp:{
      type:String,
      default:"0"
    }
  },
  watch:{
    'lineChartValue':function (n,o) {
      var temp = n;
      this.updateDiagram(temp);
    }
  },
  methods:{
    drawDiagram:function () {
      var attribute = JSON.parse(this.lineChartValue);
      var tmp = parseInt(this.tmp);
      let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[tmp]);
      // console.log(document.getElementsByClassName(attribute[0].className)[0])
      diagram.setOption({
        title: {
          text: attribute[0].text,
          top:10,
          textStyle:{
            color:'white',
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        grid:{
          top: '32%',
          bottom: '12%',
          left: '10%',
          right: 0
        },
        legend: {
          x: 'right',
          y: '40',
          textStyle:{
            color: 'white'
          },
          itemWidth: 10,
          itemHeight: 7,
          itemGap: 5,
          data: attribute[0].legend
        },
        xAxis:  {
          type: 'category',
          boundaryGap: true,
          axisLabel:{color:'white'},
          axisLine:{
            lineStyle:{color:'#a4a9bc'}
          },
          data: attribute[0].xData
        },
        yAxis: {
          type: 'value',
          name: attribute[0].yName, //坐标轴名称。
          nameTextStyle:{
              color: 'white'
            },
          axisLabel:{color:'white'},
          axisLine:{
            lineStyle:{color:'#a4a9bc'}
          },
          axisTick:{
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#57617B' //分隔线颜色设置
            }
          }
        },
        series: [
          {
            name: attribute[0].legend[0],
            type:'line',
            itemStyle:{
              normal:{
                color: attribute[0].lineColor[0]
              }
            },
            data: attribute[0].data[0]
          },
          {
            name: attribute[0].legend[1],
            type:'line',
            itemStyle:{
              color: attribute[0].lineColor[1]
            },
            data: attribute[0].data[1]
          },
          {
            name: attribute[0].legend[2],
            type:'line',
            itemStyle:{
              color: attribute[0].lineColor[2]
            },
            data: attribute[0].data[2]
          },
          {
            name: attribute[0].legend[3],
            type:'line',
            itemStyle:{
              color: attribute[0].lineColor[3]
            },
            data: attribute[0].data[3]
          }
        ]
      })
    },
    updateDiagram:function (temp) {
      //unrealized method
      console.log("update diagram")
    }


  },
  mounted(){
    this.drawDiagram();
  }
}
</script>

<style scoped src="../../resource/css/echarts/lineChart.css"></style>
