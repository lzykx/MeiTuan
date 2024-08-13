# MT

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```
'社会招聘',
'校园招聘',
'工作兼职',
'了解美团',
'常见问题'
  display: flex;
  justify-content:center;
  align-items: center;

  .container .dots .dot{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(/images/banner.png);
    background-position: 0 315px;
    cursor: pointer;
}
        background-color: rgb(255,209,  0);
        width: 80px;
        height: 32px;
        border-radius: 6px;
        margin-right: 12px;

        <script>
export default {
data(){

    return{
        // isActive:false,
        isActive:{},
    };
},
    methods: {
        btnYellow(item){
            // this.isActive=!this.isActive;
            this.$set(this.isActive, item, !this.isActive[item]);
        }
    },
}
</script>
.search-input{
        border: 1px solid transparent;

    width: 236px;
    height: 37px;
    background-color: #fff;
        padding-bottom: 30px;

    // border-bottom: 1px solid #ebedf0;
    input{
     font-weight: 400;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.25);
    line-height: 24px;
    }
    // display: flex;
    // align-items: center;
    span{
        // height: 35px;
        margin-right: 10px;
        margin-left: 5px;
    }

}

        <div class="search-input">
            <span>
            <el-icon size="20"><Search /></el-icon>
            </span>
        <input type="text" placeholder="搜索更多城市">
    </div>



<template>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>

那个折叠面板到底怎么传数据
container问题
homepage最上面的长度包括有导航栏？

const props = defineProps({
  message: {
    type: [Number,String],
    required: true,
    }
  })




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
import {ref} from 'vue'

let i=0;
// 获取对象
const img = this.$ref('profile-content .item')
const pre = document.querySelector('jiantou one')
const next = document.querySelector('jiantou two')
//构造函数

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
  methods:{
    change(){
    const dot=document.querySelector(`.dot:nth-child(${i+1})`)
    img.style.background = this.data[i].url
    //改变小圆点
    document.querySelector('.dots .active').classList.remove('active')
    dot.classList.add('active')
    },
    donext(){
      i++
      if(i>=3)i=0
      change()
    },
    doback(){
      i--
      if(i<0)i=2
      change()
    } 

  }

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
        background-color: pink;
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



<template>
    <header-two></header-two>
<div class="container school-container">
  <select-job></select-job>
</div>
</template>

<script>
export default {

}
</script>

<style>
.school-container{
    width: 1380px;
}
</style>