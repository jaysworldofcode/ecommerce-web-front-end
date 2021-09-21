<template>
    <div id="product-container" :style="{ containerCssProps }" >
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
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
      }
    }
  }
});
</script>
<style scoped>
#product-container {
    width: 300px;
    height: 300px;
}
</style>
