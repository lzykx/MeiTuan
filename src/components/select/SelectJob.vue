<template>
  <div class="select-container container">
    <div class="select-content">
        <!-- 左边选择 -->
        <div class="select-left">
            <div class="left-content">
                <div class="filter-header">
                    <span>筛选</span>
                    <i>清除所有</i>
                </div>
                <div class="filter-item">
                    <fold-banner></fold-banner>
                </div>
                <!-- 2 -->
                <div class="filter-item">
                    <fold-banner2th></fold-banner2th>
                </div>
            </div>
        </div>
        <!-- 中间分割线 -->
        <div class="select-mid" >
            <div class="mid">

            </div>
    <!-- 右边信息 -->

        </div>
    <select-right></select-right>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.select-container{
    width: 1380px;
    height: 2338px;
    padding-top: 64px;
    // background-color: pink;
    .select-content{
        display: flex;
    width: 1280px;
    height: 100%;
    
    margin: 0 auto;
    background-color: #fff;
    }

}
.select-left{
    width: 236px;
    height: 100%;
    .left-content{
    // background-color:gold;
    height: 964px;
    width: 100%;
    .filter-header{
        width: 236px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    padding-bottom: 16px;
    line-height: 20px;
    border-bottom: 1px solid #ebedf0;
    margin-bottom: 16px;
    // background-color: hotpink;
    span{
    font-weight: 600;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #000;
    }
    i{
      font-weight: 400;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #166ff7;
    }
    }

    }
}
.select-mid{
    width: 1px;
    margin: 0 27.5px;
    position: relative;
    background-color: #ebedf0;
    height: 100%;
    .mid{
    height: 1000px;

        width: 1px;
    height: 104px;
    // background-color: hotpink;
    position: relative; 
    margin: 0 auto; 
    
    }
}
</style>