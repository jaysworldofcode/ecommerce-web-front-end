<template>
    <div class="container">
        <div class="images-container">1</div>
        <div class="info-button-actions-container">
            <p>%ITEM_NAME%</p>
            <p>%ITEM_CODE%</p>
        </div>
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
  flex: 50%;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
