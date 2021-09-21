<template>
    <div id="product-container">
        <div id="image-container" :style="containerCssProps" >
        </div>
        <p class="item-info">{{ product.ProductName+" - PHP"+product.Price }}</p>
        <div id="action-button-container">
            <el-button icon="el-icon-plus" @click="GoToOrder(product.Id)" round>Buy Now</el-button>
            <el-button icon="el-icon-star-off" circle></el-button>
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
    GoToOrder(ItemId){
      this.$router.push('/order?id='+ItemId);
    }
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
    font-weight: 100;
    font-size: 14px;
}

#action-button-container {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
}
</style>
