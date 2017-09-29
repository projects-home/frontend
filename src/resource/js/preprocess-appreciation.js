import TopBar from "@/components/topBar.vue";
import singleAxisScatterDiagram from "@/components/echarts/singleAxisScatter.vue"
import barChart from "@/components/echarts/barChart.vue"
import yBarPreprocess from "@/components/echarts/yBarPreprocess.vue"
import lineChart from "@/components/echarts/lineChart.vue"
import CircleProcess from "@/components/echarts/circleProcess.vue";
import LineProcess from "@/components/echarts/lineProcess.vue";
import DashBoard from "@/components/echarts/dashBoard.vue";
import clock from "@/components/clock.vue";
import LineProcessPre from "@/components/echarts/lineProcessPre.vue";
import DashBoardPre from "@/components/echarts/dashBoardPre.vue";
import areaLineChart from "@/components/echarts/areaLineChart.vue"
import ringChart from "@/components/echarts/ringChart.vue"

export default {
  components:{
    DashBoard,
    LineProcess,
    CircleProcess,
    TopBar,
    singleAxisScatterDiagram,
    barChart,
    lineChart,
    yBarPreprocess,
    LineProcessPre,
    DashBoardPre,
    clock,
    areaLineChart,
    ringChart
  },
  name:'appreciation',

  computed : {
    proportion : function(){
      return JSON.parse(this.yBarPreprocessData)[0].proportion   }
  },

  data(){
    return{

      topBarData:'[{"className":"topBarName","value":"移网后付费数据业务生产作业进程监控"}]',

      yBarPreprocessData:'[{ "legend":["有效单","重单","错单","无效单"],"daysData1":[12,12],'+
      '"daysData2":[3,3],"daysData3":[3,3],"daysData4":[2,2],"className":"yBarPreprocess",'+
      '"yLabel":["VACN","CRBT"],"unit":"单位：%","orient":"horizontal","xPosition":"center",'+
      '"proportion":["90%","90%"]}]', 	 	

      areaLineChartData1:'[{"className":"areaLineChart1","text":"CBRT话单数近7天对比","color":"#63B8FF",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"单位：万条","font":12,'+
      '"data":[7, 16, 14, 17, 9, 13, 11],"boundaryGap":true,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartData2:'[{"className":"areaLineChart2","text":"VACN话单数近7天对比","color":"#63B8FF",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"单位：万条","font":12,'+
      '"data":[7, 16, 14, 17, 9, 13, 11],"boundaryGap":true,"show":false,"max":20,"showSymbol":true}]',

      lineProcessData1:'[{"className":"lineProcess1","value":"99","data":"125021"}]',
      lineProcessData2:'[{"className":"lineProcess2","value":"75","data":"125021"}]',

      dashBoardData1:'[{"className":"dashBoard1","value":"100","center":["50%","80%"],"radius":["150%","77%"]'+
      ',"width":[12,5]}]',
      dashBoardData2:'[{"className":"dashBoard2","value":"100","center":["50%","80%"],"radius":["150%","77%"]'+
      ',"width":[12,5]}]',

      ringChartData1: '[{"className":"ringChart1","xData":"7月","radius":["75%","62%"],'+
      '"dataName":"100000","value":60,"color":"#BDCFF3"}]',
      ringChartData2: '[{"className":"ringChart2","xData":"8月","radius":["75%","62%"],'+
      '"dataName":"100000","value":60,"color":"#00BDBF"}]',
      ringChartData3: '[{"className":"ringChart3","xData":"9月","radius":["75%","62%"],'+
      '"dataName":"100000","value":60,"color":"#4270DA"}]',
      ringChartData4: '[{"className":"ringChart4","xData":"7月","radius":["75%","62%"],'+
      '"dataName":"100000","value":60,"color":"#BDCFF3"}]',
      ringChartData5: '[{"className":"ringChart5","xData":"8月","radius":["75%","62%"],'+
      '"dataName":"100000","value":60,"color":"#00BDBF"}]',
      ringChartData6: '[{"className":"ringChart6","xData":"9月","radius":["75%","62%"],'+
      '"dataName":"100000","value":60,"color":"#4270DA"}]',

    }
  },

  methods:{
    update:function () {
      setInterval(()=>{

        //仪表盘数据更新模拟
        let temp8 = JSON.parse(this.dashBoardData1);
        temp8[0].value = (Math.random()*100);
        this.dashBoardData1 = JSON.stringify(temp8);

        let temp9 = JSON.parse(this.dashBoardData2);
        temp9[0].value = (Math.random()*100);
        this.dashBoardData2 = JSON.stringify(temp9);
        
        //条状进度图数据更新模拟
        let temp12 = JSON.parse(this.lineProcessData1);
        temp12[0].value =  parseInt(Math.random()*100);
        this.lineProcessData1 = JSON.stringify(temp12);

        let temp13 = JSON.parse(this.lineProcessData2);
        temp13[0].value =  parseInt(Math.random()*100);
        this.lineProcessData2 = JSON.stringify(temp13);

        //圆环
        let temp10 = JSON.parse(this.ringChartData1);
        temp10[0].value =  parseInt(Math.random()*100);
        this.ringChartData1 = JSON.stringify(temp10);

        let temp11 = JSON.parse(this.ringChartData2);
        temp11[0].value =  parseInt(Math.random()*100);
        this.ringChartData2 = JSON.stringify(temp11);

        let temp14 = JSON.parse(this.ringChartData3);
        temp14[0].value =  parseInt(Math.random()*100);
        this.ringChartData3 = JSON.stringify(temp14);

        let temp15 = JSON.parse(this.ringChartData4);
        temp15[0].value =  parseInt(Math.random()*100);
        this.ringChartData4 = JSON.stringify(temp15);

        let temp16 = JSON.parse(this.ringChartData5);
        temp16[0].value =  parseInt(Math.random()*100);
        this.ringChartData5 = JSON.stringify(temp16);

        let temp17 = JSON.parse(this.ringChartData6);
        temp17[0].value =  parseInt(Math.random()*100);
        this.ringChartData6 = JSON.stringify(temp17);

      },1000)
    },

    handleResize:function () {
      window.screenWidth = document.body.clientWidth ;
      this.screenWidth = window.screenWidth;
      let scaleSize = this.screenWidth/1920;
      document.getElementById('picAndWare').style.WebkitTransform = "scale("+scaleSize+")";
    }
  },

  mounted(){
    this.update();
    window.addEventListener('resize',this.handleResize);
    this.handleResize();
  }
}
