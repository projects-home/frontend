<template>
  <div>
    <!--导航栏-->
    <top-bar></top-bar>

    <!--左侧部分-->
    <div id="leftPart">
      <!--左上侧单轴散点图-->
      <div id="leftPartTop">
        <div id="titleBar">采集</div>
        <singleAxisScatterDiagram :singleAxisScatterDiagramValue="createTestData(value1)" class="singleAxisScatterDiagram1"></singleAxisScatterDiagram>
        <singleAxisScatterDiagram :singleAxisScatterDiagramValue="createTestData(value2)" class="singleAxisScatterDiagram2"></singleAxisScatterDiagram>
        <singleAxisScatterDiagram :singleAxisScatterDiagramValue="createTestData(value3)" class="singleAxisScatterDiagram3"></singleAxisScatterDiagram>
        <singleAxisScatterDiagram :singleAxisScatterDiagramValue="createTestData(value4)" class="singleAxisScatterDiagram4"></singleAxisScatterDiagram>
      </div>
      <!--左下侧部分-->
      <div id="leftPartBottom">
        <!--左下侧左边框-->
        <div id="leftPartBottomLeft">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 479px;">
            <lineChart :lineChartValue="lineValue1" class="lineChart1"></lineChart>
            <!--<barChart :barChartValue="createTestData2(test1)" class="barChart1"></barChart>-->
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>
        <!--左下侧右侧框-->
        <div id="leftPartBottomRight">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 479px;">
            <barChart :barChartValue="test2" class="barChart2"></barChart>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>
      </div>
    </div>

<!--左侧部分-->
    <div id="rightPart">
      <!--左侧上部-->
      <div id="rightPartTop">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 704px;">
          <div class="subTitle">近2月数据环比</div>
          <div class="smallBarChartContent" style="margin-left: 3%">
            <barChart :barChartValue="Bar_2C1" class="bar2Chart1"></barChart>
          </div>
          <div class="smallBarChartContent" >
            <barChart :barChartValue="Bar_2C2" class="bar2Chart2"></barChart>
          </div>
          <div class="smallBarChartContent" >
            <barChart :barChartValue="Bar_2C3" class="bar2Chart3"></barChart>
          </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
      <!--左侧中部-->
      <div id="rightPartMiddle">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 704px;">
          <div class="contentTitle">
            <label>子业务</label>
            <label>积压指标</label>
            <label>性能监控</label>
          </div>
          <div id="LineProcessLabel">
            <div class="LineProcessLabelList">{{LineProcessLabelList1}}</div>
            <div class="LineProcessLabelList">{{LineProcessLabelList2}}</div>
            <div class="LineProcessLabelList">{{LineProcessLabelList3}}</div>
            <div class="LineProcessLabelList">{{LineProcessLabelList4}}</div>
          </div>
          <line-process :lineProcessData="lineProcessData"></line-process>
          <div class="dashboardArea">
            <dash-board :dashBoardValue="dashBoardData1" class="dashBoard1"></dash-board>
            <dash-board :dashBoardValue="dashBoardData2" class="dashBoard2"></dash-board>
            <dash-board :dashBoardValue="dashBoardData3" class="dashBoard3"></dash-board>
            <dash-board :dashBoardValue="dashBoardData4" class="dashBoard4"></dash-board>
          </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
      <!--左侧下部-->
      <div id="rightPartBottom">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 704px;">
          <div class="subTitle">网络连通性检测</div>
          <div>
            <CircleProcess :CircleProcessData="aaa1" class="circleProcessChart1"></CircleProcess>
            <CircleProcess :CircleProcessData="aaa2" class="circleProcessChart2"></CircleProcess>
            <CircleProcess :CircleProcessData="aaa3" class="circleProcessChart3"></CircleProcess>
          </div>
          <div class="subTitle" id="rightPartBottomSubtitle">
            <div>PWGA</div>
            <div>PGWE</div>
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

<script src="../lib/Javascript/jiFei.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../lib/css/jiFeiMain.css"></style>
