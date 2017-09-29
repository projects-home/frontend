<template>
  <div class="background preProcessMain">

    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>

    <!--左侧部分-->
    <div id="leftPart">
      <div id="titleBar">预处理</div>
      <!--左侧上部-->
      <div id="leftPartTop">
        <div id="leftPartTopTitle">预处理数据健康指标监控</div>
        <div class="content" style="width:90%;height:80%">  <!--style="width: 50rem;" -->
           <barPreprocess :barPreprocessValue="barPreprocessData" class="barPreprocessIndex"></barPreprocess>
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

        <!--左下左侧-->
        <div id="leftPartBottomLeft">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 456px;">
            <areaLineChartPre :areaLineChartPreData="areaLineChartPreData" class="areaLineChartPre"></areaLineChartPre>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>
        <!--左下右侧-->
        <div id="leftPartBottomRight">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 456px;">
            <areaLineChartPre :areaLineChartPreData="areaLineChartPreData2" class="areaLineChartPre2"></areaLineChartPre>
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
        <div class="content" style="width: 670px">

          <div class="subService">
            <div class="subServiceTitle">子业务</div>
            <div class="subServiceSubTitle"></div>
            <div class="subServiceList">PGW</div>
            <div class="subServiceList">SGW</div>
            <div class="subServiceList">SCDR</div>
            <div class="subServiceList">INTR</div>
          </div>
          <div class="overstockIndex">
            <div class="subServiceTitle">积压指标</div>
            <div class="subServiceSubTitle">积压文件数（个）</div>
            <lineProcessPre :lineProcessPreData="lineProcessPreData1" class="lineProcessPre1"></lineProcessPre>
            <lineProcessPre :lineProcessPreData="lineProcessPreData2" class="lineProcessPre2"></lineProcessPre>
            <lineProcessPre :lineProcessPreData="lineProcessPreData3" class="lineProcessPre3"></lineProcessPre>
            <lineProcessPre :lineProcessPreData="lineProcessPreData4" class="lineProcessPre4"></lineProcessPre>
          </div>
          <div class="dashboardArea">
            <div class="subServiceTitle">性能指标</div>
            <div class="dashboardAreaSubTitle">文件处理耗时/秒</div>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData1" class="dashBoardPre1 dashboardStyle"></dashBoardPre>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData2" class="dashBoardPre2 dashboardStyle"></dashBoardPre>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData3" class="dashBoardPre3 dashboardStyle"></dashBoardPre>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData4" class="dashBoardPre4 dashboardStyle"></dashBoardPre>
          </div>

        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>

      <!--右中间部分-->
      <div id="rightPartCenter">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 670px;">


          <div class="subService">
            <div class="subServiceTitle">子业务</div>
            <div class="subServiceSubTitle"></div>
            <div class="subServiceList">NOO3</div>
            <div class="subServiceList">NOO5</div>
            <div class="subServiceList">RSGW</div>
            <div class="subServiceList">ISGW</div>
             <div class="subServiceList">SCDR</div>
          </div>
          <div class="overstockIndex">
            <div class="subServiceTitle">积压指标</div>
            <div class="subServiceSubTitle">积压文件数（个）</div>
            <lineProcessPre :lineProcessPreData="lineProcessPreData5" class="lineProcessPre5"></lineProcessPre>
            <lineProcessPre :lineProcessPreData="lineProcessPreData6" class="lineProcessPre6"></lineProcessPre>
            <lineProcessPre :lineProcessPreData="lineProcessPreData7" class="lineProcessPre7"></lineProcessPre>
            <lineProcessPre :lineProcessPreData="lineProcessPreData8" class="lineProcessPre8"></lineProcessPre>
            <lineProcessPre :lineProcessPreData="lineProcessPreData9" class="lineProcessPre9"></lineProcessPre>
          </div>
          <div class="dashboardArea">
            <div class="subServiceTitle">性能指标</div>
            <div class="dashboardAreaSubTitle">文件处理耗时/秒</div>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData5" class="dashBoardPre5 dashboardStyle"></dashBoardPre>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData6" class="dashBoardPre6 dashboardStyle"></dashBoardPre>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData7" class="dashBoardPre7 dashboardStyle"></dashBoardPre>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData8" class="dashBoardPre8 dashboardStyle"></dashBoardPre>
            <dashBoardPre :dashBoardPreValue="dashBoardPreData9" class="dashBoardPre9 dashboardStyle"></dashBoardPre>

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
        <div class="content" style="width: 670px;">
          <barChart :barChartValue="barChartData" class="barChart2"></barChart>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="@/resource/js/preprocess.js"></script>

<style scoped src="@/resource/css/preprocess.css"></style>
