<template>
  <div class="fbox">
    <img src="https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/meituan.png" alt="门票">
    <span>美团之家</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.fbox{

    width: 240px;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 20px;
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    span{
    font-family:STZhongsong; 
    font-size: 24px;
    color: #000;
    line-height: 32px;
    display: flex;
    align-items: cente
    }
    img{
    width: 36px;
    height: 36px;
    margin-right: 4px
  }
            
}
.fbox:hover{
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.08);

}

</style>