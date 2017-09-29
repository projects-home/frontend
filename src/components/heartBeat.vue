<template>
  <canvas id="heartBeat" width="100" height="75"></canvas>
</template>


<script>
  export default {
    components:{    },

    name:'heartBeat',

    data(){
      return{
        colorNormal:'green',
        colorError:'red',
        x: 0,
        y: 45,
        vx: 5,
        vy: 2,
        radius: 2,
      }

    },

    props:['heartBeat'],


    methods:{
      drawHeartBeat:function () {
        var attribute = JSON.parse(this.heartBeat);
        var canvas = document.getElementsByClassName(attribute[0].className)[0];
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,100,75);
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        if(attribute[0].type==='normal'){
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0-this.x,45);
          ctx.lineTo(15-this.x,45);
          ctx.lineTo(20-this.x,30);
          ctx.lineTo(25-this.x,60);
          ctx.lineTo(30-this.x,45);
          ctx.lineTo(50-this.x,45);
          ctx.lineTo(60-this.x,15);
          ctx.lineTo(75-this.x,75);
          ctx.lineTo(85-this.x,45);
          ctx.lineTo(100-this.x,45);
          ctx.moveTo(100-this.x,45);
          ctx.lineTo(115-this.x,45);
          ctx.lineTo(120-this.x,30);
          ctx.lineTo(125-this.x,60);
          ctx.lineTo(130-this.x,45);
          ctx.lineTo(150-this.x,45);
          ctx.lineTo(160-this.x,15);
          ctx.lineTo(175-this.x,75);
          ctx.lineTo(185-this.x,45);
          ctx.lineTo(200-this.x,45);
          ctx.moveTo(200-this.x,45);
          this.x++;
          if(this.x>=101)this.x=0;
          ctx.closePath();
          ctx.strokeStyle = this.colorNormal;
          ctx.stroke();
        }

        if(attribute[0].type==='error'){
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0-this.x,45);
          ctx.lineTo(200-this.x,45);
          ctx.moveTo(200-this.x,45);
          this.x++;
          if(this.x>=101)this.x=0;
          ctx.closePath();
          ctx.strokeStyle = this.colorError;
          ctx.stroke();
        }
        window.requestAnimationFrame(this.drawHeartBeat);
      }
    },

    mounted(){
      this.drawHeartBeat();
    }
  }
</script>

