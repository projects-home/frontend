<template>
  <div>

    <!--标题栏-->
    <TopBar></TopBar>

    <!--左侧部分-->
    <div id="leftPart">
      <!--左侧上部-->
      <div id="leftPartTop">
        <div id="leftPartTopTitle">数据业务采集延迟TOP6</div>
        <div id="MainDiagram">
          <div id="BigCirle"></div>
          <div id="gear"></div>
          <div id="SmallCirle"></div>
          <div id="process">
            <clock></clock>
          </div>
          <div id="circle1">
            <div id="circle1Anime"></div>
          </div>
          <div id="circle2">
            <div id="circle2Anime"></div>
          </div>
          <div id="circle3">
            <div id="circle3Anime"></div>
          </div>
          <div id="circle4">
            <div id="circle4Anime"></div>
          </div>
          <div id="circle5">
            <div id="circle5Anime"></div>
          </div>
          <div id="circle6">
            <div id="circle6Anime"></div>
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
          <div class="content" style="width: 29.1875rem;">
            <!-- <lineChart :lineChartValue="lineChartData" class="lineChart"></lineChart> -->
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
          <div class="content" style="width: 29.1875rem;">
            <barChart :barChartValue="barChartData" class="barChart2"></barChart>
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
            <div class="subServiceList">PGW</div>
            <div class="subServiceList">SGW</div>
            <div class="subServiceList">SCDR</div>
            <div class="subServiceList">INTR</div>
          </div>
          <div class="overstockIndex">
            <div class="subServiceTitle">积压指标</div>
            <div class="subServiceSubTitle">积压文件数（个）</div>
            <!--<line-process :lineProcessData="lineProcessData"></line-process>-->
          </div>
          <div id="dashboardArea">
            <div class="subServiceTitle">性能指标</div>
            <div class="subServiceSubTitle dashboardAreaSubTitle">文件处理耗时/秒</div>
            <!--<dash-board :dashBoardValue="dashBoardData1" class="dashBoard1 dashboardStyle"></dash-board>-->
            <!--<dash-board :dashBoardValue="dashBoardData2" class="dashBoard2 dashboardStyle"></dash-board>-->
            <!--<dash-board :dashBoardValue="dashBoardData3" class="dashBoard3 dashboardStyle"></dash-board>-->
            <!--<dash-board :dashBoardValue="dashBoardData4" class="dashBoard4 dashboardStyle"></dash-board>-->
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

          <div id="rightPartBottomTitle">
            <div>网络连通性监控</div>
            <div>网络连通率最低话单采集点TOP6</div>
          </div>

          <div>
            <CircleProcess :CircleProcessData="CircleProcessData1" class="circleProcessChart1"></CircleProcess>
            <!--<CircleProcess :CircleProcessData="CircleProcessData2" class="circleProcessChart2"></CircleProcess>-->
            <!--<CircleProcess :CircleProcessData="CircleProcessData3" class="circleProcessChart3"></CircleProcess>-->
          </div>
          <div class="circleProcessTitle">
            <div>PGWA</div>
            <div>PWGE</div>
            <div>SGWA</div>
          </div>
          <div>
            <!--<CircleProcess :CircleProcessData="CircleProcessData5" class="circleProcessChart5"></CircleProcess>-->
            <!--<CircleProcess :CircleProcessData="CircleProcessData6" class="circleProcessChart6"></CircleProcess>-->
            <!--<CircleProcess :CircleProcessData="CircleProcessData7" class="circleProcessChart7"></CircleProcess>-->
          </div>
          <div class="circleProcessTitle">
            <div>PGWA</div>
            <div>PWGE</div>
            <div>SGWA</div>
          </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="@/lib/Javascript/preProcess.js"></script>

<style scoped src="@/lib/css/preProcess.css"></style>
