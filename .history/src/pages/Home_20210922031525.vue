<template>
  <div class="home-container">
    <el-carousel height="70vh">
      <el-carousel-item v-for="item in Model.CarouselImageURL" :key="item">
        <div :style="GetCarouselBackgroundImageCSS(item)">
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-row class="center-content">
      <p class="bold-title">BEST SELLERS</p>
    </el-row>
    <el-row class="go-to-product center-content">
      <el-button icon="el-icon-goods" round>See All Product</el-button>
    </el-row>
    <el-row class="center-content">
      <el-button plain :style="getBestSellerButtonStyle(EnumBestSellerType.ALL)" @click="FilterBestSeller(EnumBestSellerType.ALL)">ALL</el-button>
      <el-button plain :style="getBestSellerButtonStyle(EnumBestSellerType.MEN)" @click="FilterBestSeller(EnumBestSellerType.MEN)">MEN</el-button>
      <el-button plain :style="getBestSellerButtonStyle(EnumBestSellerType.WOMEN)" @click="FilterBestSeller(EnumBestSellerType.WOMEN)">WOMEN</el-button>
    </el-row>
    <el-row class="center-content">
      <BestSeller v-if="BestSellerFilter == 0"></BestSeller>
      <BestSeller v-if="BestSellerFilter == 1"></BestSeller>
      <BestSeller v-if="BestSellerFilter == 2"></BestSeller>
    </el-row>
    <div id="message-v1">
      <div id="message-v1-image-container">
        <img src="../assets/image/goal.png">
      </div>
      <div id="message-v1-container">
        <p class="message-v1-header">LOREM IPSUM</p>
        <p class="message-v1-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet in metus sed euismod. Fusce porttitor tellus at pulvinar laoreet. Nunc nulla libero, ornare ut magna ut, faucibus molestie quam. Nunc commodo arcu et enim condimentum, a imperdiet magna placerat. Etiam faucibus ullamcorper arcu, laoreet feugiat est sollicitudin quis. Quisque eleifend nisl ac nibh ultrices gravida. Praesent tempor arcu sit amet nunc pharetra, quis efficitur justo euismod. Morbi in lacus egestas, pretium dui malesuada, egestas felis.</p>
        <el-button type="primary" plain>NOM RERUM</el-button>
      </div>
    </div>
    <el-row class="center-content">
      <p class="bold-title">RECOMMENDED</p>
    </el-row>
    <el-row  v-if="this.Model.RecomendedProduct != null" id="recommended-products">
        <ProductItemPlainView v-for="item in this.Model.RecomendedProduct" :key="item.Id" :product="item"></ProductItemPlainView>
    </el-row>
    <div v-else id="spinner-container">
        <Spinner height="60px" width="60px"></Spinner>
    </div>
    <el-row class="go-to-product center-content">
      <el-button icon="el-icon-goods" round>See All Product</el-button>
    </el-row>
  <div id="message-v2">
    <div id="message-v2-container">
      <p class="message-v2-header">LOREM IPSUM</p>
      <p class="message-v2-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet in metus sed euismod. Fusce porttitor tellus at pulvinar laoreet. Nunc nulla libero, ornare ut magna ut, faucibus molestie quam. Nunc commodo arcu et enim condimentum, a imperdiet magna placerat. Etiam faucibus ullamcorper arcu, laoreet feugiat est sollicitudin quis. Quisque eleifend nisl ac nibh ultrices gravida. Praesent tempor arcu sit amet nunc pharetra, quis efficitur justo euismod. Morbi in lacus egestas, pretium dui malesuada, egestas felis.</p>
      <el-button type="primary" plain>NOM RERUM</el-button>
    </div>
    <div id="message-v2-image-container">
      <img src="../assets/image/goal.png">
    </div>
  </div>
  <el-row class="center-content">
    <p class="bold-title">BRANCH</p>
  </el-row>
  <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane label="Luzon">
    </el-tab-pane>
    <el-tab-pane label="Visayas">
    </el-tab-pane>
    <el-tab-pane label="Mindanao">
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script lang='ts'>
import BestSeller from '../components/Best-seller.vue';
import EnumBestSellerType from '../enums/best-seller-filter-type';
import { HomeModel } from '../model/home';
import ProductService from "../service/Product-service";
import { ProductModel } from '../model/product';
import ProductItemPlainView from '../components/Product-item-plain-view.vue';
import Spinner from "../components/Spinner.vue";

