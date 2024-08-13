<template>
<div class="header-two-container container">
      <div class="card-container container">
    <div class="banner container">
        <div class="main-bannner container">
            <div class="title">北斗计划</div>
            <div class="sub">No Problem No Problem No Problem</div>
            <div class="description">
                <p>北斗计划是美团面向全球精尖校园科技人才的招聘项目，目标是基于美团多元的业务场景和广阔的职业平台，培养及储备能引领未来科技发展的技术专家，携手打造多层次科技服务平台。该项目自启动以来，吸引了海内外高校诸多优秀科技人才加入，经过多年的耕耘及沉淀，逐渐形成了助力专业人才成长和发展的项目体系。现诚邀各技术领域的优秀同学加入“北斗计划”，一起成长，一起更好，共同践行“帮大家吃得更好，生活更好”的使命！</p>
            </div>
            <search-icon :mykey="'输入关键词搜索岗位'"></search-icon>
        </div>
    </div>
  </div>
</div>
</template>

<script >
export default {

}
</script>

<style lang="scss" scoped>
.header-two-container{
    background-image: url(@/assets/beidou.png);
    width: 100%;
    display: flex;
    justify-content: center;

}
.card-container{
    width: 100%;
    width: 1380px;
    height: 476px;
    background-size: 100% 100%;
    // background-image: url(@/assets/beidou.png);
    display: flex;
    align-items: center;
    // justify-content: center;
    .banner{
        margin: 0 50px;
        // background-color: #fff;
        width: 1280px;
        height: 272px;
    }
}
.main-bannner{
    // background-color: hotpink;
    width: 740px;
    height: 272px;
    .title{
     font-weight: 600;
    font-family: PingFangSC-Medium;
    font-size: 40px;
    color:#fff;
    line-height: 48px;
    
    }
    .sub{
    padding: 4px 0 12px;
    font-weight: 400;
    opacity: 0.7;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #fff;
    line-height: 24px;
    }
    .description{
    font-weight: 400;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #fff;
    line-height: 22px;
    margin-bottom: 36px;
    }
}
</style>