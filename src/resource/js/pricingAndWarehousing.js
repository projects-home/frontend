import TopBar from "@/components/topBar.vue";
import singleAxisScatterDiagram from "@/components/echarts/singleAxisScatter.vue"
import barChart from "@/components/echarts/barChart.vue"
import lineChart from "@/components/echarts/lineChart.vue"
import CircleProcess from "@/components/echarts/circleProcess.vue";
import LineProcess from "@/components/echarts/lineProcess.vue";
import DashBoard from "@/components/echarts/dashBoard.vue";
import clock from "@/components/clock.vue";
import CircleProcessPre from "@/components/echarts/circleProcessPre.vue"
import areaLineChart from "@/components/echarts/areaLineChart.vue"
import yBarChart from "@/components/echarts/yBarChart.vue"
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
    clock,
    CircleProcessPre,
    areaLineChart,
    yBarChart,
    ringChart
  },
  name:'pricing',
  props:{
    title:{
      type:String,
      default:"数据"
    },
    tmp:{
      type:String,
      default:"0"
    }
  },
  computed : {
    processPreMonth : function(){
      return JSON.parse(this.circleProcessPreDataMonth)[0].month
    }
  },

  data(){
    return{
      screenWidth:1920,
      topBarData:'[{"className":"topBarName","value":"移网后付费数据业务生产作业进程监控"}]',

      lineProcessData:'[{"className":"lineProcess","value":"70","data":"125021"}]',

      barChartData:'[{"name":"PGW","color1":"[\'#0094e4\']","color2":"[\'#45beff\']","color3":"[\'#004eff\']"' +
      ',"title":"近3个月数据环比","className":"barChart2","daysData1":"[17,15,15,10]","daysData2":"[11,11,15,10]",' +
      '"daysData3":"[11,15,15,20]","xLabel":[\'PGW\',\'SGW\',\'SGSN\',\'INTR\']}]',

      dashBoardData:'[{"className":"dashBoard","value":"50","center":["50%","70%"],"radius":["140%","82%"]'+
      ',"width":[15,8]}]',

      areaLineChartData0:'[{"className":"areaLineChart0","text":"批价话单数近7天对比","color":"#63B8FF",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"单位：万条",'+
      '"data":[7, 16, 14, 17, 9, 13, 13],"boundaryGap":true,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartData1:'[{"className":"areaLineChart1","text":"入库话单数近7天对比","color":"#4169E1",'+
      '"xLabel":["","08-23","08-24", "08-25", "08-26", "08-27", "08-28", "08-29",""],"yName":"单位：百万条",'+
      '"data":[0, 120, 410, 920, 300, 780, 385, 222, 0],"boundaryGap":false,"show":true,"max":1000,"showSymbol":false}]',
      areaLineChartData2:'[{"className":"areaLineChart2","text":"入库话单业务量近7天对比","color":"#F0E68C",'+
      '"xLabel":["","08-23","08-24", "08-25", "08-26", "08-27", "08-28", "08-29",""],"yName":"单位：GB",'+
      '"data":[0, 120, 410, 920, 300, 780, 385, 222, 0],"boundaryGap":false,"show":true,"max":1000,"showSymbol":false}]',
      areaLineChartData3:'[{"className":"areaLineChart3","text":"入库话单金额近7天对比","color":"#40E0D0",'+
      '"xLabel":["","08-23","08-24", "08-25", "08-26", "08-27", "08-28", "08-29",""],"yName":"单位：万元",'+
      '"data":[0, 120, 410, 920, 300, 780, 385, 222, 0],"boundaryGap":false,"show":true,"max":1000,"showSymbol":false}]',

      yBarChartData1: '[{"className":"yBarChart1","xName":"单位：百万条","yName":"话单数","month":["7月","8月","9月"],'+
      '"data":[18,17,20]}]',
      yBarChartData2: '[{"className":"yBarChart2","xName":"单位：GB","yName":"话单业务量","month":["7月","8月","9月"],'+
      '"data":[27,20,35]}]',
      yBarChartData3: '[{"className":"yBarChart3","xName":"单位：万元","yName":"话单金额","month":["7月","8月","9月"],'+
      '"data":[27,20,35]}]',

      ringChartData1: '[{"className":"ringChart1","xData":"7月","radius":["95%","77%"],'+
      '"dataName":"9101","value":60,"color":"#BDCFF3"}]',
      ringChartData2: '[{"className":"ringChart2","xData":"8月","radius":["95%","77%"],'+
      '"dataName":"12009","value":60,"color":"#00BDBF"}]',
      ringChartData3: '[{"className":"ringChart3","xData":"9月","radius":["95%","77%"],'+
      '"dataName":"12009","value":60,"color":"#4270DA"}]',
    }
  },

  methods:{
    update:function () {
      setInterval(()=>{
        //环状图数据更新模拟
        let temp1 = JSON.parse(this.ringChartData1);
        temp1[0].value = (Math.random()*100).toFixed(2);
        this.ringChartData1 = JSON.stringify(temp1);

        let temp2 = JSON.parse(this.ringChartData2);
        temp2[0].value = (Math.random()*100).toFixed(2);
        this.ringChartData2 = JSON.stringify(temp2);

        let temp3 = JSON.parse(this.ringChartData3);
        temp3[0].value = (Math.random()*100).toFixed(2);
        this.ringChartData3 = JSON.stringify(temp3);

        //进度条更新模拟
        let temp4 = JSON.parse(this.lineProcessData);
        temp4[0].value = parseInt(Math.random()*100);
        this.lineProcessData = JSON.stringify(temp4);

        //仪表盘更新模拟
        let temp5 = JSON.parse(this.dashBoardData);
        temp5[0].value = (Math.random()*100);
        this.dashBoardData = JSON.stringify(temp5);

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
