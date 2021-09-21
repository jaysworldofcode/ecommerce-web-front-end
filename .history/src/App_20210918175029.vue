<template>
  <NavBar></NavBar>
  <Home></Home>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/Nav-bar.vue';
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';

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
