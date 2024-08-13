<template>
<div class="container">
    <div class="footer container">
    <div class="content container">
      <div class="content-up">
        <div class="content-up-mid">
          <div class="no"><img src="../assets/logo-footer.png"></div>
           <div class="slogan">
          <p class="p1">一起成长，一起更好</p>
          <p class="p2">Grow Together,Better Together</p>
        </div>
        </div>
      </div>
      <div class="content-down">
        <div class="copy">
          <span class="s1"><a href="#">美团</a></span>
          <span class="line">|</span>
          <span class="s" style="opacity:0.35">@2024 美团版权所有</span>
          <span class="s"><a href="#">京ICP备10211739号</a></span>
          <img src="../assets/police.png" alt="jing">
          <span class="s">
            <a href="#">京公网安备 11000002002052号</a>
          </span>
          <span class="line">|</span>
          <span><a href="#">隐私政策</a></span>
          <span style="opacity:0.35">"&nbsp;&nbsp;&nbsp;&nbsp;招聘意见反馈："zhaopin@meituan.com"</span>         
        </div>
        <div class="focus">
          <div class="guanzhu">
            <span>关注我们</span>
          </div>
          <div class="icon" v-for="items in 7" :key="items">
            <img src="../assets/wechat.svg" alt="微信">
            <div class="hidden">
                <div class="hidden-content">
                  <img src="../assets/关注我们.png" alt="">
              <div class="last">
              <span>关注美团招聘公众号</span>
                </div>
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    background-color:rgb(244,245,247);

}
.footer{
    // width: 100%;
    width: 1380px;
    height: 329px;
    .content{
        margin: 0 50px;
        width: 1280px;
        height: 329px;
        background-color: rgb(244,245,247);
        .content-up{
          width: 1280px;
          height: 241px;
          background-color: rgb(244,245,247);
          overflow: hidden;
          border-bottom: 1px solid #e6e7eb;
          img{
                width: 287.5px;
                height: 60px;
          }
          .p1{
                font-family:STZhongsong;
                letter-spacing: 0;
                line-height: 44px;
                color: #111925;
                font-size: 36px;
            }
            .p2{
              font-family:STZhongsong;
              font-size: 16px;
            }
        }

    }
}
.no{
  height: 78px;
}
.slogan{
  width: 324px;
  height: 78px;
  background-color: rgb(244,245,247);
}
.content-up-mid{
  width: 1280px;
  height: 78px;
  margin:48px 0 114px 0;
  display: flex;
  justify-content: space-between;

}
//下部分
.content-down{
  width: 1280px;
  height: 88px;
  background-color:rgb(244,245,247);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .copy{
    line-height: 20px;
    color: #111925;
    display: flex;
    justify-content: flex-start;
    .line{
  margin: 0 8px;
  opacity:0.35;
}
    a{
    opacity: 0.35;
      
    }

    .s1{
      height: 20px;
      line-height: 20px;
      margin-left: 8px;

    }
    .s{
      margin-left: 8px;
      
    }

    // .meituanCopy{
    //   margin-left: 8px;
    // }
    img{
      width: 14px;
      height: 14px;
      margin-left: 8px;
    }
  a{
  text-decoration: underline !important;
  &:hover{
    color:#000;
    opacity: 1;
  }
  }
}
.focus{
  width: 412px;
  height: 32px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  .guanzhu{
    height: 20px;
    line-height: 20px;
  }
  img{
    margin-left: 20px;
  }
}
.focus .icon{
  position:relative;
  &:hover .hidden{
    display: block;
  }
  .hidden{
    width: 156px;
    height: 174px;
    display: none;
    position: absolute;
    left: 50%;
    top: -190px;
    background-color: white;
    transform: translateX(-50%);
    padding-bottom: 16px;
    border-radius: 10px;
    img{
      margin-top:20px;
      width: 120px;
      height: 120px;
    }
    .last{
      width: 120px;
      height: 20px;
      line-height: 20px;
      margin:  0 auto;
      margin-top: 4px;
      span{
        margin-left:9px;
      }
    }
    &:hover{
    display: block;
      
    }
  }
}
</style>