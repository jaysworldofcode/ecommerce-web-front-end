<template>
    <div id="container">
        <div v-if="Model != null" id="product-data-container">
            <div id="images-container">1</div>
            <div id="info-button-actions-container">
                <p class="item-name">{{ Model.ProductName }}</p>
                <p class="item-code">{{ Model.ItemCode }}</p>
                <div id="colors-sample">
                    <div v-for="item in Model.Color" :key="item" :style="{ height: '20px', width: '20px', backgroundColor: item }" v-bind:class="'selected-color'">
                    </div>
                </div>
                <p class="color-name">BLUE</p>
                <p class="price">{{ "PHP"+Model.Price }}</p>
                <div class="action-button">
                    <el-button type="primary" icon="el-icon-plus" plain>Add to cart</el-button>
                    <el-button plain>Add to wishlist</el-button>
                </div>
            </div>
        </div>
        <div v-else id="spinner-container">
            <Spinner height="60px" width="60px"></Spinner>
        </div>
    </div>
</template>
<script lang='ts'>
import { ProductModel } from '../model/product';
import { defineComponent, PropType } from "vue";
import Spinner from "../components/Spinner.vue";
import ProductService from "../service/Product-service";

export default defineComponent({
  name: 'Order',
  components: {
      Spinner
  },
  async created(){
    //Fetch product
    let urlParams = new URLSearchParams(window.location.search);
    this.Model = await new ProductService().GetProductById(urlParams.get('id')) as ProductModel;
    this.ChoosenColor = this.Model.Color[0];
    console.log(this.ChoosenColor);
  },
  data() {
      return {
          Model: null,
          ChoosenColor: ""
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
  column-gap: 20px;
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

#spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
}

.selected-color {
    outline: 1px solid grey;
    outline-offset: 2px;    
    padding: 2px;
}

</style>
