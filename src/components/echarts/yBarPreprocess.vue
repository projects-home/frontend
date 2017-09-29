<template>
  <div id="yBarPreprocess"></div>
</template>

<script>
  export default {    
    name:'yBarPreprocess',
    data(){
      return{
        undefined:0
      }      
    },
    props:['yBarPreprocessValue'],
    watch:{
      'yBarPreprocessValue':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },
    methods:{

      drawDiagram:function ()
       {
        var attribute = JSON.parse(this.yBarPreprocessValue);
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption
        ({
           legend : {
            selectedMode : false,
            itemGap : 10,
            padding : 2,
            itemWidth : 15,
            orient : attribute[0].orient=='horizontal'?'horizontal':'vertical',
            x : attribute[0].xPosition=='center'?'center':'left',
            textStyle:{
                color:'white',
                fontSize: 16
            },
            data : attribute[0].legend
          },
          grid:{
              left: '15%', //grid 组件离容器左侧的距离。
              top: '30%',
              x: '50%',
              y: '100%',
              width: '',
              height: ''
          },
          xAxis : {
			  show : false
		  },
           yAxis : {
              type : 'category',
              name: attribute[0].unit,
              nameTextStyle:{
                color:'#FFF',
                fontSize: 14
              },
              data :  attribute[0].yLabel,
              splitLine : {
                show : false
              },
              axisLine : {
                show : true,
                lineStyle:{color:'#a4a9bc'}
              },
              axisLabel: {
                textStyle: {
                  fontWeight: 'normal',
                  color: '#FFF',
                  fontSize: 18 //文字的字体大小
                }
              },
              axisTick : {
                show : false
              },
              offset : 10
		},
          series: [{
              name : attribute[0].legend[0],
              type : 'bar',
              data : attribute[0].daysData1,
              stack : 'sum',
              barWidth : 20,
              //barGap: 10, 
              itemStyle : {
                normal : {
                  color : '#006699',//006699
                  barBorderColor : '#006699',//003366
                  barBorderWidth : 2,
                  label : {
                    show : true,
                    position : 'inside'
                  },
                  barBorderRadius : 20,
                }
              }
            }, {
              name : attribute[0].legend[1],
              type : 'bar',
              stack : 'sum',
              data : attribute[0].daysData2,
              itemStyle : {
                normal : {
                  color : '#4cabce',
                  barBorderColor : '#4cabce',
                  barBorderWidth : 2,
                  barBorderRadius : 20,
                  label : {
                    show : true,
                    position : 'inside'
                  }
                }
              }
            }, {
              name : attribute[0].legend[2],
              type : 'bar',
              stack : 'sum',
              data : attribute[0].daysData3,
              itemStyle : {
                normal : {
                  color : '#003366',//006699
                  barBorderColor : '#003366',
                  barBorderWidth : 2,
                  barBorderRadius : 20,
                  label : {
                    show : true,
                    position : 'inside'
                  }
                }
              }
            }, {
              name : attribute[0].legend[3],
              type : 'bar',
              stack : 'sum',
              data : attribute[0].daysData4,
              itemStyle : {
                normal : {
                  color : '#5CACEE',
                  barBorderColor : '#5CACEE',
                  barBorderWidth : 2,
                  barBorderRadius : 20,
                  label : {
                    show : true,
                    position : 'inside'
                  }
                }
              }

            }],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function () {
            return 1 * 5;
          }
        })
      },
      updateDiagram:function (temp) {
        var attribute = JSON.parse(temp);
        let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);
        var option_old = diagram.getOption();
        option_old.series[1].data = eval(attribute[0].daysData1);
        diagram.setOption(option_old);
      }
    },
    mounted(){
     // console.log(eval(attribute[0].legendMonth));
      this.drawDiagram();
    }
  }
</script>

<style scoped src="../../resource/css/echarts/yBarPreprocess.css"></style>
