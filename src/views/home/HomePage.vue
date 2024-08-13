<template>
<!-- <div class="container"> -->
    <div class="home-container ">
        <!-- 那个录像 -->
        <div class="homevideo">
            <video src="../../assets/HomeVideo.mp4" autoplay loop muted></video>  
            <div class="mask"></div>   
            <div class="comeon">
                           <div class="slogan">
          <p class="p1">一起成长，一起更好</p>
          <p class="p2">Grow Together,Better Together</p>
        </div>
        <div class="search">
            <search-icon :mykey="'美团全部岗位'">
            </search-icon>
        </div>
                </div> 
            <div class="video-wrap">
                <div class="video-item" v-for="item in 6" :key="item">
                    <div class="beidou">北斗计划</div>
                    <span class="line"></span>
                    <p class="desc">面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
                </div>
                </div>      
        </div>
        <!-- //产品和服务 -->
        <div class="product container">
            <div class="product-content">
                <div class="text">产品和服务</div>
                <div class="fangkuai">
                 <div v-for="item in 20" :key="item">
                    <fang-kuai></fang-kuai>
                </div>                   
                </div>
            </div>


        </div>
                    <!-- 美团服务 -->
        <div class="mt-service">
            <meituan-profile></meituan-profile>
        </div>
        <!-- 美团工作 -->
        <div class="mt-work">
            <meituan-work></meituan-work>
        </div>
        </div>
<!-- </div> -->


</template>

<style lang="scss" scoped>
.container{
    width: 100%;
    // height: 700px;


}

.home-container{
    position: relative;
    margin: 0 auto;
    width: 1380px;

    video{
        width: 100%;
        height: 100%;
    position: absolute;
    object-fit: cover;

    top: 0;
    left:0;

    }
    .comeon{
    width: 640px;
    height: 232px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .slogan{
        width: 640px;
        height: 104px;
        // background-color: pink;
        .p1{
    font-family:STZhongsong;
    // font-family: 'meituantype-Regular';
    font-size: 52px;
    letter-spacing: 4px;
    line-height: 60px;
    color: #fff;
    text-align: center;
        }
        .p2{
    margin-top: 12px;
    font-weight: 400;
    font-family:STZhongsong;
    // font-family: 'meituantype-Regular';
    font-size: 24px;
    letter-spacing: 0;
    line-height: 32px;
    color: #fff;
    text-align: center;
        }
    }
    .search{
        width: 640px;
        height: 68px;
        margin-top: 60px;
    }
    }
    
}
.video-wrap{
        position: absolute;
    display: flex;
    margin: auto;
    height: 192px;
    width: 1280px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.03), inset 0 0 5px 0 #fff;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);

    .video-item{
    flex-grow: 0;
    padding: 32px 8px 26px 24px;
    width: 179px;
    height: 134px;
    &:last-child{
        color: black;
    opacity: 0.25;
    cursor: not-allowed;
    }

    .beidou{
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
    color: #111925;
        }
    .line{
    display: inline-block;
    margin-top: 16px;
    width: 40px;
    height: 8px;
    background: transparent;
    border-radius: 4px;
    background: #e0e0e0;
    &:hover{
        background-color: rgb(255,208,  0);
    }
        }
        p{
     margin-top: 16px;
    font-weight: 400;
    opacity: 0.75;
    font-size: 14px;
    line-height: 22px;
    color: #111925;
    width: 179px;
        }

    }
}



.homevideo{
    position: relative;

    width: 1380px;
    height: 720px;
    .mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.4;
    }
}
.product{
    background-color: rgb(248,248,248);
    
    width: 1380px;
    height: 620px;
    padding-top: 80px;
    // background-color: hotpink;
    background-color: rgb(248,248,248);

}
.product-content{
    width: 1300px;
    height: 560px;
    margin: 0 50px;
    background-color: white ;
    background-color: rgb(248,248,248);

    .text{
    background-color: rgb(248,248,248);
        width: 1280px;
        height: 40px;
        // background-color: #fff;
     font-weight: 600;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #111925;
    line-height: 40px;
    }
    .fangkuai{
        // overflow: hidden;
        padding-top: 40px;
        height: 480px;
        display: flex;
        flex-wrap: wrap;
//   justify-content:flex-start;
  align-items: center;
    }
}
</style>