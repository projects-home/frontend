<template>
  <div id="dashBoardVoice"></div>
</template>

<script>
  export default {
    name: 'dashBoardVoice',
    data() {
      return {
        undefined: 0
      }
    },

    props:['dashBoardVoiceValue'],
    watch:{
      'dashBoardVoiceValue':function (n,o) {
        var temp = n;
        this.updateData();
      }
    },

    methods: {
      drawDiagram: function () {
        var attribute = JSON.parse(this.dashBoardVoiceValue);
        let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
        diagram.setOption({
          series: [
            {
              name: attribute[0].name,
              type: 'gauge',
              startAngle: 181,
              endAngle: 0,
              splitNumber: 3,
              center : attribute[0].center,
              radius: attribute[0].radius[0],
              axisLine: {
                show: true,
                lineStyle: {
                  width: attribute[0].width[0],
                  shadowBlur: 0,
                  color: [
                    [0.33, '#06FD2A'],
                    [0.67, '#FCE92A'],
                    [1, '#FF0000']
                  ]
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              },
              pointer: {
                length : '96%',
                width : 2,
              },
              itemStyle: {
                normal: {
                  color: "#B00000"
                }
              },
              detail: {
                show: false
              },
              data: [{
                value: attribute[0].value
              }]
            },
            {
              name: attribute[0].name,
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              splitNumber: 2,
              center : attribute[0].center,
              radius: attribute[0].radius[1],
              axisLine: {
                lineStyle: {
                  width: 0
                }
              },
              axisTick: {
                splitNumber: 9,
                length : attribute[0].width[1],
                lineStyle: {
                  color: '#377862',// 362FDB
                  width: 2,
                  type: 'solid'
                }	
              },
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              },
              pointer: {
                length : '96%',
                width : 3,
              },
              itemStyle: {
                normal: {
                  color: "#A00000"
                }
              },
              detail: {
                show: false
              }
            }
          ]
        })
      },

      updateData:function () {
        var attribute = JSON.parse(this.dashBoardVoiceValue);
        let diagram = this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);

        diagram.setOption({
          series: [{
            data:[{value: attribute[0].value, name: ''}]
          }]
        })
      },
    },
    mounted(){
      this.drawDiagram();
    }
  }
</script>

<style scoped src="../../resource/css/echarts/dashBoardVoice.css"></style>
