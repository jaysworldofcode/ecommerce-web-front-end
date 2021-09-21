<template>
    <div class="container">
        <div class="images-container">1</div>
        <div class="info-button-actions-container">2</div>
    </div>
</template>
<script lang='ts'>
export default {
  name: 'Order',
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  height: 60vh;
}

.images-container {
  background-color: #f1f1f1;
  padding: 10px;
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-button-actions-container {
  background-color: dodgerblue;
  padding: 10px;
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
