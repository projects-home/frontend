<template>
  <div id="timeAnime">
    <label ref="yearAnime"></label> -
    <label ref="monthAnime1"></label><label ref="monthAnime2"></label> -
    <label ref="dayAnime1"></label><label ref="dayAnime2"></label>&nbsp;&nbsp;
    <label ref="hourAnime1"></label><label ref="hourAnime2"></label>:
    <label ref="minuteAnime1"></label><label ref="minuteAnime2"></label>:
    <label ref="secondAnime1"></label><label ref="secondAnime2"></label>
  </div>
</template>

<script>
  import countUp from 'countup.js'
  export default {
    name: 'timeAnime',
    data(){
      return{
        yearAnime:null,
        monthAnime1:null,
        dayAnime1:null,
        hourAnime1:null,
        minuteAnime1:null,
        secondAnime1:null,
        monthAnime2:null,
        dayAnime2:null,
        hourAnime2:null,
        minuteAnime2:null,
        secondAnime2:null,
      }

    },


    methods:{
      initCountUp:function(){
        this.yearAnime = new countUp(this.$refs.yearAnime,0,2000,0,1,{separator: ''});
        this.yearAnime.start();
        this.monthAnime1 = new countUp(this.$refs.monthAnime1,1,1,0,1);
        this.monthAnime1.start();
        this.dayAnime1 = new countUp(this.$refs.dayAnime1,1,1,0,1);
        this.dayAnime1.start();
        this.hourAnime1 = new countUp(this.$refs.hourAnime1,1,1,0,1);
        this.hourAnime1.start();
        this.minuteAnime1 = new countUp(this.$refs.minuteAnime1,1,1,0,1);
        this.minuteAnime1.start();
        this.secondAnime1 = new countUp(this.$refs.secondAnime1,1,1,0,1);
        this.secondAnime1.start();
        this.monthAnime2 = new countUp(this.$refs.monthAnime2,1,1,0,1);
        this.monthAnime2.start();
        this.dayAnime2 = new countUp(this.$refs.dayAnime2,1,1,0,1);
        this.dayAnime2.start();
        this.hourAnime2 = new countUp(this.$refs.hourAnime2,1,1,0,1);
        this.hourAnime2.start();
        this.minuteAnime2 = new countUp(this.$refs.minuteAnime2,1,1,0,1);
        this.minuteAnime2.start();
        this.secondAnime2 = new countUp(this.$refs.secondAnime2,1,1,0,1);
        this.secondAnime2.start();
      },

      updateTime:function () {
        var year = new Date().getFullYear();
        var month = new Date().getMonth()+1;
        var day = new Date().getDate();
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var second = new Date().getSeconds();
        var month1 = parseInt(month/10);
        var month2 = month%10;
        var day1 = parseInt(day/10);
        var day2 = day%10;
        var hour1 = parseInt(hour/10);
        var hour2 = hour%10;
        var minute1 = parseInt(minute/10);
        var minute2 = minute%10;
        var second1 = parseInt(second/10);
        var second2 = second%10;
        this.yearAnime.update(year);
        this.monthAnime1.update(month1);
        this.dayAnime1.update(day1);
        this.hourAnime1.update(hour1);
        this.minuteAnime1.update(minute1);
        this.secondAnime1.update(second1);
        this.monthAnime2.update(month2);
        this.dayAnime2.update(day2);
        this.hourAnime2.update(hour2);
        this.minuteAnime2.update(minute2);
        this.secondAnime2.update(second2);

      },

      updatePerMinute:function () {
        setInterval(()=>{
          this.updateTime();
        },1000)
      },

    },
    mounted(){
      this.initCountUp();
      this.updatePerMinute();
    },

  }
</script>

<style>
 #timeAnime{
   color: white;
   font-family: "Microsoft YaHei UI";
   font-weight: 500;
   font-size: 20px;
   display: inline-block;
   float: left;
   line-height: 58px;
   margin-left: 250px;
   color: #b0d6e7;

 }
</style>
