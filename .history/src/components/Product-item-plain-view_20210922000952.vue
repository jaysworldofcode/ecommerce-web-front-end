<template>
    <div id="container">
    </div>
</template>
<script lang='ts'>
import Routes from '../enums/route-names';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ProductItemPlainView',
  methods: {
  },
  data() {
    return {
      Routes
    }
  }
});
</script>
<style scoped>
#container {
    width: 300px;
    height: 300px;
    background-color: gray;
}
</style>
