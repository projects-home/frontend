<template>
  <div id="areaLineChart"></div>
</template>

<script>
export default {
  name:'areaLineChart',
  data(){
    return{
      undefined:0
    }
  },
	props:{
    areaLineChartData:{
      type:String
    },
    tmp:{
      type:String,
      default:"0"
    }
  },
  watch:{
    'areaLineChartData':function (n,o) {
      var temp = n;
      this.updateDiagram(temp);
    }
  },
  methods:{
    drawDiagram:function () {
			var _this = this;
			var attribute = JSON.parse(this.areaLineChartData);
			var tmp = parseInt(this.tmp);
      let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[tmp]);
			diagram.setOption({
        title: {
					text: attribute[0].text,
					textStyle: {
						fontWeight: 'bold',
						fontSize: 20,
						color: '#FFFFFF'
					},
					left: '30%',
					top: '3%'
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
          data: 'PGW'
        },
				/*tooltip: {
					trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
					axisPointer: {
						lineStyle: {
							color: '#57617B'
						}
					}
				},*/
				grid: {
					left: '3%', //grid 组件离容器左侧的距离。
					right: '4%', //grid 组件离容器右侧的距离。
					bottom: '3%', //grid 组件离容器下侧的距离。
					containLabel: true, //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
					x2: '100%'
				},
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
							fontSize: attribute[0].font==12?12:13 //文字的字体大小
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
						color:'#FFF',
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
							color: '#FFF',
							fontSize: 14 //文字的字体大小
						}
					},
					splitLine: {
						lineStyle: {
							color: '#57617B' //分隔线颜色设置
						}
					}
				}],
				series: [{
					type: 'line',
					smooth: true,
					symbol: 'circle',
					symbolSize: 5,
					showSymbol: attribute[0].showSymbol,
					lineStyle: {
						normal: {
							width: 1
						}
					},
					areaStyle: {
						normal: {
							color: _this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#3F7DA9'// 77CBEC
							}, {
								offset: 0.8,
								color: '#264571'// 468FE0
							}], false),
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 10
						}
					},
					itemStyle: {
						normal: {
							color: attribute[0].color,
							borderColor: 'rgba(0,136,212,0.2)',
							borderWidth: 1
						}
					},
					data: attribute[0].data
				}]
      })
    },
    updateDiagram:function (temp) {
			var attribute = JSON.parse(temp);
			var tmp = parseInt(this.tmp);
      let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[tmp]);
      var option = diagram.getOption();
      option.series[0].data = attribute[0].data;
      diagram.setOption(option);
    }


  },
  mounted(){
    this.drawDiagram();
  }
}
</script>

<style scoped src="../../resource/css/echarts/areaLineChart.css"></style>
