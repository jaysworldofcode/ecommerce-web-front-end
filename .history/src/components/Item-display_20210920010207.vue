<template>
  <el-row class="center-content">
    <el-image :src="product.ImageURL[0]" :style="{ height: '200px', width: '200px' }">
        <template #placeholder>
        <div class="image-slot">Loading Image</div>
        </template>
    </el-image>
  </el-row>
  <el-row class="center-content">
      <el-button round>See All Product</el-button>
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
    .center-content {
        display: flex;
        justify-content: center;
    }
</style>
