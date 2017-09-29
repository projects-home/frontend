<template>
  <div id="PieNest"></div>
</template>

<script>
  export default {
    name:'PieNest',

    data(){
      return{
        undefined:0
      }
    },

    props:['PieNestData'],

    watch:{
      'PieNestData':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },

    methods:{
      drawDiagram:function () {
        console.log(this.PieNestData)
        var attribute = JSON.parse(this.PieNestData);

        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          grid:{
            x:0,
            x2:30,
          },

          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius : '45%',
              z:2,
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'}
              ],
              label:{
                normal:{
                  color:'white',
                  fontSize:15
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            },
            {
              name:'访问来源',
              type:'pie',
              radius: ['40%', '55%'],
              z:1,
              labelLine: {
                normal: {
                  show: true,
                }
              },
              label:{
                normal:{
                  color:'white',
                  fontSize:15
                }
              },
              data:[
                {value:102, name:'其他'}
              ]
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
  #PieNest{
    width:190px;
    height:140px;
  }
</style>
