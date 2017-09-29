<template>
<div>
  <Carousel  :autoplay-speed="3000" @on-change="test" v-model="value2" style="overflow:hidden"  id="carouselMain" >
         <CarouselItem>
            <div>
              <mainindex title="数据" v-bind:topBarData="{ className:'topBarName', value:'移网后付费数据业务生产作业进程监控' }"></mainindex>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <collection title="数据" v-bind:topBarData="{className:'topBarName', value:'移网后付费数据业务生产作业进程监控'}" v-bind:currentIndex="cunIndex" tmp="0"></collection>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <collection title="短信" v-bind:topBarData="{className:'topBarName', value:'移网后付费短信业务生产作业进程监控'}" v-bind:currentIndex="cunIndex" tmp="1"></collection>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <collection title="语音" v-bind:topBarData="{className:'topBarName', value:'移网后付费语音业务生产作业进程监控'}" v-bind:currentIndex="cunIndex" tmp="2"></collection>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <collection title="增值" v-bind:topBarData="{className:'topBarName', value:'移网后付费增值业务生产作业进程监控'}" v-bind:currentIndex="cunIndex" tmp="3"></collection>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <preprocess v-bind:topBarData="{className:'topBarName', value:'移网后付费数据业务生产作业进程监控'}"></preprocess>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <preprocessSms v-bind:topBarData="{className:'topBarName', value:'移网后付费短信业务生产作业进程监控'}"></preprocessSms>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <preprocessVoice v-bind:topBarData="{className:'topBarName', value:'移网后付费语音业务生产作业进程监控'}"></preprocessVoice>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <appreciation v-bind:topBarData="{className:'topBarName', value:'移网后付费增值业务生产作业进程监控'}"></appreciation>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <pricing></pricing>
            </div>
        </CarouselItem>
        <!-- <CarouselItem>
            <div>
              <pricing></pricing>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <pricing></pricing>
            </div>
        </CarouselItem>
        <CarouselItem>
            <div>
              <preprocess></preprocess>
            </div>
        </CarouselItem> -->
    </Carousel>
    </div>
</template>

<script>
import collection from './collect-monitor-index'
import preprocess from './preprocess-index'
import mainindex from './main-index'
import pricing from './pricingAndWarehousing'
import preprocessSms from './preprocess-sms'
import preprocessVoice from './preprocess-voice'
import appreciation from './preprocess-appreciation'
import 'iview/dist/styles/iview.css';
export default {
  name:'mainframe',
  components:{
    mainindex,
    collection,
    preprocess,
    preprocessSms,
    pricing,
    preprocessVoice,
    appreciation
  },

data () {
            return {
                value2: 0,
                cunIndex:0
            }
        },

  methods:{
    update:function (){

    },
    test:function (a,b) {
      console.log(a+'---'+b);
      this.cunIndex = b;
    },

    hide:function () {
      document.getElementsByClassName('ivu-carousel-arrow')[0].setAttribute("style","display:none");
      document.getElementsByClassName('ivu-carousel-arrow')[1].setAttribute("style","display:none");
      document.getElementsByClassName('ivu-carousel-dots')[0].setAttribute("style","display:none");
    },

    handleResize:function () {
      window.screenHeight = document.documentElement.clientHeight;
      document.getElementById('carouselMain').setAttribute("style","height:"+window.screenHeight+"px"+"")
    },
  },

  mounted(){
    this.update();
    this.handleResize();
    window.addEventListener('resize',this.handleResize);
  }
}

</script>

<!--<style scoped src="@/resource/css/carousel.css"></style>-->

