<template>
  <el-row class="center-content">
    <el-image :src="product.ImageURL[0]" :style="{ height: '150px', width: '150px' }">
        <template #placeholder>
        <div class="image-slot">Loading Image</div>
        </template>
    </el-image>
  </el-row>
  <el-row class="center-content">
      <p class="product-title">{{ product.ProductName+" - PHP"+product.Price }}</p>
  </el-row>
  <div class="center-content">
    <button class="custom-button-primary" @click="GoToOrder(product.Id)"><i class="fa fa-plus"></i>  BUY NOW</button>
  </div>
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
        font-weight: 500;
        font-size: 14px;
    }
</style>
