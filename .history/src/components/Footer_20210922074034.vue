<template>
  <div id="footer-container">
    <div id="url-item-container">
        <p class="footer-url-header">COLLECTIONS</p>
        <a href="/" class="footer-url-item">NIKE</a>
        <a href="/" class="footer-url-item">JORDAN</a>
    </div>
    <div id="url-item-container">
        <p class="footer-url-header">SHORTCUT</p>
        <a href="/" class="footer-url-item">VIEW BEST SELLERS</a>
        <a href="/" class="footer-url-item">VIEW RECOMMENDATION</a>
        <a href="/" class="footer-url-item">VIEW MY CART</a>
        <a href="/" class="footer-url-item">VIEW MY WISH LIST</a>
    </div>
    <div id="url-item-container">
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
        <button class="custom-button-plain" style="margin-top: 20px;"><i class="fa fa-send"></i>Send</button>
      </div>
    </div>
  </div>
  <p class="copyright-message">COPYRIGHT (C) JAY LORD ABUEVA. ALL RIGHTS RESERVED. FOR BUSINESS INQUIRIES EMAIL ME AT jaylord.abueva98@gmail.com.</p>
</template>
<script>
export default {
  name: 'Footer',
}
</script>
<style scoped>

  #footer-container {
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

  #url-item-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: start;
    padding: 30px;
  }

  .footer-url-item {
    font-size: 10px;
    color: gray;
    margin-bottom: 10px;
  }

  a {
      text-decoration: none;
  }

  #contact-us-container {
    width: auto;
    margin-left: 40px;
  }

  div.form__group {
    width: 300px;
  }

  .copyright-message {
    font-size: 12px;
  }
</style>