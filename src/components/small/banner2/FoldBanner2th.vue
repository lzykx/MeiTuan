<template>
<!-- 折叠的框架 -->
  <div class="fold">
    <input type="checkbox" id="checkbox2">
    <label class="fold-title" for="checkbox2">
        <span>职位类别</span>
        <i class="icon-bott">
            <el-icon size="15"><CaretBottom /></el-icon>
        </i>
        <i class="icon-top">
            <el-icon size="15"><CaretTop /></el-icon>

        </i>
    </label>
    <div class="fold-content">
        <fold-two></fold-two>
        <fold-three></fold-three>
        <fold-four></fold-four>
        <fold-five></fold-five>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.fold{
    // overflow: hidden;

    width: 236px;
    padding-bottom: 24px;
    background-color: #fff;

    .fold-title{  
    padding-top: 10px;
    cursor: pointer;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-top{
        display: none;
    }

    }
    span{
    font-weight: 600;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #000;
    }

}
.fold-content{
    padding-top: 16px;
    display: none;
    // height: 300px;
    width: 236px;
    
    background-color: white;
}
input[type="checkbox"]{
    &:checked{
        ~.fold-title{
        .icon-top{
            display: block;
        }
        .icon-bott{
            display: none;
        }
        }
        ~.fold-content{
            display: block;
        }
    }
}
#checkbox2{
    display:none;
}
</style>