<template>
  <div id="areaLineChartSms"></div>
</template>

<script>
export default {
  name:'areaLineChartSms',
  data(){
    return{
      undefined:0
    }
  },
  props:['areaLineChartSmsData'],
  watch:{
    'areaLineChartSmsData':function (n,o) {
      var temp = n;
      this.updateDiagram(temp);
    }
  },
  methods:{
    drawDiagram:function () {
	  var _this = this;
      var attribute = JSON.parse(this.areaLineChartSmsData);
      let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);

	  diagram.setOption({
        title: {
					text: attribute[0].text,
					x:'left',
					textStyle: {
						fontWeight: 'bold',
						fontSize: 16,
						color: '#FFFFFF'
					},
					// top: '3%'
				},
		legend: {
			top:25,
			data: attribute[0].legend,
			itemGap: 10,
			itemWidth : 40,
			height:10,
			selected: {},
			selectedMode: 'single',
			x : 'right',
			textStyle:{
              color:'auto',
             }
			 
         },
				tooltip: {
					trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
					axisPointer: {
						lineStyle: {
							color: '#57617B'
						}
					}
				},
				// grid: {
				// 	left: '3%', //grid 组件离容器左侧的距离。
				// 	right: '4%', //grid 组件离容器右侧的距离。
				// 	bottom: '3%', //grid 组件离容器下侧的距离。
				// 	containLabel: true, //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
				// 	x2: '100%'
				// },
				xAxis: [{
					type: 'category',
					boundaryGap: attribute[0].boundaryGap, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
					axisLine: {
						lineStyle: {
							color: '#57617B' //坐标轴线线的颜色。
						}
					},
					axisLabel: {
						interval: 0,
						textStyle: {
							fontWeight: 'lighter',
							color: '#FFFFFF',
							fontSize: 8 //文字的字体大小
						}
					},
					axisTick:{
						show: attribute[0].show,
						interval: 0
					},
					data: attribute[0].xLabel
				}],
				yAxis: [{
					type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
					name: attribute[0].yName, //坐标轴名称。
					nameTextStyle:{
						color:'#D9D9D9',
					},
					min: 0,
					// max: attribute[0].max,
					axisTick: {
						show: false //是否显示坐标轴刻度
					},
					axisLine: {
						lineStyle: {
							color: '#57617B' //坐标轴线线的颜色
						}
					},
					axisLabel: {
						margin: 10, //刻度标签与轴线之间的距离
						textStyle: {
							fontWeight: 'lighter',
							color: '#D9D9D9',
							fontSize: 14 //文字的字体大小
						}
					},
					splitLine: {
						lineStyle: {
							color: '#57617B' //分隔线颜色设置
						}
					}
				}],
				series: [
					{
						type: 'line',
						smooth: true,
						name : attribute[0].legend[0],
						showSymbol: attribute[0].showSymbol,
						areaStyle: {
							normal: {
								color: attribute[0].color[0]//'#468FE0' //面积颜色
							}
						},
						itemStyle: {
							normal: {
								color: attribute[0].color[0],
							}
						},
						data: attribute[0].data1
					},
					{
						type: 'line',
						smooth: true,
						name : attribute[0].legend[1],
						showSymbol: attribute[0].showSymbol,
						areaStyle: {
							normal: {
								color: attribute[0].color[1]//'#468FE0' //面积颜色
							}
						},
						itemStyle: {
							normal: {
								color: attribute[0].color[1],
							}
						},
						data: attribute[0].data2
					},
					{
						type: 'line',
						smooth: true,
						name : attribute[0].legend[2],
						showSymbol: attribute[0].showSymbol,
						areaStyle: {
							normal: {
								color: attribute[0].color[2]//'#468FE0' //面积颜色
							}
						},
						itemStyle: {
							normal: {
								color: attribute[0].color[2],
							}
						},
						data: attribute[0].data3
					},
					{
						type: 'line',
						smooth: true,
						name : attribute[0].legend[3],
						showSymbol: attribute[0].showSymbol,
						areaStyle: {
							normal: {
								color: attribute[0].color[3]//'#468FE0' //面积颜色
							}
						},
						itemStyle: {
							normal: {
								color: attribute[0].color[3],
							}
						},
						data: attribute[0].data4
					},
					{
						type: 'line',
						smooth: true,
						name : attribute[0].legend[4],
						showSymbol: attribute[0].showSymbol,
						areaStyle: {
							normal: {
								color: attribute[0].color[4]//'#468FE0' //面积颜色
							}
						},
						itemStyle: {
							normal: {
								color: attribute[0].color[4],
							}
						},
						data: attribute[0].data5
					},

					{
						type: 'line',
						smooth: true,
						name : attribute[0].legend[5],
						showSymbol: attribute[0].showSymbol,
						areaStyle: {
							normal: {
								color: attribute[0].color[5]//'#468FE0' //面积颜色
							}
						},
						itemStyle: {
							normal: {
								color: attribute[0].color[5],
							}
						},
						data: attribute[0].data6
					}
				
				]
      })
    },
    updateDiagram:function (temp) {
       var attribute = JSON.parse(temp);
        let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);
        var option_old = diagram.getOption();
        option_old.series[1].data = eval(attribute[0].daysData1);
        diagram.setOption(option_old);
	},
	


  },
  mounted(){
    this.drawDiagram();
  }
}
</script>

<style scoped src="../../resource/css/echarts/areaLineChartSms.css"></style>
