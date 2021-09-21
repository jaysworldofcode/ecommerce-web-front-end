<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script lang='ts'>
import { ProductModel } from '../model/product';
import { BestSellerModel } from '../model/best-seller';

export default {
  name: 'BestSeller',
  created() {

  },
  methods: {
    LoadTestData(){
      var productTest = {
        Id: "0",
        ImageURL: [
          "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
        ],
        ProductName: "Test Product"
      } as Object as ProductModel;
      console.log(productTest.Id);
    }
  },
  data() {
    return {
      user: {
        type: Object as unknown as BestSellerModel,
      },
    }
  },
}
</script>
<style scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    }

    .el-carousel {
        padding-top: 40px;
        --el-carousel-indicator-width: 20vh;
    }
</style>
