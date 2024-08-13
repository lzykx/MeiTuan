<template>
          <div class="search-input">
            <span>
            <el-icon size="20"><Search /></el-icon>
            </span>
        <input type="text" placeholder="搜索更多城市">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-input{
    width: 236px;
    height: 37px;
    background-color: #fff;
    border-bottom: 1px solid #ebedf0;
 
    input{
     font-weight: 400;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.25);
    line-height: 24px;
    }
    // display: flex;
    // align-items: center;
    span{
        // height: 35px;
        margin-right: 10px;
        margin-left: 5px;
    }
    &:hover{
     border-color: #ffd000;
    }

}
</style>