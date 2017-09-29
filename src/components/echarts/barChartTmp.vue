<template>
  <div id="barChartTmp"></div>
</template>

<script>
  export default {
    name:'barChartTmp',
    data(){
      return{
        undefined:0
      }
    },
    props:{
      barChartTmpValue:{
        type:String
      },
      //default
      title: {
        default: function(){
          return {
            top:0,
            text: '',
            textStyle:{
              color:'white',
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
      legend: {
        default: function(){
          return{
            show: true,
            top:10,
            data: '',
            x : 'right',
            align: 'left',
            textStyle:{
              color:'white'
            }
          }
        }
      },
      xAxis: {
        default: function(){
          return{
            data: '',
            silent: false,
            splitLine: {
              show: false
            },
            axisLabel:{color:'white'},
            axisLine:{
              lineStyle:{color:'#a4a9bc'}
            },
            axisTick:{
              show: true,
              interval: 0
            },
          }
        }
      },
      yAxis: {
        default: function(){
          return{
            axisLabel:{
              color:'white'
            },
            name: '',//unit
            type : 'value',
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: '#57617B' //分隔线颜色设置
              }
            },
            axisTick: {
              show: false //是否显示坐标轴刻度
            },
            axisLine:{
              lineStyle:{
                color:'#a4a9bc'
              }
            }
          }
        }
      },
      seriesObj: {
        default: function(){
          return{
            // name: '',
            type: 'bar',
            data: '',
            animationDelay: function () {
              return 1 * 10;
            },
            barWidth: 25,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    fontSize: 10
                }
            },
            itemStyle:{
              normal:{
                color: ''
              }
            }
          }
        }
      },
      animationEasing: 'elasticOut',
      animationDelayUpdate: function () {
        return 1 * 5;
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
      'barChartTmpValue':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },
    methods:{
      drawDiagram:function ()
       {
        var attribute = JSON.parse(this.barChartTmpValue);
        var tmp = parseInt(this.tmp);
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute.className)[tmp]);
        this.title.text = attribute.text;
        if(attribute.hideLegend == undefined){
          this.legend.data = attribute.legend;
        }else{
          this.legend.show = false;
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
			  	obj.itemStyle.normal.color = this.rendColor;
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
      //颜色回调函数
      rendColor:function(params) {
        var attribute = JSON.parse(this.barChartTmpValue);
        var num = attribute.color.length;
        return attribute.color[params.dataIndex%num]
      },
      updateDiagram:function (temp) {
        var attribute = JSON.parse(temp);
        var tmp = parseInt(this.tmp);
        let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute.className)[tmp]);
        var option_old = diagram.getOption();
        option_old.series.data = eval(attribute.daysData1);
        diagram.setOption(option_old);
      }
    },
    mounted(){
     // console.log(eval(attribute[0].legendMonth));
      this.drawDiagram();
    }
  }
</script>

<style>
#barChartTmp{
  width:100%;
  height:100%;
  float: left;
}
</style>
