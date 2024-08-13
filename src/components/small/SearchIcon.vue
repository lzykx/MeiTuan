<template>
  <div class="search">
    <div class="search-input">
        <input type="text" :placeholder="mykey">
    </div>
    <div class="btn">
      <button class="btn-search">
 <el-icon :size="27" color=black>
      <Search />
    </el-icon>

      </button>  
      </div>  
  </div>
</template>

<script setup>

import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  mykey: {
    type: [Number, String],
    required: true,
  }
})
</script>

<style lang="scss" scoped>
.search{
    width: 620px;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 4px 0 16px;
    background: #fff;
    border-radius: 30px;
    overflow: hidden;

    .search-input input{
        width: 568px;
        height: 60px;
        line-height: 60px;
        // padding: 0 8px;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        border: none;
    }
}
.btn{
    width: 52px;
    height: 52px;
    line-height: 52px;
    border-radius: 50%;
      display: flex;
  justify-content:center;
  align-items: center;
  background-color:rgb(255,199,  7); 

  .btn-search{
  background-color:rgb(255,199,  7);

  }
  &:hover{
    background-color: rgb(255,208,  0);
    .btn-search{
    background-color: rgb(255,208,  0);

    }
  }
}

</style>