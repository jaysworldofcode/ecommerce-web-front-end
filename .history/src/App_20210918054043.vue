<template>
  <NavBar></NavBar>
  <Home></Home>
  <Footer></Footer>
</template>

<script>
import NavBar from './features/Header/Component/Nav-bar.vue';
import Home from './features/Home/Component/Home.vue';
import Footer from './features/Footer/Components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #page {
    height:100%;
    width:100%;
    margin:0;
    padding:0;
}
</style>
