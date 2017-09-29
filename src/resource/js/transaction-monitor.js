import TopBar from "@/components/topBar.vue";
import PieNest from '@/components/echarts/PieNest.vue'
import Pie from  '@/components/echarts/PieChart.vue'
import liquidFill from '@/components/echarts/liquidFill.vue'
import areaLineChartPre from "@/components/echarts/areaLineChartPre.vue"
import heartBeat from "@/components/heartBeat.vue"
export default {
  components:{
    TopBar,
    PieNest,
    Pie,
    liquidFill,
    areaLineChartPre,
    heartBeat
  },

  name:'transaction-monitor',

  props:{
    topBarData:{
      type:Object,
      default:function(){
        return{
          className:'topBarName',
          value:"营业移网业务情况监控"
        }
      }
    }
  },

  data(){
    return{

      heartBeat1:'[{"className":"heartBeat1","type":"normal"}]',
      heartBeat2:'[{"className":"heartBeat2","type":"normal"}]',
      heartBeat3:'[{"className":"heartBeat3","type":"normal"}]',
      heartBeat4:'[{"className":"heartBeat4","type":"normal"}]',
      heartBeat5:'[{"className":"heartBeat5","type":"normal"}]',
      heartBeat6:'[{"className":"heartBeat6","type":"normal"}]',
      heartBeat7:'[{"className":"heartBeat7","type":"error"}]',
      heartBeat8:'[{"className":"heartBeat8","type":"normal"}]',

      // topBarData:'[{"className":"topBarName","value":"营业移网业务情况监控"}]',

      title1:'10010呼入量',
      title2:'业务量数据',
      title3:'一卡充渠道充值量',
      title4:'积压订单情况',
      title5:'新入网用户数',
      title6:'销户数量',
      title7:'指令积压数量',
      title8:'信控停开机',
      title9:'月23G转4G',


      PieData1:'[{"className":"PieChart1"}]',
      PieData2:'[{"className":"PieChart2"}]',
      PieData3:'[{"className":"PieChart3"}]',
      PieData4:'[{"className":"PieChart4"}]',
      PieData5:'[{"className":"PieChart5"}]',
      PieData6:'[{"className":"PieChart6"}]',
      PieData7:'[{"className":"PieChart7"}]',
      PieData8:'[{"className":"PieChart8"}]',
      PieData9:'[{"className":"PieChart9"}]',

      liquidFillData1:'[{"className":"liquidFill1"}]',
      liquidFillData2:'[{"className":"liquidFill2"}]',
      liquidFillData3:'[{"className":"liquidFill3"}]',
      liquidFillData4:'[{"className":"liquidFill4"}]',

      liquidFillLable1:'CBSS',
      liquidFillLable2:'CBSS BO',
      liquidFillLable3:'BSS',
      liquidFillLable4:'BSS BO',

      liquidFillLableSub1:'积压参数01',
      liquidFillLableSub2:'积压参数02',
      liquidFillLableSub3:'积压参数03',
      liquidFillLableSub4:'积压参数04',

      areaLineChartPreData:'[{"className":"areaLineChartPre","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartPreData2:'[{"className":"areaLineChartPre2","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartPreData3:'[{"className":"areaLineChartPre3","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',


      areaLineChartPreData4:'[{"className":"areaLineChartPre4","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartPreData5:'[{"className":"areaLineChartPre5","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartPreData6:'[{"className":"areaLineChartPre6","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartPreData7:'[{"className":"areaLineChartPre7","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',
      areaLineChartPreData8:'[{"className":"areaLineChartPre8","legend":["当日呼入数量","昨日呼入数量","上月当日呼入数量"],"text":"",'+
      '"xLabel":["9-1","9-2", "9-3", "9-4", "9-5", "9-6", "9-7"],"yName":"","color":["#6F60DF","#59D4AA","#00BAFF"],'+
      '"data1":[7, 16, 14, 17, 9, 13, 13],"data2":[8, 6, 14, 13, 2, 14, 12],"data3":[10, 2, 6, 23, 13, 14, 12],'+
      '"boundaryGap":false,"show":false,"max":20,"showSymbol":true}]',

      colorChange:true
    }
  },

  methods:{
    handleResize:function () {
      window.screenWidth = document.body.clientWidth ;
      this.screenWidth = window.screenWidth;
      let scaleSize = this.screenWidth/1920;
      document.getElementById('transactionMonitor').style.WebkitTransform = "scale("+scaleSize+")";
    },

    titleCssReset:function () {
      document.getElementById('title').style.marginLeft = '510px';
    },

    drawCanvas:function () {
      var time = new Date();
      var ctx = document.getElementById('canvas').getContext('2d');
      ctx.save();
      ctx.clearRect(0,0,800,600);
      ctx.translate(400,300);
      //外部圆环
      ctx.beginPath();
      ctx.lineWidth = 22;
      ctx.strokeStyle = '#33b5e6';
      ctx.shadowBlur = 50;
      ctx.shadowColor='#000';
      ctx.arc(0,0,200,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();

      //外部圆环分割线
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';
      ctx.translate(400,300);
      ctx.rotate(-Math.PI/2);
      for(var i=0;i<30;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/15);
        ctx.moveTo(191,0);
        ctx.lineTo(208,0);
        ctx.stroke();
      }
      ctx.restore();

      //中部圆环
      ctx.save();
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.lineWidth = 11;
      ctx.strokeStyle = '#0a232a';
      ctx.arc(0,0,170,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();

      //黄色环内部分
      ctx.save();
      ctx.translate(400,300);
      ctx.beginPath();
      if(this.colorChange){
        ctx.shadowColor='#e79e00';
        ctx.strokeStyle = '#e7c500';
      }
      else{
        ctx.shadowColor='#00FFAA';
        ctx.strokeStyle = '#00FFAA';
      }
      ctx.lineWidth = 10;
      ctx.shadowBlur = 11;
      ctx.rotate(Math.PI/15*time.getSeconds())
      ctx.arc(0,0,170,Math.PI/6,-Math.PI/6,true);
      ctx.stroke();
      ctx.restore();

      //中部圆环分割线
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';
      ctx.translate(400,300);
      ctx.rotate(-Math.PI/2);
      for(var i=0;i<30;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/15);
        ctx.moveTo(166,0);
        ctx.lineTo(174,0);
        ctx.stroke();
      }
      ctx.restore();

      //边界自定义形状
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#33b5e6';
      var grd=ctx.createLinearGradient(0,0,400,0);
      for(let i=0;i<1;){
        grd.addColorStop(i,"#33b5e6");
        grd.addColorStop(i+0.005,"transparent");
        i+=0.01;
      }
      ctx.fillStyle=grd;
      // ctx.fillStyle = '#33b5e6';
      ctx.translate(400,300);
      let length = 20;
      ctx.zIndex = 9;
      ctx.rotate(2*Math.PI/20*time.getSeconds()+2*Math.PI/(20*1000)*time.getMilliseconds())
      for(var i=0;i<5;i++){
        ctx.beginPath();
        ctx.arc(0,0,225,Math.PI/5,0,true);
        ctx.lineTo(Math.cos(Math.PI/64)*(225+length),-Math.sin(Math.PI/64)*(225+length));
        ctx.arc(0,0,245,0,Math.PI/64+Math.PI/5,false);
        ctx.fill();
        ctx.rotate(Math.PI/2.5);
      }
      ctx.restore();

      //边界环
      ctx.save();
      ctx.translate(400,300);
      ctx.zIndex = 10;
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#33b5e6';
      ctx.shadowBlur = 11;
      ctx.shadowColor='#33b5e6';
      ctx.arc(0,0,225,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();

      //蓝色环内部分
      ctx.save();
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#33b5e6';
      ctx.arc(0,0,150,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();

      //内部蓝色高亮线环
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#1df8fe';
      ctx.translate(400,300);
      ctx.rotate(-(((2*Math.PI)/6)*time.getSeconds() + ((Math.PI)/3000)*time.getMilliseconds()));
      for(var i=0;i<30;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/15);
        ctx.moveTo(125,0);
        ctx.lineTo(140,0);
        ctx.stroke();
      }
      ctx.restore();

      //蓝色最内环部分
      ctx.save();
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#1df8fe';
      ctx.arc(0,0,115,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();

      //内部蓝色半圆环
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#1df8fe';
      ctx.fillStyle = '#1df8fe';
      ctx.shadowBlur = 1;
      ctx.shadowColor='#1df8fe';
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.rotate(-(2*Math.PI/20*time.getSeconds()+2*Math.PI/(20*1000)*time.getMilliseconds()))
      ctx.moveTo(0,-100);
      ctx.arc(0,0,100,-Math.PI/2,-Math.PI,true);
      ctx.lineTo(-85,0);
      ctx.arc(0,0,85,-Math.PI,-Math.PI/2,false);
      ctx.lineTo(0,-100);
      ctx.fill();
      ctx.restore();

      //内部暗蓝色半圆环
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#0a5b88';
      ctx.fillStyle = '#0a5b88';
      ctx.shadowBlur = 1;
      ctx.shadowColor='#0a5b88';
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.rotate(-(2*Math.PI/20*time.getSeconds()+2*Math.PI/(20*1000)*time.getMilliseconds()))
      ctx.moveTo(100,0);
      ctx.arc(0,0,100,0,Math.PI/2,false);
      ctx.lineTo(0,85);
      ctx.arc(0,0,85,Math.PI/2,0,true);
      ctx.lineTo(100,0);

      ctx.fill();
      ctx.restore();

      //时钟外部大圆
      ctx.save();
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#1df8fe';
      ctx.arc(0,0,75,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();

      //时钟外部小圆
      ctx.save();
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#1df8fe';
      ctx.arc(0,0,68,0,Math.PI*2,true);
      ctx.stroke();
      ctx.restore();

      //时钟区域内部背景
      ctx.save();
      ctx.translate(400,300);
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#1df8fe';
      ctx.fillStyle = '#003056';
      ctx.arc(0,0,66,0,Math.PI*2,true);
      ctx.fill();
      ctx.restore();

      window.requestAnimationFrame(this.drawCanvas);
    },

    colorChangeFunc:function () {
      setInterval(()=>{
        this.colorChange = !this.colorChange;
      },2000)
    }
  },

  mounted(){
    this.handleResize();
    window.addEventListener('resize',this.handleResize);
    this.titleCssReset();
    window.requestAnimationFrame(this.drawCanvas);
    this.colorChangeFunc();
  }

}
