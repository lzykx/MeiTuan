<template>
<!-- 折叠的框架 -->
  <div class="fold">
    <input type="checkbox" id="checkbox3">
    <label class="fold-title" for="checkbox3">
        <i class="icon-bott">
            <el-icon size="15"><CaretBottom /></el-icon>
        </i>
        <i class="icon-top">
            <el-icon size="15"><CaretTop /></el-icon>
        </i>
        <span>技术类</span>

    </label>
    <div class="fold-content">
        <some-btn :message=4></some-btn>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fold{

    width: 236px;
    // height: 22px;
    background-color: yellow;

    .fold-title{  

        cursor: pointer;
        // padding-bottom: 12px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content:flex-start;
        .icon-top{
            display: none;
    }

    }
    span{
    // font-weight: 600;
    // font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #000;
    opacity: 0.7;
    }

}
.fold-content{

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
#checkbox3{
    display:none;
}
input[type="checkbox"][id^="checkbox"] {
    display: none;
}
</style>