export default {
  name: 'Home',
  components: {
    BestSeller,
    ProductItemPlainView,
    Spinner
  },
  methods: {
    InitData(){
      this.Model = {
        CarouselImageURL: [
          "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg",
          "https://images.hdqwalls.com/download/fashion-model-hd-1280x1024.jpg",
          "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg",
          "https://images.hdqwalls.com/download/fashion-model-hd-1280x1024.jpg"
        ],
        GoalImageURL: 'assets/image/goal.png'
      };
    },
    FilterBestSeller(type){
      this.BestSellerFilter = type;
    },
    getBestSellerButtonStyle(type){
      return {
        backgroundColor: type == this.BestSellerFilter? '#409eff':'white',
        color: type == this.BestSellerFilter? 'white': '#606266'
      };
    },
    GetCarouselBackgroundImageCSS(url){
      return {
          backgroundImage: 'url('+url+')',
          width: '100%',
          height: '100%',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        };
    }
  },
  computed: {
  },
  async created() {
    this.InitData();
    this.Model.RecomendedProduct = await new ProductService().FetchRecommendedProduct() as ProductModel[];
  },
  data() {
    return {
      BestSellerFilter: 0,
      EnumBestSellerType,
      Model: Object as unknown as HomeModel,
    }
  },
}
</script>
<style scoped>
  p{
    margin: 0;
    padding: 0;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .go-to-product {
    padding-bottom: 40px;
    padding-top: 60px;
  }

  .message-v1-message-container {
    position: relative;
  }

  .message-v1-message-container div {
    padding: 0 20px 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .message-v1-header {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    color: #3f444a;
  }
  
  .message-v1-content {
    font-size: 14px;
    font-weight: 300;
    text-align: left;
    padding-bottom: 10px;
  }
  
  #message-v1 {
    padding: 10px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(155deg, rgba(219,219,219,0.75) 25%, rgba(179,179,191,0.75) 35%, rgba(150,148,180,0.75) 48%, rgba(47,124,140,0.75) 100%), url(../assets/image/message-image-v1.jpg);
    background-position: center center;
    background-size: cover;
  }

  @media (max-width: 800px) {
    #message-v1 {
      flex-direction: column;
    }
  }

  #message-v1-container {
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: left;
    padding-left: 2vw;
  }

  #message-v1-image-container {
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #message-v1-image-container img{
    width: 300px;
    height: 300px;
  }

  .message-v2-message-container {
    position: relative;
  }

  .message-v2-message-container div {
    padding: 0 20px 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .message-v2-header {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    color: #3f444a;
  }
  
  .message-v2-content {
    font-size: 14px;
    font-weight: 300;
    text-align: left;
    padding-bottom: 10px;
  }
  
  #message-v2 {
    padding: 10px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(155deg, rgba(219,219,219,0.75) 25%, rgba(179,179,191,0.75) 35%, rgba(150,148,180,0.75) 48%, rgba(47,124,140,0.75) 100%), url(../assets/image/donating.jpg);
    background-position: center center;
    background-size: cover;
  }

  @media (max-width: 800px) {
    #message-v2 {
      flex-direction: column;
    }
  }

  #message-v2-container {
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: left;
    padding-left: 2vw;
  }

  #message-v2-image-container {
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #message-v2-image-container img{
    width: 300px;
    height: 300px;
  }

  .el-tabs__nav-scroll {
    font-size: 40px;
  }

  #recommended-products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
    margin-left: 20px;
  }

  .bold-title {
    margin-top: 150px;
    margin-bottom: 40px;
  }


  #spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
  }
</style>
