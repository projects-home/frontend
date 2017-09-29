<template>
  <div class="ringChart"></div>
</template>

<script>
export default {
  name:'ringChart',
  data(){
    return{
      undefined:0
    }
  },
  props:{
		ringChartData:{

		},
		tmp:{
      type:String,
      default:"0"
    },
	},
  watch:{
    'ringChartData':function (n,o) {
      var temp = n;
      this.updateDiagram(temp);
    }
  },
  methods:{
    drawDiagram:function () {
			var attribute = JSON.parse(this.ringChartData);
      let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[parseInt(this.tmp)]);
			diagram.setOption({
        // title: {
				// 	text: '批价话单数近3个月数据环比',
				// 	textStyle: {
				// 		fontWeight: 'bold',
				// 		fontSize: 16,
				// 		color: '#FFFFFF'
				// 	},
				// 	left: '20%',
				// 	top: '3%'
				// },
				grid: {
					top: '30%',
					bottom: '23%'
				},
				xAxis: [{
					type: 'category',
					axisLine: {
						show: false
					},
					axisTick: {
						show: false
					},
					axisLabel: {
						interval: 0,
						textStyle: {
							fontWeight: 'normal',
							color: '#D9D9D9',
							fontSize: 18 //文字的字体大小
						}
					},
					data: [attribute[0].xData]
				}],
				yAxis: [{
					show: false
				}],
				series: [{
					name: attribute[0].xData,
					center: [
						'50%',
						'40%'
					],
					radius: [
						attribute[0].radius[0],
						attribute[0].radius[1]
					],
					type: 'pie',
					startAngle: 90,
					labelLine: {
						normal: {
							show: false
						}
					},
					data: [{
						value: attribute[0].value,
						name: attribute[0].dataName,
						tooltip: {
							show: false
						},
						label: {
							normal: {
								position: 'center',
								show: true,
								textStyle: {
									fontSize: '23',
									fontWeight: 'normal',
									color: attribute[0].color
								}
							}
						},
						itemStyle: {
							normal: {
								color: attribute[0].color,
								shadowBlur: 4,
            		shadowColor: attribute[0].color
							},
							emphasis: {
								color: attribute[0].color,
								shadowBlur: 4,
            		shadowColor: attribute[0].color
							}
						},
						hoverAnimation: false
					}, {
						value: 100-attribute[0].value,
						name: '',
						tooltip: {
							show: false
						},
						itemStyle: {
							normal: {
								color: '#1B1B1B'
							},
							emphasis: {
								color: '#1B1B1B'
							}
						},
						hoverAnimation: false
					}]
				}]
      })
    },
    updateDiagram:function (temp) {
			var attribute = JSON.parse(temp);
      let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[parseInt(this.tmp)]);
      var option = diagram.getOption();
			option.series[0].data[0].name = attribute[0].dataName;
			option.series[0].data[0].value = attribute[0].value;
			option.series[0].data[1].value = 100 - attribute[0].value;
      diagram.setOption(option);
    }


  },
  mounted(){
    this.drawDiagram();
  }
}
</script>

<style scoped src="../../resource/css/echarts/ringChart.css"></style>
