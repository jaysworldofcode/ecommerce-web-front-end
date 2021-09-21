<template>
    <div id="container">
        <div v-if="Model != null" id="product-data-container">
            <div id="images-container">1</div>
            <div id="info-button-actions-container">
                <p class="item-name">Model.ProductName</p>
                <p class="item-code">Model.ItemCode</p>
                <div id="colors-sample">
                    <div style="height: 20px; width: 20px; background-color: blue;">
                    </div>
                </div>
                <p class="color-name">BLUE</p>
                <p class="price">Model.Price</p>
                <div class="action-button">
                    <el-button type="primary" icon="el-icon-plus" plain>Add to cart</el-button>
                    <el-button plain>Add to wishlist</el-button>
                </div>
            </div>
        </div>
        <div v-velse>
            <p>DATA IS NULL</p>
        </div>
    </div>
</template>
<script lang='ts'>
// import { ProductModel } from '../model/product';
import { defineComponent, PropType } from "vue";
// import ProductService from "../service/Product-service";

export default defineComponent({
  name: 'Order',
  created(){
    //Fetch product
    // let urlParams = new URLSearchParams(window.location.search);
    // this.model = new ProductService().GetProductById(urlParams.get('id'));
  },
  data() {
      return {
          Model: null,
      }
  }
});
</script>
<style scoped>
#product-data-container {
  display: flex;
  flex-direction: row;
  height: 60vh;
  text-align: left;
}

@media (max-width: 800px) {
  #product-data-container {
    flex-direction: column;
  }
}

#images-container {
  padding: 10px;
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#info-button-actions-container {
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
  row-gap: 10px;
}

.action-button {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  /* align-items: center;
  justify-content: center; */
}

.item-name {
    font-size: 2vh;
    font-weight: 400;
}

.item-code {
    font-size: 1.2vh;
    font-weight: 200;
    color: gray;
}

#colors-sample {
  display: flex;
  flex-direction: row;
}

.color-name {
    font-size: 1.2vh;
    font-weight: bold;
}

.price {
    font-size: 2vh;
    font-weight: bold;
}

p {
    margin: 0;
}
</style>
