<template>
  <NavBar></NavBar>
  <Home></Home>
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
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
