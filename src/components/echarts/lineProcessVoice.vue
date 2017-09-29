<template>
  <div id="lineProcessVoice"></div>
</template>

<script >

export default {
  name:'lineProcessVoice',
  data(){
    return{
      data:[1],
      xMax:100,
      axisColor:'#fff'
    }
  },

  props:['lineProcessVoiceData'],

  watch:{
    'lineProcessVoiceData':function (n,o) {
      var temp = n;
      this.updateData();
    }
  },

  methods:{
    drawDiagram: function () {
      var attribute = JSON.parse(this.lineProcessVoiceData);
      let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[0]);
      diagram.setOption({
        tooltip: {
          show: true,
          formatter: "{b} <br> {c}件"

        },
        xAxis: [{
          axisTick: {
            show: false,
            // color:'#fff',
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false
            //color:'#fff',
          },
          splitLine: {
            show: false,
            // color:'#fff',
          }
        }],
        grid: {
          x:0,
          x2:0,
          y:0,
          y2:0,
          width: '75%'
        },
        yAxis: [{
          position:'right',
          type: 'category',
          data: [attribute[0].data],

          axisTick: {
            // color:'#fff',
            show: false,
          },
          axisLine: {
            //  color:'#fff',
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: '#FFF',
            }
          }

        }],
        series: [{
          name: ' ',
          type: 'bar',
          barWidth: 16,
          silent: true,
          itemStyle: {
            normal: {
              color: '#000',
              barBorderRadius: [10, 10, 10, 10],
            }
          },
          barGap: '-100%',
          barCategoryGap: '100%',
          data: this.data.map(function(d) {
            return 100
          }),
        },
          {
            name: ' ',
            type: 'bar',
            barWidth: 16,
            data: [
              {
                value: attribute[0].value,
                itemStyle: {
                  normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: {
                      type: 'bar',
                      colorStops: [{
                        offset: 0,
                        color: 'rgba(46,156,225,1)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#56e8ff' // 100% 处的颜色
                      }],
                      globalCoord: false, // 缺省为 false

                    }
                  }
                }
              },
            ],
          }
        ]
      })
    },
    updateData:function () {
      var attribute = JSON.parse(this.lineProcessVoiceData);
      let diagram = this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);
      let SeriesTemp = diagram.getOption();
      SeriesTemp.yAxis[0].data[0] = attribute[0].data;
      SeriesTemp.series[1].data[0].value = attribute[0].value;
      diagram.setOption(SeriesTemp);
    },
  },

  mounted(){
    this.drawDiagram();
  }
}




</script>

<style scoped src="../../resource/css/echarts/lineProcessVoice.css"></style>
