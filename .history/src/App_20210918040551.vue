<template>
  <NavBar></NavBar>
  <Home></Home>
</template>

<script>
import NavBar from './components/Nav-bar.vue';
import Home from './features/Home.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Home
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
