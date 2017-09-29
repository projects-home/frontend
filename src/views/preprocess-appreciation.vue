<template>
  <div class="background preProcessMain">

    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>
    <div id="titleBar">预处理</div>

    <!--左侧部分-->
    <div id="leftPart">
      <!--左侧上部-->
      <div id="leftPartTop">
        <div id="leftPartTopTitle">预处理数据健康指标监控</div>
        <div class="content" style="width:100%;height:80%;display:inline-block;">
          <div class="contentY">
            <yBarPreprocess :yBarPreprocessValue="yBarPreprocessData" class="yBarPreprocess"></yBarPreprocess>
          </div> 
            <div class="effectiveSingleMean">
              <div class="effectiveSingleServeTitle">有效单均值</div>
              <div v-for="item in proportion" class="subServiceListMean" v-bind:key="item">
              {{ item }}
              </div>
            </div>
        </div>
      </div>
      <!--左侧中部-->
      <div id="leftPartMedium">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>  
        <div class="content" style="width:93%;height:95%">
          <areaLineChart :areaLineChartData="areaLineChartData1" class="areaLineChart1"></areaLineChart>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
      <!--左侧下部-->
      <div id="leftPartBottom">>
          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>
          <div class="content" style="width:93%;height:95%">
            <areaLineChart :areaLineChartData="areaLineChartData2" class="areaLineChart2"></areaLineChart>
          </div>
          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
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
        <div class="content" style="width: 850px;">
          <div class="contentT">CRBT、VACN积压及性能指标监控</div>
          <div class="subService">
            <div class="subServiceTitle">业务类型</div>
            <div class="subServiceSubTitle" style="margin-bottom:70%;"></div>
            <div class="subServiceList">CRBT</div>
            <div class="subServiceList">VACN</div>
          </div>
          <div class="overstockIndex">
            <div class="subServiceTitle">积压指标</div>
            <div class="subServiceSubTitle">（积压文件数/个）</div>
            <line-process :lineProcessData="lineProcessData1" class="lineProcess1"></line-process>
            <line-process :lineProcessData="lineProcessData2" class="lineProcess2"></line-process>
          </div>
          <div id="dashboardArea">
            <div class="subServiceTitle">性能指标</div>
            <div class="subServiceSubTitle dashboardAreaSubTitle">（文件处理耗时/秒）</div>
            <dash-board :dashBoardValue="dashBoardData1" class="dashBoard1 dashboardStyle"></dash-board>
            <dash-board :dashBoardValue="dashBoardData2" class="dashBoard2 dashboardStyle"></dash-board>
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
        <div class="content" style="width: 850px;">
          <div class="contentT">CRBT、VACN话单数近3个月对比</div>
          <div class="contentTSub">单位：万条</div>
          <div class="subService">
            <div class="subServiceT">CRBT</div>
            <div class="subServiceT">VACN</div>
          </div>
          <div class="contentA">
            <div class="contentC">
              <ringChart :ringChartData="ringChartData1" class="ringChart1"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData2" class="ringChart2"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData3" class="ringChart3"></ringChart>
            </div>
          </div>
          <div class="contentB">
            <div class="contentC">
              <ringChart :ringChartData="ringChartData4" class="ringChart4"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData5" class="ringChart5"></ringChart>
            </div>
            <div class="contentC">
              <ringChart :ringChartData="ringChartData6" class="ringChart6"></ringChart>
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

<script src="@/resource/js/preprocess-appreciation.js"></script>

<style scoped src="@/resource/css/preprocess-appreciation.css"></style>
