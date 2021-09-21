<template>
  <div class="footer-container">
    <el-row>
      <el-col :span="8">Our Product</el-col>
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
    padding: 20p 20px 0 20px;
    margin-top: 20px;
    background-color: #fafafa;
    height: 200px;
  }
</style>
