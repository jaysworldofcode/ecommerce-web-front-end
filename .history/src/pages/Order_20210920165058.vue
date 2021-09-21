<template>
    <div class="container">
        <div class="images-container">1</div>
        <div class="info-button-actions-container">
            <p class="item-name">Graph Belle</p>
            <p class="item-code">GB2024D-9S C1</p>
            <p>%COLOR%</p>
            <p>%PRICE%</p>
            <div class="action-button">
                <el-button type="primary" plain>Add to cart</el-button>
                <el-button plain>Add to wishlist</el-button>
            </div>
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
  text-align: left;
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
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 20px;
}

.action-button {
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  /* align-items: center;
  justify-content: center; */
}

.item-name {
    font-size: 2vh;
    font-weight: 400;
}

.item-code {
    font-size: 1.2vh;
    font-
}

</style>
