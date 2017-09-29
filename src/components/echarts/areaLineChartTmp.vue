<template>
  <div id="areaLineChartTmp"></div>
</template>

<script>
export default {
  name:'areaLineChartTmp',
  data(){
    return{
      undefined:0
    }
  },
  props:{
    areaLineChartTmpValue:{
      type:String
		},
		//默认值
		title:{
			type: Object,
			default:function(){
				return {
						text: '面积图标题',
										x:'left',
										textStyle: {
												fontWeight: 'bold',
												fontSize: 16,
												color: '#FFFFFF'
										}
								}
			}
        },
		legend:{
			default:function(){
				return {
            show: true,
            icon: 'rect',
            top:25,
            data: [],
            itemGap: 15,
            itemWidth : 20,
            itemHeight: 6,
            height:10,
            selectedMode: 'single',
            selected: {},
            x : 'right',
            textStyle:{
              color:'#D9D9D9',
             }
				 }
			}
		},
		tooltip:{
			default:function(){
				return {
                    trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
								}
			}
        },
        grid: {
            default: function(){
            return {
                width: '87%',
                height: '50%'
            }
            }
        },
		xAxis:{
			default:function(){
				return {
                    type: 'category',
                    boundaryGap: '', //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
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
                            fontSize: 14 //文字的字体大小
                        }
                    },
                    axisTick:{
                        show: true,
                        interval: 0
                    },
                    data: ''
                }
			}
		},
		yAxis:{
			default:function(){
				return {
					type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
                    name: '', //坐标轴名称。
                    nameTextStyle:{
                        color:'#D9D9D9',
                    },
                    min: 0,
                    // max: attribute.max,
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
                            type: 'dotted',
                            color: '#57617B' //分隔线颜色设置
                        }
                    }
						}
			}
		},
		seriesObj:{
			default:function(){
				return	{
                    type: 'line',
                    smooth: true,
                    name : '',
                    showSymbol: '',
                    areaStyle: {
                        normal: {
                            color: ''//'#468FE0' //面积颜色
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: ''
                        },
                        label: {
                            show: false,
                            position: "top"
                        }
                    },
                    data: ''
			    }
		    }
        },
    callFunc:{
        type:Function
    },
    tmp:{
      type:String,
      default:"0"
    }
  },
  watch:{
    'areaLineChartTmpValue':function (n,o) {
      var temp = n;
      this.updateDiagram(temp);
    }
  },
  methods:{
    drawDiagram:function () {
			var attribute = JSON.parse(this.areaLineChartTmpValue);
			var tmp = parseInt(this.tmp);
			let diagram = this.$echarts.init(document.getElementsByClassName(attribute.className)[tmp]);
            this.title.text = attribute.text;
            if(!this.isblank(attribute.legendX)){
                this.legend.x = attribute.legendX;
            }
            if(!this.isblank(attribute.selectedMode)){
                this.legend.selectedMode = attribute.selectedMode;
            }
            if(this.isblank(attribute.hideLegend)){
                this.legend.data = attribute.legend;
            }else{
                this.legend.show = !attribute.hideLegend;
            }
            if(!this.isblank(attribute.boundaryGap)){
                this.xAxis.boundaryGap = attribute.boundaryGap;
            }
			if(!this.isblank(attribute.show)){
                this.xAxis.axisTick.show = attribute.show;
            }
            if(!this.isblank(attribute.xLabel)){
                this.xAxis.data = attribute.xLabel;
            }
            if(!this.isblank(attribute.yName)){
                this.yAxis.name = attribute.yName;
            }

			var seriesList = new Array();
            var _this = this;
            for(var index=0; index<attribute.data.length; index++){
                var obj = $.extend(true, {}, _this.seriesObj);
                if(attribute.hideLegend == undefined){
                    obj.name = attribute.legend[index];
                }
                obj.showSymbol = attribute.showSymbol;
                if(attribute.hideArea){
                    obj.areaStyle = null;
                }else{
                    obj.areaStyle.normal.color = attribute.color[index];
                }
				obj.itemStyle.normal.color = attribute.color[index];
				obj.data = attribute.data[index];
				seriesList[index] = obj;
            }
			var option = {
                title: this.title,
                legend: this.legend,
                tooltip: this.tooltip,
                grid: this.grid,
                xAxis: this.xAxis,
                yAxis: this.yAxis,
                series: seriesList
            };
        diagram.setOption(option);
        //执行回调函数
        if(this.callFunc){
            this.callFunc(diagram, attribute);
        }
    },
    //判断是否为空
    isblank:function(obj){
        if(obj == null) return true;
        if(typeof(obj) == "undefined") return true;
        if($.trim(obj.toString()) == "") return true;
        if($.trim(obj.toString())=="null")return true;
        if($.trim(obj.toString())=="undefined")return true;
        return false;
    },
    updateDiagram:function (temp) {
      //unrealized method
      
	}
  },
  mounted(){
    this.drawDiagram();
  }
}
</script>

<style>
#areaLineChartTmp{
  width: 100%;
  height: 100%;
  float: left;
}
</style>