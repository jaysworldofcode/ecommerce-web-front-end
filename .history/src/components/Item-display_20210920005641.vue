<template>
  <el-row>
    <el-image :src="product.ImageURL[0]" :style="{ height: '200px', width: '200px' }">
        <template #placeholder>
        <div class="image-slot">Loading Image</div>
        </template>
    </el-image>
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
