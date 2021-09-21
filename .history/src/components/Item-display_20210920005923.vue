<template>
  <el-row>
    <el-image :src="product.ImageURL[0]" :style="{ height: '40vh', width: '40vh' }">
        <template #placeholder>
        <div class="image-slot">Loading Image</div>
        </template>
    </el-image>
  </el-row>
  <el-row>
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
.el-carousel__item:nth-child(n) {
   background-color: green;
}
</style>
