<template>
    <div id="product-container">
        <div id="image-container" :style="containerCssProps" >
        </div>
        <p class="item-info">{{ product.ProductName+" - PHP"+product.Price }}</p>
        <div id="action-button-container">
            <el-button type="primary" icon="el-icon-plus" round>Buy Now</el-button>
            <el-button icon="el-icon-star-on" circle></el-button>
        </div>
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
            height: "180px"
      }
    }
  }
});
</script>
<style scoped>
#product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
}

.el-button {
    background: rgba(255, 255, 255, 0.8);
    font-weight: 500;
}

#product-container:hover {
    background-color: #f0f0f0;
    border-radius: 25px;
}

.item-info {
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 600;
    font-size: 14px;
}

#action-button-container {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
}
</style>
