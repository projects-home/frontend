<template>
  <div id="circleProcessPre"></div>
</template>
<script>
export default {
  name:'circleProcessPre',
  data(){
    return{
      undefined:0
    }
  },
  props:{
    circleProcessPreData:{
      type:String
    },
    tmp:{
      type:String,
      default:"0"
    }
  },
  watch:{
    'circleProcessPreData':function (n,o) {
      var temp = n;
      this.updatePerMinute();
    }
  },
  methods: {
    drawDiagram: function () {
      var attribute = JSON.parse(this.circleProcessPreData);
      var tmp = parseInt(this.tmp);
      let diagram = this.$echarts.init(document.getElementsByClassName(attribute[0].className)[tmp])
     diagram.setOption({
        color:["#1b1b1b"],
        title: {
          text:  (attribute[0].value * 1) + '%',
          x: 'center',
          y: 'center',
          textStyle: {
            color: attribute[0].color,
            fontSize: 10,
          }
        },
        series: [{
          name: 'loading',
          type: 'pie',
          radius: ['80%', '90%'],
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
            }
          },
          data: this.loading(),
        }]
      })
    },
    loading:function () {
      var attribute = JSON.parse(this.circleProcessPreData);
      return [{
        value: attribute[0].value,
        itemStyle: {
          normal: {
            color: attribute[0].color,
            shadowBlur: 10,
            shadowColor: attribute[0].color
          }
        }
      }, {
        value: 100 - attribute[0].value,
      }];
    },
    updatePerMinute:function () {
      var attribute = JSON.parse(this.circleProcessPreData);
      var tmp = parseInt(this.tmp);
      let diagram = this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[tmp]);
      diagram.setOption({
        title: {
          text: attribute[0].value + '%'
        },
        series: [{
          name: 'loading',
          data: this.loading()
        }]
      })
    },


  },
  mounted(){
    this.drawDiagram();
    this.updatePerMinute();

  }
}


</script>
<style scoped src="../../resource/css/echarts/circleProcessPre.css"></style>
