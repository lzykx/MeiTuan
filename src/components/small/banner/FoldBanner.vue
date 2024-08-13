<template>
<!-- 折叠的框架 -->
  <div class="fold">
    <input type="checkbox" id="checkbox">
    <label class="fold-title" for="checkbox">
        <span>所在城市</span>
        <i class="icon-bott">
            <el-icon size="15"><CaretBottom /></el-icon>
        </i>
        <i class="icon-top">
            <el-icon size="15"><CaretTop /></el-icon>

        </i>
    </label>
    <div class="fold-content">
        <fold-one :message=14></fold-one>
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
    padding-bottom: 12px;
    background-color: #fff;

    .fold-title{  
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

    display: none;
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
#checkbox{
    display:none;
}
</style>