<template>
  <div class="nav-box" v-for="(value,key) in list" :key="key">
    <router-link :to="{ name: value[0] }">
    <div >{{key}}</div>
    <div class="line"></div>
    </router-link>
  </div>
</template>


<script>
export default {
        data(){
        return{
            list:{
'首页':['home'],
'北斗计划':['beidou'],
'社会招聘':['society'],
'校园招聘':['school'],
'工作兼职':['not'],
'了解美团':['not'],
'常见问题':['not']


            }
        }
    }

}
</script>

<style lang="scss" scoped>

.nav-box{
    width: 124px;
    // margin: 0 10px;
    height: 78px;
    text-align: center;
    line-height: 78px;
    font-size: 16px;
    font-weight: 600;
    font-family: PingFangSC-Medium;
    position: relative;

    a{
            color: #000;
    opacity: 0.9;
    font-weight: 600;
    }
    
    // background-color: silver;

}
.nav-box:first-child{
    width: 72px;
}
.line{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16px;
    margin: 8px auto 0;
    display: inline-block;
    width: 24px;
    height: 4px;
    border-radius: 2px;
    // background-color: red;
}
.nav-box :hover{
.line{
    background-color: rgb(255,208,  0);
}
}
.router-link-active {
    .line{
        background-color: rgb(255,208,  0);
    }

}


</style>

