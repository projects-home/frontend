import TopBar from "@/components/topBar.vue";
import singleAxisScatterDiagram from "@/components/echarts/singleAxisScatter.vue"
import barChart from "@/components/echarts/barChart.vue"
import barPreprocess from "@/components/echarts/barPreprocess.vue"
import lineChart from "@/components/echarts/lineChart.vue"
import CircleProcess from "@/components/echarts/circleProcess.vue";
import LineProcess from "@/components/echarts/lineProcess.vue";
import DashBoard from "@/components/echarts/dashBoard.vue";
import clock from "@/components/clock.vue"
import areaLineChartPre from "@/components/echarts/areaLineChartPre.vue"
import ringChart from "@/components/echarts/ringChart.vue"

import areaLineChartTmp from "@/components/echarts/areaLineChartTmp.vue"

export default {
  components:{
    DashBoard,
    LineProcess,
    CircleProcess,
    TopBar,
    singleAxisScatterDiagram,
    barChart,
    lineChart,
    barPreprocess,
    clock,
    areaLineChartPre,
    ringChart,
    areaLineChartTmp
  },
  name:'collection',
  props:{
    topBarData:{
      type:Object,
      default:function(){
        return{
          className:'topBarName',
          value:"移网后付费数据业务生产作业进程监控"
        }
      }
    },
    title:{
      type:String,
      default:'数据'
    },
    tmp:{
      type:String,
      default:"0"
    },
    currentIndex:{
      type:Number,
      default:0
    },
    areaTmpFunc:{
      type : Function,
      default:function(diagram, attribute){
        var dataIndex = 0;
        setInterval(function(){
            var data=attribute.legend;
            dataIndex = (dataIndex + 1) % data.length;
            diagram.dispatchAction({
                type: 'legendSelect',
                name: data[dataIndex]
            });
            },3000);
      }
    }
  },
  watch:{
    currentIndex:function (val,oldval) {
      //在这里重新渲染模版
      console.log("coll----"+val+'---'+oldval);
    }
  },
  data(){
    return{

      screenWidth:1920,

      date: '2017-9-18',
      time: '10:57:00',
      des1: 'xacg7_pgw.dat',
      des2: 'xacg7_pgw.dat',
      des3: 'xacg7_pgw.dat',
      des4: 'xacg7_pgw.dat',
      des5: 'xacg7_pgw.dat',
      des6: 'xacg7_pgw.dat',
      label1: 'PGWA',
      label2: 'PGWE',
      label3: 'SGWA',
      label4: 'SGWA',
      label5: 'SGWA',
      label6: 'SGWA',

      // topBarData:'[{"className":"topBarName","value":"移网后付费数据业务生产作业进程监控"}]',

      areaLineChartPreData:'[{"className":"areaLineChartPre","legend":["PGW","SGW","SCDR","INTR"],"text":"话单量近7天对比",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"单位:万条","color":["#6F60DF","#59D4AA","#69D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],"data4":[9, 3, 19, 12, 24, 18, 16],'+
      '"boundaryGap":true,"show":false,"max":20,"showSymbol":true}]',

      // areaLineChartTmpData:'[{"className":"areaLineChartTmp","legend":["IPGW","RPGW","GPNR","GPRS"],"text":"G话单近7天数据对比",'+
      // '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"单位:万条","color":["#6F60DF","#59D4AA","#69D4AA","#00BAFF"],'+
      // '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],"data4":[9, 3, 19, 12, 24, 18, 16],'+
      // '"boundaryGap":true,"show":false,"max":20,"showSymbol":true}]',

      // areaLineChartTmpData:'[{"className":"areaLineChartTmp","yName":"单位：百万条","text":"近7天数据环比","legend":["PGW","SGW","SGSN","INTR"],'+
      // '"xData":["9-1","9-2","9-3","9-4","9-5","9-6","9-7"],"lineColor":["#59D4AA","#8D4D3C","#00BAFF","#6F60DF"],'+
      // '"data":[[7,11,3,6,12,2,8],[16,15,7,8,15,18,11],[10, 13, 15, 11, 17, 9, 15],[16, 14, 9, 14, 21, 13, 18]]}]',

      areaLineChartTmpData:'{"className":"coll-areaLineChartTmp","legend":["IPGW","RPGW","GPNR","GPRS"],"text":"G话单近7天数据对比",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"单位:万条","color":["#6F60DF","#59D4AA","#69D4AA","#00BAFF"],'+
      '"data":[[7, 16, 14, 17, 9, 13, 13],[8, 6, 14, 13, 2, 14, 12],[10, 2, 6, 23, 13, 14, 12],[9, 3, 19, 12, 24, 18, 16]],'+
      '"boundaryGap":true,"show":false,"max":20,"showSymbol":true}',

      lineChartData:'[{"className":"coll-lineChart","yName":"单位：百万条","text":"近7天数据环比","legend":["PGW","SGW","SGSN","INTR"],'+
      '"xData":["9-1","9-2","9-3","9-4","9-5","9-6","9-7"],"lineColor":["#59D4AA","#8D4D3C","#00BAFF","#6F60DF"],'+
      '"data":[[7,11,3,6,12,2,8],[16,15,7,8,15,18,11],[10, 13, 15, 11, 17, 9, 15],[16, 14, 9, 14, 21, 13, 18]]}]',

      lineProcessData1:'[{"className":"coll-lineProcess1","value":"99","data":"125021"}]',
      lineProcessData2:'[{"className":"coll-lineProcess2","value":"75","data":"125021"}]',
      lineProcessData3:'[{"className":"coll-lineProcess3","value":"50","data":"125021"}]',
      lineProcessData4:'[{"className":"coll-lineProcess4","value":"20","data":"125021"}]',

      barChartData:'[{"name":"PGW","color1":"[\'#0094e4\']","color2":"[\'#45beff\']","color3":"[\'#004eff\']"' +
      ',"title":"近3个月数据对比","className":"coll-barChart2","daysData1":"[17,15,15,10]","daysData2":"[11,11,15,10]",' +
      '"daysData3":"[11,15,15,20]","xLabel":"[\'PGW\',\'SGW\',\'SGSN\',\'INTR\']","legend":["7月","8月","9月"],'+
      '"unitLeft":"单位:GB","unitRight":"单位:MB"}]',

      ringChartData1: '[{"className":"coll-ringChart1","xData":"PGWA","radius":["90%","75%"],'+
      '"dataName":"95.53%","value":60,"color":"#BDCFF3"}]',
      ringChartData2: '[{"className":"coll-ringChart2","xData":"PGWE","radius":["90%","75%"],'+
      '"dataName":"96.21%","value":60,"color":"#00BDBF"}]',
      ringChartData3: '[{"className":"coll-ringChart3","xData":"SGWA","radius":["90%","75%"],'+
      '"dataName":"97.68%","value":60,"color":"#4270DA"}]',
      ringChartData4: '[{"className":"coll-ringChart4","xData":"PGWA","radius":["90%","75%"],'+
      '"dataName":"95.53%","value":60,"color":"#BDCFF3"}]',
      ringChartData5: '[{"className":"coll-ringChart5","xData":"PGWE","radius":["90%","75%"],'+
      '"dataName":"96.21%","value":60,"color":"#00BDBF"}]',
      ringChartData6: '[{"className":"coll-ringChart6","xData":"SGWA","radius":["90%","75%"],'+
      '"dataName":"97.68%","value":60,"color":"#4270DA"}]',

      dashBoardData1:'[{"className":"coll-dashBoard1","value":"100","center":["50%","70%"],"radius":["140%","77%"]'+
      ',"width":[12,5]}]',
      dashBoardData2:'[{"className":"coll-dashBoard2","value":"70","center":["50%","70%"],"radius":["140%","77%"]'+
      ',"width":[12,5]}]',
      dashBoardData3:'[{"className":"coll-dashBoard3","value":"40","center":["50%","70%"],"radius":["140%","77%"]'+
      ',"width":[12,5]}]',
      dashBoardData4:'[{"className":"coll-dashBoard4","value":"10","center":["50%","70%"],"radius":["140%","77%"]'+
      ',"width":[12,5]}]',
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

        let temp4 = JSON.parse(this.ringChartData4);
        temp4[0].value = (Math.random()*100).toFixed(2);
        this.ringChartData4 = JSON.stringify(temp4);

        let temp5= JSON.parse(this.ringChartData5);
        temp5[0].value = (Math.random()*100).toFixed(2);
        this.ringChartData5 = JSON.stringify(temp5);

        let temp6 = JSON.parse(this.ringChartData6);
        temp6[0].value = (Math.random()*100).toFixed(2);
        this.ringChartData6 = JSON.stringify(temp6);

        //仪表盘数据更新模拟
        let temp8 = JSON.parse(this.dashBoardData1);
        temp8[0].value = (Math.random()*100);
        this.dashBoardData1 = JSON.stringify(temp8);

        let temp9 = JSON.parse(this.dashBoardData2);
        temp9[0].value = (Math.random()*100);
        this.dashBoardData2 = JSON.stringify(temp9);

        let temp10 = JSON.parse(this.dashBoardData3);
        temp10[0].value = (Math.random()*100);
        this.dashBoardData3 = JSON.stringify(temp10);

        let temp11 = JSON.parse(this.dashBoardData4);
        temp11[0].value = (Math.random()*100);
        this.dashBoardData4 = JSON.stringify(temp11);

        //条状进度图数据更新模拟
        let temp12 = JSON.parse(this.lineProcessData1);
        temp12[0].value =  parseInt(Math.random()*100);
        this.lineProcessData1 = JSON.stringify(temp12);

        let temp13 = JSON.parse(this.lineProcessData2);
        temp13[0].value =  parseInt(Math.random()*100);
        this.lineProcessData2 = JSON.stringify(temp13);

        let temp14 = JSON.parse(this.lineProcessData3);
        temp14[0].value =  parseInt(Math.random()*100);
        this.lineProcessData3 = JSON.stringify(temp14);

        let temp15 = JSON.parse(this.lineProcessData4);
        temp15[0].value =  parseInt(Math.random()*100);
        this.lineProcessData4 = JSON.stringify(temp15);
      },1000)
      var flag = true;
      setInterval(()=>{
        if(flag){
          this.date = '2017-9-22';
          this.time = '17:21:00';
          this.label1 = 'PGWA';
          this.label2 = 'PGWE';
          this.label3 = 'SGWA';
          this.label4 = 'SGWA';
          this.label5 = 'SGWA';
          this.label6 = 'SGWA';
        }else{
          this.date = '2017-10-01';
          this.time = '10:30:00';
          this.label1 = 'SGWA';
          this.label2 = 'SGWA';
          this.label3 = 'PGWA';
          this.label4 = 'PGWA';
          this.label5 = 'PGWE';
          this.label6 = 'PGWE';
        }
        flag = !flag;
        //左上圆内数据更新
        // var year = new Date().getFullYear();
        // var month = new Date().getMonth()+1;
        // var day = new Date().getDate();
        // var hour = new Date().getHours();
        // var minute = new Date().getMinutes();
        // var second = new Date().getSeconds();
        // this.date = year+"-"+month+"-"+day;
        // this.time = hour+":"+minute+":"+second;
      },3000)
    },

    handleResize:function () {
      window.screenWidth = document.body.clientWidth ;
      this.screenWidth = window.screenWidth;
      let scaleSize = this.screenWidth/1920;

      for(var i = 0;i<document.getElementsByClassName('CollectMain').length;i++){
        document.getElementsByClassName('CollectMain')[i].style.WebkitTransform = "scale("+scaleSize+")";
      }

      for(var i = 0;i<document.getElementsByClassName('picAndWare').length;i++){
        document.getElementsByClassName('picAndWare')[i].style.WebkitTransform = "scale("+scaleSize+")";
      }

    }
  },

  mounted(){
    this.update();
    this.handleResize();
    window.addEventListener('resize',this.handleResize);
  }
}
