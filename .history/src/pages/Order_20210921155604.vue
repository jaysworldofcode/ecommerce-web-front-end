<template>
    <div id="container">
        <div v-if="Model != null" id="product-data-container">
            <div id="images-container">
              <div class="slider">
                <div class="slides">
                  <div id="slide-1">
                    1
                  </div>
                  <div id="slide-2">
                    2
                  </div>
                  <div id="slide-3">
                    3
                  </div>
                  <div id="slide-4">
                    4
                  </div>
                  <div id="slide-5">
                    5
                  </div>
                </div>
                <a href="#slide-1">1</a>
                <a href="#slide-2">2</a>
                <a href="#slide-3">3</a>
                <a href="#slide-4">4</a>
                <a href="#slide-5">5</a>
              </div>
            </div>
            <div id="info-button-actions-container">
                <p class="item-name">{{ Model.ProductName }}</p>
                <p class="item-code">{{ Model.ItemCode }}</p>
                <div id="colors-sample">
                    <div v-for="item in Model.Color" :key="item" :style="{ height: '20px', width: '20px', backgroundColor: item }" :class="this.ChoosenColor == item? 'selected-color':''" @click="SetSelectedColor(item)">
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
    let urlParams = new URLSearchParams(window.location.search);
    this.Model = await new ProductService().GetProductById(urlParams.get('id')) as ProductModel;
    this.ChoosenColor = this.Model.Color[0];
  },
  methods: {
      SetSelectedColor(Color){
        this.ChoosenColor = Color;
      }
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
  cursor: pointer;
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

* {
  box-sizing: border-box;
}

.slider {
  width: 60vh;
  text-align: center;
  overflow: hidden;
}

.slides {
  display: flex;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  
  
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  /*
  scroll-snap-points-x: repeat(300px);
  scroll-snap-type: mandatory;
  */
}

.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  margin-right: 50px;
  border-radius: 10px;
  background: #eee;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
.author-info {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
}
.author-info a {
  color: white;
}
img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider > a {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  background: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0 0.5rem 0;
  position: relative;
}
.slider > a:active {
  top: 1px;
}
.slider > a:focus {
  background: #000;
}

/* Don't need button navigation */
@supports (scroll-snap-type) {
  .slider > a {
    display: none;
  }
}
</style>