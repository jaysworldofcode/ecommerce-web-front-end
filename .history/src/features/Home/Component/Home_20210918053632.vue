<template>
  <div class="home-container">
    <el-carousel height="800">
      <el-carousel-item v-for="item in CarouselImage" :key="item">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
    <el-row class="center-content">
      <p class="title">Best Sellers</p>
    </el-row>
    <el-row class="center-content">
      <el-button plain>ALL</el-button>
      <el-button plain>MEN</el-button>
      <el-button plain>WOMEN</el-button>
    </el-row>
    <el-row class="center-content">
      <p class="title">Recommended</p>
    </el-row>
    <el-row class="go-to-product center-content">
      <el-button round>See All Product</el-button>
    </el-row>
  <el-row class="goal-main-container">
    <el-col :span="12" class="goal-message-container">
      <div>
        <el-container>
          <el-header>
            <p class="goal-header">Our Goal</p>
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
    <p class="title">Branch</p>
  </el-row>
  <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane label="Luzon">Luzon</el-tab-pane>
    <el-tab-pane label="Visayas">Visayas</el-tab-pane>
    <el-tab-pane label="Mindanao">Mindanao</el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    var ServiceImage = 'https://i.pinimg.com/originals/f9/93/0d/f9930d92d39fa7bec0a63b739bbbfe64.png';
    var CarouselImage = [
      "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg",
      "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg",
      "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg",
      "https://i.pinimg.com/originals/a3/fb/10/a3fb101298a64b4ced2da9c763b799b7.jpg"
    ];

    return {
      ServiceImage,
      CarouselImage
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

  .center-content {
    display: flex;
    justify-content: center;
  }
</style>
