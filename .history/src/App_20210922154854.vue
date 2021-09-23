<template>
  <NavBar></NavBar>
  <a href="#" class="floating-button">
    <i class="fa fa-shopping-cart my-float"></i>
  </a>
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
},
</script>
<style>
.floating-button {
	position:fixed;
	width:60px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color: #2EE59D;
	color:#FFF;
	border-radius:50px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:22px;
}
</style>
