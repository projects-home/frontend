<!-- 语音预处理 -->
<template>
  <div class="background preProcessMain" id="PreProcessMain">

    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>

    <!--左侧部分-->
    <div id="leftPart">
      <div id="titleBar">预处理</div>
      <!--左侧上部-->
      <div id="leftPartTop">
        <div id="leftPartTopTitle">预处理数据健康指标监控</div>
        <div class="content" style="width:80%;height:90%">  <!--style="width: 50rem;" -->
           <barPreprocess :barPreprocessValue="barPreprocessData" class="barPreprocessVoice"></barPreprocess>
        </div>
        <div id="effectiveSingleMean">
          <div id="effectiveSingleServeTitle">有效单均值</div>
          <div v-for="item in proportion" class="subServiceListMean" v-bind:key="item">
             {{ item }}
          </div> 
        </div>
      </div>
      <!--左侧下部-->
      <div id="leftPartBottom">
        <div id="leftPartBottomRight">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 29.1875rem;">
            <areaLineChartSms :areaLineChartSmsData="areaLineChartVoiceData" class="areaLineChartVoice"></areaLineChartSms>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>

      </div>
    </div>

    <!--右侧部分-->
    <div id="rightPart">
      <!--右上部分-->
    
      <div id="rightPartTop">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 42.75rem;">

          <div class="subService">
            <div class="subServiceTitle">子业务</div>
            <div class="subServiceSubTitle"></div>
            <div class="subServiceList">HOO2</div>
            <div class="subServiceList">NOSI</div>
            <div class="subServiceList">GLOV</div>
            <div class="subServiceList">GIOV</div>
            <div class="subServiceList">GNOV</div>
            <div class="subServiceList">GBOV</div>

          </div>
          <div class="overstockIndex">
            <div class="subServiceTitle">积压指标</div>
            <div class="subServiceSubTitle">积压文件数（个）</div>
            <lineProcessVoice :lineProcessVoiceData="lineProcessSmsData1" class="lineProcessSms1"></lineProcessVoice>
            <lineProcessVoice :lineProcessVoiceData="lineProcessSmsData2" class="lineProcessSms2"></lineProcessVoice>
            <lineProcessVoice :lineProcessVoiceData="lineProcessSmsData3" class="lineProcessSms3"></lineProcessVoice>
            <lineProcessVoice :lineProcessVoiceData="lineProcessSmsData4" class="lineProcessSms4"></lineProcessVoice> 
            <lineProcessVoice :lineProcessVoiceData="lineProcessSmsData5" class="lineProcessSms5"></lineProcessVoice>
            <lineProcessVoice :lineProcessVoiceData="lineProcessSmsData6" class="lineProcessSms6"></lineProcessVoice>

          </div>
          <div id="dashboardArea">
            <div class="subServiceTitle">性能指标</div>
            <div class="dashboardAreaSubTitle">文件处理耗时/秒</div>
            <dashBoardVoice :dashBoardVoiceValue="dashBoardSmsData1" class="dashBoardSms1 dashboardStyle"></dashBoardVoice> 
            <dashBoardVoice :dashBoardVoiceValue="dashBoardSmsData2" class="dashBoardSms2 dashboardStyle"></dashBoardVoice> 
            <dashBoardVoice :dashBoardVoiceValue="dashBoardSmsData3" class="dashBoardSms3 dashboardStyle"></dashBoardVoice> 
            <dashBoardVoice :dashBoardVoiceValue="dashBoardSmsData4" class="dashBoardSms4 dashboardStyle"></dashBoardVoice> 
            <dashBoardVoice :dashBoardVoiceValue="dashBoardSmsData5" class="dashBoardSms5 dashboardStyle"></dashBoardVoice> 
            <dashBoardVoice :dashBoardVoiceValue="dashBoardSmsData6" class="dashBoardSms6 dashboardStyle"></dashBoardVoice> 

          </div> 

        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>


      <!--右下部分-->
      <div id="rightPartBottom">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 42.75rem;">
              <barChart :barChartValue="barChartData" class="barChart2"></barChart>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="@/resource/js/preprocessVoice.js"></script>

<style scoped src="@/resource/css/preprocessVoice.css"></style>
