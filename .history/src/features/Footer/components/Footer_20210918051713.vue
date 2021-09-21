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
    background-color: #fafafa;
    height: 200px;
    position: absolute;
    top: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
</style>
