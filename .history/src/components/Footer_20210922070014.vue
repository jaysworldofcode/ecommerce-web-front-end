<template>
  <div class="footer-container">
    <div id="contact-us-container">
      <div class="form__group field">
        <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
        <label for="name" class="form__label">Name</label>
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

  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }

  .form__field:focus {
    padding-bottom: 6px;  
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  .form__field:required{
    box-shadow:none;
  }
  .form__field:invalid {
    box-shadow:none;
  }
</style>
