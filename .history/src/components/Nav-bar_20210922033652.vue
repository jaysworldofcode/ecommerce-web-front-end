<template>
  <div class="top-bar">
    <div style="flex-grow: 6" class="action-buttons">
      <div>
      </div>
      <el-badge :value="0">
        <el-tooltip
          class="item"
          effect="dark"
          content="Wish List"
          placement="bottom-start"
        >
          <el-button
            class="wish-list-button"
            icon="el-icon-star-off"
            type="circle"
          ></el-button>
        </el-tooltip>
      </el-badge>
      <el-tooltip
        class="item"
        effect="dark"
        content="Cart"
        placement="bottom-start"
      >
      <el-badge :value="4" >
        <el-button class="cart-button" icon="el-icon-shopping-cart-full" type="primary" 
        ></el-button>
      </el-badge>
      </el-tooltip>
    </div>
  </div>
  <el-affix :offset="0">
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    >
      <el-menu-item index="1" @click="GoToHome()">
        HOME
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>PRODUCT</template>
        <el-menu-item index="2-1" @click="GoToProducts('men')">MEN</el-menu-item>
        <el-menu-item index="2-2" @click="GoToProducts('women')">WOMEN</el-menu-item>
        <el-menu-item index="2-3" @click="GoToProducts('kids')">KIDS</el-menu-item>
        <el-menu-item index="2-3" @click="GoToProducts('sports')">SPORTS</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">COLLECTIONS</el-menu-item>
      <el-menu-item index="4">BRANCH</el-menu-item>
    </el-menu>
  </el-affix>
</template>
<script lang='ts'>
import Routes from '../enums/route-names';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Navbar',
  methods: {
    GoToHome(){
      this.$router.push('/home');
    },
    GoToProducts(FilterType){
      this.$router.push('/products?filter='+FilterType);
    }
  },
  data() {
    return {
      Routes
    }
  }
});
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
  margin: 10px;
  text-align: center;
  font-size: 30px;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}

.logo-container {
  color: black;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
}
</style>
