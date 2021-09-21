<template>
  <button @click="testFunction()">Tester</button>
  <NavBar></NavBar>
  <router-view />
  <Footer></Footer>
</template>
<script lang='ts'>
import NavBar from './components/Nav-bar.vue';
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Home,
    Footer
  },
  method: {
    testFunction: function () {
      console.log('test clicked')
    }
  },
});
</script>
<style>
html, body, #page {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height:100%;
    width:100%;
    margin:0;
    padding:0;
}
</style>
