<template>
  <div class="top-bar">
    <div style="flex-grow: 6">2</div>
    <div style="flex-grow: 6">3</div>
  </div>
  <el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  >
    <el-menu-item index="1">Home</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Product</template>
      <el-menu-item index="2-1">Men</el-menu-item>
      <el-menu-item index="2-2">Women</el-menu-item>
      <el-menu-item index="2-3">Kids</el-menu-item>
      <el-menu-item index="2-3">Sports</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="4">Branch</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
<style scoped>
.top-bar {
  display: flex;
  align-items: stretch;
  background-color: #f1f1f1;
}

.top-bar > div {
  background-color: DodgerBlue;
  color: white;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
