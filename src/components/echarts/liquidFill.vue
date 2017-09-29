<template>
    <div id="liquidFill"></div>
</template>

<script>

  export default {
    name:'liquidFill',

    data(){
      return{
        undefined:0
      }
    },

    props:['liquidFillData'],

    watch:{
      'liquidFillData':function (n,o) {
        var temp = n;
        this.updateDiagram(temp);
      }
    },

    methods: {


      drawDiagram: function () {
        var attribute = JSON.parse(this.liquidFillData);

        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption({
          series: [{
            type: 'liquidFill',
            name: 'Liquid Fill',
            radius: '90%',
            color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
            data: [{
              name: 'First Data',
              value: 0.6
            }, 0.5, 0.4, 0.3],
            backgroundStyle: {
              color: 'rgba(0,0,0,0)',
            },
            outline: {
              show: true,
              borderDistance: 8,
              itemStyle: {
                color: 'none',
                borderColor: '#21afe2',
                borderWidth: 3,
                shadowBlur: 10,
                shadowColor: 'rgba(33, 175, 226, 1)'
              }
            },
            label: {
              normal: {
                formatter: function (param) {
                  return param.value * 100 + '%'
                },
                textStyle: {
                  color: 'yellow',
                  insideColor: 'yellow',
                  fontSize: 24,
                  fontWeight: 'lighter',
                }
              }
            },
          }],

        })
      },
    },

    mounted(){
      this.drawDiagram()
    }
  }
</script>

<style>
  #liquidFill{
    width:120px ;
    height: 120px ;
    display: inline-block;
    float: left;
  }
</style>
