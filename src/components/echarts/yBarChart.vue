<template>
  <div id="yBarChart"></div>
</template>

<script>
  export default {
    name:'yBarChart',
    data(){
      return{
        undefined:0
      }
    },
    props:['yBarChartValue'],
    watch:{
      'yBarChartValue':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },
    methods:{

      drawDiagram:function ()
       {
        var attribute = JSON.parse(this.yBarChartValue);
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption({
          grid: {
            left: '5%',
            right: '4%',
            top: '13%',
            width: '55%',
            height: '70%',
            containLabel: true
          },
          xAxis: [{
            type: 'value',
            position: 'top',
            name: attribute[0].xName, //坐标轴名称。
            nameTextStyle:{
                      color:'#FFF',
                      fontSize:14
                  },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            }

          }],
          yAxis: [{
            type: 'category',
            name: '                          '+attribute[0].yName,
            nameTextStyle:{
              fontSize: 15,
              fontWeight: 'bold',
              color:'#FFF'
            },
            boundaryGap: true,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: null,
              textStyle: {
                color: '#FFF',
                fontSize: 15
              }
            },
            axisLine: {
              lineStyle: {
                color: '#58659B'
              }
            },
            splitLine: {
              show: false
            },
            data: [attribute[0].month[0]+'\n\n\n'+attribute[0].month[1]+'\n\n\n'+attribute[0].month[2]]
          }],
          series: [{
            name: attribute[0].month[0],
            type: 'bar',
            barWidth: 23,
            label: {
              normal: {
                show: true,
                color: '#FFF',
                position: 'right',
                fontSize: 14
              }

            },
            itemStyle:{
              normal: {
                show: true,
                color: '#0D8FD5',
                barBorderRadius: 0
              }
            },
            data: [attribute[0].data[0]]
          }, {type: 'bar'}, {
            name: attribute[0].month[1],
            type: 'bar',
            barWidth: 23,
            label: {
              normal: {
                show: true,
                color: '#FFF',
                position: 'right',
                fontSize: 14
              }

            },
            itemStyle:{
              normal: {
                show: true,
                color: '#72C4F0',
                barBorderRadius: 0
              }
            },
            data: [attribute[0].data[1]]
          }, {type: 'bar'}, {
            name: attribute[0].month[2],
            type: 'bar',
            barWidth: 23,
            label: {
              normal: {
                show: true,
                color: '#FFF',
                position: 'right',
                fontSize: 14
              }

            },
            itemStyle:{
              normal: {
                show: true,
                color: '#004EFF',
                barBorderRadius: 0
              }
            },
            data: [attribute[0].data[2]]
          }]
        })
      },
      updateDiagram:function (temp) {
        var attribute = JSON.parse(temp);
        let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);
        var option_old = diagram.getOption();
        option_old.series[0].data = attribute[0].data[0];
        option_old.series[2].data = attribute[0].data[1];
        option_old.series[4].data = attribute[0].data[2];
        diagram.setOption(option_old);
      }
    },
    mounted(){
     // console.log(eval(attribute[0].legendMonth));
      this.drawDiagram();
    }
  }
</script>

<style scoped src="../../resource/css/echarts/yBarChart.css"></style>
