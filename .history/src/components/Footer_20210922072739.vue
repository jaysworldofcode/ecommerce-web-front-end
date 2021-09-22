<template>
  <div class="footer-container">
    <div class="url-item-container">
        <p class="footer-url-header">PRODUCTS CATALOG</p>
        <a href="/" class="footer-url-item">ALL</a>
        <a href="/" class="footer-url-item">MEN</a>
        <a href="/" class="footer-url-item">WOMEN</a>
        <a href="/" class="footer-url-item">SPORTS</a>
    </div>
    <div class="url-item-container">
        <p class="footer-url-header">PRODUCTS CATALOG</p>
        <a href="/" class="footer-url-item">ALL</a>
        <a href="/" class="footer-url-item">MEN</a>
        <a href="/" class="footer-url-item">WOMEN</a>
        <a href="/" class="footer-url-item">SPORTS</a>
    </div>
    <div id="contact-us-container">
      <div class="form__group field">
        <p>Contact Us</p>
        <input type="input" class="form__field" placeholder="Subject" name="name" id='name' required style="margin-bottom: 40px;"/>
        <input type="input" class="form__field" placeholder="Message" name="name" id='name' required />
        <button class="custom-button-plain" style="margin-top: 20px;"><i class="fa fa-shopping-cart"></i>Send</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>

  .footer-container {
    display: flex;
    flex-direction: row;
    background-color: #fafafa;
    height: 300px;
    justify-content: center;
    align-content: center;
  }
  
  .footer-title {
    font-weight: 500;
    font-size: 12px;
  }

  .footer-url-header {
    font-size: 10px;
    font-weight: bold;
  }

  .url-item-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: start;
    padding: 20px;
  }

  .footer-url-item {
    font-size: 10px;
    color: gray;
    margin-bottom: 10px;
  }

  a {
      text-decoration: none;
  }
</style>
