<template>
    <div id="product-container" :style="containerCssProps" >
      <el-button round>Buy Now</el-button>
    </div>
</template>
<script lang='ts'>
import Routes from '../enums/route-names';
import { ProductModel } from '../model/product';
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'ProductItemPlainView',
  props: {
      product: {
        type: Object as PropType<ProductModel>,
        required: true,
      },
  },
  methods: {
  },
  data() {
    return {
      Routes,
      containerCssProps: {
            backgroundImage: 'url(https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png)',
            backgroundPosition: "center center",
            backgroundSize: "cover",
            width: "300px",
            height: "300px"
      }
    }
  }
});
</script>
<style scoped>
#product-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#product-container:hover {
}
</style>
