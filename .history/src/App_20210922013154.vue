<template>
  <NavBar></NavBar>
  <router-view />
  <Footer></Footer>
</template>
<script lang='ts'>
import NavBar from './components/Nav-bar.vue';
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Footer
  },
}
</script>
<style>
</style>
