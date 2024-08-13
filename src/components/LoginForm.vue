<template>
    <div class="login-form">
        <div class="login-phone-title">手机登录</div>
    <div>
    <el-input
      style="max-width: 350px"
      placeholder="请输入11位号码">
      <template #prepend>
        <el-select  placeholder="+86" style="width: 100px">
          <el-option label="加拿大" value="1" />
          <el-option label="美国" value="2" />
          <el-option label="埃及" value="3" />
        </el-select>
      </template>
    </el-input>
  </div>
    <div>
        <el-input style="width:350px" placeholder="验证码" class="input2" />
    </div>
    <button class="button1">
        <span>立即登录</span>
    </button>
    </div>
</template>

<script>


export default {

}
</script>

<style scoped lang="scss">
.login-form{
    /* background-color:pink; */
    width: 350px;
    height: 256px;
    margin:30px 80px 45px 80px;
}
.login-phone-title{
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    padding-bottom: 16px;
}
:deep(.el-input__wrapper ){
    width: 350px;
    height: 48px;
    background-color:rgb(245,245,245);
    font-size: 16px;
    font-weight: 400;
    /* border-radius: 6px; */
    box-shadow: 0 0 0 ; 
    margin: 0 0 22px 0;  
}

:deep(.el-input-group__prepend){
    height: 50px;
    box-shadow: 0 0 0 ; 

}
:deep(.el-select-group__prepend){
    background-color:rgb(245,245,245);
}
:deep(.el-input-group--prepend .el-input-group__prepend .el-select .el-select__wrapper) {
    background-color:rgb(245,245,245);
    box-shadow: 0 0 0;
}

.button1{
    width: 350px;
    height: 40px;
    background-color: rgb(255,208,  1);
    border-radius: 6px;
    margin-top:18px;
}
</style>