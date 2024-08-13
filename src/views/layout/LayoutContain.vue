<template>
<div class="layout-container container">
    <!-- 上部分 -->
    <div class="header" >
        <div class="top-container">
            <div class="logo">
                <router-link to="/home/first">
                    <img src="@/assets/logo-footer.png" alt="音乐图标"></router-link></div>
            <div class="nav1">
                <layout-nav></layout-nav>
            </div>
            <div class="nav2">
                <button class="btn1">
                    <span >English</span>
                </button>
                <button class="btn2" @click="gologin">
                    <span>登录</span>
                </button>
            </div>
      </div>
    </div>

    <!-- 主要内容 -->

    <router-view></router-view>

    <!-- 页脚 -->

    <footer-part></footer-part>
</div>

</template>

<script>

export default {
    methods: {
        gologin(){
            return this.$router.push('/login')
        }
    },
}

</script>


<style lang="scss" scoped>
.layout-container{
    // height: 100%;
    width: 100%;
    margin: 0 auto;
}
.header{
    width: 100%;
}
.top-container{
    padding-left: 70px;

    height: 78px;
    // background-color: pink;
    display: flex;
    justify-content:space-between ;
    cursor: pointer;
}
.top-container .logo{
    width: 232px;
    height: 78px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img{
    
        margin-left: 40px;
    width: 192px;
    height: 40px;
    }
    //在一行
    // display: inline;
}

.header  .top-container .nav1{
    display: flex;
    justify-content: flex-start;
}

.header  .top-container .nav2{
    width: 212px;
    height: 78px;
    display: flex;
    align-items: center;
    button{
        width: 80px;
        height: 32px;
        border-radius: 6px;
        margin-right: 12px;
    }
    .btn1{
        border:1px solid black ;
    }
    .btn2{
        background-color: rgb(255,209,  0);
    }
    .btn2:hover{
        background-color: rgb(255,227,102);
    }
    span{
        font-size: 14px;
        line-height: 30px;

    }
}


</style>