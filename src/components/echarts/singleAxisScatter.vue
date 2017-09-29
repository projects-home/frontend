<template>
  <div id="singleAxisScatterDiagram"></div>
</template>


<script>
  export default{
    name:'singleAxisScatterDiagram',
    data(){
      return{
        undefined:0,
      }
    },
    props:['singleAxisScatterDiagramValue'],
    watch:{
      'singleAxisScatterDiagramValue':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },

    methods:{
      drawDiagram:function () {
        var attribute = JSON.parse(this.singleAxisScatterDiagramValue);
        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
          '7a', '8a', '9a','10a','11a',
          '12p', '1p', '2p', '3p', '4p', '5p',
          '6p', '7p', '8p', '9p', '10p', '11p'];
        var days = attribute[0].name;
        var data = eval(attribute[0].DiaData);
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption({
          color:[attribute[0].color],
          tooltip: {
            position: 'top'
          },
          title: {
            textBaseline: 'middle',
            top: 45 + '%',
            left:20,
            text: days,
            textStyle:{
              color:'white'
            }
          },
          singleAxis: {
            left: 150,
            type: 'category',
            boundaryGap: false,
            data: hours,
            top: 25 + '%',
            height: 65,
            axisLabel: {
              interval: 2
            },
            axisLabel:{color:'#a4a9bc'},
            axisLine:{
              lineStyle:{color:'#a4a9bc'}
            }
          },
          series:{
//            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: data,
            symbolSize: function (dataItem) {
              return dataItem[1] * 4;
            }
          }
        })
      },
      updateDiagram:function (temp) {
        //unrealized function
        console.log(temp);
      }
    },
    mounted(){
      this.drawDiagram();
    }
  }

</script>

<style scoped src="../../resource/css/echarts/singleAxisScatter.css"></style>
