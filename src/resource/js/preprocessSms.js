import TopBar from "@/components/topBar.vue";
import singleAxisScatterDiagram from "@/components/echarts/singleAxisScatter.vue"
import barChartSms from "@/components/echarts/barChartSms.vue"
import barPreprocess from "@/components/echarts/barPreprocess.vue"
import lineChart from "@/components/echarts/lineChart.vue"
import CircleProcess from "@/components/echarts/circleProcess.vue";
import LineProcessSms from "@/components/echarts/lineProcessSms.vue";
import clock from "@/components/clock.vue";
import DashBoardSms from "@/components/echarts/dashBoardSms.vue";
import areaLineChartSms from "@/components/echarts/areaLineChartSms.vue";
import barChart from "@/components/echarts/barChart.vue"


export default {
  components:{
    LineProcessSms,
    CircleProcess,
    TopBar,
    singleAxisScatterDiagram,
    barChartSms,
    lineChart,
    barPreprocess,
    DashBoardSms,
    clock,
    barChart,
    areaLineChartSms
  
  },
  name:'preprocess',

  computed : {
    proportion : function(){
      return JSON.parse(this.barPreprocessData)[0].proportion   }
  },

  data(){
    return{
      screenWidth:1920,      
      topBarData:'[{"className":"topBarName","value":"移网后付费短信业务生产作业进程监控"}]',
      

      lineChartData:'[{"className":"lineChart","yName":"单位：万条","text":"G话单近7天数据对比","legend":["IPGW","RPGW","GPNR","GPRS"],'+
      '"xData":["9-1","9-2","9-3","9-4","9-5","9-6","9-7"],"lineColor":["#59D4AA","#8D4D3C","#00BAFF","#6F60DF"],'+
      '"data":[[7,11,3,6,12,2,8],[16,15,7,8,15,18,11],[10, 13, 15, 11, 17, 9, 15],[16, 14, 9, 14, 21, 13, 18]]}]',
      

      lineProcessData:'[{"value":"100"},{"value":"95"},{"value":"90"},{"value":"99"}]',

      
      areaLineChartSmsData:'[{"className":"areaLineChartSms","legend":["PPDX","PPHT","SMMP","SMNR","PPGJ"],"text":"话单数近7天对比",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"单位:万条","color":["#63B8FF","#59D4AA","#69D4AA","#00BAFF","#E0FFFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],"data4":[9, 3, 19, 12, 24, 18, 16],'+
      '"data5":[19, 10, 9, 13, 4, 8, 16],"boundaryGap":true,"show":false,"max":20,"showSymbol":true}]',


      lineProcessSmsData1:'[{"className":"lineProcessSms1","value":"99","data":"125021"}]',
      lineProcessSmsData2:'[{"className":"lineProcessSms2","value":"75","data":"125021"}]',
      lineProcessSmsData3:'[{"className":"lineProcessSms3","value":"50","data":"125021"}]',
      lineProcessSmsData4:'[{"className":"lineProcessSms4","value":"20","data":"125021"}]',

      lineProcessSmsData5:'[{"className":"lineProcessSms5","value":"99","data":"125021"}]',
      lineProcessSmsData6:'[{"className":"lineProcessSms6","value":"75","data":"125021"}]',
      lineProcessSmsData7:'[{"className":"lineProcessSms7","value":"50","data":"125021"}]',
      lineProcessSmsData8:'[{"className":"lineProcessSms8","value":"20","data":"125021"}]',
      lineProcessSmsData9:'[{"className":"lineProcessSms9","value":"20","data":"125021"}]',
      

      barChartData:'[{"name":"PGW","color1":"[\'#0094e4\']","color2":"[\'#45beff\']","color3":"[\'#004eff\']"' +
      ',"title":"话单数近3个月对比","className":"barChart2","daysData1":"[17,15,15,10,17]","daysData2":"[11,11,15,10,20]",' +
      '"daysData3":"[11,15,15,20,25]","xLabel":"[\'PPDX\',\'PPHT\',\'SMMP\',\'SMNR\',\'PPGJ\']","legend":["7月","8月","9月"],'+
      '"unitLeft":"单位:百万条","unitRight":"单位:万条"}]',

     
      barPreprocessData:'[{ "legend":["有效单","重单","错单","无效单"],"daysData1":[12,12,12,12,12],'+
      '"daysData2":[3,3,3,3,3],"daysData3":[3,3,3,3,3],"daysData4":[2,2,2,2,2],"className":"barPreprocessSms",'+
      '"yLabel":["PPGJ","SMNR","SMMP","PPHT","PPDX"],"unit":"单位:%",'+
      '"proportion":["95%","98%","90%","98%","90%"]}]',



      CircleProcessData1:'[{"className":"circleProcessChart1","value":"22","color":"#56b5ff"}]',
      CircleProcessData2:'[{"className":"circleProcessChart2","value":"44","color":"#fff799"}]',
      CircleProcessData3:'[{"className":"circleProcessChart3","value":"58","color":"#a0f676"}]',

      CircleProcessData5:'[{"className":"circleProcessChart5","value":"22","color":"#56b5ff"}]',
      CircleProcessData6:'[{"className":"circleProcessChart6","value":"44","color":"#fff799"}]',
      CircleProcessData7:'[{"className":"circleProcessChart7","value":"58","color":"#a0f676"}]',


      dashBoardSmsData1:'[{"className":"dashBoardSms1","value":"100","center":["70%","90%"],"radius":["140%","97%"]'+
      ',"width":[15,9]}]',
      dashBoardSmsData2:'[{"className":"dashBoardSms2","value":"100","center":["70%","90%"],"radius":["140%","97%"]'+
      ',"width":[15,9]}]',
      dashBoardSmsData3:'[{"className":"dashBoardSms3","value":"100","center":["70%","90%"],"radius":["140%","97%"]'+
      ',"width":[15,9]}]',
      dashBoardSmsData4:'[{"className":"dashBoardSms4","value":"100","center":["70%","90%"],"radius":["140%","97%"]'+
      ',"width":[15,9]}]',
      dashBoardSmsData5:'[{"className":"dashBoardSms5","value":"100","center":["70%","90%"],"radius":["140%","97%"]'+
      ',"width":[15,9]}]',

    }
  },

  methods:{
    update:function () {
      setInterval(()=>{
        //环状图数据更新模拟
        let temp1 = JSON.parse(this.CircleProcessData1);
        temp1[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData1 = JSON.stringify(temp1);

        let temp2 = JSON.parse(this.CircleProcessData2);
        temp2[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData2 = JSON.stringify(temp2);

        let temp3 = JSON.parse(this.CircleProcessData3);
        temp3[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData3 = JSON.stringify(temp3);

        let temp5= JSON.parse(this.CircleProcessData5);
        temp5[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData5 = JSON.stringify(temp5);

        let temp6 = JSON.parse(this.CircleProcessData6);
        temp6[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData6 = JSON.stringify(temp6);

        let temp7 = JSON.parse(this.CircleProcessData7);
        temp7[0].value = (Math.random()*100).toFixed(2);
        this.CircleProcessData7 = JSON.stringify(temp7);

        //仪表盘数据更新模拟
        let temp8 = JSON.parse(this.dashBoardSmsData1);
        temp8[0].value = (Math.random()*100);
        this.dashBoardSmsData1 = JSON.stringify(temp8);

        let temp9 = JSON.parse(this.dashBoardSmsData2);
        temp9[0].value = (Math.random()*100);
        this.dashBoardSmsData2 = JSON.stringify(temp9);

        let temp10 = JSON.parse(this.dashBoardSmsData3);
        temp10[0].value = (Math.random()*100);
        this.dashBoardSmsData3 = JSON.stringify(temp10);

        let temp11 = JSON.parse(this.dashBoardSmsData4);
        temp11[0].value = (Math.random()*100);
        this.dashBoardSmsData4 = JSON.stringify(temp11);
        
        let temp17 = JSON.parse(this.dashBoardSmsData5);
        temp11[0].value = (Math.random()*100);
        this.dashBoardSmsData5 = JSON.stringify(temp17);
        

        //条状进度图数据更新模拟
        let temp12 = JSON.parse(this.lineProcessSmsData1);
        temp12[0].value =  parseInt(Math.random()*100);
        this.lineProcessSmsData1 = JSON.stringify(temp12);

        let temp13 = JSON.parse(this.lineProcessSmsData2);
        temp13[0].value =  parseInt(Math.random()*100);
        this.lineProcessSmsData2 = JSON.stringify(temp13);

        let temp14 = JSON.parse(this.lineProcessSmsData3);
        temp14[0].value =  parseInt(Math.random()*100);
        this.lineProcessSmsData3 = JSON.stringify(temp14);

        let temp15 = JSON.parse(this.lineProcessSmsData4);
        temp15[0].value =  parseInt(Math.random()*100);
        this.lineProcessSmsData4 = JSON.stringify(temp15);

        let temp16 = JSON.parse(this.lineProcessSmsData5);
        temp16[0].value =  parseInt(Math.random()*100);
        this.lineProcessSmsData5 = JSON.stringify(temp16);


        //左上圆内数据更新
        var year = new Date().getFullYear();
        var month = new Date().getMonth()+1;
        var day = new Date().getDate();
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var second = new Date().getSeconds();
        this.date = year+"-"+month+"-"+day;
        this.time = hour+":"+minute+":"+second;
      },1000)
    },
    handleResize:function () {
      window.screenWidth = document.body.clientWidth ;
      this.screenWidth = window.screenWidth;
      let scaleSize = this.screenWidth/1920;
      document.getElementById('PreProcessMain').style.WebkitTransform = "scale("+scaleSize+")";
    }
  },

  mounted(){
    this.update();
    window.addEventListener('resize',this.handleResize);
    this.handleResize();
  }
}
