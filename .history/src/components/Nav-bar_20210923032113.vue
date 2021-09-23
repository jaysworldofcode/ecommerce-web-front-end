<template>
  <div class="top-bar">
    <div style="flex-grow: 6" class="action-buttons">
      <div>
      </div>
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
import RouteCommand from '../mixin/Router-command';

export default defineComponent({
  name: 'Navbar',
  methods: {
  },
  mixins: [
    RouteCommand
  ],
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
  line-height: 75px;
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
