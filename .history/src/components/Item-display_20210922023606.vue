<template>
  <el-row class="center-content">
    <el-image :src="product.ImageURL[0]" :style="{ height: '150px', width: '150px' }">
        <template #placeholder>
        <div class="image-slot">Loading Image</div>
        </template>
    </el-image>
  </el-row>
  <el-row class="center-content">
      <p class="product-title">{{ product.ProductName+" - "+product.Price }}</p>
  </el-row>
  <el-row class="center-content" @click="GoToOrder(product.Id)">
      <el-button round>Buy Now</el-button>
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
    GoToOrder(ItemId){
      this.$router.push('/order?id='+ItemId);
    }
  },
});
</script>
<style scoped>
    .product-title {
        font-weight: 300;
        font-size: 14px;
    }
</style>
