import TopBar from "@/components/topBar.vue";
import singleAxisScatterDiagram from "@/components/echarts/singleAxisScatter.vue"
import clock from "@/components/clock.vue"
import areaLineChartTmp from "@/components/echarts/areaLineChartTmp.vue"
import barChartTmp from "@/components/echarts/barChartTmp.vue"
import Pie from  '@/components/echarts/PieChart.vue'

export default {
  components:{
    TopBar,
    singleAxisScatterDiagram,
    clock,
    areaLineChartTmp,
    barChartTmp,
    Pie
  },
  name:'collection',
  props:{
    topBarData:{
      type:Object,
      default:function(){
        return{
          className:'topBarName',
          value:"营业移网新开户情况监控"
        }
      }
    },
    title:{
      type:String,
      default:"数据"
    },
    tmp:{
      type:String,
      default:"0"
    },
    // areaTmpFunc:{
    //   type : Function,
    //   default: function(diagram, attribute){
    //     var dataIndex = 0;
    //     setInterval(function(){
    //         var data=attribute.legend;
    //         dataIndex = (dataIndex + 1) % data.length;
    //         diagram.dispatchAction({
    //             type: 'legendSelect',
    //             name: data[dataIndex]
    //         });
    //     },3000);
    //   }
    // }
  },

  data(){
    return{

      screenWidth:1920,

      // topBarData:'[{"className":"topBarName","value":""}]',

      areaLineChartTmpData:'{"className":"areaLineChartTmp","text":"开户量排名","hideArea":true,"hideLegend":true,'+
      '"xLabel":["徐汇区","宝山区", "普陀区", "闽行区", "虹口区", "青浦区", "松江区", "金山区", "奉贤区", "浦东区"],"yName":"单位:户",'+
      '"color":["yellow"],"data":[[70000, 90000, 80000, 75000, 70000, 60000, 50000, 35000, 45000, 60000]],'+
      '"boundaryGap":true,"show":false,"max":20,"showSymbol":false}',

      barChartTmpData:'{"className":"barChartTmp","text":"产品用户量","hideLegend":true,"yName":"单位：户","show":false,'+
      '"xLabel":["指标1","指标2","指标3","指标4","指标5","指标6","指标7","指标8","指标9","指标10"],'+
      '"color":["#2DA4DD","#68D3CE","#F39700","#EB5900","#FFC17C","#AFCB69","#89C897","#8C96CB","#F19EC2","#EDDD15"],'+
      '"data":[[9803,7735,7429,7317,6539,6213,5809,5648,5443,5214]]}',
      barChartTmpDatas:'{"className":"barChartTmps","text":"活动用户量","hideLegend":true,"yName":"单位：户","show":false,'+
      '"xLabel":["指标1","指标2","指标3","指标4","指标5","指标6","指标7","指标8","指标9","指标10"],'+
      '"color":["#2DA4DD","#68D3CE","#F39700","#EB5900","#FFC17C","#AFCB69","#89C897","#8C96CB","#F19EC2","#EDDD15"],'+
      '"data":[[9803,7735,7429,7317,6539,6213,5809,5648,5443,5214]]}',

      PieData:'[{"className":"PieChart"}]',

      areaLineChartTmpDatas:'{"className":"areaLineChartTmps","legend":["当日开户数量","昨日开户数量","上月当日开户数量"],'+
      '"xLabel":["0点","6点", "12点", "18点", "24点"],"legendX":"center","color":["#A65C6D","#789972","#4995A9"],'+
      '"data":[[380,570,400,590,430],[270, 410, 300, 580, 400],[270,200,170,400,300]],"boundaryGap":false,'+
      '"show":false,"showSymbol":false,"selectedMode":true}',

      scatterChartTmpData: '{"className":"scatterChartTmp","data":[[100,100,""],[50,50,""],[50,75,""]]}',
    }
  },

  methods:{
    update:function () {
      setInterval(()=>{

      },2000)
      var flag = true;

    },

    handleResize:function () {
      window.screenWidth = document.body.clientWidth ;
      this.screenWidth = window.screenWidth;
      let scaleSize = this.screenWidth/1920;
      document.getElementsByClassName('CollectMain')[0].style.WebkitTransform = "scale("+scaleSize+")";
    },

    clickFunc: function(event, className){
      var element = document.getElementsByClassName(className)[0];
      element.className = element.className.replace( new RegExp( "(\\s|^)" + className + "(\\s|$)" ),"" );
      event.currentTarget.className += " "+className; 
    }
  },

  mounted(){
    this.update();
    this.handleResize();
    window.addEventListener('resize',this.handleResize);
  }
}
