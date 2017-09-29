<template>
  <div class="background" id="transactionMonitor">
    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>

    <!--左侧-->
    <div class="leftPart">

      <!--左侧上部Canvas-->

      <div class="leftPartTop">
        <canvas width="800" height="600" class="canvasMain" id="canvas"></canvas>
      </div>

      <!--左侧下部-->

      <div class="leftPartBottom">

        <!--左侧下部左半边-->

        <div class="leftPartBottomLeft">

          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>

          <div class="Content">
            <div class="ContentTop">
              <div class="Title">
                <div class="mainTitle">{{title1}}</div><div class="subTitle">单位：笔</div>
              </div>
              <div class="ChartContent">
                <div class="pieContent">
                  <pie :PieData="PieData1" class=" PieChart1"></pie>
                </div>
                <div class="heartBeatSmallResize">
                  <heart-beat :heartBeat="heartBeat1" class="heartBeatSmall heartBeat1"></heart-beat>
                </div>
                <div class="lineChartContent">
                  <areaLineChartPre :areaLineChartPreData="areaLineChartPreData" class="areaLineChartPre"></areaLineChartPre>
                </div>
              </div>
            </div>
            <div class="ContentBottom">
              <div class="Title">
                <div class="mainTitle">{{title2}}</div><div class="subTitle">单位：笔</div>
              </div>
              <div class="ChartContent">
                <div class="pieContent">
                  <pie :PieData="PieData2" class="PieChart2"></pie>
                </div>
                <div class="heartBeatSmallResize">
                  <heart-beat :heartBeat="heartBeat2" class="heartBeatSmall heartBeat2"></heart-beat>
                </div>
                <div class="lineChartContent">
                  <areaLineChartPre :areaLineChartPreData="areaLineChartPreData2" class="areaLineChartPre2"></areaLineChartPre>
                </div>
              </div>
            </div>
          </div>

          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>

        </div>

        <!--左侧下部右半边-->

        <div class="leftPartBottomRight">

          <div class="borderLeft">
            <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
          </div>

          <div class="Content">
            <div class="ContentTop">
              <div class="Title">
                <div class="mainTitle">{{title3}}</div>
                <div class="infoLabel">
                  <div class="infoLabelTag"><div class="TagContent">充值量：1.99万笔</div></div>
                  <div class="infoLabelTag infoLabelTag2"><div class="TagContent">充值金额：9.99万元</div></div>
                  <div class="infoLabelTag infoLabelTag2"><div class="TagContent">成功率：99.99%</div></div>
                </div>
                <div class="subTitle">单位：笔</div>
              </div>
              <div class="ChartContent">
                <div class="pieContent">
                  <pie :PieData="PieData3" class="PieChart3"></pie>
                </div>
                <div class="heartBeatSmallResize">
                  <heart-beat :heartBeat="heartBeat3" class="heartBeatSmall heartBeat3"></heart-beat>
                </div>
                <div class="lineChartContent">
                  <areaLineChartPre :areaLineChartPreData="areaLineChartPreData3" class="areaLineChartPre3"></areaLineChartPre>
                </div>
              </div>
            </div>
            <div class="ContentBottom">
              <div class="Title">
                <div class="mainTitle">{{title4}}</div>
                <div class="infoLabel">
                  <div class="infoLabelTag"><div class="TagContent">充值量：1.99万笔</div></div>
                  <div class="infoLabelTag infoLabelTag2"><div class="TagContent">充值金额：9.99万元</div></div>
                  <div class="infoLabelTag infoLabelTag2"><div class="TagContent">成功率：99.99%</div></div>
                </div>
                <div class="subTitle">单位：笔</div>
              </div>
              <div class="ChartContent">
                <div class="pieContent">
                  <pie :PieData="PieData4" class="PieChart4"></pie>
                </div>
                <div class="heartBeatSmallResize">
                  <heart-beat :heartBeat="heartBeat4" class="heartBeatSmall heartBeat4"></heart-beat>
                </div>
                <div class="lineChartContent">
                  <areaLineChartPre :areaLineChartPreData="areaLineChartPreData4" class="areaLineChartPre4"></areaLineChartPre>
                </div>
              </div>
            </div>
          </div>

          <div class="borderRight">
            <div class="borderRightTop"></div><div class="borderRightDown"></div>
          </div>

        </div>

      </div>

    </div>
    <!--右侧-->
    <div class="rightPart">

      <!--右上部-->

      <div class="rightPartTop">

        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>

        <div class="rightPartTopContent">
          <div>
            <div class="Title">
              <div class="mainTitle">{{title5}}</div><div class="subTitle">单位：笔</div>
            </div>
            <div class="ChartContent">
              <div class="pieContent">
                <pie :PieData="PieData5" class="PieChart5"></pie>
              </div>
              <heart-beat :heartBeat="heartBeat5" class="heartBeat heartBeat5"></heart-beat>
              <div class="lineChartContentRight">
                <areaLineChartPre :areaLineChartPreData="areaLineChartPreData5" class="areaLineChartPre5"></areaLineChartPre>
              </div>
            </div>
          </div>

          <div>
            <div class="Title">
              <div class="mainTitle">{{title6}}</div><div class="subTitle">单位：笔</div>
            </div>
            <div class="ChartContent">
              <div class="pieContent">
                <pie :PieData="PieData6" class="PieChart6"></pie>
              </div>
              <heart-beat :heartBeat="heartBeat6" class="heartBeat heartBeat6"></heart-beat>
              <div class="lineChartContentRight">
                <areaLineChartPre :areaLineChartPreData="areaLineChartPreData6" class="areaLineChartPre6"></areaLineChartPre>
              </div>
            </div>
          </div>

          <div>
            <div class="Title">
              <div class="mainTitle">{{title7}}</div><div class="subTitle">单位：笔</div>
            </div>
            <div class="ChartContent">
              <div class="pieContent">
                <pie :PieData="PieData7" class="PieChart7"></pie>
              </div>
              <heart-beat :heartBeat="heartBeat7" class="heartBeat heartBeat7"></heart-beat>
              <div class="lineChartContentRight">
                <areaLineChartPre :areaLineChartPreData="areaLineChartPreData7" class="areaLineChartPre7"></areaLineChartPre>
              </div>
            </div>
          </div>

        </div>

        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>

      </div>

      <!--右边中部-->

      <div class="rightPartMiddle">

        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>

        <div class="rightPartMiddleContent">

          <div class="Title">
            <div class="mainTitle">{{title8}}</div><div class="subTitle">单位：笔</div>
          </div>
          <div class="ChartContent">
            <div class="pieContent">
              <pie :PieData="PieData8" class="PieChart8"></pie>
            </div>
            <heart-beat :heartBeat="heartBeat8" class="heartBeat heartBeat8"></heart-beat>
            <div class="lineChartContentRight">
              <areaLineChartPre :areaLineChartPreData="areaLineChartPreData8" class="areaLineChartPre8"></areaLineChartPre>
            </div>
          </div>

        </div>

        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>

      </div>

      <!--右下部-->

      <div class="rightPartBottom">

        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>

        <div class="rightPartBottomContent">

          <div class="Title">
            <div class="mainTitle">{{title9}}</div><div class="subTitle">单位：笔</div>
            <div class="liquidFillContent">
              <div class="liquidFillLabel liquidFillLabel1">{{liquidFillLable1}}</div>
              <div class="liquidFillLabel liquidFillLabel2">{{liquidFillLable2}}</div>
              <div class="liquidFillLabel liquidFillLabel3">{{liquidFillLable3}}</div>
              <div class="liquidFillLabel liquidFillLabel4">{{liquidFillLable4}}</div>
              <liquidFill :liquidFillData="liquidFillData1" class="liquidFill1"></liquidFill>
              <liquidFill :liquidFillData="liquidFillData2" class="liquidFill2"></liquidFill>
              <liquidFill :liquidFillData="liquidFillData3" class="liquidFill3"></liquidFill>
              <liquidFill :liquidFillData="liquidFillData4" class="liquidFill4"></liquidFill>
              <div class="liquidFillLabelSub liquidFillLabelSub1">{{liquidFillLableSub1}}</div>
              <div class="liquidFillLabelSub liquidFillLabelSub2">{{liquidFillLableSub2}}</div>
              <div class="liquidFillLabelSub liquidFillLabelSub3">{{liquidFillLableSub3}}</div>
              <div class="liquidFillLabelSub liquidFillLabelSub4">{{liquidFillLableSub4}}</div>
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

<script src="@/resource/js/transaction-monitor.js"></script>

<style scoped src="@/resource/css/transaction-monitor.css"></style>
