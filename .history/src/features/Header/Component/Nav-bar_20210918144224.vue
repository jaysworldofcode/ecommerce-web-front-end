<template>
  <div class="top-bar">
    <div style="flex-grow: 6">2</div>
    <div style="flex-grow: 6">
      <div>
      </div>
      <el-badge :value="0">
      <el-tooltip
        class="item"
        effect="dark"
        content="Wish List"
        placement="top-start"
      >
        <el-button
          class="wish-list-button"
          icon="el-icon-star-off"
          type="default"
        ></el-button>
      </el-tooltip>
      </el-badge>
      <el-badge :value="4">
        <el-button
          class="cart-button"
          icon="el-icon-shopping-cart-full"
          type="primary"
        ></el-button>
      </el-badge>
    </div>
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
}

.wish-list-button {
  margin-right: 10px;
}

.top-bar > div {
  color: white;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
