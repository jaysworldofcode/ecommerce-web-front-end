<template>
    <div id="container">
        <div id="images-container">1</div>
        <div id="info-button-actions-container">
            <p class="item-name">Graph Belle</p>
            <p class="item-code">GB2024D-9S C1</p>
            <div id="colors-sample">
                <div style="height: 20px; width: 20px; background-color: blue;">
                </div>
            </div>
            <p class="color-name">BLUE</p>
            <p class="price">PHP4,490.00</p>
            <div class="action-button">
                <el-button type="primary" icon="el-icon-plus" plain>Add to cart</el-button>
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
#container {
  display: flex;
  flex-direction: row;
  height: 60vh;
  text-align: left;
}

@media (max-width: 800px) {
  #container {
    flex-direction: column;
  }
}

#images-container {
  padding: 10px;
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#info-button-actions-container {
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
  row-gap: 10px;
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
    font-weight: 200;
    color: gray;
}

#colors-sample {
  display: flex;
  flex-direction: row;
}

.color-name {
    font-size: 1.2vh;
    font-weight: bold;
}

.price {
    font-size: 2vh;
    font-weight: bold;
}

p {
    margin: 0;
}
</style>
