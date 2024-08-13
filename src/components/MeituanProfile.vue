  <template>
  <div class="profile container">
    <div class="profile-content">
      <div class="text">美团简介</div>
      <div class="item">
        <div class="lunbo">
          <i class="jiantou one" @click="donext">《</i>
          <div class="dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <i class="jiantou two" @click='doback'>》</i>


        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  data(){
    return{
    images: [
      '../assets/1.png',
      '../assets/2.png',
      '../assets/3.png'
    ],
    currentIndex: 0
    }
  },

}

</script>

<style lang="scss" scoped>
.profile{
    width: 1380px;
    height: 532px;
    padding: 80px 0 68px 0;
    // background-color: wheat;
    .profile-content{
        width: 1280px;
        height: 532px;
        // background-color: pink;
        margin: 0 auto;
        .item{
          width: 1280px;
          height: 452px;
          margin-top: 40px;
          background: url(../assets/1.png);
          width: 100%;
          // overflow: hidden;
          position: relative;
          border-radius: 16px;
          background-size: cover;
          .lunbo{
            width: 100%;
            height: 32px;
            background-color: #fff;
            position: absolute;
            bottom: -44px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            
            
          }
          
        }
    }
}
.lunbo {
  .jiantou{
    width: 14px;
    height: 32px;
    line-height: 32px;
   cursor: pointer;

    

  }
  .dots{

    width: 116px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    .dot{
      width: 8px;
      margin:0 4px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    background: #000;
    opacity: .2;
    cursor: pointer;

            }
  }
}
.lunbo .dots .active{
    opacity:1;
  
}
</style>