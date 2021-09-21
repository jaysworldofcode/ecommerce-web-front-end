<template>
  <div class="home-container">
    <el-carousel height="70vh">
      <el-carousel-item v-for="item in Model.CarouselImageURL" :key="item">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row class="center-content">
      <p class="bold-title">BEST SELLERS</p>
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
    <el-row class="center-content">
      <p class="bold-title">RECOMMENDED</p>
    </el-row>
    <el-row id="recommended-products">
      <p class="bold-title">RECOMMENDED</p>
    </el-row>
    <el-row class="go-to-product center-content">
      <el-button round>See All Product</el-button>
    </el-row>
  <div id="goal-main-container">
    <div id="goal-description-container">
      <p class="goal-header">OUR GOAL</p>
      <p class="goal-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet in metus sed euismod. Fusce porttitor tellus at pulvinar laoreet. Nunc nulla libero, ornare ut magna ut, faucibus molestie quam. Nunc commodo arcu et enim condimentum, a imperdiet magna placerat. Etiam faucibus ullamcorper arcu, laoreet feugiat est sollicitudin quis. Quisque eleifend nisl ac nibh ultrices gravida. Praesent tempor arcu sit amet nunc pharetra, quis efficitur justo euismod. Morbi in lacus egestas, pretium dui malesuada, egestas felis.</p>
      <el-button type="primary" plain>More Details</el-button>
    </div>
    <div id="goal-image-container">
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

export default {
  name: 'Home',
  components: {
    BestSeller
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
  },
  computed: {
  },
  async created() {
    this.InitData();
    this.ProductsList = await new ProductService().FetchRecommendedProduct() as ProductModel[];
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
  }

  .goal-message-container {
    position: relative;
  }

  .goal-message-container div {
    padding: 0 20px 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .goal-header {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
  }
  
  .goal-content {
    font-size: 14px;
    font-weight: 300;
    text-align: left;
  }
  
  #goal-main-container {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
  }

  @media (max-width: 800px) {
    #goal-main-container {
      flex-direction: column;
    }
  }

  #goal-description-container {
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    text-align: left;
    padding-left: 2vw;
  }

  #goal-image-container {
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .el-tabs__nav-scroll {
    font-size: 40px;
  }

  #goal-image-container img{
    width: 300px;
    height: 300px;
  }

  #recommended-products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1em;
    margin-left: 20px;
  }
</style>
