<template>
    <div id="product-container">
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
      Routes
    }
  }
});
</script>
<style scoped>
#product-container {
    width: 300px;
    height: 300px;
    background-color: gray;
}
</style>
