<template>
  <div class="work-container container">
    <div class="work-content container">
        <div class="text">工作在美团</div>
        <div class="items">
            <!-- 1 -->
            <div class="item item1" >
                <div class="wrap2">
                    <div class="title">人才成长</div>
                    </div>          
                <div class="item-wrap" >
                    <div class="item-title">人才成长</div>
                    <p class="item-text">完整的方法论，多元的业务落地场景和顶尖的团队，帮助你在实践中学习，成为更好的自己</p>
                    <router-link to="/home/man/growth">
                    <div class="item-btn" @click="goPage">
                        <button class="btn">了解详情</button>
                    </div>
                    </router-link>
                </div>
            </div>
<!-- 2 -->
            <div class="item item2" >
                <div class="wrap2">
                    <div class="title">人文关怀</div>
                    </div>          
                <div class="item-wrap" >
                    <div class="item-title">人文关怀</div>
                    <p class="item-text">完整的方法论，多元的业务落地场景和顶尖的团队，帮助你在实践中学习，成为更好的自己</p>
                    <router-link to="/home/man/concern">
                    <div class="item-btn" @click="goPage">
                        <button class="btn">了解详情</button>
                    </div>
                    </router-link>
                </div>
            </div>
<!-- 3 -->
            <div class="item item3" >
                <div class="wrap2">
                    <div class="title">文化活动</div>
                    </div>          
                <div class="item-wrap" >
                    <div class="item-title">文化活动</div>
                    <p class="item-text">完整的方法论，多元的业务落地场景和顶尖的团队，帮助你在实践中学习，成为更好的自己</p>
                    <router-link to="/home/culture/act">
                    <div class="item-btn" @click="goPage">
                        <button class="btn">了解详情</button>
                    </div>
                    </router-link>
                </div>
            </div>
<!-- 4 -->
            <div class="item item4" >
                <div class="wrap2">
                    <div class="title">员工公益</div>
                    </div>          
                <div class="item-wrap" >
                    <div class="item-title">员工公益</div>
                    <p class="item-text">完整的方法论，多元的业务落地场景和顶尖的团队，帮助你在实践中学习，成为更好的自己</p>
                    <router-link to="/home/man/commit">
                    <div class="item-btn" @click="goPage">
                        <button class="btn">了解详情</button>
                    </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        gopage(){
            return 
        }
    },
}
</script>

<style lang="scss" scoped>

.work-container{
    width: 1380px;
    height: 544px;
    // background-color: pink;
    

    .work-content{
        width: 1280px;
        height: 544px;
        // background-color: hotpink;
        .items{
            width: 1280px;
            height: 464px;
            margin-top: 40px;
            // background-color: darkcyan;
            display: flex;
            justify-content: space-around;
            .item{
                width: 296px;
                height: 464px;
                padding-bottom: 32px;
                box-sizing: border-box;
                // background-color: skyblue;
                overflow: hidden;
                border-radius: 16px;
    background-size: cover;

            }
        }
   
    }
}
.item:hover{
    
    .item-wrap{
        opacity: 1;
        // display: block;
        transform: translateY(0);

    }
    .wrap2{
        display: none;
    }
}
.item-wrap{
    // display: none;
    transform: translateY(50%);
    opacity: 0;
    width: 232px;
    height: 170px;
    margin-top: 262px;
    padding: 0 32px;
    // background-color:red;
    // transition: all 3s;
    transition: transform 0.3s ease;

    p{
    margin-top: 12px;
    font-weight: 400;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 22px;
    
        // visibility: hidden;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    }
    .item-btn{
        width: 232px;
        height: 32px;
        margin-top: 28px;
        text-align: center;
        .btn{
            display: inline-block;
            width: 70px;
            height: 32px;
            background-color: rgb(255,209,  0);
             border-radius: 6px;
            font-weight: 600;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #000;
            line-height: 22px;
            }
    }

}

.item-title{
    width: 232px;
    height: 32px;
    align-items: center;
    font-weight: 600;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    // opacity: 1;
}
.wrap2{
        width: 232px;
    height: 67px;
    
    margin-top: 398px;
    padding: 0 32px;

    .title{
    width: 232px;
    height: 32px;
    align-items: center;
    font-weight: 600;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    }
}
// .item .item-content{
//     margin-top: 262px;
//     padding: 0 32px;
//     width: 232px;
//     height: px;
//     background-color: khaki;
//     .item-title{

//     }
// }
.item1{
//     width: 2296px;
// height:464px;
    background: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/grow.png);
    
}
.item2{
    background: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/care%402x.png);
}
.item3{
    background: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/activity.png);
}
.item4{
    background: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/welfare.png);
}
</style>