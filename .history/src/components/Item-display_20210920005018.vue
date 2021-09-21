<template>
  <el-row>
    <img src="{{product.ImageURL[0]}}" width="300" height="300">
  </el-row>
</template>
<script lang='ts'>
import { ProductModel } from '../model/product';
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'ItemDisplay',
    props: {
      product: {
        type: Object as PropType<ProductModel>,
        required: true,
      },
    },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {

  },
});
</script>
<style scoped>
</style>
