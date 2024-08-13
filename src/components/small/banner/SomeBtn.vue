<template>
  <div class="fold-one-items">

      <div class="item" v-for="item in message" :key="item" 
    :class="{'active-style':isActive[item]}"
    @click="btnYellow(item)">
        武汉
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const isActive = ref({});
// import { defineProps } from 'vue'

function btnYellow(item) {

  isActive.value[item] = !isActive.value[item];
}

const props = defineProps({
  message: {
    type: [Number,String],
    required: true,
    }
  })
console.log(props.message)
</script>

<style lang="scss" scoped>
.fold-one-items{
    // overflow: auto;
    width: 236px;
    // height: 336px;
    margin-top: 16px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    .item{
        width: 112px;
        height: 36px;
        margin-bottom: 12px;
        background-color:rgb(244,245,247);
        text-align: center;
        line-height: 36px;
        font-size: 14px;
        cursor: pointer;
        border-radius: 6px;

        &:hover{
            background: #eaecf0;
        }
        &.active-style{
        background-color: rgb(255,236,153);
            &:hover{
                background-color:rgb(255,227,102);
        font-weight: 600;


            }
        }
    }
}

</style>