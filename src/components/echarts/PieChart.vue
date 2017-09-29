<template>
  <div id="PieChart"></div>
</template>

<script>
  export default {
    name:'PieChart',

    data(){
      return{
        undefined:0
      }
    },

    props:['PieData'],

    watch:{
      'PieData':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },

    methods:{
      drawDiagram:function () {
        var attribute = JSON.parse(this.PieData);

        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          grid:{
            width:'50%',
            backgroundColor:'rgb(128, 128, 128)'
          },
          color:['#457dcc','#50b8ff','#24d4d6'],
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius : '85%',
              z:2,
              data:[
                {value:335, name:'文治路'},
                {value:310, name:'包头路'},
                {value:234, name:'西川路'}
              ],
              label:{
                normal:{
                  position:'inside',
                  color:'white',
                  fontSize:14,
                  formatter: '{b}\n{d}%',
                  textShadowColor:'black',
                  textShadowBlur:10
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length:10,
                  length2:5

                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 5,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    },

    mounted(){
      this.drawDiagram();
    }

  }

</script>

<style>
  #PieChart{
    width:100%;
    height:100%;
  }
</style>
