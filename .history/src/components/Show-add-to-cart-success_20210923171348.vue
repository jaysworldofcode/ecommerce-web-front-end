<template>
  <el-button plain @click="open1"> Closes automatically </el-button>
  <el-button plain @click="open2"> Won't close automatically </el-button>
</template>

<script>
  import { vue, defineComponent } from 'vue'

export default defineComponent({
    name: 'ShowAddToCartSuccess',
    created() {
    },
    methods: {
    },
});
</script>