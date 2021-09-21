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
    <el-col :span="12"><div>Our Goal</div></el-col>
    <el-col :span="12"><div></div></el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  }
</style>
