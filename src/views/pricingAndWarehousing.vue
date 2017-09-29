<template>
  <div class="background picAndWare">

    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>

    <!--左侧部分-->
    <div class="leftPart">
      <div class="titleBar">批价</div>
      <!--左侧上部-->
      <div class="leftPartTop">
        <div class="content" style="width: 768px;">
          <div class="subService">
            <div style="height:25%"></div>
            <div class="subServiceTitle">积压指标</div>
            <div class="subServiceSubTitle">（积压文件数/个）</div>
            <div class="proContain">
                <div class="leftLabel">RATE_GPRS</div>
                <lineProcess v-bind:tmp="tmp" :lineProcessData="lineProcessData" class="lineProcess" style="margin-bottom:50%;"></lineProcess>
            </div>
          </div>
        </div>
        <div class="dashboardArea">
            <div class="subServiceTitle">性能指标</div>
            <div class="subServiceSubTitle dashboardAreaSubTitle">（文件处理耗时/秒）</div>
            <dash-board v-bind:tmp="tmp" :dashBoardValue="dashBoardData" class="dashBoard dashboardStyle"></dash-board>
          </div>
      </div>
      <!-- 左侧中部 -->
      <div class="leftPartMedium">
        <!--左中左侧-->
        <div class="leftPartMediumLeft">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 456px;">
            <div class="rightPartBottomTitle">
              <div>批价话单数近3个月对比</div>
              <div>单位:万条</div>
            </div>
            <div class="contentX">
              <div class="contentY">
                <ringChart :ringChartData="ringChartData1" class="ringChart1"></ringChart>
              </div>
              <div class="contentY">
                <ringChart :ringChartData="ringChartData2" class="ringChart2"></ringChart>
              </div>
              <div class="contentY">
                <ringChart :ringChartData="ringChartData3" class="ringChart3"></ringChart>
              </div>
            </div>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>
        <!--左中右侧-->
        <div class="leftPartMediumRight">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 456px;">
            <areaLineChart :areaLineChartData="areaLineChartData0" v-bind:tmp="tmp" class="areaLineChart0"></areaLineChart>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
        </div>
      </div>
      <!--左侧下部-->
      <div class="leftPartBottom">
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width: 1020px;">
            <div class="contentT">话单数、话单业务量及话单金额近3月对比</div>
            <div class="contentL">
              <yBarChart :yBarChartValue="yBarChartData1" v-bind:tmp="tmp" class="yBarChart1"></yBarChart>
            </div>
            <div class="contentL">
              <yBarChart :yBarChartValue="yBarChartData2" v-bind:tmp="tmp" class="yBarChart2"></yBarChart>
            </div>
            <div class="contentL">
              <yBarChart :yBarChartValue="yBarChartData3" v-bind:tmp="tmp" class="yBarChart3"></yBarChart>
            </div>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>
      </div>
    </div>

    <!--右侧部分-->
    <div class="rightPart">
      <div class="titleBar">入库</div>
      <!--右上部分-->
      <div class="rightPartTop">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 675px;">
          <areaLineChart :areaLineChartData="areaLineChartData1" v-bind:tmp="tmp" class="areaLineChart1"></areaLineChart>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
      <!--右中部分-->
      <div class="rightPartMedium">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 675px;">
          <areaLineChart :areaLineChartData="areaLineChartData2" v-bind:tmp="tmp" class="areaLineChart2"></areaLineChart>
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
        <div class="content" style="width: 675px;">
          <areaLineChart :areaLineChartData="areaLineChartData3" v-bind:tmp="tmp" class="areaLineChart3"></areaLineChart>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="@/resource/js/pricingAndWarehousing.js"></script>

<style scoped src="@/resource/css/pricingAndWarehousing.css"></style>
