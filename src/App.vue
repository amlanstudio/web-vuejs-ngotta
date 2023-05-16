<template>
  <!-- <img alt="Vue logo" src="assets/logo.png"> -->
  <FruitHeader/>
  <GalleryButtons
    v-model:categories-selected="categoriesSelected"/> 
  <FruitGallery v-bind:categoriesSelected="categoriesSelected"/>
  <FruitGame/>
</template>

<script>

import FruitHeader from './components/FruitHeader.vue'
import GalleryButtons from './components/GalleryButtons.vue'
import FruitGallery from './components/FruitGallery.vue'
import FruitGame from './components/FruitGame.vue'


export default {
  name: 'App',
  components: {
    FruitHeader,
    GalleryButtons,
    FruitGallery,
    FruitGame
  },
  data(){
    return{
      categoriesSelected:['Fresh','Fruits','Exotic','Dried','Nuts'],
    }
  },
  methods:{
    scrollToTheTop:function(){
                document.getElementsByClassName("banniere")[0].scrollIntoView({ behavior: "smooth" });
    },

    // window.addEventLister("load",(event)=>{scrollToTheTop();})
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
