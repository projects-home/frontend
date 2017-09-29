<template>
  <div id="clock">
    <label ref="hourAnime1"></label><label ref="hourAnime2"></label>:
    <label ref="minuteAnime1"></label><label ref="minuteAnime2"></label>:
    <label ref="secondAnime1"></label><label ref="secondAnime2"></label>
  </div>
</template>

<script>
  import countUp from 'countup.js'
  export default {
    name: 'clock',
    data(){
      return{
        hourAnime1:null,
        minuteAnime1:null,
        secondAnime1:null,


        hourAnime2:null,
        minuteAnime2:null,
        secondAnime2:null,
      }

    },


    methods:{
      initCountUp:function(){
        this.hourAnime1 = new countUp(this.$refs.hourAnime1,1,1,0,1);
        this.hourAnime1.start();
        this.minuteAnime1 = new countUp(this.$refs.minuteAnime1,1,1,0,1);
        this.minuteAnime1.start();
        this.secondAnime1 = new countUp(this.$refs.secondAnime1,1,1,0,1);
        this.secondAnime1.start();


        this.hourAnime2 = new countUp(this.$refs.hourAnime2,1,1,0,1);
        this.hourAnime2.start();
        this.minuteAnime2 = new countUp(this.$refs.minuteAnime2,1,1,0,1);
        this.minuteAnime2.start();
        this.secondAnime2 = new countUp(this.$refs.secondAnime2,1,1,0,1);
        this.secondAnime2.start();
      },

      updateTime:function () {
        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var second = new Date().getSeconds();
        var hour1 = parseInt(hour/10);
        var hour2 = hour%10;
        var minute1 = parseInt(minute/10);
        var minute2 = minute%10;
        var second1 = parseInt(second/10);
        var second2 = second%10;

        this.hourAnime1.update(hour1);
        this.minuteAnime1.update(minute1);
        this.secondAnime1.update(second1);

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
  #clock{
    color: white;
    font-family: "Microsoft YaHei UI";
    font-weight: bolder;
    font-size: 1.5rem;
    margin-top: 5rem;
    color: #b0d6e7;

  }
</style>
