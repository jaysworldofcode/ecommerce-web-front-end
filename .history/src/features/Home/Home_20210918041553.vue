<template>
  <div class="home-container">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <p class="title">Bestsellers</p>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Men" name="first">Men</el-tab-pane>
      <el-tab-pane label="Women" name="second">Women</el-tab-pane>
      <el-tab-pane label="Kids" name="third">Kids</el-tab-pane>
      <el-tab-pane label="Sports" name="fourth">Sports</el-tab-pane>
    </el-tabs>
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
  }

  el-tabs{
    text-align: 'center';
  }
</style>
