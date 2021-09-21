<template>
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
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'Navbar',

}
</script>
<style scoped>

</style>
