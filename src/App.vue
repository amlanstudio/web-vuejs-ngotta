<template>
  <!-- <img alt="Vue logo" src="assets/logo.png"> -->
  <FruitHeader/>
  <main>
    <div class="fruitsGallery">
        <ButtonSort
    v-model:categories-selected="categoriesSelected"/> 
        <FruitGallery v-bind:categoriesSelected="categoriesSelected"/>
      </div>
      <div class="game">
        <FruitGame/>
      </div>
  </main>
</template>



<script>

import FruitHeader from './components/FruitHeader.vue'
import ButtonSort from './components/ButtonSort.vue'
import FruitGallery from './components/FruitGallery.vue'
import FruitGame from './components/FruitGame.vue'


export default {
  mounted() {
    window.addEventListener('beforeunload', this.scrollByDefault);
  },
  beforeUnmount() {
    window.removeEventListener('beforeunload', this.scrollByDefault);
  },
  methods: {
    scrollByDefault() {
      window.scrollTo(0, 0);
    }
  },
  name: 'App',
  components: {
    FruitHeader,
    ButtonSort,
    FruitGallery,
    FruitGame
  },
  data(){
    return{
      categoriesSelected:['Fresh','Fruits','Exotic','Dried','Nuts'],
    }
  },
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
  justify-content: space-between;
  cursor:url('assets/image/ananas.png'),pointer;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
}



</style>
