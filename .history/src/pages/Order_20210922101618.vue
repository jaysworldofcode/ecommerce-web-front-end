<template>
    <div id="container">
        <div v-if="Model != null" id="product-data-container">
            <div id="images-container">
              <div class="slider">
                <div class="slides">
                  <div :id="GetFileNameFromURL(item)" v-for="item in Model.ImageURL" :key="item">
                    <img :src="item" alt="Italian Trulli">
                  </div>
                </div>
                <a :href="'#'+GetFileNameFromURL(item)" v-for="item in Model.ImageURL" :key="item">
                    <span class="dot"></span> 
                </a>
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
                <div id="size-container">
                    <button v-for="item in Model.Size" :key="item" class="custom-button-border-plain button-square" style="width: 120px;">{{ item }}</button>
                </div>
                <p class="price">{{ "PHP"+Model.Price }}</p>
                <div class="action-button">
                    <button class="custom-button-plain"><i class="fa fa-shopping-cart"></i>ADD TO CART</button>
                    <button class="custom-button-primary"><i class="fa fa-heart-o"></i>ADD TO WISH LIST</button>
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
      },
      GetFileNameFromURL(URL){
        var split = URL.split("/");
        return split[split.length-1];
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

#size-container {
  width: 100%;
  padding-right: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
}

#size-container button{
  margin-right: 10px;
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

.slider {
  width: 50vh;
  text-align: left;
  overflow: hidden;
  padding-top: 20px;
}

.slides {
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  height: 100%;
}

.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 50vh;
  height: 40vh;
  margin-right: 50px;
  border-radius: 10px;
  /* background: #eee; */
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
/* .slider > a:active {
  top: 1px;
}
.slider > a:focus {
  background: #000;
} */

.slider a{
    padding-top: 20px;
}

/* Don't need button navigation */
/* @supports (scroll-snap-type) {
  .slider > a {
    display: none;
  }
} */

.dot {
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>