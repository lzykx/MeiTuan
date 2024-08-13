
<template>
<div class="page-container">
    <div class='login'>
        <div class="login-up">
            <img src="@/assets/login.png" width="191" height="41">
            <span @click='back'>《 返回上一级</span>
        </div>
        <div class="login-mid">
                <login-form></login-form>
                <div class="login-right">
                    <div class="login-wrap">
                        <img src="./.././../assets/erweima.jpg" alt="二维码">
                        <!-- <span> -->
                            <p>使用微信扫一扫登录</p>
                            <p>"美团招聘"</p>
                            <div class="hidd" v-if="!checked">
                                <p>扫码登陆</p>
                                <p>请先勾选</p>
                                <p>人信息保护隐私政策</p>
                            </div>
                        <!-- </span> -->
                    </div>
                </div>
        </div>
        <!-- 下部分 -->
    <div class="login-under">
        <div class="checkin">
         <label >
        <input type="checkbox" name="basicCheckbox" v-model="checked">
    </label>
    <span>
        我已阅读并同意《个人信息保护隐私政策》

    </span>
        </div>
    </div>
    </div>
</div>

  
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const checked = ref(false)

    const back = () => {
      router.go(-1)
    }

    return {
      checked,
      back
    }
  }
}

</script>

<style lang='scss'scoped>
.page-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: rgb(255,212,  1);
    }
/* 上部 */
.login{
    overflow:hidden;
    width: 890px;
    height: 458px;
    background-color: white;
    border-radius: 16px;
    }
.login-up{
    height: 40px;
    margin: 32px 40px 0 32px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.login span{
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
} 

/* //中部 */
.login-mid{
    display: flex;
    justify-content: flex-start;
}
.login-right{
    width: 300px;
    height: 256px;
    // background-color: pink;
    border-left:1px solid rgb(247,248,249);
    // margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-wrap{
        width: 180px;
        height: 180px;
        position:relative;
    border-radius: 16px;

        img{
        width: 180px;
        height: 180px;
        }
        p{
            text-align: center;
        }
    .hidd{
     width: 180px;
    height: 180px;

    position: absolute;
    left: -1px;
    right: 60px;
    top: 0;
    z-index: 30;
    border-radius: 16px;
    background: rgba(0, 0, 0, 0.9);


    p{  
        
        color: white;
        font-weight: 400;
        font-size: 14px;
    }
        }
    }
}





// .login-under label:checked{
// }

.checkin{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 0 0 0 20px;
    input{
        width: 50px;
        height: 22px;
    }
    span{
        padding-left: 10px;    }
    
}
input[type="checkbox"]:checked{
    // background-color: rgb(255,212,  1);
    ~ .hidd{
        display: none;
    }

}
</style>