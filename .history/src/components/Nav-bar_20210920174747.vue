<template>
  <div class="top-bar">
      <button v-on:click="testFunction">Tester</button>
  </div>
</template>
<script lang='ts'>
import Routes from '../enums/route-names';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      Routes
    }
  },
  method: {
    testFunction: function (event) {
      console.log('test clicked')
    }
  },
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
