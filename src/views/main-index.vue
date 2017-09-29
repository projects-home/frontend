<template>
  <div class="background" id="mainIndex">
    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>
    <div id="collect">
      <div class="Pic" id="collectPic">
        <div class="Title">采集</div>
        <img class="img" src="../images/truck.png">
      </div>
      <div class="spot spot1"><label class="smallLable">PGW</label></div>
      <div class="spot spot2"><label class="smallLable">SGW</label></div>
      <div class="spot spot3"><label class="smallLable">SCDR</label></div>
      <div class="spot spot4"><label class="smallLable">INTR</label></div>
    </div>
    <div id="CashierAndWarehouse">
      <div class="Pic" id="CashierAndWarehousePic">
        <div class="Title">批价及入库</div>
        <img class="img" src="../images/house.png">
      </div>
      <div class="spot10"><label class="smallLableRight">GPRS</label><div class="spot "></div></div>
      <div class="spot11"><label class="smallLableRight">SCDR</label><div class="spot "></div></div>
      <div class="spot12"><label class="smallLableRight">RATE_GPS</label><div class="spot "></div></div>
    </div>
    <div id="proProcess">
      <div class="Pic" id="proProcessPic">
        <div class="Title">预处理</div>
        <img class="img" src="../images/bucket.png">
      </div>
      <div class="spot spot1"><label class="smallLable">GPRS</label></div>
      <div class="spot spot2"><label class="smallLable">IPGW</label></div>
      <div class="spot spot3"><label class="smallLable">RPGW</label></div>
      <div class="spot spot4"><label class="smallLable">GPNR</label></div>
      <div class="spot spot5"><label class="smallLable">SCDR</label></div>
      <div class="spot spot6"><label class="smallLable">ISGW</label></div>
      <div class="spot spot7"><label class="smallLable">RSGW</label></div>
      <div class="spot spot8"><label class="smallLable">N005</label></div>
      <div class="spot spot9"><label class="smallLable">N009</label></div>
    </div>
    <div id="star"></div>
  </div>
</template>

<script src="@/resource/js/main-index.js"></script>

<style scoped src="@/resource/css/main-index.css"></style>

