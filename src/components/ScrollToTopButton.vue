<template>
    <button class="scrollButton" @click="scrollToTop" v-show="showButton">
      <img src="../assets/image/arrow.png" alt="Remonter en haut de la gallerie">
    </button>
</template>

<script>
export default {
    data() {
    return {
      showButton: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
    methods: {
        handleScroll() {
      if (window.pageYOffset > 500) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
        scrollToTop() {
        document.getElementsByClassName("presentation")[0].scrollIntoView({ behavior: "smooth" });
        }
    }
};
</script>

<style>

.scrollButton{
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width:40px;
height: 40px;
bottom: 20px;
right: 20px;
border:none;
background-color: #F08080;
border-radius: 50%;
}

.scrollButton:hover{
    background-color:#FFBD53 ;
}

</style>

