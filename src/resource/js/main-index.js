import TopBar from "@/components/topBar.vue";


export default {
  components:{

    TopBar,

  },
  name:'mainindex',
  props:{
    topBarData:{
      type:Object,
      default:function(){
        return{
          className:'topBarName',
          value:"移网后付费数据业务生产作业进程监控"
        }
      }
    }
  },
  data(){

    return {
      // topBarData:'[{"className":"topBarName","value":"移网后付费数据业务生产作业进程监控"}]',
      screenWidth:1920
    }
  },

  methods:{
    handleResize:function () {
      window.screenWidth = document.body.clientWidth ;
      this.screenWidth = window.screenWidth;
      let scaleSize = this.screenWidth/1920;
      document.getElementById('mainIndex').style.WebkitTransform = "scale("+scaleSize+")";
    },
  },
  mounted(){
    window.addEventListener('resize',this.handleResize);
    this.handleResize();
  }
}
