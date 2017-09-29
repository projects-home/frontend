<template>
  <div class="background CollectMain" >

    <!--标题栏-->
    <TopBar :topBarData="topBarData" class="topBarName"></TopBar>

    <!--左侧部分-->
    <div class="leftPart">
      <!--左侧上部-->
      <div class="leftPartTop">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 872px;">
            <div class="contentL">
                <div class="contentL1 border" @click="clickFunc($event, 'border')">
                  <div class="labelLT" style="margin-left:2px;">当月新开户数量</div>
                  <div class="labelLB">524453</div>
                </div>
                <div class="contentL2" @click="clickFunc($event, 'border')">
                  <div class="labelLT" style="margin-left:15px;">当月开户数量</div>
                  <div class="labelLB">9524453</div>
                </div>
                <div class="contentL3" @click="clickFunc($event, 'border')">
                  <div class="labelLT" style="margin-left:15px;">在网用户总数</div>
                  <div class="labelLB">16524453</div>
                </div>
                <div class="contentLTip">单位：户</div>
                <div class="contentL4">
                  <div class="label41">当日实名率</div>
                  <div class="label42">99.99%</div>
                </div>
            </div>
            <div class="contentR">
              <div class="blur blurBS"></div>
              <div class="divBS">
                <label class="labMap">1624135</label><br/>
                <div class="nameMap">宝山区</div>
              </div>
              <div class="blur blurJD"></div>
              <div class="divJD">
                <label class="labMap">924135</label><br/>
                <div class="nameMap">嘉定区</div>
              </div>
              <div class="blur blurQP"></div>
              <div class="divQP">
                <label class="labMap">1624135</label><br/>
                <div class="nameMap">青浦区</div>
              </div>
              <div class="blur blurSGS"></div>
              <div class="divSGS">
                <label class="labMap">5624135</label><br/>
                <div class="nameMap">市公司</div>
              </div>
              <div class="blur blurPT"></div>
              <div class="divPT">
                <label class="labMap">4423216</label><br/>
                <div class="nameMap">普陀区</div>
              </div>
              <div class="blur blurPDXQ"></div>
              <div class="divPDXQ">
                <label class="labMap">3624135</label><br/>
                <div class="nameMap">浦东新区</div>
              </div>
              <div class="blur blurMX"></div>
              <div class="divMX">
                <label class="labMap">1624135</label><br/>
                <div class="nameMap">闵行区</div>
              </div>
              <div class="blur blurSJ"></div>
              <div class="divSJ">
                <label class="labMap">2124131</label><br/>
                <div class="nameMap">松江区</div>
              </div>
              <div class="blur blurJS"></div>
              <div class="divJS">
                <label class="labMap">2624135</label><br/>
                <div class="nameMap">金山区</div>
              </div>
              <div class="blur blurFX"></div>
              <div class="divFX">
                <label class="labMap">924135</label><br/>
                <div class="nameMap">奉贤区</div>
              </div>
              <div class="blur blurNH"></div>
              <div class="divNH">
                <label class="labMap">4624132</label><br/>
                <div class="nameMap">南汇区</div>
              </div>
            </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
      <!--左侧下部-->
      <div class="leftPartBottom">
        <div class="borderLeft">
          <div class="borderLeftTop"></div><div class="borderLeftDown"></div>
        </div>
        <div class="content" style="width: 872px;">
            <div class="contentTittle">用户量数据</div>
            <div class="contentTip">单位：户</div>
            <div class="ringBG">
                <div class="ringL1">
                    <div class="labelT">250000</div>
                    <div class="labelB">预付费</div>
                </div>
                <div class="ringL2">
                    <div class="labelT">250000</div>
                    <div class="labelB">后付费</div>
                </div>
                <div class="ringL3">
                    <div class="labelT">500000</div>
                    <div class="labelB">集客</div>
                </div>
                <div class="ringMid">
                    <div class="labelT">1000000</div>
                    <div class="labelB">移网总数</div>
                </div>
                <div class="ringR1">
                    <div class="labelT">500000</div>
                    <div class="labelB">公众</div>
                </div>
                <div class="ringR2">
                    <div class="labelT">250000</div>
                    <div class="labelB">预付费</div>
                </div>
                <div class="ringR3">
                    <div class="labelT">250000</div>
                    <div class="labelB">后付费</div>
                </div>
            </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
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
        <div class="content" style="width: 870px;">
            <div class="tipDiv1 tipBg" @click="clickFunc($event, 'tipBg')">集客</div>
            <div class="tipDiv2" @click="clickFunc($event, 'tipBg')">公众</div>
            <div class="contentRs">
              <areaLineChartTmp :areaLineChartTmpValue="areaLineChartTmpData" class="areaLineChartTmp"></areaLineChartTmp>
            </div>
            <div class="contentRs">
              <barChartTmp :barChartTmpValue="barChartTmpData" class="barChartTmp"></barChartTmp>
            </div>
            <div class="contentRs">
              <barChartTmp :barChartTmpValue="barChartTmpDatas" class="barChartTmps"></barChartTmp>
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
        <div class="content" style="width: 870px;">
            <div class="contentTittle">系统开户情况</div>
            <div class="contentTip">单位：户</div>
            <div class="contentPie">
              <pie :PieData="PieData" class="PieChart"></pie>
            </div>
            <div class="contentArea">
              <areaLineChartTmp :areaLineChartTmpValue="areaLineChartTmpDatas" class="areaLineChartTmps"></areaLineChartTmp>
            </div>
        </div>
        <div class="borderRight">
          <div class="borderRightTop"></div><div class="borderRightDown"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script src="@/resource/js/account.js"></script>

<style scoped src="@/resource/css/account.css"></style>
