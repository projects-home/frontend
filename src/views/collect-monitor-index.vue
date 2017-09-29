<template>
  <div class="background CollectMain" >

    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>

    <!--左侧部分-->
    <div class="leftPart">
      <!--左侧上部-->
      <div class="leftPartTop">
        <div class="leftPartTopTitle">{{title}}业务采集延迟TOP6</div>
        <div class="MainDiagram">
          <div class="BigCirle"></div>
          <div class="gear"></div>
          <div class="SmallCirle"></div>
          <div class="process">
            <clock></clock>
          </div>
          <div class="circle1">
            <div class="circle1Anime">
              <br/>
              <label id="date1" style="color:white;font-size:8px;">{{date}}</label><br/>
              <label id="time1" style="color:white;font-size:8px;">{{time}}</label><br/>
              <label id="des1" style="color:white;font-size:10px;">{{des1}}</label><br/>
              <label id="tip1" style="color:white;font-size:14px;">{{label1}}</label>
            </div>
          </div>
          <div class="circle2">
            <div class="circle2Anime">
              <br/><div style="height:10px;"></div>
              <label id="date1" style="color:white;font-size:11px;">{{date}}</label><br/>
              <label id="time1" style="color:white;font-size:11px;">{{time}}</label><br/>
              <label id="des1" style="color:white;font-size:13px;">{{des2}}</label><br/>
              <label id="tip1" style="color:white;font-size:17px;">{{label2}}</label>
            </div>
          </div>
          <div class="circle3">
            <div class="circle3Anime">
              <br/><div style="height:10px;"></div>
              <label id="date1" style="color:white;font-size:11px;">{{date}}</label><br/>
              <label id="time1" style="color:white;font-size:11px;">{{time}}</label><br/>
              <label id="des1" style="color:white;font-size:13px;">{{des3}}</label><br/>
              <label id="tip1" style="color:white;font-size:17px;">{{label3}}</label>
            </div>
          </div>
          <div class="circle4">
            <div class="circle4Anime">
              <br/><br/>
              <label id="date1" style="color:white;font-size:11px;">{{date}}</label><br/>
              <label id="time1" style="color:white;font-size:11px;">{{time}}</label><br/>
              <label id="des1" style="color:white;font-size:13px;">{{des4}}</label><br/>
              <label id="tip1" style="color:white;font-size:17px;">{{label4}}</label>
            </div>
          </div>
          <div class="circle5">
            <div class="circle5Anime">
              <br/><br/><div style="height:5px;"></div>
              <label id="date1" style="color:white;font-size:13px;">{{date}}</label><br/>
              <label id="time1" style="color:white;font-size:13px;">{{time}}</label><br/>
              <label id="des1" style="color:white;font-size:13px;">{{des5}}</label><br/>
              <label id="tip1" style="color:white;font-size:18px;">{{label5}}</label>
            </div>
          </div>
          <div class="circle6">
            <div class="circle6Anime">
              <br/><br/><div style="height:5px;"></div>
              <label id="date1" style="color:white;font-size:11px;">{{date}}</label><br/>
              <label id="time1" style="color:white;font-size:11px;">{{time}}</label><br/>
              <label id="des1" style="color:white;font-size:13px;">{{des6}}</label><br/>
              <label id="tip1" style="color:white;font-size:18px;">{{label6}}</label>
            </div>
          </div>
        </div>
      </div>
      <!--左侧下部-->
      <div class="leftPartBottom">

        <!--左下左侧-->
        <div class="leftPartBottomLeft">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 460px;">
            <!-- <areaLineChartPre :areaLineChartPreData="areaLineChartPreData" v-bind:tmp="tmp" class="areaLineChartPre"></areaLineChartPre> -->
            <!-- <lineChart :lineChartValue="lineChartData" class="lineChart"></lineChart> -->
            <!-- <lineChart :lineChartValue="lineChartData" class="lineChart"></lineChart> -->
            <areaLineChartTmp :areaLineChartTmpValue="areaLineChartTmpData" v-bind:callFunc="areaTmpFunc" v-bind:tmp="tmp" class="coll-areaLineChartTmp"></areaLineChartTmp>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>
        <!--左下右侧-->
        <div class="leftPartBottomRight">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 460px;">
            <barChart :barChartValue="barChartData" v-bind:tmp="tmp" class="coll-barChart2"></barChart>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>

      </div>
    </div>

    <!--右侧部分-->
    <div class="rightPart">
      <!--右上部分-->
      <div class="rightPartTop">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 680px;">
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
            <div class="subServiceSubTitle" style="margin-bottom:3.5%">积压文件数（个）</div>
            <line-process :lineProcessData="lineProcessData1" v-bind:tmp="tmp" class="coll-lineProcess1"></line-process>
            <line-process :lineProcessData="lineProcessData2" v-bind:tmp="tmp" class="coll-lineProcess2"></line-process>
            <line-process :lineProcessData="lineProcessData3" v-bind:tmp="tmp" class="coll-lineProcess3"></line-process>
            <line-process :lineProcessData="lineProcessData4" v-bind:tmp="tmp" class="coll-lineProcess4"></line-process>
          </div>
          <div class="dashboardArea">
            <div class="subServiceTitle">性能指标</div>
            <div class="subServiceSubTitle dashboardAreaSubTitle" style="margin-bottom:21%">文件处理耗时/秒</div>
            <dash-board :dashBoardValue="dashBoardData1" v-bind:tmp="tmp" class="coll-dashBoard1 dashboardStyle"></dash-board>
            <dash-board :dashBoardValue="dashBoardData2" v-bind:tmp="tmp" class="coll-dashBoard2 dashboardStyle"></dash-board>
            <dash-board :dashBoardValue="dashBoardData3" v-bind:tmp="tmp" class="coll-dashBoard3 dashboardStyle"></dash-board>
            <dash-board :dashBoardValue="dashBoardData4" v-bind:tmp="tmp" class="coll-dashBoard4 dashboardStyle"></dash-board>
          </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
      <!--右下部分-->
      <div class="rightPartBottom">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 680px;">

          <div class="rightPartBottomTitle">
            <div>网络连通性监控</div>
            <div>网络连通率最低话单采集点TOP6</div>
          </div>
          <div class="contentA">
            <div class="contentC">
              <ringChart :ringChartData="ringChartData1" v-bind:tmp="tmp" class="coll-ringChart1"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData2" v-bind:tmp="tmp" class="coll-ringChart2"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData3" v-bind:tmp="tmp" class="coll-ringChart3"></ringChart>
            </div>
          </div>
          <div class="contentB">
            
            <div class="contentC">
              <ringChart :ringChartData="ringChartData4" v-bind:tmp="tmp" class="coll-ringChart4"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData5" v-bind:tmp="tmp" class="coll-ringChart5"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData6" v-bind:tmp="tmp" class="coll-ringChart6"></ringChart>
            </div>
          </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="@/resource/js/collect-monitor.js"></script>
<style scoped src="@/resource/css/collect-monitor.css"></style>
