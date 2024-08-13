<template>
    <header-two></header-two>
<div class="container school-container">
    <div class="fangkuai">
   <div v-for="item in 5" :key="item">
      <fang-kuai style="border: 1px solid rgb(234,236,240); "></fang-kuai>
  </div>                   
  </div>
  <select-job></select-job>
</div>

</template>

<script setup>
// export default {

// }
</script>

<style lang="scss" scoped>
.school-container{
  width: 1380px;
}
.fangkuai{
  
        display: flex;
  justify-content:center;
  align-items: center;
  padding: 50px 0 0 0;

  }
</style>