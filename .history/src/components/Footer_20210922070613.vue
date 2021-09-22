<template>
  <div class="footer-container">
    <div id="contact-us-container">
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Subject" name="name" id='name' required style="margin-bottom: 40px;"/>
        <input type="input" class="form__field" placeholder="Message" name="name" id='name' required />
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
    padding: 20px 20px 0 20px;
    margin-top: 100px;
    background-color: #fafafa;
    height: 200px;
  }
  
  .footer-title {
    font-weight: 500;
    font-size: 12px;
  }

</style>
