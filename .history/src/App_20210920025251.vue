<template>
  <NavBar></NavBar>
  <Home></Home>
  <Footer></Footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from './components/Nav-bar.vue';
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';

@Options({
  components: {
    NavBar,
    Home,
    Footer
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body, #page {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    height:100%;
    width:100%;
    margin:0;
    padding:0;
}
</style>
