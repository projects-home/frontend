<template>
  <div id="barChartSms"></div>
</template>

<script>
  export default {
    name:'barChartSms',
    data(){
      return{
        undefined:0
      }
    },
    props:['barChartSmsValue'],
    watch:{
      'barChartSmsValue':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },
    methods:{

      drawDiagram:function ()
       {
        var attribute = JSON.parse(this.barChartSmsValue);
       // console.log(eval(attribute[0].monthData));
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption
        ({
          title: {
            top:10,
            text: attribute[0].title,
            textStyle:{
              color:'white',
            }
          },
         legend: {
           top:10,
          // data: ['bar', 'bar2','bar3'],//legendMonth
           data: attribute[0].legend,
           x : 'right',
           align: 'left',
           textStyle:{
             color:'white'
           }
         },
          xAxis: {
            data: eval(attribute[0].xLabel),
            silent: false,
            splitLine: {
              show: false
            },
            axisLabel:{color:'white'},
            axisLine:{
              lineStyle:{color:'#a4a9bc'}
            },

          },
           yAxis:
           [{
              axisLabel:{color:'white'},
              name: attribute[0].unitLeft,//unit
              type : 'value',
              splitLine : {
				      	show : false
              },
              axisLine:{
                 lineStyle:{color:'#a4a9bc'}
              }
            },
            {
              type:'value',
              axisLabel:{color:'white'},
              name: attribute[0].unitRight,//unit
              splitLine : {
				      	show : false
              },
              axisLine:{
                 lineStyle:{color:'#a4a9bc'}
              }
            }

          ],
          series: [{
            //name: 'bar', 
            name: attribute[0].legend[0],
            type: 'bar',
            data: eval(attribute[0].daysData1),
            animationDelay: function () {
              return 1 * 10;
            },
            barWidth: 16,
            itemStyle:{
              normal:{
                color: function (params){
                  var colorList = eval(attribute[0].color1);
                  return colorList[params.dataIndex];
                },
                label : {
						  	  show : true,
						    	position : 'inside'
                },
                label : {
						  	      show : true,
						        	position : 'inside'
					    	}
              }
            },
          },
            {
              //name: 'bar2',
              name: attribute[0].legend[1],
              type: 'bar',
              data: eval(attribute[0].daysData2),
              animationDelay: function () {
                return 1 * 10 + 100;
              },
              barWidth: 16,
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = eval(attribute[0].color2);
                    return colorList[params.dataIndex];
                  },
                  label : {
						  	      show : true,
						        	position : 'inside'
					    	  }
                }
              },
          },
            {
              //name: 'bar3',
              name: attribute[0].legend[2],
              type: 'bar',
              yAxisIndex:1,
              data: eval(attribute[0].daysData3),
              animationDelay: function () {
                return 1 * 10 + 100;
              },
              barWidth: 16,
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = eval(attribute[0].color3);
                    return colorList[params.dataIndex];
                  },
                  label : {
						  	      show : true,
						        	position : 'inside'
					    	  }
                }
              },
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

<style scoped src="../../resource/css/echarts/barChartSms.css"></style>
