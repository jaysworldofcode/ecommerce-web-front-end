<template>
  <div class="home-container">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in CarouselImage" :key="item">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row class="center-content">
      <p class="title">BEST SELLERS</p>
    </el-row>
    <el-row class="center-content">
      <el-button plain :style="getBestSellerButtonStyle({{ BestSellerFilterType.ALL }})" @click="FilterBestSeller(0)">ALL</el-button>
      <el-button plain :style="getBestSellerButtonStyle(1)" @click="FilterBestSeller(1)">MEN</el-button>
      <el-button plain :style="getBestSellerButtonStyle(2)" @click="FilterBestSeller(2)">WOMEN</el-button>
    </el-row>
    <el-row class="center-content">
      <BestSeller v-if="BestSellerFilter == 0"></BestSeller>
      <BestSeller v-if="BestSellerFilter == 1"></BestSeller>
      <BestSeller v-if="BestSellerFilter == 2"></BestSeller>
    </el-row>
    <el-row class="center-content">
      <p class="title">RECOMMENDED</p>
    </el-row>
    <el-row class="go-to-product center-content">
      <el-button round>See All Product</el-button>
    </el-row>
  <el-row class="goal-main-container">
    <el-col :span="12" class="goal-message-container">
      <div>
        <el-container>
          <el-header>
            <p class="goal-header">OUR GOAL</p>
          </el-header>
          <el-main>
            <p class="goal-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet in metus sed euismod. Fusce porttitor tellus at pulvinar laoreet. Nunc nulla libero, ornare ut magna ut, faucibus molestie quam. Nunc commodo arcu et enim condimentum, a imperdiet magna placerat. Etiam faucibus ullamcorper arcu, laoreet feugiat est sollicitudin quis. Quisque eleifend nisl ac nibh ultrices gravida. Praesent tempor arcu sit amet nunc pharetra, quis efficitur justo euismod. Morbi in lacus egestas, pretium dui malesuada, egestas felis.</p>
          </el-main>
          <el-footer>
            <el-button type="primary" plain>Order Now</el-button>
          </el-footer>
        </el-container>
      </div>
    </el-col>
    <el-col :span="12">
      <div>
        <el-image :src="ServiceImage">
          <template #placeholder>
            <div class="image-slot">Loading Image</div>
          </template>
        </el-image>
      </div>
    </el-col>
  </el-row>
  <el-row class="center-content">
    <p class="title">BRANCH</p>
  </el-row>
  <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane label="Luzon">Luzon</el-tab-pane>
    <el-tab-pane label="Visayas">Visayas</el-tab-pane>
    <el-tab-pane label="Mindanao">Mindanao</el-tab-pane>
  </el-tabs>
  </div>
</template>
<script lang='ts'>
import BestSeller from '../components/Best-seller.vue';
import BestSellerFilterType from '../enums/best-seller-filter-type';

export default {
  name: 'Home',
  components: {
    BestSeller
  },
  methods: {
    FilterBestSeller(type){
      this.BestSellerFilter = type;
    },
    getBestSellerButtonStyle(type){
      return {
        backgroundColor: type == this.BestSellerFilter? '#409eff':'white',
        color: type == this.BestSellerFilter? 'white': '#606266'
      };
    }
  },
  data() {
    var ServiceImage = 'https://i.pinimg.com/originals/f9/93/0d/f9930d92d39fa7bec0a63b739bbbfe64.png';
    var CarouselImage = [
      "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg",
      "https://images.hdqwalls.com/download/fashion-model-hd-1280x1024.jpg",
      "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg",
      "https://images.hdqwalls.com/download/fashion-model-hd-1280x1024.jpg"
    ];

    return {
      ServiceImage,
      CarouselImage,
      BestSellerFilter: 0
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

  .title {
    padding-top: 2.5em;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
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
  }
  
  .goal-content {
    font-size: 14px;
    font-weight: 300;
  }
  
  .goal-main-container {
    background-color: #fafafa;
  }
</style>
