<template>
  <div class="home-container">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row class="go-to-product">
      <p class="title">Bestsellers</p>
    </el-row>
    <el-row class="go-to-product">
      <p class="title">Recommended</p>
    </el-row>
    <el-row class="go-to-product">
      <el-button round>See All Product</el-button>
    </el-row>
  <el-row>
    <el-col :span="12" class="goal-container">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet in metus sed euismod. Fusce porttitor tellus at pulvinar laoreet. Nunc nulla libero, ornare ut magna ut, faucibus molestie quam.
      </div>
    </el-col>
    <el-col :span="12">
      <div>
        <el-image :src="serviceImage">
          <template #placeholder>
            <div class="image-slot">Loading<span class="dot">...</span></div>
          </template>
        </el-image>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      serviceImage: 'https://www.pngitem.com/pimgs/m/503-5032646_full-body-man-in-suit-png-transparent-png.png',
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
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
  }

  .goal-container {
    position: relative;
    padding: 0 20px 0 20px;
    background-color: green;
  }
</style>
