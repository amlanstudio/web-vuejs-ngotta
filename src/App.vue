<template>
  <!-- <img alt="Vue logo" src="assets/logo.png"> -->
  <FruitHeader/>
  <FruitGallery/>
</template>

<script>
import FruitHeader from './components/FruitHeader.vue'
import FruitGallery from './components/FruitGallery.vue'



export default {
  name: 'App',
  components: {
    FruitHeader,
    FruitGallery
  }
}
</script>

<style>
#app {
  background-color: #fefaef;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #242424; 
}
</style>
