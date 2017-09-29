<template>
  <div id="topBar">
    <div id="systemTitle">
      <img id="systemIcon" src="../images/icon/Unicom_logo.png"/>
      <div id="systemName">上海联通生产监控系统大屏</div>
    </div>
    <label id="title">
        {{topBarDataValue.value}}
    </label>
    <time-anime></time-anime>
    <div>
      <div id="topNavi" class="topBarIcon">
        <img src="../images/icon/menu.png">
      </div>
      <div id="setting" class="topBarIcon">
        <img src="../images/icon/setting.png">
      </div>
      <div id="home" class="topBarIcon">
        <img src="../images/icon/home.png">
      </div>
    </div>
  </div>
</template>

<script>
  import TimeAnime from "./timeAnime.vue";




  export default {
    components: {TimeAnime},
    name: 'topBar',
    computed : {
      topBarDataValue : function(){
        // var tmp = JSON.parse(this.topBarData);
        return this.topBarData;
      }
    },


    props:['topBarData'],

    // watch:{
    //   'topBarData':function (n,o) {
    //     var temp = n;
    //     this.updateDiagram(temp);
    //   }
    // },

    // data(){
    // return{
    //     data:[1],
    //     xMax:100,
    //     axisColor:'#fff',
    //   }
    // },


    // methods:{
    //   updateDiagram:function (temp) {
    //      var attribute = JSON.parse(temp);
    //       let diagram =  this.$echarts.getInstanceByDom(document.getElementsByClassName(attribute[0].className)[0]);
    //       var option_old = diagram.getOption();
    //       option_old.series[1].data = eval(attribute[0].daysData1);
    //       diagram.setOption(option_old);
    //   }
    // }


  }



</script>

<style scoped>
  #topBar{
    width: 1920px;
    height: 58px;
    border-bottom: 2px solid #365f98;
  }

  #systemTitle{
    min-width: 350px;
    display: inline-block;
    float: left;
    height:58px;
    line-height: 58px;
  }

  #systemIcon{
    margin-top: 12px;
    height: 33px;
    display: inline-block;
    float: left;
    margin-left: 12px;
  }

  #systemName{
    min-height: 33px;
    line-height: 33px;
    margin-top: 12px;
    margin-left: 6px;
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    font-weight: 600;
    color: white;
    display: inline-block;
    float: left;
  }

  #title{
    display: inline-block;
    float: left;
    margin-left: 420px;
    line-height: 58px;
    min-width: 200px;
    text-align: center;
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    font-weight: 600;
    color: white;
  }

  .topBarIcon{
    height: 58px;
    width: 58px;
    border-left: 2px solid #365f98;
    cursor: pointer;
    display: inline-block;
    float: right;
  }
  .topBarIcon>img{
    margin-top: 17px;
  }

</style>
