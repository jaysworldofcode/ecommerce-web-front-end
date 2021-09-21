<template>
  <div class="footer-container">
    <el-row>
      <el-col :span="8" class="footer-title">Our Product</el-col>
      <el-col :span="8">About</el-col>
      <el-col :span="8">Contact Us</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>
  .footer-container {
    padding: 20px 20px 0 20px;
    margin-top: 100px;
    background-color: #fafafa;
    height: 200px;
  }
  
  .footer-title {
    font-weight: 500;
    font-size: 10px;
  }
</style>
