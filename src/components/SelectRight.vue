<template>
  <div class="right-pannel">
      <div class="title">
        <div class="text">
          全部北斗计划职位（50）
        </div>
      </div >
            <div class="pannel-content">
            <router-link to="/work/detail">
                <div class="pan-item"  v-for="items in 8" :key='items'>
                </div>
            </router-link>

        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.right-pannel{
  width: 998px;
  height: 2290px;
  // background-color: pink;
  
  .title{
    height: 32px;
    padding: 0 0 12px 29px;
    // .text{
    // margin-bottom: 10px;

    // }
        
  }
  .pannel-content{
    overflow: hidden;
    
    .pan-item{
      height: 191px;
      // width: ;
      
      background: url(../assets/job.png);
      // box-sizing: cover;
    background-size: cover;

    padding: 28px 0 0 28px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    font-family: PingFangSC-Regular;
    border-radius: 16px;
    background-color:hotpink;

    &:hover{
      box-shadow: 12px 4px 12px 12px rgba(0, 0, 0, 0.5)
    }
    }

  }
}
</style>